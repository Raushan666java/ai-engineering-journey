# Database Management Systems — A Complete University Textbook

## Course Description

This textbook provides a rigorous, comprehensive treatment of database management systems (DBMS), spanning foundational concepts through advanced implementation techniques. The material is appropriate for upper-division undergraduate and graduate-level courses in computer science and related disciplines. Each chapter integrates theoretical exposition with worked examples and progressively challenging exercises.

## Prerequisites

Students are expected to have a working knowledge of data structures, discrete mathematics, and proficiency in at least one general-purpose programming language. Prior exposure to file systems and operating system concepts is beneficial but not required.

## Organization

The text is divided into five thematic units comprising eighteen chapters. The first unit establishes the conceptual and architectural foundations of database systems. The second unit develops the relational model and the SQL language in depth. The third unit treats database design theory, including normalization and its practical implications. The fourth unit addresses transaction processing, concurrency control, and recovery mechanisms. The fifth unit surveys indexing, query processing, advanced data models including NoSQL and distributed databases, and database security.

## Chapter List

### Unit I — Foundations

| Chapter | Title | Topics |
|---------|-------|--------|
| 1 | Introduction | Database vs file system, DBMS functions, data models, three-schema architecture, data independence, DDL/DML/DCL |
| 2 | The Entity-Relationship Model | Entities, attributes, relationships, keys, ER diagrams, weak entities, specialization, generalization, aggregation |
| 3 | The Relational Model | Relation schema, keys, relational algebra, tuple calculus, domain calculus |

### Unit II — Structured Query Language

| Chapter | Title | Topics |
|---------|-------|--------|
| 4 | SQL — Basics | DDL statements, DML statements, SELECT queries, constraints, NULL handling |
| 5 | SQL — Joins and Subqueries | Join types, set operations, correlated and nested subqueries |
| 6 | SQL — Advanced Features | Aggregate functions, grouping, window functions, CTEs, recursive CTEs, pivot operations |

### Unit III — Database Design Theory

| Chapter | Title | Topics |
|---------|-------|--------|
| 7 | Normalization | Functional dependencies, Armstrong's axioms, closure, canonical cover, 1NF through BCNF |
| 8 | Higher Normal Forms | 4NF, 5NF, DKNF, denormalization, practical trade-offs |

### Unit IV — Transaction Processing

| Chapter | Title | Topics |
|---------|-------|--------|
| 9 | Transactions | ACID properties, schedules, serializability, precedence graphs, recoverability |
| 10 | Concurrency Control | Lock-based protocols, deadlock, timestamp protocols, validation, MVCC |
| 11 | Recovery | Failure classification, log-based recovery, checkpoints, ARIES, shadow paging |

### Unit V — Advanced Topics

| Chapter | Title | Topics |
|---------|-------|--------|
| 12 | Indexing | B+ trees, hash indices, bitmap indices, dense vs sparse, index trade-offs |
| 13 | Query Processing and Optimization | Selection/join algorithms, cost estimation, heuristic and cost-based optimization |
| 14 | NoSQL Databases | CAP theorem, data models, BASE, comparison with RDBMS, use cases |
| 15 | MongoDB | Document model, CRUD, indexing, aggregation, replication, sharding |
| 16 | Redis | Data structures, persistence, replication, pub/sub, caching |
| 17 | Distributed Databases | Fragmentation, replication, transparency, 2PC, 3PC, distributed query processing |
| 18 | Database Security | Access control, SQL injection, encryption, auditing, GDPR |

## How to Use This Text

Each chapter opens with a set of learning objectives that delineate the knowledge and skills the student should acquire. The theoretical exposition is interspersed with worked examples, SQL queries, and computational problems that illustrate the application of concepts. Every chapter concludes with a summary that recapitulates the principal ideas and three tiers of exercises. Review Questions test factual recall and conceptual understanding. Application Problems require synthesis of material and implementation of techniques demonstrated in the chapter. The Challenge Problem at the end of each chapter integrates multiple concepts, often requiring formal proofs, system design, or implementation in a programming language.

## Recommended Course Schedule

A one-semester course at the undergraduate level can cover the first fourteen chapters in sequence, with the remaining four chapters selected based on instructor emphasis. A suggested schedule allocates two weeks for Unit I (chapters 1 through 3), three weeks for Unit II (chapters 4 through 6), three weeks for Unit III (chapters 7 and 8), three weeks for Unit IV (chapters 9 through 11), and three weeks for selected topics from Unit V (chapters 12 through 18). Each chapter's Challenge Problem is appropriate for a term project or take-home examination.

## Supplementary Resources

Instructors may supplement this text with the following resources. SQL exercises can be practiced on any relational DBMS. The sample databases used in the exercises are available in a companion repository. Students are encouraged to experiment with EXPLAIN PLAN and query execution tools to develop an intuition for query optimization. For the NoSQL chapters, MongoDB and Redis are available as free community editions.

## Notation

Throughout this text, we adopt the following conventions. SQL keywords are rendered in uppercase for clarity. Relation names appear in italic typeface. Attribute names appear in monospace font when embedded in running text. We use the symbol r to denote a relation instance and R to denote a relation schema. Functional dependencies are written with a right arrow symbol. Set operations appear with standard mathematical notation. The symbol sigma denotes the selection operation in relational algebra, pi denotes projection, bowtie denotes natural join, and rho denotes rename.

## Acknowledgments

This text draws on the foundational contributions of Edgar F. Codd, Peter Chen, Jim Gray, Michael Stonebraker, and the many researchers and practitioners who have advanced the theory and practice of database management systems over the past five decades. The exercises and examples have benefited from classroom testing and the feedback of students and colleagues.

## About the Author

This textbook was developed for use in university-level database courses and is maintained as an open educational resource. Revisions and errata are tracked in the companion repository. Contributions, corrections, and suggestions for improvement are welcomed by the maintainers.
