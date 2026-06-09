# Chapter 1: Introduction to System Design

---

## Learning Objectives

- Define system design and distinguish it from software architecture and algorithm design
- Identify the key non-functional requirements: scalability, reliability, availability, and maintainability
- Explain the structured four-phase approach to solving system design problems
- Analyze foundational trade-offs such as Latency vs. Throughput and Cost vs. Performance

---

## Theory

### The Scope of System Design
System design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. While software architecture focuses on the high-level structure of a single application, system design addresses the complexities of distributed systems operating at massive scale. It requires a holistic understanding of how hardware, networking, databases, and application code interact.

### Key Non-Functional Requirements (NFRs)
Success in system design is measured by quality attributes beyond simple feature completeness.
- **Scalability:** The ability of a system to handle increasing load without performance degradation.
- **Reliability:** The probability that a system performs its intended function without failure for a specified interval.
- **Availability:** The percentage of time a system remains operational and accessible to users (e.g., "Five Nines" or 99.999%).
- **Maintainability:** The ease with which a system can be modified, repaired, or improved over time.

### The Four-Phase Design Process
To manage the ambiguity of large-scale problems, engineers use a structured approach:
1. **Requirements Gathering:** Clarifying functional goals and quantifying non-functional constraints.
2. **Back-of-the-envelope Estimation:** Calculating storage, traffic, and memory needs to guide technology choices.
3. **High-Level Design:** Mapping major components (LB, API Servers, Databases) and their connections.
4. **Detailed Deep Dive:** Optimizing specific bottlenecks and addressing failure modes.

---

## Examples

### Example 1: Defining Scale for a Global Service
Consider designing a system like Twitter. Functional requirements are simple (post a tweet, follow a user). However, the NFRs define the design:
- **Throughput:** 100k requests per second.
- **Latency:** < 200ms for timeline generation.
- **Storage:** 500 million tweets daily (~15 TB/day).
These constraints force a move away from a single database toward distributed architectures.

### Example 2: Trade-off Analysis in Latency vs. Throughput
In a logging system, you can optimize for **latency** by sending every log entry immediately via network, but this reduces **throughput** due to network overhead. Alternatively, you can batch logs and send them every 1 minute. This maximizes throughput but increases the latency between an event occurring and its appearance in the dashboard.

---

## Summary

- System design bridges the gap between functional requirements and the realities of distributed scale.
- Non-functional requirements (Scalability, Reliability, Availability) are the primary drivers of architectural decisions.
- A structured process—Gather, Estimate, Design, Deep Dive—is essential for managing complexity.
- All design decisions involve trade-offs; there is no single "correct" architecture, only one that is optimal for specific constraints.
- Back-of-the-envelope calculations are critical for validating the feasibility of a design.

---

## Exercises

### Review Questions
1. How does system design differ from algorithm design?
2. Define "Five Nines" availability and calculate the maximum allowed downtime per year.
3. What is the difference between horizontal and vertical scaling?
4. Why is requirements gathering considered the most critical phase of the design process?

### Application Problems
1. **Clarification:** You are asked to design "a news feed system." List five non-functional requirements you would ask about to clarify the scope.
2. **Estimation:** If a system stores 10 million images per day, and each image is 2MB on average, estimate the storage capacity needed for one year.
3. **Trade-offs:** Discuss the trade-offs of using a strongly consistent database versus an eventually consistent one for a "Like" counter on a viral post.

### Challenge Problem
**The Scaling Wall:** A legacy monolithic system currently handles 1,000 concurrent users on a single high-end server. The business expects a 100x increase in traffic next month. Explain why vertical scaling will fail and outline a high-level plan to transition the system to a horizontally scalable architecture.
