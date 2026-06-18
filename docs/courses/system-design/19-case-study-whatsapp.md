# Chapter 19: Case Study â€” WhatsApp and Real-Time Messaging

---

## Learning Objectives

- Design a real-time messaging system supporting 2B+ users with under 100ms delivery latency
- Analyze message fan-out strategies for group chats: fan-on-write vs fan-on-read vs hybrid approaches
- Implement end-to-end encryption using the Signal Protocol including X3DH key agreement and Double Ratchet
- Architect persistent TCP connection management at massive scale with FreeBSD kqueue and connection multiplexing
- Design multi-device synchronization with per-device Ed25519 key pairs and message history sync protocols
- Evaluate the trade-offs between server-side message storage, offline message queuing, and delivery semantics

---

## Theory

![WhatsApp Architecture Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/19-whatsapp.png)

### Requirements Phase

WhatsApp processes over 100 billion messages daily across 2 billion+ users. Understanding these requirements is essential before any design work begins.

**Functional Requirements**

| Requirement | Specification |
|-------------|---------------|
| Direct messaging | 1:1 text, images, video, documents, voice notes |
| Group messaging | Up to 1024 members per group |
| Broadcast lists | One-to-many message distribution |
| End-to-end encryption | Default for all content, including group messages |
| Multi-device | Up to 4 devices per account, independent connection |
| Voice/video calls | Peer-to-peer with relay fallback (STUN/TURN) |
| Status/Stories | 24-hour disappearing photo/video updates |
| Media sharing | Inline images, videos up to 16MB, documents up to 100MB |
| Last seen/Read receipts | Visible presence indicators, configurable privacy |
| Offline messages | Server-side queuing, delivery on reconnection |
| Message sync | Cross-device history synchronization |

**Non-Functional Requirements**

| Aspect | Specification |
|--------|--------------|
| Scale | 2B+ users, 100B+ messages/day |
| Peak throughput | 1M+ messages/sec during global events |
| Delivery latency | <100ms median, <500ms P99 |
| Availability | 99.999% (five nines) for messaging |
| Durability | No message loss once acknowledged by server |
| Consistency | Messages delivered in order within a conversation |
| Security | End-to-end encrypted by default, zero-knowledge server |
| Storage | Messages stored only until delivered across all devices |

### Estimation Phase

**Message Volume**

- 100B messages/day = 1.16M messages/sec average
- Peak: 3-5x average during holidays â†’ ~5M messages/sec
- Average message size: ~200 bytes (text) + media attachments
- Text data: 100B Ã— 200 bytes = 20TB/day = 7.3PB/year
- Media: billions of images/videos per day, ~500MB-1PB/day depending on compression

**Connection Management**

- 2B users, ~30% online concurrently at peak = 600M concurrent connections
- Each connection: TCP socket (~20KB kernel memory) + app state (~50KB) = ~70KB
- Total server memory for connections: 600M Ã— 70KB â‰ˆ 42TB
- At 100K connections per server: 6,000 servers for connection handling alone
- FreeBSD kqueue handles 1M+ connections per well-tuned machine â†’ ~600 servers

**Storage Per User**

- Average conversation history: ~500MB over lifetime (text + media)
- 2B users Ã— 500MB = 1EB total storage
- Each user's last 30 days of messages stored on server for multi-device sync
- Active users (~1.5B): 1.5B Ã— 50MB (30 days text) â‰ˆ 75PB hot storage
- Media stored in CDN/object store, deduplicated per hash

**Bandwidth**

- 1.16M msg/sec Ã— 200 bytes = 232 MB/sec text
- Media adds 10-50x more bandwidth
- Total outbound: ~10-50 Gbps per datacenter
- Multi-datacenter replication: multiply by replication factor

### High-Level Design Phase

The architecture evolved through distinct phases. Understanding the evolution is as important as the final design.

**Phase 1: Erlang/ejabberd (XMPP)**

WhatsApp was founded in 2009 using ejabberd, an Erlang-based XMPP server. Erlang's actor model (lightweight processes, message passing, supervision trees) was a natural fit for messaging. Each user session was an Erlang process. XMPP provided XML-based messaging, presence, and roster management out of the box.

Limitations discovered at scale:
- XMPP's XML parsing overhead became significant at billions of messages
- XML payloads added 5-10x overhead to message size
- XMPP extension complexity (XEPs) became unmanageable
- The ejabberd single-node queue model created bottlenecks

**Phase 2: Custom C++ Server with FreeBSD kqueue**

WhatsApp replaced ejabberd with a custom C++ server designed for maximum connection density. FreeBSD's kqueue event notification system was chosen over Linux epoll because:
- kqueue supports one-shot notifications (edge-triggered, no re-registration)
- Better handling of 1M+ concurrent connections with lower CPU overhead
- Superior sendfile integration for zero-copy data transfer
- The team had deep FreeBSD expertise (Jan Koum and Brian Acton came from Yahoo!)

The custom server architecture:

```
Client Device â†” (Persistent TCP/WebSocket) â†” WhatsApp Server (C++, FreeBSD)
  â”œâ”€â”€ Connection Manager (kqueue event loop, multiplexed sockets)
  â”œâ”€â”€ Session Manager (user state, presence, routing table)
  â”œâ”€â”€ Message Router (inbox routing, group fan-out, offline queue)
  â”œâ”€â”€ Media Handler (upload proxy, thumbnail generation)
  â””â”€â”€ Storage Layer (MyRocks, custom message store)
```

**Phase 3: Facebook Infrastructure (Post-2014)**

After the Facebook acquisition, WhatsApp migrated some backends to Facebook's infrastructure stack:
- Custom message store maintained but backed by Facebook's TAO (graph) and MyRocks (RocksDB + MySQL)
- ML models for spam detection using Facebook's AI infrastructure
- Content delivery via Facebook's global CDN network
- Infrastructure monitoring via Facebook's operational tooling

**Current Architecture (2024+)**

```mermaid
graph TB
    subgraph Client Layer
        D1[Device 1]
        D2[Device 2]
        D3[Device N]
    end

    subgraph Edge Layer
        LB[Load Balancer]
        WS[WebSocket Gateway]
        TCP[TCP Connection Manager]
    end

    subgraph Service Layer
        R[Message Router]
        SM[Session Manager]
        P[Presence Service]
        G[Group Service]
        M[Media Service]
    end

    subgraph Storage Layer
        MS[(Message Store<br/>MyRocks)]
        MD[(Metadata DB<br/>Cassandra)]
        OS[(Object Store<br/>Blob/CDN)]
    end

    subgraph Sync Layer
        DS[Device Sync]
        OQ[Offline Queue]
    end

    D1 --> LB
    D2 --> LB
    D3 --> LB
    LB --> TCP
    LB --> WS
    TCP --> R
    WS --> R
    R --> SM
    R --> P
    R --> G
    R --> M
    R --> MS
    R --> MD
    R --> DS
    R --> OQ
    M --> OS
```

### Deep Dive Phase

**Message Store Design**

WhatsApp's message store is one of the least documented but most critical components. It must handle 100B messages/day while supporting:
- Per-user inbox/outbox with ordered message retrieval
- Multi-device sync (read from any device)
- Offline message queueing with per-message delivery status
- Deletion for everyone ("unsend")
- Message expiration (disappearing messages)

The store uses a custom MyRocks (RocksDB + MySQL) deployment with a specific schema designed for message ordering:

```sql
CREATE TABLE messages (
    user_id BIGINT NOT NULL,          -- recipient
    conversation_id BIGINT NOT NULL,  -- 1:1 or group identifier
    message_id BIGINT NOT NULL,       -- Snowflake-style global ID
    sender_id BIGINT NOT NULL,
    content_type TINYINT NOT NULL,    -- 0=text, 1=image, 2=video, 3=audio, 4=doc
    content_hash VARCHAR(64),         -- for media messages, references blob store
    encryption_key_id INT,            -- which pre-key bundle was used
    ciphertext BLOB NOT NULL,         -- Double Ratchet encrypted payload
    server_timestamp BIGINT NOT NULL,
    expires_at BIGINT,                -- NULL for permanent, epoch for disappearing
    delivery_status TINYINT DEFAULT 0,-- 0=sent, 1=delivered, 2=read
    PRIMARY KEY (user_id, conversation_id, message_id)
) PARTITION BY HASH(user_id) PARTITIONS 1024;
```

The partition key is `user_id`, ensuring all messages for a user are on the same physical shard. The compound primary key enables efficient range scans: `SELECT * FROM messages WHERE user_id = ? AND conversation_id = ? ORDER BY message_id DESC LIMIT 50`.

RocksDB's LSM-tree architecture provides excellent write throughput â€” critical for the spikey write patterns of messaging. Writes are sequential (append to memtable), and the sorted nature of the primary key means reads within a conversation are fast range scans on the same SST files.

For disappearing messages, the `expires_at` column enables a background compaction process. RocksDB's compaction filters can drop expired messages during normal compaction cycles, making deletion essentially free â€” the expired data is simply not written to the next SST level.

**Connection Management at Scale**

WhatsApp maintains a persistent TCP connection with each device. When the app is in the foreground, the connection is active. When backgrounded, the OS may suspend it, but WhatsApp uses platform-specific push APIs (FCM on Android, APNs on iOS) to wake the app.

The connection multiplexer on the server handles 100K-1M connections per machine:

```
struct connection {
    int fd;                    // socket descriptor
    uint64_t user_id;          // identifier for routing
    struct sockaddr_in6 addr;  // client address
    uint8_t state;             // CONNECTED, AUTHENTICATED, DISCONNECTING
    uint8_t *read_buf;         // read buffer (64KB)
    queue<message_t> outbox;   // pending outgoing messages
    uint64_t last_active;      // timestamp for keepalive
    uint8_t device_id;         // which device on the account
};
```

The kqueue event loop registers all socket descriptors and uses `kevent()` with EV_ONESHOT. Each event is dispatched to a worker thread pool. The one-shot mode means the event must be re-registered after processing, providing natural rate limiting and fairness across connections.

Connection affinity is achieved through DNS-based routing. Each user is mapped to a connection server via a consistent hash of their phone number (pre-decimalization) or user ID. This ensures all messages for a user route to the server holding their connection state.

WebSocket is used as a fallback for networks that block non-standard ports or have aggressive NAT timeouts. The protocol negotiation works:
1. Client attempts TCP connection on port 5222 (custom protocol)
2. If connection fails or times out, fall back to WebSocket on port 443
3. WebSocket connection uses standard TLS and passes through proxy/firewall

Long-polling is the last resort for severely degraded networks (e.g., China where WebSocket connections may be interrupted). The client polls for new messages every N seconds, and the server either responds immediately with queued messages or holds the connection open until a message arrives or timeout.

**Message Fan-Out Strategy**

Message routing is the core architectural decision. The three strategies are:

**Fan-on-Write (Small Groups)**

For 1:1 chats and groups with fewer than 32 members, when Alice sends a message:
1. Server receives the message from Alice's connection
2. Server writes one copy to Alice's outbox table
3. Server writes one copy to each recipient's inbox table
4. Server finds recipient connections and pushes messages

This is called "fan-on-write" because the work happens at write time. The inbox/outbox pattern is a classic database design from email systems. Each user has an inbox (messages addressed to them) and an outbox (messages they sent). The inbox acts as a message queue per user.

For a group of 32 members, one message produces 32 inbox writes plus the sender's outbox write. This is acceptable for small groups but becomes prohibitive for large groups.

**Fan-on-Read (Large Groups)**

For groups with 1024 members (WhatsApp's limit), fan-on-write would require 1024 inbox writes per message. Instead:

1. Server writes the message once to a group timeline (shared ordered log)
2. Each member reads from the group timeline independently
3. The timeline is indexed by `(group_id, message_id)` for efficient range queries

This is "fan-on-read": the write cost is O(1), but the read cost scales with group size. Each member must poll or be notified to read new messages from the timeline.

**Hybrid (Medium Groups)**

For groups of 32-256 members, WhatsApp uses a hybrid approach:
1. Message is written to the group timeline (one write)
2. Active members (currently connected) receive the message via their persistent connection with a "new message in group X" notification
3. The notification includes the group_id and message_id
4. The client reads the actual content from the group timeline on demand
5. Inactive members discover the message when they reconnect and sync

This hybrid approach:
- Reduces write amplification (one write per message instead of N)
- Eliminates read amplification for active members (pushed via connection)
- Provides exactly-once delivery semantics via message IDs and deduplication
- Handles bursty group activity without write-storming the inbox table

**message_id Generation**

Message IDs must be globally unique, monotonically increasing, and sortable by time. WhatsApp uses a 64-bit ID similar to Snowflake:

| Bits | Field | Description |
|------|-------|-------------|
| 41 | Timestamp | Milliseconds since epoch |
| 10 | Server ID | Data center + server within data center |
| 12 | Sequence | Per-server monotonic counter |

The 41-bit timestamp covers ~69 years. The 10-bit server ID supports 1024 servers. The 12-bit sequence allows 4096 messages per millisecond per server â€” sufficient for peak rates.

**End-to-End Encryption**

WhatsApp uses the Signal Protocol for end-to-end encryption. The protocol has three layers:

**X3DH Key Agreement** (Extended Triple Diffie-Hellman):
- Each user generates a long-term Curve25519 identity key pair `(IK_A, IK_B)`
- Each user pre-generates a set of signed pre-keys `(SPK_A, SPK_B)` and one-time pre-keys `(OPK_B)`
- When Alice wants to message Bob for the first time, she fetches Bob's pre-key bundle from the server
- Alice performs a DH exchange: `DH(IK_A, SPK_B) || DH(EK_A, IK_B) || DH(EK_A, SPK_B) || DH(EK_A, OPK_B)`
- The resulting shared secret `SK` is used as the root key for the Double Ratchet
- Bob's OPK is consumed (server deletes it) to prevent replays

The server is a "directory service" for pre-keys. It stores users' identity keys and pre-key bundles but cannot decrypt messages because it does not know any private keys.

**Double Ratchet** (Per-Message Keys):
- After X3DH establishes the root key `RK`, both sides initialize a sending ratchet and a receiving ratchet
- Each message derives a new message key using a KDF chain:
  - Root Key (RK) â†’ Chain Key (CK) â†’ Message Key (MK)
- The Diffie-Hellman ratchet provides forward secrecy: if a chain key is compromised, past message keys cannot be recovered
- The symmetric ratchet provides "break-in recovery": after compromise, a DH exchange with new ephemeral keys re-establishes security
- Each message includes the sender's current ephemeral public key and a message number

For a conversation with 100 messages per day, the double ratchet produces 200 new keys per day (one per message in each direction). The storage per conversation is minimal â€” just the current state of each ratchet chain.

**Secure Group Messaging** (Sender Keys):
- For groups, WhatsApp uses the Sender Key protocol (a push from the Signal Protocol)
- Each sender maintains a symmetric "sender key" for each group they belong to
- The sender key is distributed to all group members out-of-band (encrypted with pairwise double ratchet sessions)
- When Alice sends a group message, she encrypts with her sender key, and all recipients can decrypt
- When a member joins or leaves, all members generate new sender keys and distribute them
- This is more efficient than pairwise encryption: O(1) encryption per message (sender encrypts once) instead of O(N) (encrypt for each recipient)

**Group Chat**

Group management is a significant engineering challenge at WhatsApp's scale:

**Group Creation and Membership**:
- A group is created with `(group_id, creator_uid, member_set, admin_set, group_name, avatar, created_at)`
- Membership is stored as a sorted set in the metadata database
- Group updates (add/remove member, change name) are themselves encrypted messages with a special system message type
- System messages are processed by clients to update local group state

**Message History for New Members**:
- When a new member joins, they see only messages sent after joining
- The group timeline stores messages by `(group_id, message_id, server_timestamp)`
- New members start reading from their join timestamp
- For "history on join" scenarios, the server replays the last N messages from the timeline

**Admin Operations**:
- Admin-only messaging (only admins can send)
- Member approval (new members require admin approval)
- Temporary groups (disappearing after event)
- Group invite links (tokens that grant membership)

**Spam and Abuse Detection**

At 100B messages/day, spam detection must be automated, real-time, and privacy-preserving (messages are end-to-end encrypted, so content inspection is impossible). WhatsApp's approach relies entirely on metadata and behavioral patterns:

- **Behavioral signals**: Rate of new group creation, frequency of messaging unknown contacts, blast radius (how many non-contacts receive messages from a single user).
- **Account age**: New accounts that immediately broadcast to 100+ recipients are flagged. Phone numbers registered within the last 24 hours are restricted to messaging only contacts saved in the address book.
- **Forwarding limits**: Labeled forwarding ("Forwarded many times") is applied after a message chain exceeds 5 hops. Forwarding is restricted to one chat at a time after 100+ forwards.
- **Hardware attestation**: Android SafetyNet and iOS DeviceCheck attestations during registration prevent automated bulk account creation.
- **IP-based clustering**: Multiple registrations from the same IP range are correlated and flagged for manual review.

The detection pipeline computes a per-user abuse score every 5 minutes using a gradient-boosted model trained on labeled abuse patterns. Features include: messages per hour, unique recipients per day, groups joined per hour, and account age in hours. Users above threshold are "shadow banned" â€” their messages are delivered normally, but they are not notified of the restriction. This prevents abuse pattern adaptation.

**Two-Phase Registration**

Registration at WhatsApp scale requires defending against SMS verification abuse, SIM swapping, and bulk account creation:
1. **SMS verification**: 6-digit code sent via carrier SMS, valid for 5 minutes.
2. **Voice fallback**: Automated voice call reads the code if SMS is not delivered within 60 seconds.
3. **Rate limits**: Maximum 3 verification attempts per phone number per hour.
4. **VoIP blocking**: Phone numbers from known VoIP carriers (Google Voice, TextNow) are blocked.
5. **CAPTCHA**: Presented after repeated SMS delivery failures to prevent automated abuse of the voice fallback channel.

**Media Sharing**

Media messages follow a different flow than text:

1. Alice selects an image and presses send
2. The WhatsApp client uploads the image to blob storage (CDN) via a direct HTTPS upload
3. The upload generates an encrypted blob with an expiring URL (valid for 1 hour)
4. The server stores a mapping: `(media_hash â†’ encrypted_blob_url, thumbnail_url)`
5. The message sent to Bob contains only the media hash, encryption key (from Double Ratchet), and thumbnail
6. Bob's client receives the message, resolves the media hash to the CDN URL, and downloads the encrypted blob

Image compression happens on-device before upload:
- Images are compressed to ~100-200KB (from multi-MB originals)
- Resolution is reduced to 1600px on the longest edge
- WebP format for supported devices
- Thumbnails (100x100) are generated client-side for inline preview

Video compression:
- Limited to 16MB (earlier) now extended to 2GB for some regions
- H.264 encoding, 30fps, resolution capped at 720p for standard, 1080p for HD
- Streaming for large videos: byte-range requests from CDN

**Last Seen, Typing Indicators, Read Receipts**

Presence information is a real-time pub-sub problem:

- Each user's presence state is maintained in Redis: `presence:{user_id} â†’ {status, last_seen, device_list}`
- When a user connects, their online status is published to a Redis pub-sub channel
- Subscribers (contacts who have the user in their address book) receive the presence update via their persistent connection
- For large contact lists (up to 1000 contacts), presence is aggregated: the server batches presence updates and sends a single batch message

Typing indicators:
- Client sends a "typing" event on every keystroke (but throttled to 1 per 2 seconds)
- Server routes to the conversation partner's connection
- No persistence â€” purely in-memory
- Automatically expires after 5 seconds of inactivity

Read receipts:
- Each message has a `(message_id, recipient_id, status)` tracking record
- Status states: SENT, DELIVERED, READ
- DELIVERED is set when the message reaches the recipient's device
- READ is set when the recipient opens the conversation
- Read receipts for groups: batched â€” one update per N receipts

**Offline Messages**

When a user is offline, messages are stored server-side. The design:
- Each user has a message queue (inbox) in the message store
- Messages are kept for 30 days (or until delivered across all devices)
- The queue stores the last ~1000 messages per conversation
- When the user reconnects, the server sends queued messages in order
- Messages older than 30 days are deleted from the queue
- Media URLs expire; for very old offline messages, the client receives a notification but the media must be re-uploaded by the sender

The sync protocol on reconnection:
1. Client sends its last known message ID per conversation
2. Server replies with all messages after that ID for each conversation
3. Messages are sent in batch, ordered by server timestamp
4. Client processes messages, decrypts, and renders
5. Client acknowledges delivery with the last received message ID
6. Server marks messages as delivered and may remove from offline queue

**Multi-Device Support**

Multi-device support (added 2021) eliminated the requirement for the phone to stay connected. The architecture:

- Each device generates its own Curve25519 identity key pair (Ed25519 for signing)
- The primary device maintains the account identity
- Secondary devices are linked via QR code scan (encrypted channel)
- Each device maintains its own ratchet state with each conversation partner
- The server maintains a device list per user: `devices:{user_id} â†’ [{device_id, identity_key, signed_pre_key, ...}]`

Message delivery with multi-device:
- When Alice sends a message from Device 1, the server delivers it to Bob's Device 1, Device 2, etc.
- Alice's other devices also receive the message via the server (for sync)
- Each device independently decrypts using its own ratchet state
- The server is responsible for fan-out across devices

History sync:
- When a new device is linked, it receives the last ~3 months of conversation history
- History is sent as encrypted batches from the primary device
- Media thumbnails are included; full media is downloaded on demand

---

## Case Study: WhatsApp Message Delivery Pipeline

### Requirements

Design the message delivery path for a 1:1 message from Alice (India) to Bob (Brazil). Both are online. The system must deliver in <100ms across continents.

### High-Level Design

```
Alice's Phone (Mumbai, India)
  â†“ (TCP connection, encrypted with Double Ratchet)
  â†“
Mumbai Connection Server (CS-IN-42)
  â†“ (internal RPC)
  â†“
Message Router (determines Bob is on CS-BR-17)
  â†“ (internal RPC, data center hop via Facebook backbone)
  â†“
Sao Paulo Connection Server (CS-BR-17)
  â†“ (TCP push, encrypted)
  â†“
Bob's Phone (Sao Paulo, Brazil)
```

### Deep Dive

The message router maintains a distributed hash table mapping `user_id â†’ connection_server`. This is stored in a consistent hash ring backed by ZooKeeper. When Alice sends a message:

1. CS-IN-42 receives the encrypted payload. It does not decrypt â€” the server is zero-knowledge for message content.
2. CS-IN-42 looks up Bob's connection server. If Bob is online in the same server, routing is local. If on a different server (as in our cross-continent case), it routes via the internal RPC network.
3. The RPC uses a custom binary protocol over TCP (not HTTP) to minimize overhead.
4. The datacenter-to-datacenter link runs over Facebook's private backbone (not the public internet), ensuring predictable latency.
5. CS-BR-17 receives the message, looks up Bob's current connection, and pushes the encrypted payload directly to Bob's TCP socket.

Total latency budget:
- Alice â†’ Mumbai CS: 5ms (local mobile network)
- Mumbai CS â†’ Router: 1ms (in-datacenter)
- Router lookup: <1ms
- Mumbai â†’ Sao Paulo RPC: 80ms (transatlantic backbone)
- Sao Paulo CS â†’ Bob: 5ms (local mobile network)
- Total: ~92ms â€” under the 100ms target

### Summary

- Persistent TCP connections with FreeBSD kqueue handle 1M+ concurrent connections per server
- Custom binary protocol eliminates XML overhead of the original XMPP design
- Hybrid fan-out strategy scales from 1:1 to 1024-member groups
- Signal Protocol (X3DH + Double Ratchet) provides end-to-end encryption with forward secrecy
- Server is zero-knowledge: messages are encrypted before reaching the server
- Multi-device sync uses per-device identity keys and independent ratchet states
- Offline messages are queued per-user and delivered on reconnection with sync protocol
- Facebook's private backbone provides predictable cross-region latency
- Media is uploaded directly to CDN; messages contain only hashes and encryption keys
- Presence and typing indicators use Redis pub-sub with throttling and aggregation

---

## Summary

- WhatsApp's architecture evolved from Erlang/ejabberd (XMPP) to custom C++ on FreeBSD with kqueue for maximum connection density
- Message fan-out uses a three-tier strategy: fan-on-write for small groups, fan-on-read for large groups, hybrid for medium groups
- End-to-end encryption with the Signal Protocol is mandatory for all content; the server has zero knowledge of message contents
- Persistent TCP connections with WebSocket fallback and long-polling as a last resort ensure connectivity across all network conditions
- Multi-device support uses independent Ed25519 key pairs per device, eliminating phone-as-hub dependency
- Offline message storage is per-user with a 30-day retention window and batched delivery on reconnection
- Media upload is client-to-CDN with encrypted blobs and expiring URLs â€” messages only carry hashes and decryption keys
- Presence and typing use Redis pub-sub with aggregation for large contact lists
- Message IDs use a Snowflake-style 64-bit scheme for global uniqueness and temporal ordering
- The system achieves <100ms median delivery latency across continents using Facebook's private backbone

---

## Exercises

### Review Questions

1. Compare fan-on-write and fan-on-read for group chat messaging. At what group size does each become the better choice, and why?

2. Explain how X3DH key agreement establishes a shared secret between two parties who have never communicated before. What role does the server play in this process?

3. How does the Double Ratchet algorithm provide both forward secrecy and break-in recovery? Describe the role of the Diffie-Hellman ratchet vs the symmetric ratchet.

4. Describe the connection fallback chain: TCP â†’ WebSocket â†’ Long-Polling. Under what conditions would each fallback trigger?

5. How does multi-device support work without the primary phone acting as a relay? What key material does each device hold?

### Application Problems

1. **Group Chat Fan-Out At Scale**: Your messaging app has a group with 10,000 members (a community group). Design the fan-out strategy. Consider: active vs inactive ratios, burst messages during events (100 msg/min), online push vs lazy loading. Calculate the write amplification for fan-on-write and the read amplification for fan-on-read. Assuming 60% of members are active, what is the optimal strategy?

2. **Media CDN With Previews**: You need to support sending 4K videos up to 1GB. Users expect instant preview play. Design a transcoding pipeline that:
   - Accepts the upload
   - Generates 5 quality tiers (240p, 360p, 720p, 1080p, source)
   - Generates a GIF preview (first 5 seconds)
   - Generates a thumbnail
   - Makes the first tier available in <2 seconds
   All while the video continues uploading. Describe the chunked upload, parallel transcoding, and progressive availability strategy.

3. **Serverless WhatsApp**: Design a messaging system using only serverless components (AWS Lambda, API Gateway WebSocket, DynamoDB, S3, SQS). What constraints make this approach workable? Where does it break down compared to WhatsApp's persistent connection architecture? Estimate the cost per billion messages.

### Challenge Problem

**Disappearing Messages with Cryptographic Enforcement**

WhatsApp supports disappearing messages (messages that auto-delete after 24 hours to 90 days). Currently, deletion relies on client cooperation â€” the server marks them as deleted but a malicious client could save messages before deletion. Design a system where the server can cryptographically enforce disappearance:

1. The server issues an ephemeral decryption key that expires after the time limit
2. Messages are encrypted with a time-based key derived from the current epoch window
3. Design the key hierarchy: long-term identity keys â†’ session keys â†’ time-window keys â†’ message keys
4. Handle the case where the recipient opens the message 1 minute before the window expires
5. Ensure backward compatibility with existing client software
6. Consider the case where the server is compromised: can an attacker recover expired messages from stored ciphertexts?

This challenge touches on identity-based encryption, timed-release cryptography, key rotation at scale, and the fundamental tension between "server zero-knowledge" and "server-enforced policies."
