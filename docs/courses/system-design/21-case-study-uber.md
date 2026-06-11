# Chapter 21: Case Study — Uber and Location-Based Services

---

## Learning Objectives

- Analyze the architectural evolution from a monolith to a domain-oriented microservice ecosystem at global scale
- Understand geospatial indexing techniques including QuadTree, Google S2, and Uber's H3 hexagon system
- Design a real-time location pipeline handling 30M+ GPS updates per minute with Kafka and Flink
- Evaluate the dispatch and matching algorithm as a minimum-weight bipartite matching optimization problem
- Explore surge pricing mechanics as a real-time demand-supply equilibrium system
- Examine the trade-offs in sharding strategies for location-based services operating in 70+ countries

---

## Theory / Case Study

### Phase 1: Problem Scope and Requirements

Uber connects riders with drivers in real time across 70+ countries and 10,000+ cities. By 2024, the platform handled over 100 million monthly active riders and a comparable number of drivers, processing 30+ billion location events per day. Every four seconds, each active driver's GPS coordinate streams to Uber's servers. The matching system must pair a rider with the best available driver in under 500 milliseconds — fewer than the blink of an eye. The ETA displayed in the rider app must be accurate within 60 seconds for trips lasting over 30 minutes. Surge pricing adjusts in real time as demand spikes during rush hour, concerts, or severe weather.

The challenge is multifaceted. Location data is inherently two-dimensional, requiring specialized indexing structures that standard B-Trees cannot handle efficiently. GPS coordinates arrive with noise — urban canyons, tunnels, and atmospheric interference degrade accuracy. The system must distinguish between a driver stopped at a red light and a driver who has parked and gone offline. The matching problem is combinatorial: given N available drivers and M riders in a region, find the assignment that minimizes total wait time, subject to constraints on driver preferences, rider ratings, and vehicle type.

Non-functional requirements include five-nines availability for the dispatch core, global consistency for trip accounting (a rider must never be double-billed), and sub-second P99 latency for the match endpoint. The system must tolerate the failure of an entire AWS Availability Zone without losing trip state. Compliance with GDPR (right to deletion), CCPA, and local transportation regulations in each market adds further complexity.

Specific quantifiable targets:
- Match latency P50 < 200ms, P99 < 500ms
- ETA accuracy: within 60 seconds for 95% of trips over 30 minutes
- Location event ingestion: 7.5M events/second sustained, 15M peak
- Trip accounting: zero tolerance for double-billing or missing charges
- System uptime: 99.999% for dispatch core, 99.99% for secondary services
- Disaster recovery: RTO < 5 minutes, RPO < 1 second for trip state
- Global deployment: 8 primary data regions, active-active for dispatch reads

The functional requirements span four major user flows. For riders: request a ride, track the driver in real time, pay seamlessly, and rate the experience. For drivers: go online, receive ride requests, navigate to pickup and destination, and receive earnings. For the platform: match riders with available drivers optimally, compute accurate ETAs, adjust prices dynamically, and detect fraud. For city operations teams: monitor supply and demand dashboards, manage driver incentives, and respond to incident reports.

### Phase 2: Pre-Uber Architecture — The Monolith Era

Uber's original architecture circa 2010 was a Python monolith built on top of a single MySQL database. The monolith handled ride requests, driver dispatch, payment processing, driver onboarding, surge pricing, and the web dashboard — all in one codebase. The database held a single `trips` table, a `drivers` table, and a `riders` table, with spatial queries executed through MySQL's geospatial extensions (which at the time supported only basic bounding-box lookups via MyISAM tables with R-Tree indexes).

As Uber expanded from San Francisco to Paris, London, Shanghai, and São Paulo, the monolith groaned under its own weight. A deployment to fix a typo in the payment email template required redeploying the entire stack, risking the dispatch system. The MySQL master could not keep up with write volume — the `trips` table alone grew to hundreds of gigabytes, and adding indexes caused replication lag that made followers minutes stale.

The spatial queries were the first bottleneck. Finding nearby drivers required a MySQL query like `SELECT * FROM drivers WHERE lat BETWEEN ? AND ? AND lng BETWEEN ? AND ? AND status = 'available'`. This bounding-box scan worked for 1,000 drivers but failed at 100,000. The response time for a dispatch query grew from 50 milliseconds to several seconds. Uber's engineers realized they needed a fundamentally different approach to spatial indexing.

### Phase 3: Post-Uber Architecture — Microservices, S2, and Kafka

Uber's transformation into a service-oriented architecture unfolded over several years, resulting in 750+ microservices organized by domain. The architecture can be understood as a set of interconnected subsystems.

**Geospatial Indexing — S2 and H3**

The heart of Uber's location infrastructure is Google's S2 geometry library, later supplemented by Uber's own H3 hexagon system. S2 addresses the fundamental problem of spatial indexing: how do you map a 2D coordinate into a 1D index that can be stored in a B-Tree, used as a key in a hash table, or indexed by a database?

S2 solves this by projecting the Earth's surface onto a cube, then subdividing each cube face into a hierarchy of cells. The Hilbert space-filling curve visits every cell in a well-defined order, producing a single 64-bit integer (a "cell ID") for any point on Earth. Two points that are geographically close will have cell IDs that are numerically similar — a property that makes range queries efficient. The hierarchy has 31 levels (0 through 30), where level 0 cells cover roughly half the Earth's surface and level 30 cells cover roughly 0.5 square centimeters. Uber uses cells at levels 12-15 for dispatch (roughly 1-10 square kilometers per cell).

H3, developed by Uber in 2018, improves on S2 by using hexagons instead of squares. Hexagons have the critical property that all neighboring cells share an edge — a square's diagonal neighbors are farther away than its side neighbors, creating distortions in distance calculations. The hexagon hierarchy is aperture-7: each parent hexagon contains approximately 7 child hexagons. H3 resolution ranges from 0 (continent-sized) to 15 (roughly 0.5 square meters). Uber uses H3 primarily for visualization, aggregation, and market analysis rather than real-time dispatch.

**Comparison of Geospatial Indexing Approaches**

QuadTree was considered early in Uber's history before S2 was adopted. A QuadTree recursively subdivides space into four quadrants until each cell contains fewer than a threshold number of points. QuadTrees support dynamic grid sizing — dense urban areas are subdivided more finely than sparse rural areas — which naturally adapts to point density. However, QuadTrees have significant drawbacks for Uber's use case. They require in-memory tree traversal for neighbor queries, cannot be indexed in a standard database (the tree structure is complex to serialize), and are hard to shard across machines. In contrast, S2's 64-bit cell IDs are B-Tree friendly, storable in any database, and trivially shardable by cell ID prefix.

H3's hexagons add a third option with advantages for aggregation and visualization. A hexagon's six equidistant neighbors eliminate the distance distortion problem that plagues square grids. When computing "how many drivers are in the neighborhood," hexagons give more consistent results regardless of direction. The aperture-7 hierarchy means each parent hexagon has roughly 7 children, which maps naturally to the base-10 decimal system for human-readable zoom levels. However, hexagons require more computation for parent-child relationships (the 7 children do not tile perfectly), and H3's 64-bit encoding is less efficient than S2's for range queries because hexagons do not tile the plane with a space-filling curve.

Uber's architecture uses all three: S2 for dispatch (because cell IDs are sorted by proximity, enabling efficient range scans for nearby drivers), H3 for visualization (because hexagons produce cleaner heat maps and aggregation buckets), and QuadTree elements in the analytics layer for offline geospatial modeling where tree-based adaptive subdivision provides better precision for long-tail analysis.

**S2 Cell Hierarchy in Practice**

The S2 cell hierarchy ranges from level 0 (each face of the cube — roughly half a hemisphere) to level 30 (0.5 cm²). Each level subdivides the previous level by 4, so cell area decreases by a factor of 4 for each increment. For dispatch purposes, Uber found that levels 12-15 provide the right granularity:

- Level 12: ~100 km² — used for very sparse areas (highways between cities, rural zones)
- Level 13: ~25 km² — default for suburban dispatch
- Level 14: ~6.25 km² — default for urban dispatch (the most commonly used)
- Level 15: ~1.56 km² — used for dense downtown cores with many drivers

The choice of level is dynamic. A geofence query starts at level 14 for the rider's location. If too few drivers are found (below a configurable threshold, typically 5), the query expands to the parent cell at level 13, then level 12, each time querying the cell's drivers plus a one-cell ring around it. Conversely, if too many drivers are found (above 100, typically), the system can narrow to child cells and route the query to only the cells closest to the rider. This adaptive depth ensures consistent performance across varying densities.

**Real-Time Location Pipeline**

Every active driver's smartphone sends a GPS coordinate every 4 seconds via a gRPC or WebSocket connection. This stream of 7.5 million updates per second must be ingested without data loss.

```
Driver App --[gRPC/WebSocket]--> Gateway Service --[Kafka]--> Flink Streaming
                                                                    |
                                                            +---------+---------+
                                                            |                   |
                                                         Redis              HDFS
                                                   (Current Location)   (Historical)
```

The gateway service authenticates the driver, validates the coordinate (rejecting obviously impossible values like lat=500), and publishes the event to a Kafka topic partitioned by city. Flink consumes this stream with a sliding window of 4 seconds. For each window, Flink computes the driver's smoothed position using a Kalman filter, updates the driver's current position in a Redis cluster (keyed by driver ID with a TTL of 15 seconds to handle disconnects), and writes the raw event to HDFS for batch analytics.

The Kalman filter is essential. Raw GPS readings have an error radius of 5-15 meters. The filter models the driver's state as position and velocity, producing an estimate that is significantly more accurate than any single reading. When a driver enters a tunnel and GPS is lost, the Kalman filter's prediction step continues propagating the last known velocity, providing a plausible position estimate until the signal returns.

**The Dispatch Algorithm**

When a rider opens the Uber app and requests a ride, the following sequence executes in under 500 milliseconds:

1. The rider's phone sends its GPS coordinates to the matching service.
2. The matching service uses S2 to compute the cell ID at resolution 14 for the rider's location.
3. It queries a geofence around the rider — typically the rider's S2 cell plus all neighboring cells (the "ring" at distance 1).
4. For each cell, it reads from Redis the list of available drivers in that cell, along with their current state (location, heading, speed, rating, acceptance rate).
5. A scoring function computes a score for each eligible driver:

   - ETA score: `min(estimated_time_to_pickup, MAX_WAIT)` where ETA is computed using the map-matched route from the driver's position to the rider's position, factoring in current traffic.
   - Direction score: penalizes drivers heading away from the rider.
   - Rating score: `driver_rating / 5.0`, ensuring high-rated drivers are preferred.
   - Surge multiplier: adjusted based on current demand/supply ratio.
   - Supply score: if the area is supply-constrained, the system expands the search radius.

6. The assignment is formulated as a minimum-weight bipartite matching problem. Given M riders and N drivers in a geofence region, the Hungarian algorithm finds the assignment that minimizes `sum(estimated_wait_time)` across all pairs. In practice, Uber uses a greedy approximation that is near-optimal but runs in O(N log N) instead of O(N^3).

**Surge Pricing Mechanics**

Surge pricing adjusts the fare multiplier in real time based on the ratio of active riders to available drivers in each geofence region. The system computes:

```
surge_multiplier = base_ratio + (current_demand / current_supply) * sensitivity_factor
```

This multiplier is clamped to a range (typically 1.0x to 3.0x, but can go higher during emergencies). The pricing service processes demand statistics every 2-5 minutes from Flink aggregation. A machine learning model trained on historical trip data predicts demand for each geofence in 5-minute windows, allowing the system to pre-position surge pricing before demand spikes.

Riders see the surge multiplier before confirming a ride. Drivers are notified of surge zones so they can reposition themselves. This market-based mechanism efficiently allocates supply to demand: when a concert ends, surge pricing draws drivers to the venue, clearing the queue faster than a flat-price system would.

**ETA Prediction**

Uber's ETA prediction has evolved from a simple distance/speed heuristic to an ensemble of gradient-boosted decision trees and neural networks. The feature set includes:

- Road-segment-specific historical speed profiles (15-minute buckets for each day of the week)
- Real-time traffic data from Waze partnership and internal GPS speed aggregation
- Intersection delay modeling (turn times, traffic light patterns)
- Time-of-day and day-of-week features
- Weather data (precipitation, visibility, temperature)
- Special events (concerts, sports games, parades)
- Driver behavior features (does this driver typically drive faster or slower than average?)

The model is served via Uber's Michelangelo ML platform, which handles feature extraction, model inference, and online training. The ETA is recalculated every 30 seconds during a trip and whenever the driver deviates significantly from the expected route.

**Trip Tracking and Map Matching**

During a trip, the driver's GPS trajectory is a sequence of noisy points. Map matching aligns these points to the road network. Uber uses a hidden Markov model (HMM) approach: each GPS observation is an emission from a hidden state (the true road position), and transitions between hidden states follow the road network topology. The Viterbi algorithm finds the most likely sequence of road segments.

Map matching serves several purposes:
- Accurate ETA updates (a driver 100 meters off the expected route may add 5 minutes to ETA)
- Route deviation detection (the driver is going the wrong way)
- Fare calculation (distance traveled on roads, not GPS distance)
- Safety monitoring (is the trip following the expected path?)

**Payment Processing Architecture**

Payment processing at Uber's scale must handle millions of transactions daily across 70+ countries, each with different payment methods, currencies, tax regimes, and regulatory requirements. The payment system is a separate domain-oriented microservice with its own data store and failure isolation.

The payment flow begins when a trip ends. The fare calculation service computes the final amount based on: base fare + distance * per_distance_rate + time * per_minute_rate + surge_multiplier + booking_fee - promotions. For upfront pricing (introduced in 2016), the fare is computed at request time and guaranteed to the rider unless the route changes significantly.

Once the fare is computed, the payment service:
1. Authorizes the rider's payment method (credit card, PayPal, Uber Cash, or local methods like Alipay in China, Boleto in Brazil, M-Pesa in Kenya)
2. Charges the split-second optimized fare (using idempotency keys to prevent double-charges)
3. Deposits the driver's earnings (after Uber's commission, typically 20-30%) into the driver's earnings wallet
4. Handles the 7-day settlement cycle for drivers who choose weekly payouts (instant pay for Uber Pro members)
5. Generates receipts in the rider's local language and currency

The payment service uses its own database sharded by region, with strict ACID guarantees for the transaction itself. However, for reporting and reconciliation, it publishes events to Kafka that are consumed by the accounting service and the fraud detection pipeline. Dual-write concerns (writing to both the payment database and Kafka) are handled by the transactional outbox pattern: the payment service writes the event to an outbox table in the same database transaction, and a separate process reads the outbox and publishes to Kafka.

Fraud detection is a critical sub-system. The fraud service processes payment events through a combination of rules (matching against known fraud patterns) and ML models that score each transaction on features like: device fingerprint, GPS location of the rider vs. the payment method's billing address, historical chargeback rate, velocity of new accounts from the same device, and anomaly detection on trip patterns (e.g., very short trips with very high fares).

**Driver Onboarding and Compliance**

Driver onboarding is a complex workflow that must satisfy regulatory requirements in every market. The onboarding service implements a state machine:
1. Identity verification: Upload government ID (passport, driver's license) → document OCR extraction → background check via third-party API (Checkr in the US, similar partners globally)
2. Vehicle inspection: Upload vehicle registration and insurance → verify coverage meets minimum requirements → schedule in-person or virtual vehicle inspection
3. Training: Complete safety video series → pass knowledge test → acknowledge community guidelines
4. Activation: Receive activation notification → download driver app → go online for first time

The onboarding service uses Kafka as the event backbone: each step completion publishes an event, and downstream services react. The background check service listens for the "identity verified" event and initiates the background check. The vehicle inspection service listens for the "documents uploaded" event and triggers the inspection workflow.

This event-driven architecture allows onboarding to be asynchronous and resilient. If the background check provider is slow (taking hours or days), the rest of the onboarding can proceed up to the point where the background check result is needed. The service maintains a "onboarding completeness" score for each applicant and sends progress notifications via push notification, email, and SMS.

**Safety Features**

Uber's safety features are a first-class architectural concern, not an afterthought. The safety system comprises several sub-services:

- **RideCheck**: An ML model running on the client app and server detects unexpected trip events: long stops, route deviations, crashes (detected via accelerometer/GPS patterns). When detected, the system sends an in-app prompt asking if the rider is okay and, if no response, escalates to the safety response team and optionally contacts emergency services.

- **Emergency Button**: In-app button that shares real-time location, trip details, and vehicle information with local emergency services. The integration uses a third-party API (RapidSOS in the US) to transmit data directly to 911 dispatchers.

- **Real-Time ID Check**: Drivers are periodically prompted to take a selfie before going online. The selfie is compared to the driver's profile photo using facial recognition. The system uses a one-to-one matching model with a threshold confidence score. Failures trigger a manual review by the safety team.

- **Trip Sharing**: Riders can share their real-time trip status with trusted contacts via a shareable link that shows the driver's name, photo, vehicle details, and live GPS location on a map.

- **SOS Beacon**: In markets where it is supported, the app can trigger an audible alarm and flash the screen to deter an attacker.

Each safety feature is implemented as an independent microservice with its own data store, ensuring that a failure in the dispatch system does not impact safety features.

**Historical Data and Analytics**

The raw location stream, trip records, and driver-rider interactions all flow to Hadoop HDFS for offline processing. Hive and Spark process this data for:
- Fraud detection: identifying fake trips, GPS spoofing, collusion between drivers and riders
- Market analysis: demand patterns by city, neighborhood, time of day
- Driver supply forecasting: predicting how many drivers will be online next Tuesday at 3 PM
- Pricing model training: training data for surge prediction and ETA models
- Business intelligence: dashboards for city operations teams

### Phase 4: Data Storage, Sharding, and Infrastructure

**Kafka Event Backbone**

Kafka sits at the center of Uber's architecture, handling 30+ billion events per day across 300+ topics. Critical topics include `location_updates`, `trip_events`, `payment_events`, `dispatch_decisions`, and `surge_updates`. Kafka MirrorMaker replicates data across data centers, providing disaster recovery and allowing read traffic to be served from the nearest data center. The event schema is managed by Apache Avro, ensuring backward and forward compatibility as services evolve independently.

**Sharding Strategy**

Uber shards its data primarily by city or region. Each city is largely self-contained: a ride request in San Francisco does not need to query driver data in Tokyo. City-level sharding provides natural data isolation, reduces cross-shard queries, and allows capacity to be added on a per-city basis.

However, cross-city trips (e.g., a rider going from San Francisco to Oakland) require API orchestration. The dispatch service coordinates between the origin city shard (finding a driver) and the destination city shard (preparing for arrival). The trip record exists in the origin shard, with a cross-reference in the destination shard.

**Infrastructure and Deployment**

Uber runs on a multi-cloud and on-premises hybrid infrastructure. The core dispatch system runs on bare-metal servers in colocation facilities for predictable latency. Analytics workloads run on public cloud (AWS and GCP). The deployment pipeline uses uDeploy (Uber's internal CI/CD system), and services are containerized with Docker and orchestrated by Peloton (Uber's internal resource scheduler). Service discovery uses Hyperbahn (Ringpop-based), and the observability stack includes M3 (metrics, built by Uber to replace Graphite), Jaeger (distributed tracing, also built by Uber and later open-sourced as a CNCF project), and ELK (logging).

**Observability at Scale**

M3 is Uber's metrics system, built to handle 10 million metrics per second across the entire fleet. Metrics are collected by a local agent on each host and sent to M3 aggregators, which downsample over time: 10-second resolution for the first hour, 1-minute for 24 hours, 5-minute for 30 days, and 1-hour for permanent retention. Each service exports RED metrics (Rate of requests, Errors, Duration of requests) for every endpoint, organized by status code, shard, and host. The dispatch service's M3 dashboard is the first thing an on-call engineer checks during an incident.

Jaeger, which originated at Uber, provides end-to-end tracing for every ride request. A single ride request trace spans 15-25 services: API gateway → authentication → geofence → driver search → scoring → assignment → notification → payment authorization. Each span records the service name, operation name, start time, duration, and any errors. Jaeger's sampling strategy is adaptive: high-volume endpoints are sampled at 1%, but if a trace includes an error, it is force-sampled at 100%. This ensures the team can always debug failures without overwhelming the trace storage.

**Chaos Engineering and Resilience Testing**

Uber runs a structured chaos engineering program called "uChaos" that injects failures into the production system during low-traffic periods. The chaos experiments include:

- **Latency injection**: Adds 500ms of latency to random Redis read requests to simulate a slow cache
- **Instance termination**: Randomly kills 5% of the dispatch service instances
- **Packet loss**: Drops 1% of packets between the dispatch service and the driver location store
- **Kafka broker failure**: Shuts down one Kafka broker and verifies that producers and consumers rebalance without data loss

Each experiment has a blast radius (limited to one city or one region), a hypothesis ("The dispatch service will maintain P99 < 500ms even with 20% of instances terminated"), and an automated rollback ("If error rate exceeds 1% for 30 seconds, terminate the experiment"). The results are reviewed in a weekly resilience review meeting, and teams are responsible for fixing any regressions within the next sprint.

**API Gateway and Versioning Strategy**

Uber's API Gateway sits between mobile clients and backend services, handling authentication, rate limiting, request routing, and response aggregation. The gateway evolved through three generations:

- **Generation 1** (monolith era): A simple Nginx reverse proxy with hardcoded route tables. Every new feature required a configuration change and restart.
- **Generation 2** (early microservices): A custom Go-based gateway that read route definitions from ZooKeeper. Services registered themselves, and the gateway dynamically routed requests. This supported canary deployments (5% of traffic to a new service version) and circuit breaking (if a service returned 5xx errors for 10% of requests, the gateway would fail-open for 30 seconds).
- **Generation 3** (current): A layered gateway architecture. The outer layer (Envoy proxy at the edge) handles TLS termination, DDoS protection, and basic rate limiting. The inner layer (Uber's custom gateway service) handles authentication, business-level routing, and response aggregation. The two layers communicate via localhost HTTP to minimize latency.

API versioning follows a pragmatic strategy: the mobile client specifies its version in a request header (e.g., `X-Uber-App-Version: 4.32.1`). The gateway routes to the appropriate service version based on the app version range declared by each service. Old service versions are decommissioned when fewer than 1% of active clients use them. This avoids the overhead of URL-based versioning (e.g., `/v1/`, `/v2/`) while maintaining backward compatibility.

**Service Mesh and Communication Patterns**

Uber's 750+ services communicate through a service mesh built on Hyperbahn (Ringpop-based RPC). Each service has a well-defined API contract defined in Apache Thrift IDL or gRPC protobuf. The communication patterns fall into three categories:

1. **Synchronous request-response** (gRPC): Used for latency-sensitive operations like dispatch matching, ETA queries, and fare calculation. The client makes a request and waits for the response within a configured timeout (typically 100-500ms). Finagle's connection pooling keeps persistent TCP connections to downstream services, eliminating connection establishment overhead.

2. **Asynchronous event-driven** (Kafka): Used for operations that do not require an immediate response. Examples include location update events, trip completion notifications, and payment processing confirmations. The producer publishes an event to a Kafka topic and continues processing. One or more consumer groups process the event asynchronously.

3. **Streaming** (gRPC streams / WebSocket): Used for real-time bidirectional communication with mobile clients. The driver app maintains a persistent WebSocket connection to the gateway service. The rider app uses gRPC server-sent streaming for location updates and trip status changes.

The choice between synchronous and asynchronous communication at each boundary is a critical architectural decision. The dispatch matching endpoint is synchronous because the rider is waiting for a response. However, the downstream scoring may fan out to multiple services in parallel using Finagle futures: the dispatch service sends concurrent requests to the geofence service, the surge service, and the ETA service, then combines the results using a composite future that completes when all three respond. If any service is slow, the entire request waits for the slowest response. To mitigate this, each service has a strict timeout (geofence: 50ms, surge: 30ms, ETA: 100ms). If a service times out, the dispatch uses a default value (no surge multiplier, average ETA estimate) and logs the timeout for debugging.

**Caching Strategy**

Uber's caching strategy operates at multiple levels:

- **Driver positions** (Redis, TTL 15s): The primary hot cache. Each driver's current position (lat, lng, heading, speed, status) is stored in a Redis hash with key `driver:<id>:state`. The TTL is set to 15 seconds to automatically expire stale data for drivers who go offline without sending a disconnect signal.

- **Geofence driver lists** (Redis, no TTL but continuously refreshed): For each active S2 cell, a Redis set stores the driver IDs currently in that cell. When a driver's position updates and their cell changes, the Flink job atomically removes the ID from the old cell's set and adds it to the new cell's set using a Lua script for atomicity.

- **ETA precomputation** (Redis, TTL 60s): For popular origin-destination pairs (e.g., downtown to airport), the ETA is precomputed every 60 seconds and cached. Cache hits serve in under 5ms instead of the 200ms ETA model inference time.

- **Trip metadata** (Memcache, TTL 30 minutes): Trip details that change infrequently (origin address, destination, rider name) are cached in Memcache to reduce database load.

**Observability at Scale**

Uber operates in an active-active configuration across multiple data centers. Each data center can serve the full dispatch workload. Reads are served from the local data center, while writes are fanned out to all data centers. Cross-datacenter replication for driver positions uses a custom solution built on Kafka MirrorMaker: each data center runs its own Kafka cluster, and MirrorMaker copies all location events to the other data centers with a replication lag target of under 2 seconds.

This active-active configuration has saved Uber from several major outages. When a power failure affected one data center, traffic was diverted to the other data centers within 60 seconds. The only visible impact to riders was a slight increase in match latency (from 200ms to 350ms) for the duration of the failover.

```mermaid
graph TB
    subgraph "Client Layer"
        RD[Rider App]
        DR[Driver App]
    end

    subgraph "Gateway Layer"
        API[API Gateway]
        WS[WebSocket Gateway]
    end

    subgraph "Dispatch"
        MT[Matching Service]
        SP[Surge Pricing]
        ETA[ETA Service]
        GEO[Geospatial Index S2]
    end

    subgraph "Streaming"
        KF[Kafka Event Bus]
        FL[Flink Stream Processing]
    end

    subgraph "Data Layer"
        RD[(Redis Driver State)]
        SQL[(MySQL Trip Store)]
        HDFS[(HDFS Historical)]
    end

    subgraph "Analytics"
        HV[Hive]
        SPK[Spark]
        MW[Michelangelo ML]
    end

    RD --> API
    DR --> WS
    WS --> KF
    KF --> FL
    FL --> RD
    FL --> HDFS
    API --> MT
    API --> SP
    API --> ETA
    MT --> GEO
    MT --> KF
    SP --> KF
    ETA --> KF
    HDFS --> HV
    HDFS --> SPK
    HDFS --> MW
    SQL --> MT
    SQL --> SP
```

---

## Summary

- Uber's architecture evolved from a Python monolith with a single MySQL database to a 750+ service microservice ecosystem powered by Kafka and Flink.
- Google S2 geometry maps latitude/longitude to 64-bit cell IDs using a Hilbert curve on a cube projection, enabling efficient spatial indexing in standard databases and key-value stores.
- Uber's H3 hexagon system improves on S2 by using hexagons for uniform neighbor distances, used primarily for visualization and market analysis rather than real-time dispatch.
- The real-time location pipeline ingests 7.5M GPS updates/second via gRPC/WebSocket → Kafka → Flink, with Kalman filtering for noise reduction and Redis for current state.
- The dispatch algorithm formulates matching as minimum-weight bipartite matching using S2-based geofence queries, scoring drivers by ETA, rating, direction, and surge multiplier.
- Surge pricing uses real-time demand/supply ratios per geofence with ML-driven demand prediction to dynamically adjust fare multipliers.
- Sharding by city provides natural data isolation, with cross-city trips handled via API orchestration between region shards.
- The system achieves sub-500ms match latency through careful use of in-memory caches (Redis), approximation algorithms, and precomputed geospatial indexes.

---

## Exercises

### Review Questions

1. Why does standard B-Tree indexing fail for "find nearby drivers" queries, and how does S2's Hilbert curve address this limitation? Explain the trade-offs between S2 and H3 for different use cases within Uber.

2. Describe the fan-in architecture of the real-time location pipeline. What role does Kafka play, and how does Flink's sliding window with Kalman filtering improve position accuracy?

3. Explain how Uber's dispatch algorithm balances multiple competing objectives: minimizing rider wait time, respecting driver preferences, and maximizing platform revenue. How is the problem formulated as a matching optimization?

4. How does Uber's surge pricing algorithm determine the multiplier for a given geofence at a given time? What data feeds into the ML-based demand prediction model?

5. Discuss the sharding strategy used by Uber. Why is city-level sharding natural for this domain, and what challenges arise for cross-city trips?

6. Compare the role of Chaos Engineering at Uber with traditional disaster recovery testing. How does uChaos differ from standard failover testing?

### Application Problems

1. **Spatial Index Design**: A ride-sharing competitor wants to implement its own dispatch system for a mid-sized city (500,000 active drivers). They expect 50,000 concurrent drivers. Design the geospatial index and caching strategy to support sub-100ms dispatch queries. Compare S2, H3, and a simple grid-based approach, providing a recommendation with justification.

   For your design, specify: (a) the S2 cell level you would use and why, (b) the Redis data structure for storing drivers per cell (Redis Set? Sorted Set? Hash?), (c) the geofence expansion strategy when the initial ring returns fewer than 5 drivers, (d) the TTL strategy for expiring stale driver positions, and (e) the cache invalidation strategy when a driver moves between cells.

2. **ETA Model Feature Engineering**: Given access to 6 months of historical trip data including GPS trajectories, timestamps, and driver IDs, design the feature engineering pipeline for an ETA prediction model. Specify the window sizes for feature aggregation, the treatment of categorical features (driver ID, road segment ID), and how you would handle the cold-start problem for new drivers.

   Provide: (a) at least 8 feature families with specific example features, (b) the feature preprocessing pipeline (normalization, handling missing values, outlier removal), (c) the training data generation strategy (how to create positive and negative examples from raw GPS traces), and (d) the online inference architecture (how features are computed and served at predict time within 50ms).

3. **Surge Price Simulation**: A stadium event expects 30,000 attendees leaving simultaneously in a 10-block area. Normal supply in this area is 200 drivers. Write pseudocode for a surge pricing algorithm that: (a) detects the demand spike within 2 minutes of the event ending, (b) computes the surge multiplier, (c) distributes surge notifications to drivers within a 2-mile radius, and (d) gradually normalizes pricing as supply increases.

   Your solution must address: (a) how to distinguish the event spike from a normal demand fluctuation using historical baselines, (b) the min/max clamp on the multiplier and the justification for these bounds, (c) the decay function for returning to 1.0x multiplier as supply arrives, and (d) how to prevent driver supply from overshooting (too many drivers chasing too few rides) after the surge dissipates.

4. **Failure Mode Analysis**: For each of the following failure scenarios, describe the detection mechanism, the impact on users, and the automated recovery strategy:

   (a) The Flink job processing the GPS location stream crashes and takes 2 minutes to restart
   (b) The Redis cluster in the US-East region becomes unreachable from the dispatch service
   (c) The Kafka broker hosting the `trip_events` topic leader experiences disk failure
   (d) The S2 geofence query returns correct results but takes 2 seconds instead of 10ms due to a slow upstream API
   (e) A city operations team accidentally triggers a database migration that locks the trip metadata table for 5 minutes

### Challenge Problem

**Global Outage Recovery Design**: Uber experiences a cascading failure in its dispatch system when a configuration change causes the Redis cluster storing driver positions to evict all keys simultaneously (a mass TTL expiration bug). All 3 million active drivers appear offline. Design a multi-layered recovery plan that:

- Immediately restores service with stale-but-safe state (show how you would reconstruct driver positions from the last 30 seconds of Kafka events)
- Prevents the mass-expiration bug from recurring (propose both a code-level fix and a circuit-breaking mechanism)
- Adds an independent fallback dispatch system that can operate with degraded functionality (text-based matching via SMS, basic geofence via precomputed city-grid) even if the entire Redis and Kafka infrastructure is unavailable
- Includes a runbook for the incident commander with clear go/no-go criteria for each recovery phase
- Estimates the recovery time objective (RTO) and recovery point objective (RPO) for each recovery tier

Your solution must consider that Uber operates in 70+ countries with different compliance requirements and that any recovery must not cause double-dispatch (two drivers assigned to the same rider). Additionally, consider the human factors: how do you communicate the outage to riders and drivers via in-app notifications, SMS, and social media? What do you tell the press? What regulatory reporting obligations are triggered in the EU (GDPR breach notification within 72 hours), California (CCPA), and India (IT Rules)?

Provide specific detail for each recovery tier:

**Tier 1 (Hot Standby — 30 second RTO):**
- Detail the Kafka replay mechanism: which Kafka consumer group reads which partitions, what offset management strategy is used, and how Flink state is reconstructed from the checkpoint
- Describe the validation gate: how does the system verify that reconstructed driver positions are consistent (no impossible speeds, no duplicate drivers) before re-enabling dispatch?

**Tier 2 (Warm Standby — 5 minute RTO):**
- Specify the fallback Redis cluster architecture: how is it kept warm, how does it differ from the primary cluster (larger TTLs? different eviction policy?), and what is the failover DNS mechanism?

**Tier 3 (Cold Standby — 30 minute RTO):**
- Design the SMS-based dispatch flow: how does a rider request a ride via SMS, how is the nearest available driver identified without real-time GPS, and how does the system prevent double-dispatch without Redis?
- Describe the precomputed city-grid fallback: a static grid of hexagons with baseline driver counts per time-of-day, used to estimate approximate availability without real-time data. How stale is this data (updated daily? weekly?), and how do you communicate uncertainty to the rider?

Present your answer as a structured incident response runbook with numbered phases, go/no-go criteria at each phase transition, and a post-mortem analysis section describing the root cause fix and preventative measures.
