# Chapter 15: Web APIs and Application Protocols

## Learning Objectives

1. Design RESTful APIs with appropriate resource modeling, HTTP methods, and status codes.
2. Explain the WebSocket protocol and its use in real-time applications.
3. Compare gRPC and REST for different application requirements.
4. Describe GraphQL query structure and its advantages over REST for certain use cases.
5. Analyze the role of WebRTC in peer-to-peer communication.

## 15.1 RESTful APIs

Representational State Transfer (REST) is an architectural style for designing networked applications. RESTful APIs use HTTP methods as verbs operating on resources identified by URLs.

### 15.1.1 Resource Modeling

Resources are nouns representing entities in the application domain. A well-designed API models resources hierarchically:

```
/users              → collection of users
/users/{id}         → single user
/users/{id}/orders  → orders for a specific user
/orders/{id}        → single order
/orders/{id}/items  → items in an order
```

### 15.1.2 HTTP Methods

| Method | Operation | Idempotent | Safe | Example |
|--------|-----------|------------|------|---------|
| GET | Retrieve resource | Yes | Yes | GET /users/123 |
| POST | Create resource | No | No | POST /users |
| PUT | Replace resource | Yes | No | PUT /users/123 |
| PATCH | Partial update | No | No | PATCH /users/123 |
| DELETE | Remove resource | Yes | No | DELETE /users/123 |

Idempotent methods produce the same side effects regardless of how many times they are called. Safe methods do not modify state.

### 15.1.3 Status Codes

RESTful APIs use HTTP status codes to communicate results:

- 200 OK: successful GET, PUT, PATCH
- 201 Created: successful POST
- 204 No Content: successful DELETE (no body)
- 301 Moved Permanently: resource has new URL
- 400 Bad Request: malformed client input
- 401 Unauthorized: authentication required
- 403 Forbidden: authenticated but not authorized
- 404 Not Found: resource does not exist
- 409 Conflict: resource state conflict
- 422 Unprocessable Entity: validation error
- 429 Too Many Requests: rate limit exceeded
- 500 Internal Server Error: server-side failure

### 15.1.4 HATEOAS

Hypermedia as the Engine of Application State (HATEOAS) includes links in API responses, allowing clients to navigate the API dynamically:

```json
{
  "id": 123,
  "name": "Alice",
  "links": [
    {"rel": "self", "href": "/users/123"},
    {"rel": "orders", "href": "/users/123/orders"}
  ]
}
```

### 15.1.5 Versioning

APIs evolve over time. Common versioning strategies:

- URI versioning: `/v1/users`, `/v2/users`
- Header versioning: `Accept: application/vnd.example.v2+json`
- Query parameter: `/users?version=2`

## 15.2 WebSockets

WebSocket (RFC 6455) provides full-duplex communication over a single TCP connection after an HTTP upgrade handshake. The protocol is designed for real-time applications such as chat, live updates, and gaming.

**Handshake:**
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Response:
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

**Frame format:**

| FIN | RSV | Opcode | Mask | Length | Masking Key | Payload |
|-----|-----|--------|------|--------|-------------|---------|
| 1 b | 3 b | 4 b    | 1 b  | 7/7+16/7+64 b | 0 or 4 B | Variable |

Opcode types: 1 (text), 2 (binary), 8 (close), 9 (ping), 10 (pong).

Clients mask payload data; servers do not. Close frames carry a status code (1000 normal, 1001 going away, 1002 protocol error, 1003 unsupported data).

## 15.3 gRPC

gRPC uses Protocol Buffers for interface definition and HTTP/2 for transport. It supports four service types:

- **Unary**: single request, single response (like REST).
- **Server streaming**: single request, stream of responses.
- **Client streaming**: stream of requests, single response.
- **Bidirectional streaming**: independent streams of requests and responses.

### 15.3.1 Protocol Buffers Definition

```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc UpdateUser (stream UpdateRequest) returns (UpdateResponse);
}

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
}
```

gRPC performance advantages over JSON-based REST: binary serialization is faster and more compact; HTTP/2 multiplexing eliminates head-of-line blocking; streaming reduces latency for real-time data.

## 15.4 GraphQL

GraphQL (Facebook, 2015) is a query language and server runtime for APIs. Clients specify the exact data they need, reducing over-fetching and under-fetching common in REST.

### 15.4.1 Query Structure

```graphql
{
  user(id: 123) {
    name
    email
    orders {
      id
      total
      items {
        name
        price
      }
    }
  }
}
```

### 15.4.2 Schema Definition

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  orders: [Order!]!
}

type Order {
  id: ID!
  total: Float!
  items: [OrderItem!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
}
```

GraphQL uses a single endpoint; the client specifies the data structure. Security concerns: complex queries can overload the server (depth limiting, query complexity analysis, rate limiting). Data loading efficiency requires batching (DataLoader pattern) to avoid N+1 query problems.

## 15.5 Server-Sent Events

SSE enables servers to push events to clients over HTTP. The client opens a connection; the server sends data as text/event-stream:

```
data: {"message": "Hello"}
\n\n
data: {"message": "World"}
\n\n
```

SSE is simpler than WebSockets (HTTP only, unidirectional server→client, automatic reconnection) but suitable for notifications, live feeds, and status updates.

## 15.6 WebRTC

WebRTC (Web Real-Time Communication, W3C/IETF) enables peer-to-peer audio, video, and data transfer between browsers without plugins.

**Architecture:**

- **Signaling**: SDP exchange via the application server (WebRTC does not define the signaling protocol; SIP, XMPP, or custom WebSocket signaling are used).
- **NAT traversal**: STUN (Session Traversal Utilities for NAT) discovers public IP and port; TURN (Traversal Using Relays around NAT) relays traffic when direct connection fails; ICE (Interactive Connectivity Establishment) coordinates STUN and TURN candidates.
- **DTLS-SRTP**: encrypts media streams. DTLS (Datagram TLS) provides key agreement; SRTP (Secure Real-time Transport Protocol) encrypts audio/video packets.
- **DataChannel**: SCTP over DTLS enables reliable/unreordered data streams.

## 15.7 API Gateways

An API gateway is a reverse proxy that sits between clients and backend services. It handles:

- Request routing (path-based or header-based)
- Authentication and authorization (OAuth2, JWT validation)
- Rate limiting (token bucket, leaky bucket per client)
- Caching (response cache for idempotent requests)
- Load balancing across service instances
- Request/response transformation (XML↔JSON)
- Monitoring and analytics (latency, error rates)

Common API gateways: Kong, NGINX, AWS API Gateway, Envoy, Traefik.

## Summary

RESTful APIs model resources as nouns with HTTP methods as verbs, leveraging status codes for result communication. WebSockets provide full-duplex communication for real-time applications. gRPC uses Protocol Buffers and HTTP/2 for efficient binary streaming. GraphQL enables flexible client-driven queries. SSE offers simple server push. WebRTC enables browser-based peer-to-peer media. API gateways centralize cross-cutting concerns.

## Exercises

### Review Questions

1. What is the difference between PUT and PATCH in REST?
2. How does a WebSocket connection differ from a long-lived HTTP connection?
3. What advantage does gRPC streaming have over REST polling?
4. How does GraphQL solve the over-fetching problem common in REST?
5. What role does ICE play in WebRTC connection establishment?

### Application Problems

6. Design a RESTful API for a library system with books, authors, members, and loans. Define the resource URIs, HTTP methods, request bodies, and response format for each operation.
7. A real-time collaborative document editor needs to synchronize changes across multiple users. Compare WebSockets, SSE, and gRPC streaming for this use case. Justify your recommendation.
8. An API gateway receives 10,000 requests per second. Each request requires authentication (database lookup), rate limiting (Redis check), and routing to one of 20 backend services. Compute the average latency added by the gateway if authentication takes 2 ms, rate limiting takes 0.5 ms, and routing takes 0.1 ms. What is the gateway's throughput capacity?

### Challenge Problem

9. **Design a real-time collaborative whiteboard protocol.** The whiteboard supports: (a) 10 simultaneous users, (b) vector drawing (lines, rectangles, circles), (c) undo/redo per user, and (d) cursor position sharing. Design the protocol using WebRTC DataChannel for peer-to-peer communication with a fallback to a WebSocket relay for users behind symmetric NAT. Define the message format (including CRDT or OT for conflict resolution), the signaling process, and the fallback mechanism. Analyze the bandwidth requirements for smooth real-time drawing at 60 updates per second per user.
