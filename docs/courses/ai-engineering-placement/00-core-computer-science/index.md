# Core Computer Science for AI Engineers

## Overview

This section bridges the gap between traditional computer science fundamentals and modern AI engineering. Each chapter is written from a practitioner's perspective — the way engineers at Google,.
Meta, and top AI labs think about these systems. You won't find academic proofs or textbook trivia here; you'll find the mental models,.
performance intuition, and practical knowledge that separates senior engineers from junior ones.

| # | Chapter | What You'll Learn | Why It Matters for AI |
|---|---------|-------------------|----------------------|
| 01 | [Computer Networks](01-computer-networks.md) | HTTP/2, TCP/IP, DNS, load balancing, CDN, WebSocket, gRPC, API gateways | Serving models, distributed training, edge inference, API design |
| 02 | [Operating Systems](02-operating-systems.md) | Processes, threads, memory management, file systems, I/O models, containers, cgroups | Containerization, resource isolation, performance tuning, debugging |
| 03 | [Database Internals](03-database-internals.md) | B-tree vs LSM, indexing, query planning, transactions, MVCC, replication, sharding, Raft | Data pipelines, feature stores, vector DBs, transaction design |
| 04 | [Computer Architecture](04-computer-architecture.md) | CPU pipeline, caching, NUMA, SIMD, GPU architecture, memory bandwidth, roofline model | Model optimization, inference latency, GPU utilization, quantization |
| 05 | [OOP & Design Patterns](05-oop-design-patterns.md) | SOLID, composition vs inheritance, GoF patterns, clean architecture, functional vs OOP | Framework design, codebases at scale, API design, maintainable AI systems |
| 06 | [Ethical Hacking & Security Case Studies](06-ethical-hacking.md) | threat actors, Salt Typhoon, UPI fraud, Wi-Fi/mobile attacks, legal framework, defenses | Securing AI infrastructure, fraud detection, compliance, incident response |

## Learning Path

1. Start with **Computer Networks** — every AI system is a distributed system
2. Then **Operating Systems** — containers and resource management are daily reality
3. Follow with **Database Internals** — data is the foundation of ML
4. Study **Computer Architecture** — understand why your model runs slow/fast
5. Finish with **OOP & Design Patterns** — write code that scales with your team

Each chapter follows the same structure: Learning Objectives, Theory, TypeScript Examples, Summary, Practical Takeaways, Chapter Quiz (5 MCQ), and Exercises.

> **Start**: [01 — Computer Networks →](01-computer-networks.md)
