# Chapter 8: Microservices and API Design

---

## Learning Objectives

- Evaluate the benefits and challenges of Monolithic vs. Microservices architectures
- Identify the role of the API Gateway in service abstraction and security
- Apply REST and gRPC principles to design robust, versioned APIs
- Discuss patterns for handling Distributed Transactions (e.g., Saga Pattern)

---

## Theory

### Evolution of Architecture
- **Monolith:** A single, unified software unit. Easy to develop and deploy initially, but becomes hard to scale and maintain as the team and codebase grow.
- **Microservices:** A suite of small, independent services, each running its own process and communicating via lightweight mechanisms (APIs). Each service is built around a specific business capability and can be written in different languages.

### The API Gateway
A server that acts as an entry point for all clients. It handles:
- **Routing:** Forwarding requests to the appropriate microservice.
- **Authentication/Authorization:** Centralizing security checks.
- **Rate Limiting:** Preventing abuse by limiting client requests.
- **Aggregation:** Combining data from multiple services into a single response (to reduce client-side "chattiness").

### API Design Principles
1. **Statelessness:** The server does not store client session data. Every request must contain all the information needed to process it.
2. **Versioning:** Using prefixes (e.g., `/v1/`, `/v2/`) to ensure backward compatibility when the API changes.
3. **Idempotency:** Designing APIs (especially `POST` and `PUT`) so that making the same request multiple times has the same effect as making it once.

### Challenges: Distributed Transactions
In microservices, a single business action might span multiple databases. Traditional ACID transactions don't work.
- **Saga Pattern:** A sequence of local transactions. Each transaction updates data within a single service and publishes an event. If one step fails, the Saga executes "compensating transactions" to undo the previous steps.

---

## Examples

### Example 1: Designing a RESTful User API
A well-designed API follows standard HTTP methods and status codes:
- `GET /v1/users/123`: Fetch user details. (200 OK)
- `POST /v1/users`: Create a new user. (201 Created)
- `PUT /v1/users/123`: Update user. (204 No Content)
- `DELETE /v1/users/123`: Remove user. (200 OK)

### Example 2: The Saga Pattern in Booking
A travel app books a flight and a hotel.
1. `FlightService`: Reserve seat (Success).
2. `HotelService`: Reserve room (Fail).
3. `Saga Orchestrator`: Trigger `FlightService.CancelReservation(seat_id)`.
This ensures data consistency without requiring a global "distributed lock."

---

## Summary

- Microservices provide organizational and technical scalability at the cost of operational complexity.
- API Gateways simplify client interactions and centralize cross-cutting concerns (Security, Monitoring).
- REST (HTTP/JSON) is the industry standard for public APIs; gRPC (HTTP2/Protobuf) is preferred for internal service-to-service communication.
- Versioning and Idempotency are non-negotiable for production-grade APIs.
- Sagas are the standard way to maintain eventual consistency across microservice boundaries.

---

## Exercises

### Review Questions
1. When should you stick with a Monolith instead of moving to Microservices?
2. List four responsibilities of an API Gateway.
3. Explain the difference between "Orchestration" and "Choreography" in the Saga pattern.
4. Why is gRPC considered faster than REST/JSON?

### Application Problems
1. **API Design:** Design a RESTful API for a "Library System." Include endpoints for searching books, borrowing a book, and returning a book. Specify the HTTP methods and expected status codes.
2. **Backward Compatibility:** You need to change the `user_id` field from an Integer to a UUID. How would you handle this change without breaking existing mobile apps using your API?
3. **Transaction Design:** Describe the "compensating transaction" steps for a food delivery app if the "Payment" succeeds but the "Restaurant" rejects the order.

### Challenge Problem
**The Microservice Dependency Hell:** Your system has 50 microservices. Service A calls B, which calls C, which calls D. One day, Service D starts responding slowly (latency increases from 50ms to 5s). Explain the "Cascading Failure" effect and how a **Circuit Breaker** pattern can prevent the entire system from crashing. Draw (or describe) the three states of a Circuit Breaker (Closed, Open, Half-Open).
