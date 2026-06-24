# Chapter 12: Wireless Networks (Extended)

## Learning Objectives

1. Compare the 802.11 physical-layer standards and their performance characteristics.
2. Describe CSMA/CA and its role in wireless medium access.
3. Explain Bluetooth architecture including piconets and scatternets.
4. Analyze the architecture of cellular networks from 4G/LTE to 5G.
5. Describe mobility management including handover, location tracking, and roaming.
6. Implement wireless protocol simulations in C++ and Python.

## 12.1 Wireless Challenges

Wireless communication faces fundamental challenges that wired networks avoid. These constraints shape every protocol from 802.11 to 5G.

### 12.1.1 Key Challenges

| Challenge | Description | Impact |
|-----------|-------------|--------|
| Attenuation | Signal power decays with distance ($P_r \propto P_t / d^2$ in free space, worse indoors) | Reduced range, lower data rates at distance |
| Multipath Fading | Reflections cause multiple copies of signal arriving at different times | Intersymbol interference, frequency-selective fading |
| Interference | Other devices on same frequency (microwaves, cordless phones, Bluetooth) | Collisions, retransmissions, throughput collapse |
| Hidden Terminal | Two stations cannot hear each other but both reach the AP | Collisions at the receiver that the sender cannot detect |
| Exposed Terminal | Station defers to a transmission it could safely ignore | Unnecessary deferral, wasted channel capacity |
| Mobility | Devices move between coverage areas | Connection drops, handover latency, packet loss |
| Energy Constraints | Battery-powered devices limit transmit power and processing | Shorter range, limited duty cycle |
| Security | Wireless signals travel through walls and public spaces | Eavesdropping, injection, MITM attacks |

### 12.1.2 Real-World Analogy: The Noisy Room

Imagine a large room where people are trying to have conversations:

- **Attenuation**: Two people speaking softly across opposite ends of the room cannot hear each other clearly.
- **Hidden Terminal**: Person A is on the left, Person B is on the right. Both can hear the moderator (AP) in the center, but A cannot hear B and B cannot hear A. If both speak at the same time, the moderator hears noise.
- **Exposed Terminal**: Person C is near Person A. When A speaks to the moderator, C hears A and stays silent. But C could safely speak to Person D in the opposite direction â€” the moderator is far enough away not to be disturbed by C.
- **CSMA/CA**: Before speaking, listen. If someone else is speaking, wait a random amount of time before trying again.
- **RTS/CTS**: Before speaking, say "I have something to say" (RTS). The moderator responds "Go ahead, everyone else be quiet for X seconds" (CTS).

### 12.1.3 Edge Cases

**Hidden Terminal Still Colliding**: Even with RTS/CTS, if two hidden stations transmit RTS simultaneously, both RTS frames collide at the AP. Both time out waiting for CTS and double their backoff windows. This is the RTS collision problem â€” RTS frames themselves are vulnerable.

**Exposed Terminal False Deferral**: Station C hears Station A's transmission to the AP. C defers even though C's transmission to D would not interfere with A's reception at the AP. The exposed terminal cannot distinguish between "the medium is busy for me" and "the medium is busy for someone else."

**Co-Channel Interference**: Two APs on the same channel in adjacent coverage areas. Clients at the cell edge experience collisions from both cells. With 2.4 GHz having only 3 non-overlapping channels, dense deployments inevitably suffer this.

### 12.1.4 A&D of Wireless Communication

| Advantage | Disadvantage |
|-----------|-------------|
| Mobility: users move freely within coverage area | Reliability: higher bit error rate than wired |
| Deployment speed: no cables needed | Security: signal propagates beyond intended area |
| Cost: no cabling infrastructure | Throughput: shared medium, half-duplex |
| Scalability: add devices without wiring | Latency: contention, backoff, retransmission |
| Coverage: reaches locations cables cannot | Predictability: variable due to interference |

## 12.2 IEEE 802.11 Architecture

### 12.2.1 Components

| Component | Full Name | Role |
|-----------|-----------|------|
| **STA** | Station | Any device with wireless interface (laptop, phone, IoT sensor) |
| **AP** | Access Point | Central hub connecting wireless to wired network; bridges 802.11 to 802.3 |
| **BSS** | Basic Service Set | One AP + associated STAs; identified by BSSID (AP's MAC address) |
| **ESS** | Extended Service Set | Multiple BSSes connected by a distribution system (DS); same SSID |
| **DS** | Distribution System | Backbone network connecting APs (typically Ethernet) |

**BSS (Basic Service Set)**: The fundamental building block. An AP and its associated stations form a cell. Each BSS is identified by a BSSID (usually the AP's MAC address). In ad-hoc (IBSS) mode, stations communicate directly without an AP.

**ESS (Extended Service Set)**: Multiple BSSes connected via a distribution system. All BSSes share the same SSID (network name). A station can roam between BSSes within the same ESS. The DS is typically Ethernet but can be any backbone technology.

**AP (Access Point)**: Acts as a bridge between wireless and wired domains. Performs: beacon generation, station association/authentication, frame translation (802.11 â†” 802.3), power management coordination, and QoS scheduling.

**STA (Station)**: Any device with an 802.11 interface. STA states: Unauthenticated, Authenticated but unassociated, Associated, and Authenticated + Associated (fully connected).

### 12.2.2 Real-World Analogy: Office Building

- **STA**: An employee at their desk.
- **AP**: The departmental office that handles mail and phone calls for the floor.
- **BSS**: One floor of the building with one office.
- **DS**: The internal mail system connecting all departmental offices.
- **ESS**: The entire building â€” all floors use the same company name (SSID), and mail routes between offices seamlessly.
- **Roaming**: An employee moves from floor 3 to floor 5. They still receive mail at the same address (SSID) even though their local office (AP) has changed.

### 12.2.3 Wi-Fi Association Process (Numbered Steps)

**Step 1 â€” Probe Request**: STA broadcasts a Probe Request on each channel, listing supported data rates and capabilities.

**Step 2 â€” Probe Response**: Each AP in range responds with a Probe Response containing SSID, supported rates, encryption types, beacon interval, and capability information.

**Step 3 â€” Open Authentication Request**: STA sends an Authentication frame to the chosen AP. In open system authentication (the most common), this is essentially a formality.

**Step 4 â€” Open Authentication Response**: AP responds with an Authentication frame indicating success (status code 0).

**Step 5 â€” Association Request**: STA sends an Association Request including listen interval (for power management), supported rates, SSID, and capabilities.

**Step 6 â€” Association Response**: AP responds with Association ID (AID, 1-2007), success/failure status, and supported rates.

After Step 6, if WPA2/WPA3 is used, the 4-way handshake occurs for key exchange before data can flow.

### 12.2.4 Pseudocode: Wi-Fi Association

```
procedure wifi_association(sta, ap)
    // Phase 1: Passive/Active Scanning
    for each channel in supported_channels do
        if passive_scanning then
            listen_for_beacon(channel, beacon_interval)
            beacon = receive_beacon()
            if beacon.ssid == target_ssid then
                ap_list.add(beacon)
        else
            probe = ProbeRequest(sta.supported_rates, sta.capabilities)
            broadcast(probe)
            response = recv_probe_response(probe_timeout)
            if response != null and response.ssid == target_ssid then
                ap_list.add(response)

    // Phase 2: Select AP
    chosen_ap = select_best_ap(ap_list)  // by RSSI, channel utilization, etc.

    // Phase 3: Authenticate
    attempt = 0
    while attempt < MAX_AUTH_RETRIES do
        auth_req = AuthRequest(algorithm=OPEN, seq=1)
        send(auth_req, chosen_ap)
        auth_resp = recv(timeout=T_AUTH)
        if auth_resp != null and auth_resp.status == SUCCESS then
            break
        attempt = attempt + 1

    // Phase 4: Associate
    attempt = 0
    while attempt < MAX_ASSOC_RETRIES do
        assoc_req = AssocRequest(listen_interval, ssid, rates)
        send(assoc_req, chosen_ap)
        assoc_resp = recv(timeout=T_ASSOC)
        if assoc_resp != null and assoc_resp.status == SUCCESS then
            sta.aid = assoc_resp.aid
            sta.state = ASSOCIATED
            return SUCCESS
        attempt = attempt + 1

    return FAILURE
```

### 12.2.5 Dry Run Trace: Wi-Fi Association

Parameters: STA = "Client-A", AP = "Office-AP" on Channel 6, RSSI = -45 dBm.

| Step | Sender | Frame Type | Key Fields | Result |
|------|--------|-----------|------------|--------|
| 1 | Client-A | Probe Request | SSID: null (broadcast), Rates: b/g/n, Channel: 6 | Broadcast on ch 6 |
| 2 | Office-AP | Probe Response | SSID: "CorpNet", Rates: 54/48/36/24/12/9/6 Mbps, Cap: WPA2, RSSI: -45 dBm | Received by Client-A |
| 3 | Client-A | Auth Request | Algorithm: Open, Seq: 1 | Sent to Office-AP |
| 4 | Office-AP | Auth Response | Algorithm: Open, Seq: 2, Status: 0 (Success) | Sent to Client-A |
| 5 | Client-A | Assoc Request | SSID: "CorpNet", Listen Interval: 10, Rates: b/g/n | Sent to Office-AP |
| 6 | Office-AP | Assoc Response | AID: 5, Status: 0 (Success) | Sent to Client-A |
| 7 | Client-A | EAPOL-1 (4-way) | Key data: ANonce | Office-AP sends ANonce |
| 8 | Office-AP | EAPOL-2 (4-way) | Key data: SNonce + MIC | Client-A sends SNonce |
| 9 | Client-A | EAPOL-3 (4-way) | Key data: GTK + MIC | Office-AP installs keys |
| 10 | Office-AP | EAPOL-4 (4-way) | Key data: ACK | Client-A installs keys |
| â€” | Client-A | Data Frame | Encrypted payload | Full connectivity established |

## 12.3 Wi-Fi Standards Comparison

The IEEE 802.11 family has evolved over 25 years from 1-2 Mbps to 46 Gbps. Each generation introduced new physical-layer techniques.

### 12.3.1 Detailed Standards Table

| Standard | Wi-Fi Gen | Year | Freq (GHz) | Channel Width | Max Data Rate | MIMO Streams | Modulation | Subcarriers | Guard Interval |
|----------|-----------|------|------------|---------------|--------------|-------------|------------|-------------|----------------|
| 802.11a | WiFi 2 | 1999 | 5 | 20 MHz | 54 Mbps | 1Ã—1 (no MIMO) | OFDM (64-subcarrier) | 52 data + 4 pilot | 800 ns |
| 802.11b | WiFi 1 | 1999 | 2.4 | 20 MHz | 11 Mbps | 1Ã—1 (no MIMO) | DSSS (CCK) | N/A (DSSS) | N/A |
| 802.11g | WiFi 3 | 2003 | 2.4 | 20 MHz | 54 Mbps | 1Ã—1 (no MIMO) | OFDM (64-subcarrier) | 52 data + 4 pilot | 800 ns |
| 802.11n | WiFi 4 | 2009 | 2.4/5 | 20/40 MHz | 600 Mbps | 4Ã—4 | MIMO-OFDM (64-subcarrier) | 52/108 data | 400/800 ns |
| 802.11ac | WiFi 5 | 2013 | 5 | 20/40/80/160 MHz | 6.9 Gbps | 8Ã—8 (MU-MIMO DL) | MIMO-OFDM (256-subcarrier) | 234/468 | 400/800 ns |
| 802.11ax | WiFi 6 | 2019 | 2.4/5/6 | 20/40/80/160 MHz | 9.6 Gbps | 8Ã—8 (MU-MIMO DL+UL) | OFDMA (1024-QAM) | 234/468/936/1872 | 800/1600/3200 ns |
| 802.11be | WiFi 7 | 2024 | 2.4/5/6 | 20/40/80/160/320 MHz | 46 Gbps | 16Ã—16 (CMU-MIMO) | 4096-QAM OFDMA | 468/936/1872/3744 | 800/1600/3200 ns |

### 12.3.2 Complexity Analysis

**Spatial Stream Scaling**: Throughput scales linearly with the number of spatial streams (up to MIMO rank). Doubling streams doubles data rate for the same channel width and modulation. Complexity: $O(S)$ where $S = \text{number of streams}$.

**Channel Width Scaling**: Doubling channel width doubles subcarriers and thus throughput. Complexity: $O(W)$ where $W = \text{channel width}$. Larger channels are more susceptible to noise â€” a single narrowband interferer can wipe out a 320 MHz channel.

**QAM Order**: Each bit increase in QAM order (e.g., 256-QAM â†’ 512-QAM â†’ 1024-QAM) adds 1 bit per subcarrier per symbol. Data rate scales logarithmically with QAM order: $O(\log_2 M)$. Higher QAM requires better SNR â€” at range, the link falls back to lower QAM.

**Why WiFi 7 reaches 46 Gbps**: 320 MHz Ã— 16 streams Ã— 4096-QAM (12 bits/symbol) Ã— 5/6 code rate Ã— OFDMA efficiency â‰ˆ 46 Gbps. The 320 MHz channel alone (doubled from WiFi 6's 160 MHz) doubles throughput. 16Ã—16 MIMO doubles it again vs WiFi 6's 8Ã—8. 4096-QAM adds ~20% more bits per symbol than 1024-QAM.

### 12.3.3 A&D of Wi-Fi Standards

| Standard | Advantages | Disadvantages |
|----------|-----------|-------------|
| 802.11b | Longest range at 2.4 GHz, wide device support | Only 11 Mbps, no OFDM, 3 non-overlapping channels |
| 802.11a | Clean 5 GHz band, 54 Mbps, 24 non-overlapping channels | Shorter range (higher freq), no 2.4 GHz backward compatibility |
| 802.11g | 54 Mbps at 2.4 GHz, backward compatible with 11b | Same crowded 3-channel limitation |
| 802.11n | First MIMO (4Ã—4), dual-band, 40 MHz channels | Legacy preamble reduces efficiency with mixed clients |
| 802.11ac | MU-MIMO DL, 160 MHz, 256-QAM, 6.9 Gbps | 5 GHz only, no OFDMA, UL still SU-MIMO |
| 802.11ax (WiFi 6) | OFDMA, 1024-QAM, 6 GHz band, TWT, UL MU-MIMO | Higher complexity, needs WiFi 6 clients to benefit |
| 802.11be (WiFi 7) | 320 MHz, 4096-QAM, 16Ã—16 MIMO, multi-link, 46 Gbps | Early adoption, expensive hardware, backward compatibility overhead |
## 12.4 CSMA/CA â€” Carrier Sense Multiple Access with Collision Avoidance

WiFi uses CSMA/CA instead of CSMA/CD because wireless transceivers cannot listen while transmitting (half-duplex), making collision detection impossible. Instead of detecting collisions after they occur, CSMA/CA tries to prevent them before transmission.

### 12.4.1 The NAV and Backoff Mechanism

**NAV (Network Allocation Vector)**: A virtual carrier-sense mechanism. Each station maintains a NAV counter indicating how long the medium will be busy. Stations set their NAV based on the Duration field in received frames. NAV = "the channel will be busy for this many microseconds." A station defers its own transmission while NAV > 0. This prevents collisions even when stations cannot hear each other's physical signals.

**Inter-Frame Spacing (IFS)**:
- **SIFS (Short IFS)**: 10 Âµs (802.11b/g) or 16 Âµs (802.11a/n/ac/ax). Used for ACK, CTS, and data frame bursts.
- **DIFS (DCF IFS)**: 50 Âµs (802.11b) or 34 Âµs (802.11a/g). SIFS + 2 Ã— slot time. Stations wait DIFS before starting backoff.
- **EIFS (Extended IFS)**: Used after a frame reception error, giving time for the receiver to send ACK.

**Backoff Procedure**:
1. Wait for medium to be idle for DIFS.
2. Choose random backoff counter uniformly from [0, CW] where CW = Contention Window.
3. Decrement counter each slot time the medium remains idle.
4. Freeze counter if medium becomes busy (deferral).
5. When counter reaches 0, transmit.
6. If no ACK received (collision), double CW: $CW = \min(2 \times CW, CW_{max})$.
7. Retry up to retry limit, then drop the frame.

### 12.4.2 Real-World Analogy: Courteous Conversation

Imagine a group conversation where only one person speaks at a time:

- **DIFS**: Everyone pauses to check if anyone is currently speaking.
- **Backoff**: Each person who wants to speak picks a random number (1-15) and counts down silently (one count per second). If someone else starts speaking, freeze the count. When the room is quiet again, resume counting.
- **Collision (no ACK)**: Two people speak at the same time. Neither gets a response. Both double their maximum count range (1-15 â†’ 1-31) and pick new random numbers.
- **NAV**: The current speaker says "I'll be speaking for about 30 seconds." Everyone sets a timer for 30 seconds and stays quiet until it expires.

### 12.4.3 Numbered Steps: CSMA/CA Transmission

1. **Physical Carrier Sense**: Check if the medium is idle for DIFS duration (34 Âµs for 802.11a/g).
2. **Backoff Selection**: If medium was busy or this is a retransmission, select backoff $B = \text{random}[0, CW]$ where CW starts at $CW_{min} = 15$.
3. **Backoff Countdown**: Decrement $B$ each idle slot time (9 Âµs for 802.11a/g). If medium becomes busy, freeze $B$.
4. **Transmission**: When $B = 0$, transmit the frame.
5. **ACK Wait**: Wait for ACK within SIFS + ACK_Timeout (typically ~50 Âµs).
6. **Success**: If ACK received, set $CW = CW_{min}$ for next frame.
7. **Collision**: If no ACK, double $CW = \min(2 \times CW, 1023)$. Increment retry count. Go to step 2.
8. **Drop**: After retry limit ($\text{short} = 7$, $\text{long} = 4$), discard the frame.

### 12.4.4 Pseudocode: CSMA/CA with Backoff

```
procedure csma_ca_transmit(frame, sta)
    cw = CW_MIN                // typically 15 slots
    retry = 0
    max_retry = SHORT_RETRY_LIMIT  // typically 7

    while retry < max_retry do
        // Wait for medium idle for DIFS
        while physical_carrier_sense() == BUSY do
            wait_slot()
        wait(DIFS)

        // Backoff phase
        backoff = random(0, cw)
        while backoff > 0 do
            if physical_carrier_sense() == BUSY then
                // Freeze backoff â€” wait until medium idle again
                while physical_carrier_sense() == BUSY do
                    wait_slot()
                wait(DIFS)
            else
                wait(SLOT_TIME)
                backoff = backoff - 1

        // Transmit
        send_frame(frame)
        nav_update(frame.duration)  // other stations set NAV

        // Wait for ACK
        timer = ACK_TIMEOUT
        ack_received = false
        while timer > 0 and not ack_received do
            if recv_ack(frame.seq) then
                ack_received = true
                break
            wait_slot()
            timer = timer - SLOT_TIME

        if ack_received then
            cw = CW_MIN
            return TRANSMIT_SUCCESS
        else
            cw = min(cw * 2, CW_MAX)  // exponential backoff
            retry = retry + 1

    return TRANSMIT_FAILURE
```

### 12.4.5 Dry Run Trace: CSMA/CA Backoff with 3 Stations

Parameters: Slot time = 9 Âµs, DIFS = 34 Âµs, SIFS = 16 Âµs, CW_min = 15, CW_max = 1023.
Data frame transmission time = 200 Âµs (1500-byte frame at 54 Mbps). ACK = 30 Âµs.

Three stations (A, B, C) all have a frame to send. The medium starts idle.

| Time (Âµs) | Event | Station A Backoff | Station B Backoff | Station C Backoff | Medium State |
|-----------|-------|------------------|------------------|------------------|-------------|
| 0 | DIFS idle period starts | â€” | â€” | â€” | IDLE |
| 34 | DIFS ends, all pick backoff | B=7 | B=3 | B=12 | IDLE |
| 43 | Slot 1 decrement (9 Âµs) | 6 | 2 | 11 | IDLE |
| 52 | Slot 2 decrement | 5 | 1 | 10 | IDLE |
| 61 | Slot 3 decrement | 4 | 0 | 9 | IDLE |
| 61 | B backoff reaches 0 | 4 | **TRANSMIT** | 9 | BUSY |
| 61 | A and C freeze backoff | 4 (frozen) | â€” | 9 (frozen) | BUSY (B data) |
| 261 | B transmission ends | 4 (frozen) | â€” | 9 (frozen) | IDLE |
| 277 | SIFS (16 Âµs) | 4 (frozen) | â€” | 9 (frozen) | IDLE (ACK) |
| 307 | ACK from B's AP | 4 (frozen) | â€” | 9 (frozen) | IDLE |
| 341 | DIFS (34 Âµs) after ACK | â€” | â€” | â€” | IDLE |
| 341 | A and C resume backoff | 4 | â€” | 9 | IDLE |
| 350 | Slot 1 decrement | 3 | â€” | 8 | IDLE |
| 359 | Slot 2 decrement | 2 | â€” | 7 | IDLE |
| 368 | Slot 3 decrement | 1 | â€” | 6 | IDLE |
| 377 | Slot 4 decrement | 0 | â€” | 5 | IDLE |
| 377 | A transmits | **TRANSMIT** | â€” | 5 (frozen) | BUSY (A data) |
| 577 | A transmission ends | â€” | â€” | 5 | IDLE |
| 593 | SIFS + ACK | â€” | â€” | 5 (frozen) | IDLE |
| 627 | DIFS ends | â€” | â€” | â€” | IDLE |
| 627 | C resumes and decrements | â€” | â€” | 5â†’4â†’3â†’2â†’1â†’0 | IDLE |
| 672 | C transmits at slot 0 | â€” | â€” | **TRANSMIT** | BUSY |

Total time for 3 stations: 672 Âµs. Without CSMA/CA (all transmitting simultaneously), all 3 frames would collide. CSMA/CA serialized the transmissions with ~100% channel utilization (minus overhead).

### 12.4.6 C++ Implementation: CSMA/CA Simulator

```cpp
#include <iostream>
#include <vector>
#include <random>
#include <thread>
#include <chrono>
#include <algorithm>

class CSMCASTation {
public:
    int id;
    int cw_min = 15;
    int cw_max = 1023;
    int cw;
    int backoff;
    int retry_count = 0;
    int max_retry = 7;
    int frames_sent = 0;
    int collisions = 0;
    bool frozen;
    bool has_frame;
    int nav = 0;  // network allocation vector

    CSMCASTation(int id) : id(id), cw(cw_min), backoff(0), frozen(false), has_frame(false) {}

    void load_frame() { has_frame = true; }

    void reset_cw() { cw = cw_min; }

    bool transmit(int current_time, bool medium_busy) {
        if (!has_frame) return false;
        if (nav > 0) return false;

        // Physical carrier sense
        if (medium_busy) return false;

        // Backoff procedure
        if (backoff > 0) {
            if (!medium_busy) {
                backoff--;
            }
            return false;
        }

        // Backoff expired â€” transmit
        if (backoff == 0) {
            // Simulate: check if another station transmits at same time (collision)
            std::cout << "Time " << current_time << ": Station " << id
                      << " transmitting (CW=" << cw << ", retry=" << retry_count << ")\n";
            return true;  // indicates this station wants to transmit
        }
        return false;
    }

    void handle_collision() {
        collisions++;
        retry_count++;
        cw = std::min(cw * 2, cw_max);
        backoff = rand() % (cw + 1);
        std::cout << "  -> Station " << id << " COLLISION, new CW=" << cw
                  << " backoff=" << backoff << "\n";
    }

    void handle_success() {
        frames_sent++;
        retry_count = 0;
        cw = cw_min;
        backoff = 0;
        has_frame = false;
        std::cout << "  -> Station " << id << " SUCCESS, frames sent=" << frames_sent << "\n";
    }

    void init_backoff() {
        backoff = rand() % (cw + 1);
    }
};

class CSMCASimulator {
public:
    std::vector<CSMCASTation> stations;
    int current_time = 0;
    int slot_time = 9;   // microseconds
    int difs = 34;
    int frame_time = 200;
    int ack_time = 30;
    int sifs = 16;

    CSMCASimulator(int num_stations) {
        for (int i = 0; i < num_stations; i++) {
            stations.emplace_back(i);
        }
    }

    void load_all_frames() {
        for (auto& s : stations) s.load_frame();
    }

    void init_backoffs() {
        for (auto& s : stations) s.init_backoff();
    }

    void run_simulation(int max_time) {
        init_backoffs();
        bool medium_busy = false;
        int busy_until = 0;
        int transmitting_id = -1;

        while (current_time < max_time) {
            // Update NAV for all stations
            for (auto& s : stations) {
                if (s.nav > 0) s.nav--;
            }

            // Check if medium becomes idle
            if (medium_busy && current_time >= busy_until) {
                medium_busy = false;
                std::cout << "Time " << current_time << ": Medium becomes IDLE\n";
                // Start DIFS period
            }

            // DIFS idle period
            if (!medium_busy) {
                // Collect stations whose backoff is 0 (ready to transmit)
                std::vector<int> ready_stations;
                for (auto& s : stations) {
                    if (s.has_frame && s.nav == 0) {
                        s.frozen = false;
                        if (s.backoff == 0) {
                            ready_stations.push_back(s.id);
                        }
                    }
                }

                if (ready_stations.size() == 1) {
                    // Successful transmission
                    int id = ready_stations[0];
                    std::cout << "Time " << current_time << ": Station " << id
                              << " transmits (backoff=0)\n";
                    medium_busy = true;
                    busy_until = current_time + frame_time;
                    stations[id].handle_success();
                    transmitting_id = id;

                    // Set NAV for other stations
                    for (auto& s : stations) {
                        if (s.id != id) {
                            s.nav = frame_time + sifs + ack_time + difs;
                        }
                    }
                } else if (ready_stations.size() > 1) {
                    // Collision
                    std::cout << "Time " << current_time << ": COLLISION between stations ";
                    for (size_t i = 0; i < ready_stations.size(); i++) {
                        std::cout << ready_stations[i];
                        if (i < ready_stations.size() - 1) std::cout << ", ";
                    }
                    std::cout << "\n";
                    for (int id : ready_stations) {
                        stations[id].handle_collision();
                    }
                }

                // Decrement backoff for all stations with pending frames
                for (auto& s : stations) {
                    if (s.has_frame && s.backoff > 0 && s.nav == 0) {
                        s.backoff--;
                    }
                }
            }

            current_time += slot_time;
        }

        // Print summary
        std::cout << "\n=== SIMULATION SUMMARY ===\n";
        for (auto& s : stations) {
            std::cout << "Station " << s.id << ": " << s.frames_sent << " sent, "
                      << s.collisions << " collisions, final CW=" << s.cw << "\n";
        }
    }
};

int main() {
    srand(time(0));
    CSMCASimulator sim(3);
    sim.load_all_frames();
    sim.run_simulation(5000);
    return 0;
}
```

### 12.4.7 Python Implementation: CSMA/CA Simulator

```python
import random
import time


class CSMCASTation:
    def __init__(self, station_id):
        self.id = station_id
        self.cw_min = 15
        self.cw_max = 1023
        self.cw = self.cw_min
        self.backoff = 0
        self.retry_count = 0
        self.max_retry = 7
        self.frames_sent = 0
        self.collisions = 0
        self.has_frame = False
        self.nav = 0
        self.throughput_bits = 0

    def load_frame(self):
        self.has_frame = True
        self.backoff = random.randint(0, self.cw)

    def handle_collision(self):
        self.collisions += 1
        self.retry_count += 1
        self.cw = min(self.cw * 2, self.cw_max)
        self.backoff = random.randint(0, self.cw)
        return self.retry_count < self.max_retry

    def handle_success(self, frame_bits=12000):
        self.frames_sent += 1
        self.retry_count = 0
        self.throughput_bits += frame_bits
        self.cw = self.cw_min
        self.has_frame = False
        self.backoff = 0


class CSMCASimulator:
    def __init__(self, num_stations):
        self.stations = [CSMCASTation(i) for i in range(num_stations)]
        self.current_time = 0
        self.slot_time = 9        # microseconds
        self.difs = 34
        self.frame_time = 200     # 1500 bytes at 54 Mbps
        self.ack_time = 30
        self.sifs = 16
        self.medium_busy = False
        self.busy_until = 0
        self.total_slots = 0
        self.idle_slots = 0

    def load_all_frames(self):
        for s in self.stations:
            s.load_frame()

    def step(self):
        """Advance by one slot time."""
        self.current_time += self.slot_time
        self.total_slots += 1

        # Decrement NAV
        for s in self.stations:
            if s.nav > 0:
                s.nav -= 1

        # Check if medium becomes idle
        if self.medium_busy and self.current_time >= self.busy_until:
            self.medium_busy = False

        if self.medium_busy:
            return  # nothing to do

        self.idle_slots += 1

        # Find stations ready to transmit (backoff == 0)
        ready = [s for s in self.stations if s.has_frame and s.nav == 0 and s.backoff == 0]

        if len(ready) == 1:
            s = ready[0]
            s.handle_success()
            self.medium_busy = True
            self.busy_until = self.current_time + self.frame_time
            # Set NAV on other stations
            for other in self.stations:
                if other.id != s.id:
                    other.nav = (self.frame_time + self.sifs + self.ack_time + self.difs) // self.slot_time

        elif len(ready) > 1:
            for s in ready:
                s.handle_collision()

        # Decrement backoffs
        for s in self.stations:
            if s.has_frame and s.backoff > 0 and s.nav == 0:
                s.backoff -= 1

    def run(self, max_time_us):
        while self.current_time < max_time_us:
            self.step()

    def report(self):
        total_sent = sum(s.frames_sent for s in self.stations)
        total_collisions = sum(s.collisions for s in self.stations)
        total_throughput = sum(s.throughput_bits for s in self.stations)
        print(f"\n=== CSMA/CA SIMULATION REPORT ===")
        print(f"Simulation time: {self.current_time} us")
        print(f"Channel utilization: {100 * (1 - self.idle_slots / max(self.total_slots, 1)):.1f}%")
        print(f"Total frames sent: {total_sent}")
        print(f"Total collisions: {total_collisions}")
        print(f"Total throughput: {total_throughput} bits ({total_throughput / 1e6:.2f} Mb)")
        for s in self.stations:
            print(f"  Station {s.id}: {s.frames_sent} sent, {s.collisions} collisions, "
                  f"{s.throughput_bits} bits")


if __name__ == "__main__":
    sim = CSMCASimulator(5)
    sim.load_all_frames()
    sim.run(10000)
    sim.report()
```

### 12.4.8 Complexity Analysis

**Time Complexity of CSMA/CA**: $O(N \times R \times B)$ where:
- $N$ = number of stations
- $R$ = number of retransmissions per frame
- $B$ = average backoff slots (grows exponentially with each retry)

**Why Exponential Backoff?** The contention window doubles on each collision to reduce the probability of repeated collisions. For $N$ stations, after $k$ doublings: $P(\text{collision}) \approx 1 - (1 - \frac{1}{CW})^{N-1}$. With $CW = 15$ and $N = 10$, a collision is likely (~47%). After one doubling to $CW = 31$, collision probability drops to ~26%. After two doublings ($CW = 63$), ~14%.

**Space Complexity**: $O(N)$ â€” each station maintains its own CW, backoff counter, NAV, and retry counter. No shared state.

**Why CSMA/CA works in wireless but CSMA/CD does not**:
- CD requires the ability to detect collisions during transmission (full-duplex or special hardware).
- Wireless is half-duplex â€” the transmitter's own signal drowns out incoming signals (the near-far problem).
- The hidden terminal problem means collisions occur at the receiver, which the sender cannot sense.
- CA prevents collisions probabilistically rather than detecting them reactively.

### 12.4.9 Edge Cases in CSMA/CA

| Edge Case | Description | Mitigation |
|-----------|-------------|------------|
| Two stations pick same backoff | Both reach 0 simultaneously â†’ collision | Exponential backoff randomizes next attempt |
| False carrier sense | Station detects non-802.11 energy as busy | Clear Channel Assessment (CCA) thresholds |
| Exposed terminal deferral | Station defers when it could safely transmit | RTS/CTS provides NAV-based reservation |
| Hidden terminal still colliding | RTS from two hidden stations collide | RTS collision forces backoff and retry |
| Capture effect | Strong signal drowns out weak signal at AP | Power control, adaptive rate selection |
| Starving distant stations | Nearby stations keep winning contention | Fairness through Airtime Fairness algorithms |

## 12.5 MAC Frame Format

### 12.5.1 Frame Fields Detail

| Field | Size | Description |
|-------|------|-------------|
| Frame Control | 2 B | Protocol version, Type, Subtype, To DS, From DS, More Frag, Retry, Pwr Mgmt, More Data, Protected Frame, Order |
| Duration | 2 B | NAV reservation time (Âµs) or STA ID (PS-Poll) |
| Address 1 | 6 B | Receiver address (RA) |
| Address 2 | 6 B | Transmitter address (TA) |
| Address 3 | 6 B | Varies by frame type â€” usually BSSID, DA, or SA |
| Sequence Control | 2 B | Fragment number (4 bits) + Sequence number (12 bits) |
| Address 4 | 6 B | Only present when both To DS and From DS are set (WDS bridge) |
| QoS Control | 2 B | Present in QoS Data frames; carries TID (traffic identifier) |
| HT Control | 4 B | Present in 802.11n/ac/ax frames; carries MIMO/beamforming feedback |
| Frame Body | 0-2304 B | Payload (MSDU or A-MSDU) |
| FCS | 4 B | CRC-32 over entire frame (except FCS itself) |

**Address Field Interpretation by To DS / From DS Bits**:

| To DS | From DS | Addr 1 | Addr 2 | Addr 3 | Addr 4 |
|-------|---------|--------|--------|--------|--------|
| 0 | 0 | DA | SA | BSSID | â€” |
| 0 | 1 | DA | BSSID | SA | â€” |
| 1 | 0 | BSSID | SA | DA | â€” |
| 1 | 1 | RA | TA | DA | SA |

### 12.5.2 Frame Types

**Management Frames** (Type = 00):
- Beacon (Subtype 8): AP advertises SSID, capabilities, timestamp, beacon interval (100 TU = 102.4 ms)
- Probe Request/Response (Subtypes 4/5): Active scanning
- Authentication/Deauthentication (Subtypes 11/12): Identity verification
- Association Request/Response (Subtypes 0/1): Join BSS
- Disassociation (Subtype 10): Leave BSS

**Control Frames** (Type = 01):
- RTS (Subtype 11): 20 bytes, reserves medium, contains receiver address and duration
- CTS (Subtype 12): 14 bytes, acknowledges RTS, copies duration from RTS minus SIFS + CTS time
- ACK (Subtype 13): 14 bytes, positive acknowledgment
- PS-Poll (Subtype 10): STA requests buffered data from AP

**Data Frames** (Type = 10):
- Data (Subtype 0): Regular payload
- Null (Subtype 4): No payload; used for power management indication
- QoS Data (Subtype 8): Data with priority (802.11e)

## 12.6 Hidden and Exposed Terminal

### 12.6.1 Hidden Terminal Problem

**Scenario**: Station A and Station C are both within range of AP B, but A and C cannot hear each other. A transmits to B. C, sensing an idle medium (it cannot hear A), also transmits. A collision occurs at B.

**Why it matters**: The sender (A or C) cannot detect the collision because it happens at the receiver (B). Without ACK, neither A nor C realizes the collision occurred. Throughput suffers due to repeated collisions and exponential backoff.

**Solution**: RTS/CTS exchange â€” A sends a short RTS to B; B responds with CTS that C can hear. C sets its NAV and defers during A's transmission.

### 12.6.2 Exposed Terminal Problem

**Scenario**: Station B is transmitting to AP A. Station C (near B) wants to transmit to STA D (on the other side of C). C hears B's transmission and defers, even though C's transmission would not interfere with B's reception at A (A is far enough from C).

**Why it matters**: The exposed terminal unnecessarily defers, reducing channel utilization. The medium is idle from the perspective of both receivers (A and D), but the transmitter C stays silent.

**Solution**: RTS/CTS partially mitigates this â€” if C sends RTS to D, D responds with CTS, and B hears D's CTS. But if B is near C, B may still defer to C. In practice, exposed terminal is harder to solve and often requires directional antennas or centralized scheduling.

### 12.6.3 Comparison Table

| Feature | Hidden Terminal | Exposed Terminal |
|---------|----------------|-----------------|
| Problem | Two transmitters cannot hear each other | Transmitter defers to irrelevant transmission |
| Location of collision | At the receiver | No collision â€” unnecessary deferral |
| Who is harmed | Receiver (collision) | Transmitter (deferral) |
| Who is confused | Sender (thinks medium is idle) | Sender (thinks medium is busy) |
| RTS/CTS effect | CTS reaches hidden station, sets NAV | CTS may or may not help |
| Throughput impact | Collisions, retransmissions | Wasted idle capacity |
| Detection | Difficult (senders cannot detect) | Difficult (cannot distinguish deferral types) |

### 12.6.4 RTS/CTS Exchange (Numbered Steps)

1. **Sender RTS**: Sender transmits RTS (20 bytes) to receiver. RTS contains Receiver Address and Duration (= time needed for entire exchange).
2. **Receiver CTS**: Receiver waits SIFS (16 Âµs), transmits CTS (14 bytes) to sender. CTS copies the Duration field, subtracting SIFS + CTS time. All other stations that hear CTS set their NAV.
3. **Data Transmission**: Sender waits SIFS after CTS, transmits data frame. All stations that heard RTS (but not CTS) or CTS (but not RTS) maintain their NAV.
4. **ACK**: Receiver waits SIFS after data, transmits ACK. Stations update their NAV based on the Duration field (typically 0, indicating end of exchange).

**When RTS/CTS is used**: RTS threshold is typically 2346 bytes (disabled by default on many devices). For small frames, RTS/CTS overhead (RTS + CTS â‰ˆ 34 bytes + 2Ã—SIFS = 52 Âµs plus contention) exceeds its benefit. RTS/CTS is recommended in dense or high-interference environments.

### 12.6.5 Dry Run Trace: RTS/CTS Exchange

Scenario: Station A (STA A) sends to AP. Station C is hidden from A but can hear AP.

| Time (Âµs) | Sender | Frame | Duration (Âµs) | NAV at A | NAV at AP | NAV at C | Notes |
|-----------|--------|-------|--------------|----------|-----------|----------|-------|
| 0 | A | RTS to AP | 400 | â€” | â€” | â€” | A sends RTS |
| 16 | â€” | SIFS | â€” | â€” | â€” | â€” | Inter-frame spacing |
| 16 | AP | CTS to A | 354 | 370 | â€” | 370 | C sets NAV=370 |
| 32 | â€” | SIFS | â€” | â€” | â€” | â€” | Inter-frame spacing |
| 32 | A | Data to AP | 338 | â€” | â€” | 338 | C NAV counting down |
| 48 | â€” | SIFS | â€” | â€” | â€” | â€” | Inter-frame spacing |
| 48 | AP | ACK to A | 0 | â€” | â€” | 0 | NAV cleared by C |
| 370 | â€” | End | â€” | â€” | â€” | â€” | C may now contend |

Duration calculation: RTS duration = Data(338) + SIFS(16) + ACK(30) + 3Ã—SIFS(48) = 400 Âµs.
CTS duration = 400 - SIFS(16) - CTS_time(14B @ 54 Mbps â‰ˆ 4 Âµs) â‰ˆ 370 Âµs (rounding).

During the entire exchange (0-370 Âµs), Station C defers because its NAV > 0. The hidden terminal collision is avoided.

### 12.6.6 Pseudocode: RTS/CTS Protocol

```
procedure rts_cts_send(data_frame, receiver)
    // Step 1: Contend for medium (CSMA/CA)
    csma_ca_backoff()
    send(RTS(receiver, exchange_duration))

    // Step 2: Wait for CTS
    timer = CTS_TIMEOUT
    while timer > 0 do
        if recv_frame(frame) and frame.type == CTS and frame.sender == receiver then
            nav_update(frame.duration)
            goto STEP_3
        timer = timer - SLOT_TIME
    // No CTS received â€” retry
    return TRANSMIT_FAILURE

    // Step 3: Send data
    STEP_3:
    wait(SIFS)
    send(data_frame)
    nav_update(data_frame.duration)

    // Step 4: Wait for ACK
    timer = ACK_TIMEOUT
    while timer > 0 do
        if recv_frame(frame) and frame.type == ACK and frame.ack_seq == data_frame.seq then
            return TRANSMIT_SUCCESS
        timer = timer - SLOT_TIME
    return TRANSMIT_FAILURE
```

### 12.6.7 Edge Cases in Hidden/Exposed Terminal

**RTS Collision (Hidden Terminals Still Colliding)**:
Two hidden stations (A and C) both sense the medium as idle (neither hears the other). Both send RTS to the AP at the same time. The AP receives garbled data. Both A and C time out waiting for CTS and double their CW. After backoff, the one with the smaller backoff wins. RTS frames themselves are short (20 bytes), so the collision is brief, but it does happen.

**Non-RTS/CTS Hidden Terminal**: Without RTS/CTS, hidden stations A and C transmit data frames simultaneously. Both frames collide at the AP. Neither A nor C receives an ACK. Both double CW and retry. They may collide again if they pick the same backoff value (probability â‰ˆ 1/CW). With CW=15, P(same backoff) â‰ˆ 6.7%.

**Exposed Terminal with RTS/CTS**: Station C hears B's RTS to AP A. C defers (setting NAV based on RTS duration). But C could safely transmit to D (far from A). RTS/CTS actually makes the exposed terminal problem worse in this case â€” C defers when it could otherwise transmit.

**Co-Channel Interference Scenario**: Two APs (AP1 on channel 6, AP2 also on channel 6) with overlapping cells. STA connected to AP1 hears AP2's beacon and probe responses as interference. The STA experiences lower SNR, forcing rate adaptation to a lower modulation (e.g., 54 Mbps â†’ 24 Mbps), reducing throughput by 55%.

### 12.6.8 A&D of RTS/CTS

| Advantage | Disadvantage |
|-----------|-------------|
| Solves hidden terminal problem | Adds fixed overhead (RTS+CTS = 34 bytes per exchange) |
| Reduces collision duration (short RTS instead of long data) | Ineffective in exposed terminal scenarios |
| Virtual carrier sense (NAV) protects fragmented frames | CTS from other BSS can cause false deferral |
| Essential for dense/official deployments | Disabled by default on many consumer devices |
| Improves fairness among distant stations | Degrades throughput in low-load, low-interference environments |
## 12.7 Power Management

### 12.7.1 TIM and PS-Poll

Wireless stations conserve power by entering doze (sleep) state. The AP buffers frames for sleeping stations.

**TIM (Traffic Indication Map)**: A bitmap in each beacon frame. Bit $i = 1$ means the AP has buffered data for AID $i$. Stations wake at each beacon interval (typically 102.4 ms) to check the TIM. If their bit is set, they send PS-Poll to retrieve the buffered frame.

**DTIM (Delivery TIM)**: Every few beacons (DTIM period, default 1-3), the AP sends a DTIM beacon. After DTIM, the AP transmits broadcast/multicast frames. Stations must remain awake after DTIM to receive broadcast traffic.

**PS-Poll**: STA sends PS-Poll frame to AP indicating it is awake and ready to receive. AP responds immediately with the buffered frame or an ACK followed by the frame. The More Data bit in the AP's response tells the STA whether more frames are buffered.

**WMM-PS (Wi-Fi Multi-Media Power Save) / U-APSD**: Instead of TIM-based polling, the STA sends a trigger frame (e.g., a QoS Null) and the AP delivers all buffered frames in a burst.

**TWT (Target Wake Time, 802.11ax)**: STA and AP negotiate specific wake times, reducing contention and extending battery life. The STA wakes only at pre-agreed times instead of every beacon interval.

### 12.7.2 Real-World Analogy: Office Mailroom

- **Beacon**: The mailroom clerk rings a bell every hour to announce "mail is here."
- **TIM**: The clerk posts a list of employees who have mail. You only need to look if your name is on the list.
- **PS-Poll**: You approach the counter and say "I have mail â€” please give it to me."
- **DTIM**: Every third bell, the clerk reads general announcements (broadcast messages) that everyone must hear.
- **TWT**: You schedule a specific time each day with the clerk: "I'll pick up mail at 10 AM and 2 PM." No need to check every hour.

### 12.7.3 Numbered Steps: Power-Save Operation

1. **Association**: STA informs AP of its listen interval (e.g., 10 beacon periods). AP will buffer frames for up to this duration.
2. **Sleep**: STA enters doze state, turning off the radio. AP buffers any incoming frames for the STA.
3. **Wake**: STA wakes at the next beacon TBTT (Target Beacon Transmission Time).
4. **TIM Check**: STA receives the beacon, checks the TIM bitmap for its AID.
5. **If bit set**: STA sends PS-Poll to AP.
6. **Frame Delivery**: AP sends buffered frame(s) to STA, with More Data bit indicating whether more frames remain.
7. **If More Data = 1**: STA sends PS-Poll again (or stays awake for immediate delivery). Go to step 6.
8. **If More Data = 0**: STA returns to doze until next beacon.
9. **If bit not set**: STA immediately returns to doze until next beacon.

## 12.8 Bluetooth

Bluetooth (IEEE 802.15.1) is a short-range wireless technology operating in the 2.4 GHz ISM band. It uses frequency-hopping spread spectrum (FHSS) to mitigate interference and fading.

### 12.8.1 Piconet and Scatternet

**Piconet**: A Bluetooth piconet consists of one master and up to seven active slaves (plus up to 255 parked slaves). Key characteristics:
- All communication is master-to-slave or slave-to-master. Slaves do not communicate directly.
- The master determines the frequency-hopping sequence (derived from the master's clock and BD_ADDR).
- The master polls each slave in turn using a TDD (Time Division Duplex) scheme.
- Time is divided into 625 Âµs slots (1600 slots/second).
- Master transmits in even slots, slave responds in odd slots.
- Slaves speak only when addressed by the master.

**Scatternet**: Multiple piconets interconnected through bridge nodes. A bridge node participates in multiple piconets (as slave in one, master in another, or slave in both). Scatternets extend the range and coverage of Bluetooth networks beyond a single piconet.

**Bluetooth versions**:
- BR (Basic Rate): 1 Mbps, GFSK modulation.
- EDR (Enhanced Data Rate): 2-3 Mbps, DQPSK/8DPSK modulation.
- BLE (Bluetooth Low Energy 4.0): 1 Mbps, very low power, 40 channels (3 advertising + 37 data).
- Bluetooth 5: 2 Mbps (LE 2M PHY), 4Ã— range, advertising extensions, mesh networking.
- Bluetooth 5.2: LE Audio, LC3 codec, multi-stream audio.
- Bluetooth 5.3/5.4: Periodic advertising, encrypted advertising data, isochronous channels.

### 12.8.2 L2CAP (Logical Link Control and Adaptation Protocol)

L2CAP sits above the baseband layer in the Bluetooth protocol stack and provides:
- **Segmentation and reassembly**: Large packets are divided into baseband frames and reassembled at the receiver.
- **Protocol multiplexing**: Multiple higher-layer protocols (RFCOMM, SDP, BNEP) share the same ACL (Asynchronous Connection-Less) link.
- **Quality of Service**: L2CAP supports best-effort and guaranteed QoS configurations.
- **Retransmission and flow control**: Enhanced Retransmission Mode and Streaming Mode in L2CAP 2.0.

L2CAP channel identifiers (CIDs):
- CID 0x0001: Signaling channel (connection management)
- CID 0x0002: Connectionless data
- CID 0x0003-0x003F: Fixed channels (e.g., SDP = 0x0001 actually, ATT over BLE = 0x0004)
- CID 0x0040-0xFFFF: Dynamically allocated for application channels

### 12.8.3 Real-World Analogy: Classroom

- **Master (Teacher)**: Controls the conversation. Calls on students one at a time.
- **Slave (Student)**: Speaks only when the teacher calls on them.
- **Slots**: The teacher speaks for 30 seconds (slot), then a student responds for 30 seconds (slot).
- **Piconet**: One teacher with up to 7 students in a study group.
- **Scatternet**: Multiple study groups in adjacent rooms. A student (bridge) moves between groups, sharing information.
- **FHSS**: Every time the teacher says something, they switch to a different language. Anyone not in the group hears gibberish on any single frequency.
- **L2CAP**: The teacher's assistant organizes materials â€” splits long books into chapters (segmentation), labels each book with its subject (protocol multiplexing).

### 12.8.4 C++ Implementation: Bluetooth Piconet

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <random>
#include <chrono>
#include <thread>

class BluetoothDevice {
public:
    std::string address;
    std::string name;
    bool is_master;
    int clock;  // native clock

    BluetoothDevice(std::string addr, std::string name, bool master = false)
        : address(addr), name(name), is_master(master), clock(0) {}

    virtual ~BluetoothDevice() = default;
};

class BluetoothSlave : public BluetoothDevice {
public:
    std::queue<std::string> tx_queue;
    bool parked;

    BluetoothSlave(std::string addr, std::string name)
        : BluetoothDevice(addr, name, false), parked(false) {}

    void enqueue_data(const std::string& data) {
        tx_queue.push(data);
    }
};

class BluetoothMaster : public BluetoothDevice {
public:
    std::vector<BluetoothSlave*> slaves;
    int current_slave_index;
    int hop_sequence[79];  // 79-hop sequence
    int current_channel;

    BluetoothMaster(std::string addr, std::string name)
        : BluetoothDevice(addr, name, true), current_slave_index(0), current_channel(0) {
        // Generate pseudo-random hopping sequence
        for (int i = 0; i < 79; i++) hop_sequence[i] = i;
        std::shuffle(hop_sequence, hop_sequence + 79, std::mt19937(42));
    }

    bool add_slave(BluetoothSlave* slave) {
        if (slaves.size() >= 7) {
            std::cout << "Piconet full: max 7 active slaves.\n";
            return false;
        }
        slaves.push_back(slave);
        std::cout << "Slave " << slave->name << " (" << slave->address
                  << ") joined piconet. Active slaves: " << slaves.size() << "\n";
        return true;
    }

    void remove_slave(BluetoothSlave* slave) {
        auto it = std::find(slaves.begin(), slaves.end(), slave);
        if (it != slaves.end()) {
            slaves.erase(it);
            std::cout << "Slave " << slave->name << " left piconet.\n";
        }
    }

    void park_slave(BluetoothSlave* slave) {
        slave->parked = true;
        std::cout << "Slave " << slave->name << " parked (inactive).\n";
    }

    void unpark_slave(BluetoothSlave* slave) {
        slave->parked = false;
        std::cout << "Slave " << slave->name << " unparked (active).\n";
    }

    void run_piconet_cycle() {
        if (slaves.empty()) {
            std::cout << "No active slaves in piconet.\n";
            return;
        }

        // Master slot (even slot)
        current_channel = hop_sequence[current_slave_index % 79];
        BluetoothSlave* slave = slaves[current_slave_index % slaves.size()];

        std::cout << "[Slot " << clock << "] Master -> " << slave->name
                  << " on channel " << current_channel << ": ";

        if (clock % 2 == 0) {  // Master transmission slot
            std::cout << "POLL (any data?)\n";
        }

        clock++;

        // Slave slot (odd slot)
        current_channel = hop_sequence[clock % 79];
        if (!slave->tx_queue.empty()) {
            std::string data = slave->tx_queue.front();
            slave->tx_queue.pop();
            std::cout << "[Slot " << clock << "] " << slave->name << " -> Master"
                      << " on channel " << current_channel << ": " << data << "\n";
        } else {
            std::cout << "[Slot " << clock << "] " << slave->name << " -> Master"
                      << " on channel " << current_channel << ": NULL (no data)\n";
        }

        clock++;
        current_slave_index = (current_slave_index + 1) % slaves.size();
    }

    void run_multiple_cycles(int cycles) {
        for (int i = 0; i < cycles; i++) {
            run_piconet_cycle();
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        }
    }
};

int main() {
    BluetoothMaster master("00:1A:7D:DA:71:01", "Phone-Master");

    BluetoothSlave s1("00:1A:7D:DA:71:02", "Headset");
    BluetoothSlave s2("00:1A:7D:DA:71:03", "Keyboard");
    BluetoothSlave s3("00:1A:7D:DA:71:04", "Mouse");

    s1.enqueue_data("A2DP audio frame #1");
    s1.enqueue_data("A2DP audio frame #2");
    s2.enqueue_data("HID report: key Pressed 'A'");
    s3.enqueue_data("HID report: mouse moved (dx=10, dy=5)");
    s1.enqueue_data("A2DP audio frame #3");

    master.add_slave(&s1);
    master.add_slave(&s2);
    master.add_slave(&s3);

    std::cout << "\n=== Piconet Operation ===\n";
    master.run_multiple_cycles(9);

    return 0;
}
```

### 12.8.5 Python Implementation: Bluetooth Piconet

```python
import random
import time
from collections import deque


class BluetoothDevice:
    def __init__(self, address, name, is_master=False):
        self.address = address
        self.name = name
        self.is_master = is_master
        self.clock = 0

class BluetoothSlave(BluetoothDevice):
    def __init__(self, address, name):
        super().__init__(address, name, False)
        self.tx_queue = deque()
        self.parked = False
        self.l2cap_channels = {}  # CID -> callback

    def enqueue_data(self, data):
        self.tx_queue.append(data)

    def register_l2cap_channel(self, cid, protocol_name):
        self.l2cap_channels[cid] = protocol_name

class BluetoothMaster(BluetoothDevice):
    def __init__(self, address, name):
        super().__init__(address, name, True)
        self.slaves = []
        self.current_slave_index = 0
        self.current_channel = 0
        self.hop_sequence = list(range(79))
        random.seed(42)
        random.shuffle(self.hop_sequence)

    def add_slave(self, slave):
        if len(self.slaves) >= 7:
            print(f"Piconet full: max 7 active slaves.")
            return False
        self.slaves.append(slave)
        print(f"Slave {slave.name} ({slave.address}) joined piconet. "
              f"Active slaves: {len(self.slaves)}")
        return True

    def remove_slave(self, slave):
        if slave in self.slaves:
            self.slaves.remove(slave)
            print(f"Slave {slave.name} left piconet.")

    def park_slave(self, slave):
        slave.parked = True
        print(f"Slave {slave.name} parked.")

    def run_piconet_cycle(self):
        if not self.slaves:
            print("No active slaves in piconet.")
            return

        active = [s for s in self.slaves if not s.parked]
        if not active:
            return

        slave = active[self.current_slave_index % len(active)]

        # Master -> Slave (even slot)
        self.current_channel = self.hop_sequence[self.clock % 79]
        print(f"[Slot {self.clock}] Master -> {slave.name} "
              f"on ch{self.current_channel}: POLL")
        self.clock += 1

        # Slave -> Master (odd slot)
        self.current_channel = self.hop_sequence[self.clock % 79]
        if slave.tx_queue:
            data = slave.tx_queue.popleft()
            print(f"[Slot {self.clock}] {slave.name} -> Master "
                  f"on ch{self.current_channel}: {data}")
        else:
            print(f"[Slot {self.clock}] {slave.name} -> Master "
                  f"on ch{self.current_channel}: NULL")
        self.clock += 1

        self.current_slave_index += 1

    def run(self, cycles=10):
        for _ in range(cycles):
            self.run_piconet_cycle()
            time.sleep(0.05)


class L2CAPLayer:
    """Simulates Bluetooth L2CAP segmentation and protocol multiplexing."""
    def __init__(self, mtu=672):
        self.mtu = mtu
        self.channels = {}  # CID -> protocol_name

    def register_channel(self, cid, protocol_name):
        self.channels[cid] = protocol_name

    def segment(self, data, cid):
        """Segment large data into MTU-sized chunks."""
        if len(data) <= self.mtu:
            return [(cid, data)]

        segments = []
        for i in range(0, len(data), self.mtu):
            chunk = data[i:i + self.mtu]
            segments.append((cid, chunk))
        return segments

    def reassemble(self, segments):
        """Reassemble segments into complete L2CAP SDU."""
        return b"".join(payload for _, payload in segments)

    def create_l2cap_header(self, cid, payload_length):
        length_field = payload_length.to_bytes(2, 'little')
        cid_field = cid.to_bytes(2, 'little')
        return length_field + cid_field


class Scatternet:
    """Connects multiple piconets through bridge nodes."""
    def __init__(self):
        self.piconets = []  # list of (master, [slaves])

    def add_piconet(self, master, slaves):
        self.piconets.append((master, slaves))

    def bridge_slave(self, slave, piconet1, piconet2):
        """A slave participates in two piconets as bridge."""
        print(f"Bridge: {slave.name} connects piconet {piconet1} and {piconet2}")

    def route_inter_piconet(self, from_slave, to_slave, data):
        print(f"Scatternet routing: {from_slave.name} -> {to_slave.name}: {data}")


if __name__ == "__main__":
    print("=== Bluetooth Piconet Simulation ===\n")

    master = BluetoothMaster("00:1A:7D:DA:71:01", "Phone")

    headset = BluetoothSlave("00:1A:7D:DA:71:02", "Headset")
    keyboard = BluetoothSlave("00:1A:7D:DA:71:03", "Keyboard")
    mouse = BluetoothSlave("00:1A:7D:DA:71:04", "Mouse")

    # L2CAP channels
    l2cap = L2CAPLayer()
    l2cap.register_channel(0x0040, "RFCOMM (SPP)")
    l2cap.register_channel(0x0041, "A2DP (Audio)")
    l2cap.register_channel(0x0042, "HID (Human Interface)")

    headset.register_l2cap_channel(0x0041, "A2DP")
    headset.register_l2cap_channel(0x0040, "RFCOMM")
    keyboard.register_l2cap_channel(0x0042, "HID")
    mouse.register_l2cap_channel(0x0042, "HID")

    # Simulate L2CAP segmentation
    large_audio_frame = b"X" * 1500  # Exceeds typical L2CAP MTU
    segments = l2cap.segment(large_audio_frame, 0x0041)
    print(f"L2CAP segmented 1500-byte audio into {len(segments)} chunks:")
    for cid, chunk in segments:
        print(f"  CID=0x{cid:04X} payload={len(chunk)} bytes")
    print()

    # Enqueue data
    headset.enqueue_data("A2DP frame #1")
    keyboard.enqueue_data("HID: key='A' pressed")
    mouse.enqueue_data("HID: mouse dx=5 dy=10")
    headset.enqueue_data("A2DP frame #2")

    master.add_slave(headset)
    master.add_slave(keyboard)
    master.add_slave(mouse)

    master.run(12)
```

### 12.8.6 A&D of Bluetooth

| Advantage | Disadvantage |
|-----------|-------------|
| Very low power consumption (BLE: 0.01-0.5 W) | Low data rate (1-3 Mbps, 2 Mbps for BLE 5) |
| FHSS provides interference resilience | Short range (~10 m classic, ~100 m BLE 5) |
| Low-cost hardware (sub-$5 modules) | Limited to 7 active slaves per piconet |
| Ubiquitous in mobile devices | Connection-oriented setup latency (~3 s for BR/EDR) |
| Mesh networking (Bluetooth 5+) | Scatternet complexity and scheduling overhead |
| LE Audio with LC3 codec | Co-channel interference with WiFi 2.4 GHz |

## 12.9 Cellular Networks

### 12.9.1 4G/LTE

**Architecture**:
- **UE (User Equipment)**: Mobile device with SIM/USIM.
- **E-UTRAN (Evolved UMTS Terrestrial Radio Access Network)**: eNodeBs handle all radio functions.
- **EPC (Evolved Packet Core)**: All-IP core network.

**EPC Components**:
| Component | Function |
|-----------|----------|
| MME (Mobility Management Entity) | NAS signaling, authentication, tracking area management, paging, bearer management |
| SGW (Serving Gateway) | User-plane anchor, handover between eNodeBs, packet routing and forwarding |
| PGW (PDN Gateway) | IP allocation, QoS enforcement, interconnection to external packet data networks |
| HSS (Home Subscriber Server) | Subscriber database, authentication vectors, subscription profiles |
| PCRF (Policy and Charging Rules Function) | QoS policy, charging rules, gating control |

**OFDMA in LTE Downlink**: 15 kHz subcarrier spacing. Resource Block = 12 subcarriers Ã— 7 OFDM symbols (normal CP) = 84 REs. For 20 MHz bandwidth: 100 RBs available. Each RB carries 84 symbols. With 64-QAM (6 bits/symbol) and code rate 3/4: 84 Ã— 6 Ã— 0.75 = 378 bits per RB per 0.5 ms slot.

**SC-FDMA in LTE Uplink**: Single-carrier FDMA reduces PAPR (Peak-to-Average Power Ratio), improving battery life and power amplifier efficiency compared to OFDMA.

### 12.9.2 5G NR

**Service Categories**:

| Category | Downlink | Latency | Reliability | Density | Use Case |
|----------|----------|---------|-------------|---------|----------|
| eMBB | 20 Gbps | 4 ms | 99.9% | â€” | Video streaming, AR/VR |
| uRLLC | â€” | 1 ms | 99.999% | â€” | Industrial control, autonomous driving |
| mMTC | â€” | â€” | â€” | 1M/kmÂ² | IoT sensors, smart city |

**Flexible Numerology**: Subcarrier spacing = $15 \times 2^\mu$ kHz.

| $\mu$ | SCS (kHz) | Symbol Duration (Âµs) | Slot Duration (ms) | Max BW (MHz) | Use Case |
|-------|-----------|---------------------|-------------------|-------------|----------|
| 0 | 15 | 66.7 | 1 | 50 | LTE coexistence |
| 1 | 30 | 33.3 | 0.5 | 100 | Urban macro |
| 2 | 60 | 16.7 | 0.25 | 200 | Dense urban, low latency |
| 3 | 120 | 8.33 | 0.125 | 400 | mmWave, high Doppler |
| 4 | 240 | 4.17 | 0.0625 | 800 | Beyond 52.6 GHz |

**Massive MIMO and Beamforming**: 5G gNBs can have 64, 128, or even 1024 antenna elements. Beamforming creates narrow, focused beams that track individual UEs. Spatial multiplexing allows multiple UEs to share the same time-frequency resources on different beams.

**Network Slicing**: Each slice is an isolated end-to-end logical network with dedicated resources, SLA, and management. A smartphone may connect to an eMBB slice (video) and an mMTC slice (background sensor) simultaneously.

**5G Core (SBA)**: Service-Based Architecture using HTTP/2 (REST) between network functions:
- **AMF**: Access and Mobility Management Function (replaces MME control plane)
- **SMF**: Session Management Function (bearer management, IP allocation)
- **UPF**: User Plane Function (packet routing, QoS enforcement â€” distributed at edge)
- **PCF**: Policy Control Function (replaces PCRF)
- **NRF**: Network Repository Function (service discovery)

### 12.9.3 4G vs 5G Comparison

| Feature | 4G LTE | 5G NR |
|---------|--------|-------|
| Peak downlink | 300 Mbps (LTE Cat 6) â€” 3 Gbps (LTE-A) | 10-20 Gbps |
| Peak uplink | 75 Mbps â€” 1.5 Gbps | 10 Gbps |
| User-plane latency | 10-30 ms | 1-4 ms |
| Subcarrier spacing | 15 kHz fixed | 15-240 kHz flexible |
| OFDM numerology | Single | Flexible ($15 \times 2^\mu$) |
| Max carrier bandwidth | 20 MHz (100 MHz with CA) | 100 MHz (sub-6), 400 MHz (mmWave) |
| MIMO | Up to 8Ã—8 DL, 4Ã—4 UL | Up to 64Ã—64 (massive MIMO) |
| Beamforming | Not in spec (proprietary) | Native (3D beamforming) |
| Core architecture | EPC (MME, SGW, PGW) | SBA (AMF, SMF, UPF, NRF) |
| Network slicing | Not supported | Native (end-to-end slices) |
| Edge computing | Limited (LIPA/SIPTO) | Native (MEC, UL CL, IPv6 multi-homing) |
| QoS | Bearer-based (EPS bearers) | Flow-based (QoS flows over DRBs) |
| Channel access | OFDMA (DL), SC-FDMA (UL) | OFDMA (both DL and UL) |
| Duplex | FDD primarily | FDD, TDD, flexible duplex |
| Mobility | 350 km/h | 500 km/h |
| Energy efficiency | Reference | 100Ã— better per bit (target) |

### 12.9.4 Real-World Analogy: Highway System

- **4G LTE**: A multi-lane highway with fixed lane widths and fixed speed limits. On-ramps (uplink) merge slowly (SC-FDMA). Traffic jams cause delays of 10-30 minutes (10-30 ms latency).
- **5G NR**: A highway with dynamically adjustable lanes and variable speed limits. During rush hour, lane widths narrow to increase throughput. Cars with critical destinations (autonomous driving) get dedicated express lanes (uRLLC). Each vehicle communicates directly with a traffic tower (beamforming) instead of broadcasting to all lanes.
- **Network Slicing**: Separate lanes for trucks (massive IoT), express buses (uRLLC), and regular cars (eMBB), each with its own rules and tollbooths.
- **Edge Computing**: Rest areas with cloud servers that process data locally instead of sending everything to a distant central data center.
## 12.10 Wi-Fi vs Bluetooth vs Cellular Comparison

| Feature | WiFi (802.11) | Bluetooth | Cellular (4G/5G) |
|---------|--------------|-----------|------------------|
| Range | ~50 m indoors, ~100 m outdoors | ~10 m (classic), ~100 m (BLE 5) | ~1-10 km (macro), ~500 m (mmWave) |
| Data rate | 11 Mbps â€” 46 Gbps | 1-3 Mbps (BR/EDR), 2 Mbps (BLE 5) | 300 Mbps â€” 20 Gbps |
| Latency | 2-20 ms | 3-100 ms (BR/EDR), 2.5-6 ms (BLE) | 10-30 ms (4G), 1-4 ms (5G) |
| Power consumption | ~3-10 W (AP), ~1-3 W (STA) | ~1 W (BR/EDR), ~0.01-0.5 W (BLE) | ~3-5 W (modem active) |
| Frequency bands | 2.4, 5, 6 GHz | 2.4 GHz ISM | 700-2600 MHz, 24-47 GHz |
| Channel access | CSMA/CA contention | Master-slave TDMA/FHSS | Scheduled OFDMA |
| Mobility support | Low (walking speed) | Very low (static) | High (500 km/h for 5G) |
| Handover | Roaming between APs (â‰ˆ100 ms) | Connection transfer (â‰ˆ3 s) | Seamless handover (<50 ms 5G) |
| Security | WPA3 (AES-SAE) | Security Manager (AES-CCM) | 5G-AKA, IPsec |
| Infrastructure | AP + DS (autonomous) | Master-slave (ad-hoc) | eNB/gNB + Core Network |
| Cost per bit | Very low | Moderate | Highest |
| Use cases | LAN, web, streaming, gaming | Audio, peripherals, IoT | Mobile broadband, IoT, critical communications |

### 12.10.1 Selection Guide

| Requirement | Best Choice | Why |
|-------------|-------------|-----|
| File transfer at close range (home) | WiFi (802.11ac/ax) | 100-1000Ã— faster than Bluetooth |
| Wireless headset (phone) | Bluetooth | Designed for audio, low power |
| Wireless headphones (lossless) | Bluetooth with LDAC/LC3 | Sufficient for CD-quality audio |
| Large IoT deployment | BLE or LoRaWAN | BLE for indoor, LoRaWAN for outdoor |
| High mobility (car, train) | 5G NR | Native handover at 500 km/h |
| Low latency gaming | WiFi 6/7 | <5 ms with proper QoS |
| Building-wide coverage | WiFi mesh + cellular fallback | Seamless indoor-outdoor transition |
| Industrial sensors (factory) | BLE mesh or Thread | Low power, mesh, reliable |

## 12.11 Interview Corner

### Q1: Why does WiFi use CSMA/CA instead of CSMA/CD?

**Answer**: Wireless transceivers are half-duplex â€” the transmitter cannot listen for collisions while transmitting because its own signal overwhelms any incoming signal (self-interference). Full-duplex wireless is still experimental. Additionally, the hidden terminal problem means the collision happens at the receiver, not the sender. CSMA/CA prevents collisions probabilistically rather than detecting them reactively.

### Q2: What is NAV and why is it important?

**Answer**: The Network Allocation Vector (NAV) is a virtual carrier-sense mechanism. Each station maintains a timer indicating how long the medium will be busy. Stations set their NAV based on the Duration field in received frames (RTS, CTS, Data). NAV prevents collisions from hidden terminals â€” even if a station's physical carrier sense says the medium is idle, NAV can still indicate it is busy.

### Q3: Explain the difference between WiFi handoff and cellular handover.

**Answer**: WiFi handoff (roaming) is client-initiated and can take 50-500 ms. The client decides when to disassociate from one AP and associate with another. Cellular handover is network-controlled â€” the base stations and core network coordinate the transition. LTE hard handover takes 10-50 ms; 5G targets <1 ms handover interruption for uRLLC services. Cellular handover is seamless and transparent to the user.

### Q4: How does MIMO improve wireless performance?

**Answer**: MIMO (Multiple Input Multiple Output) uses multiple antennas at both transmitter and receiver. Three benefits:
- **Spatial multiplexing**: Multiple data streams transmitted simultaneously over the same frequency â€” throughput increases linearly with stream count (up to 8Ã— in WiFi 6, 16Ã— in WiFi 7, 64Ã— in 5G).
- **Spatial diversity**: Same data sent over multiple paths â€” improves reliability and range.
- **Beamforming**: Weight antenna signals to focus energy in a specific direction â€” improves SNR and reduces interference.

### Q5: What is OFDMA and why is it important in WiFi 6/7?

**Answer**: Orthogonal Frequency Division Multiple Access divides a channel into smaller sub-channels (Resource Units, RUs) that can be allocated to different users simultaneously. In WiFi 5 (OFDM), only one user could transmit per channel per slot. WiFi 6 (OFDMA) allows 9 users (20 MHz) to 74 users (160 MHz) to transmit simultaneously.

Real-world benefit: In a crowded office, OFDMA handles many small packets efficiently. A 20 MHz OFDMA transmission can serve 9 devices simultaneously instead of serializing them (9Ã— latency reduction for small frames).

### Q6: Compare WiFi and LTE for voice over wireless.

**Answer**: LTE voice (VoLTE) uses IMS with dedicated bearers, priority scheduling, and seamless handover â€” providing near-wireline voice quality. WiFi voice (VoWiFi) rides on best-effort IP with CSMA/CA contention and can suffer from jitter, packet loss, and interference. VoLTE uses narrowband (WB-AMR 12.65 kbps) or EVS codecs; VoWiFi uses codec-over-UDP with no guaranteed QoS. VoWiFi with WMM (802.11e) can improve but cannot match VoLTE's dedicated bearer QoS.

### Q7: What is the range vs. rate trade-off in wireless?

**Answer**: As data rate increases, range decreases (for the same transmit power). Higher-order modulation (e.g., 64-QAM â†’ 256-QAM) requires higher SNR to maintain the same BER. At the cell edge, WiFi and cellular fall back to robust modulation (BPSK, QPSK) at lower rates. For WiFi 6: 1024-QAM MCS 11 requires ~32 dB SNR for <10% PER; BPSK MCS 0 requires ~5 dB SNR. This is why you get 9.6 Gbps standing next to the AP but only 10-50 Mbps at the far end of your house.

## 12.12 Applications in Real Systems

### 12.12.1 WiFi 6/7 Deployments

**Enterprise Campus WiFi 6**: An office building with 3 APs per floor (5 GHz), 200 clients per AP. Key features:
- OFDMA reduces airtime contention â€” 74 users can share a 160 MHz channel simultaneously.
- BSS Coloring allows neighboring APs on the same channel to reuse the medium when interference is below the color threshold.
- TWT extends client battery life â€” IoT sensors negotiate wake windows of 10 minutes instead of checking every 100 ms beacon.
- Target: 500 Mbps per user during peak load.

**WiFi 7 AR/VR**: 320 MHz channels in 6 GHz deliver 5+ Gbps to each headset with <2 ms latency. Multi-link operation (MLO) bonds 2.4 GHz (control) + 5 GHz (data) + 6 GHz (high-throughput) simultaneously. Preamble puncturing avoids interference from existing WiFi 6 deployments in the 6 GHz band.

### 12.12.2 Cellular Infrastructure

**Fixed Wireless Access (FWA)**: 5G NR replaces fiber-to-the-home. A customer's premises equipment (CPE) connects to a gNB up to 15 km away (sub-6 GHz) or 500 m (mmWave). Typical throughput: 300 Mbps-1 Gbps, enough for 4K streaming, video calls, and home office. Trials in Germany and the US show FWA as the fastest-growing 5G use case (20M+ subscribers in the US by 2024).

**Private 5G (NPN)**: A factory deploys a private 5G network (3.7-4.2 GHz CBRS in the US, n77/n78 in Europe). uRLLC slice for robotic arm control (99.999% reliability, <1 ms) and mMTC slice for 10,000 environmental sensors. 5G LAN functionality provides device-to-device communication without traversing the core.

### 12.12.3 IoT Wireless Technologies

**LoRaWAN**: Long-range (2-15 km), sub-GHz (868/915 MHz), ultra-low power (10+ years on battery). Data rate: 0.25-50 kbps. Use case: smart city parking sensors that report occupancy every 5 minutes. Each transmission costs ~0.01 ÂµAh. A single gateway covers an entire city district.

**Zigbee (802.15.4)**: Mesh networking at 2.4 GHz, 250 kbps, 100 m range. Used in smart lighting, thermostats, and door locks. Zigbee Coordinator manages the network; Routers extend coverage; End Devices sleep most of the time. A typical smart home has 20-60 Zigbee devices in a mesh.

**Thread**: IP-addressable mesh protocol (based on 6LoWPAN). Used in home automation (Apple HomeKit, Google Thread). Unlike Zigbee, Thread devices are natively IPv6-addressable â€” no application-layer gateway needed.

**WiFi Halow (802.11ah)**: Sub-1 GHz WiFi designed for IoT. 1 km range, 150 kbps-78 Mbps. Uses OFDM with 1/2/4/8 MHz channels. Target: large-scale sensor deployments with WiFi-compatible infrastructure.

**Comparison**:

| Technology | Range | Data Rate | Power | Topology | Key Use |
|-----------|-------|-----------|-------|----------|---------|
| LoRaWAN | 15 km | 50 kbps | 10+ yr battery | Star | Smart city, agriculture |
| Zigbee | 100 m | 250 kbps | 2+ yr battery | Mesh | Smart home, lighting |
| Thread | 100 m | 250 kbps | 2+ yr battery | Mesh (IPv6) | HomeKit, Matter |
| BLE | 100 m | 2 Mbps | 1+ yr battery | Star, mesh | Wearables, beacons |
| WiFi 6 | 50 m | 9.6 Gbps | Hours-days | Star | High-throughput |
| WiFi Halow | 1 km | 78 Mbps | Months | Star | Outdoor sensor grid |

## 12.13 Mobility Management

### 12.13.1 Handover

Handover (handoff) transfers an active connection from one base station (or access point) to another.

**Hard Handover**: The connection with the old base station is broken before the new connection is established (break-before-make). Used in GSM and some LTE scenarios. Packet loss during the interruption is inevitable. Typical interruption time: 10-50 ms (LTE).

**Soft Handover**: The connection is maintained with both base stations simultaneously during the transition (make-before-break). Used in CDMA-based networks. Requires the mobile to receive/transmit on multiple channels. Zero packet loss but requires redundant radio resources.

**Horizontal vs. Vertical Handover**: Horizontal handover occurs between base stations of the same technology (e.g., LTE to LTE). Vertical handover occurs between different technologies (e.g., WiFi to 5G). Vertical handover involves IP address changes, bearer re-establishment, and potentially different QoS models.

### 12.13.2 Location Management

Cellular networks track mobile devices through location areas and paging. The network divides coverage into location areas (LA) or tracking areas (TA). When a mobile crosses a TA boundary, it performs a tracking area update (TAU). When a call arrives for a mobile, the network pages all cells in the last known TA.

**Handover vs. TAU**: Handover maintains an active session; TAU updates the network for future incoming sessions (idle mode mobility).

### 12.13.3 Roaming

Roaming allows a mobile device to connect to a visited network. The visited network uses the home network's authentication infrastructure. In LTE, the UE connects to a visited eNB and MME; the visited MME communicates with the home subscriber server (HSS) for authentication and with the home PGW for data.

**LTE Roaming Architectures**:
- **Home Routed (HR)**: Data traverses the home PGW (higher latency, full home network control).
- **Local Breakout (LBO)**: Data exits at the visited network (lower latency, visited network enforces policy).

**5G Roaming**: 5G adds roaming based on SEPP (Security Edge Protection Proxy) for signaling security and improved Home Routed / Local Breakout architectures with N32 interface security.

## ðŸ’¡ Pro Tips

- **Avoid 2.4 GHz for dense deployments**: The 2.4 GHz band has only 3 non-overlapping channels. In apartment buildings or offices with many APs, use 5 GHz (more channels, less interference) or 6 GHz (WiFi 6E/7).
- **WPA3 is not optional for new networks**: WPA2 is still common but vulnerable to KRACK attacks. Deploy WPA3 with SAE for forward secrecy and dictionary-attack resistance.
- **5G network slicing requires RAN support**: Network slicing is not just a core feature â€” the RAN must also support slice-aware scheduling and QoS. Verify your gNB firmware supports 5G NR slicing before building slice-based services.
- **Handover tuning for VoIP**: For real-time voice, use soft handover (make-before-break) if available. Hard handover can cause audible gaps. Tune handover thresholds based on the UE speed â€” faster mobiles need earlier trigger.
- **RTS/CTS threshold tuning**: Set RTS threshold to ~1500 bytes in high-interference environments. Disable it in clean, low-density deployments to avoid unnecessary overhead.
- **OFDMA is not a magic bullet**: OFDMA excels with many small packets (IoT, web browsing) but adds overhead for large sequential transfers (video streaming). WiFi 6 adaptively chooses between OFDMA and MU-MIMO based on traffic patterns.
- **BLE for IoT range**: BLE 5 achieves 100+ m range through the LE Coded PHY (500 kbps with S=8 coding) at the cost of data rate. For maximum range, use the 125 kbps (S=8) coded mode.

## Concept Comparison Table

| Technology | Range | Data Rate | Frequency | Power | Use Case |
|------------|-------|-----------|-----------|-------|----------|
| WiFi 6 (802.11ax) | ~50 m indoor | 9.6 Gbps | 2.4/5/6 GHz | ~10 W | LAN, web, streaming |
| WiFi 7 (802.11be) | ~50 m indoor | 46 Gbps | 2.4/5/6 GHz | ~10 W | AR/VR, high-res video |
| Bluetooth BLE 5 | ~100 m | 2 Mbps | 2.4 GHz | <0.1 W | IoT, wearables |
| 4G/LTE | ~10 km | 300 Mbps | 700-2600 MHz | ~3 W | Mobile broadband |
| 5G NR (mmWave) | ~500 m | 20 Gbps | 24-47 GHz | ~3 W | Fixed wireless access |
| LoRaWAN | ~15 km | 50 kbps | 868/915 MHz | <0.1 W | Sensor networks |
| Zigbee | ~100 m | 250 kbps | 2.4 GHz | <0.1 W | Home automation |
| Thread | ~100 m | 250 kbps | 2.4 GHz | <0.1 W | Mesh IoT (Matter) |

## Quick Reference: 802.11 Standards Evolution

| Standard | Year | Max Rate | MIMO | Channel | Modulation | Key Feature |
|----------|------|----------|------|---------|------------|-------------|
| 802.11b | 1999 | 11 Mbps | No | 20 MHz | DSSS | First mass-market WiFi |
| 802.11g | 2003 | 54 Mbps | No | 20 MHz | OFDM | 2.4 GHz broadband |
| 802.11n | 2009 | 600 Mbps | 4Ã—4 | 40 MHz | MIMO-OFDM | Dual-band, MIMO |
| 802.11ac | 2013 | 6.9 Gbps | 8Ã—8 | 160 MHz | MU-MIMO | 5 GHz Gigabit WiFi |
| 802.11ax (WiFi 6) | 2019 | 9.6 Gbps | 8Ã—8 | 160 MHz | OFDMA + MU-MIMO | Efficient dense deployment |
| 802.11be (WiFi 7) | 2024 | 46 Gbps | 16Ã—16 | 320 MHz | 4096-QAM, multi-link | Ultra-high throughput |

## Cross-Application Matrix

| Environment | Best Wireless Tech | Why |
|-------------|-------------------|-----|
| Home WiFi | WiFi 6 or 6E | Wide device support, good range |
| Industrial IoT | LoRaWAN | Long range, low power, sub-GHz |
| Warehouse tracking | BLE | Beacon-based asset tracking |
| Mobile broadband | 5G NR | High mobility, consistent throughput |
| Office floor | WiFi 6 (5 GHz) | High density, many APs |
| Smart home sensors | Zigbee/Thread | Mesh, low power, local control |
| Smart city parking | LoRaWAN | 15 km, 10-year battery |
| Factory automation | Private 5G (uRLLC) | 1 ms, 99.999% reliability |
| AR/VR headset | WiFi 7 (6 GHz) | 5+ Gbps, <2 ms latency |
| Wireless headset | Bluetooth LE Audio | Low power, LC3 codec quality |

## Chapter Quiz

1. **Why does WiFi use CSMA/CA instead of CSMA/CD?**
   - a) CA is more efficient
   - b) CD requires full-duplex; WiFi is half-duplex âœ“
   - c) CA prevents hidden terminal completely
   - d) Wireless collisions are impossible to detect

2. **Which WiFi generation supports 6 GHz?**
   - a) WiFi 5
   - b) WiFi 6 âœ“
   - c) WiFi 4
   - d) WiFi 3

3. **What is the maximum number of active slaves in a Bluetooth piconet?**
   - a) 3
   - b) 7 âœ“
   - c) 15
   - d) 31

4. **Which 5G service category targets 1 ms latency?**
   - a) eMBB
   - b) uRLLC âœ“
   - c) mMTC
   - d) MIMO

5. **In cellular handover, what is make-before-break called?**
   - a) Hard handover
   - b) Soft handover âœ“
   - c) Horizontal handover
   - d) Vertical handover

6. **What is the purpose of the Network Allocation Vector (NAV)?**
   - a) Track number of active stations
   - b) Virtual carrier sense to prevent hidden terminal collisions âœ“
   - c) Allocate IP addresses to stations
   - d) Measure signal strength

7. **Which WiFi 6 feature divides a channel into smaller sub-channels for multiple users?**
   - a) MU-MIMO
   - b) OFDMA âœ“
   - c) TWT
   - d) BSS Coloring

8. **What is the maximum data rate of 802.11be (WiFi 7)?**
   - a) 6.9 Gbps
   - b) 9.6 Gbps
   - c) 46 Gbps âœ“
   - d) 100 Gbps

9. **What is the subcarrier spacing flexibility in 5G NR called?**
   - a) OFDMA
   - b) Scalable numerology âœ“
   - c) Beamforming
   - d) Carrier aggregation

10. **Which technology uses frequency-hopping spread spectrum with 79 channels?**
    - a) WiFi 6
    - b) Bluetooth âœ“
    - c) LTE
    - d) Zigbee

**Answers**: 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-c, 9-b, 10-b

## Summary

Wireless networks span personal-area (Bluetooth), local-area (WiFi), and wide-area (4G/5G) coverage. 802.11 has evolved from 11 Mbps (802.11b) to 46 Gbps (802.11be). CSMA/CA with RTS/CTS addresses the hidden terminal problem through virtual carrier sense (NAV) and exponential backoff. Bluetooth uses frequency-hopping piconets with master-slave TDD. Cellular networks provide wide-area mobility: 4G/LTE achieves hundreds of Mbps with OFDMA/SC-FDMA; 5G targets 20 Gbps with 1 ms latency through massive MIMO, beamforming, network slicing, and flexible numerology. Mobility management handles handover (hard and soft), location tracking through tracking areas and paging, and roaming across heterogeneous access networks. IoT wireless technologies (LoRaWAN, Zigbee, Thread, BLE) fill specific niches with power, range, and throughput trade-offs.

## Exercises

### Review Questions

1. Why does 802.11 use CSMA/CA rather than CSMA/CD?
2. What is the purpose of the RTS/CTS exchange in 802.11?
3. How does Bluetooth frequency hopping reduce interference?
4. What is network slicing in 5G, and what problem does it solve?
5. Distinguish between hard and soft handover.
6. What is the difference between BSS and ESS in 802.11 architecture?
7. How does OFDMA improve WiFi 6 efficiency over OFDM in WiFi 5?
8. What is the role of the TIM in 802.11 power management?
9. Compare 4G LTE and 5G NR in terms of latency, throughput, and architecture.
10. What are the three service categories of 5G NR?

### Application Problems

11. A WiFi network has 20 stations and an AP. The channel data rate is 300 Mbps. If each station transmits 1500-byte frames at an average rate of 50 frames per second, what is the offered load? Is the channel saturated? What is the approximate throughput under CSMA/CA with optimal parameters?
12. A 5G base station uses 64-element MIMO with 100 MHz bandwidth and 256-QAM. Compute the peak physical-layer data rate assuming 15 kHz subcarrier spacing, normal cyclic prefix, and 7/8 code rate.
13. An LTE mobile moves at 60 km/h through cells with 500 m radius. The tracking area contains 20 cells. Compute the rate of tracking area updates and the paging load per cell, assuming 0.1 calls per user per hour and 1000 users per cell.
14. Three WiFi stations (A, B, C) contend for a channel. CW_min = 15, slot = 9 Âµs. Station A picks backoff=7, B picks backoff=3, C picks backoff=12. Simulate the first 500 Âµs of CSMA/CA including A's retransmission with doubled CW (assuming B's transmission succeeds and takes 200 Âµs, ACK=30 Âµs).
15. Calculate the overhead of RTS/CTS for a 1500-byte frame at 54 Mbps. Compare with the overhead of a collision without RTS/CTS (assume 3 stations, each retransmitting 2 times on average before success).

### Challenge Problem

16. **Design a mobility handover protocol for high-speed rail.** A train travels at 350 km/h through 5G cells. Design a handover protocol that:
    - (a) maintains a data rate of at least 100 Mbps per passenger,
    - (b) limits handover interruption to under 5 ms,
    - (c) handles handover between eNodeBs on the same gNB and between different gNBs, and
    - (d) accommodates group handover (500 passengers simultaneously).
    
    Propose architectural enhancements to the 5G NR specification and compute the handover success probability given 1% radio link failure per handover.
