# Chapter 2: Scalability and Load Balancing

---

## Learning Objectives

- Contrast vertical and horizontal scaling strategies and their physical limits
- Describe the architecture and function of Load Balancers at different OSI layers
- Evaluate various load balancing algorithms (Round Robin, Least Connections, Hashing)
- Identify the role of Reverse Proxies in system security and performance

---

## Theory

### The Scaling Dimensions
Scalability is the property of a system to handle a growing amount of work by adding resources.
- **Vertical Scaling (Scaling Up):** Adding more power (CPU, RAM, Disk) to an existing server. It is easy to implement but has a "ceiling" (hardware limits) and creates a single point of failure.
- **Horizontal Scaling (Scaling Out):** Adding more servers to the resource pool. This provides high availability and theoretically infinite scale but introduces complexity in networking and data consistency.

### Load Balancing (LB)
A Load Balancer is a device or software that acts as a reverse proxy and distributes network or application traffic across a number of servers.
- **L4 Load Balancing (Transport Layer):** Makes routing decisions based on IP addresses and TCP/UDP ports. It is extremely fast as it doesn't inspect the data packet content.
- **L7 Load Balancing (Application Layer):** Inspects the content of the request (HTTP headers, cookies, URL paths). This allows for "smart" routing, such as sending `/images` to one server pool and `/api` to another.

### Load Balancing Algorithms
1. **Round Robin:** Passes each new request to the next server in the line. Best when all servers have equal capacity.
2. **Least Connections:** Directs traffic to the server with the fewest active connections. Ideal for long-running requests.
3. **IP Hash:** Uses a hash of the client's IP address to assign a server. Ensures "sticky sessions" where a client consistently talks to the same server.

---

## Examples

### Example 1: NGINX as an L7 Load Balancer
NGINX is widely used as a software load balancer. Below is a configuration snippet showing how it distributes traffic and provides failover:
```nginx
upstream my_app {
    server 10.0.0.1;
    server 10.0.0.2;
    server 10.0.0.3 backup; # Used only when others fail
}

server {
    listen 80;
    location / {
        proxy_pass http://my_app;
    }
}
```
This demonstrates horizontal scaling where requests are distributed across three servers.

### Example 2: Handling Sticky Sessions with Hashing
In an e-commerce application, a user's shopping cart might be stored in a server's local memory (not recommended, but common in legacy systems). To ensure the user stays on the same server to access their cart, an **IP Hash** algorithm is used. If the user's IP is `192.168.1.1`, the hash might consistently resolve to `Server A`.

---

## Summary

- Scaling can be achieved by making a single machine stronger (Vertical) or adding more machines (Horizontal).
- Load Balancers are the "entry point" of a distributed system, ensuring no single server is overwhelmed.
- L4 LB is for raw speed; L7 LB is for sophisticated application-aware routing.
- Load balancing algorithms must be chosen based on the nature of the traffic and server capabilities.
- Health checks are vital for LBs to identify and stop sending traffic to failed servers.

---

## Exercises

### Review Questions
1. What is the "hardware ceiling" in the context of vertical scaling?
2. Explain the difference between a forward proxy and a reverse proxy.
3. Why might "Least Connections" be better than "Round Robin" for a video encoding service?
4. What happens to a "sticky session" if the assigned server crashes?

### Application Problems
1. **Algorithm Choice:** A system handles two types of requests: 10ms "Ping" requests and 2-minute "Data Export" requests. Which LB algorithm would you choose and why?
2. **Architecture Design:** Draw (or describe) a high-level design where an L4 load balancer distributes traffic to multiple L7 load balancers, which then talk to application servers. Why would someone use this "two-tier" LB approach?
3. **Capacity Planning:** A single server can handle 500 requests per second (RPS). If your peak traffic is 4,500 RPS, how many servers do you need at minimum, and how many would you deploy for "N+2" redundancy?

### Challenge Problem
**The Hotspot Problem:** You are using a **Consistent Hashing** algorithm to distribute users across 10 shards. You notice that 1% of your users are "power users" who generate 90% of the traffic, and they all happen to hash to the same two shards, causing them to crash. Propose a modification to the load balancing or partitioning strategy to mitigate this "hotspot" without moving all other users.
