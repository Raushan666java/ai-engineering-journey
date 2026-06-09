# Chapter 8 — Higher Normal Forms

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) identify multi-valued dependencies and determine when a relation violates 4NF; (2) decompose a relation into 4NF; (3) recognize join dependencies and 5NF; (4) state the domain-key normal form; and (5) evaluate the practical trade-offs involved in denormalization.

## 8.1 Multi-valued Dependencies

A multi-valued dependency (MVD), denoted by alpha rarrrarr beta, captures a constraint in which the set of values of beta is independent of the set of values of the remaining attributes. Formally, given a relation r with attributes R, let gamma = R minus (alpha union beta). The MVD alpha rarrrarr beta holds if for any two tuples t1 and t2 with t1[alpha] = t2[alpha], there exist tuples t3 and t4 such that t3[alpha] = t1[alpha], t3[beta] = t1[beta], t3[gamma] = t2[gamma], and t4[alpha] = t1[alpha], t4[beta] = t2[beta], t4[gamma] = t1[gamma].

Intuitively, the MVD means that the values of beta are independent of the values of gamma given a fixed value of alpha. Every functional dependency is also a multi-valued dependency: if alpha rarr beta, then alpha rarrrarr beta. However, the converse does not hold.

Consider a relation Projects(emp_id, skill, language). An employee may have multiple skills and may speak multiple languages. These are independent attributes. The relation contains redundancy because each skill is repeated for each language. The MVDs emp_id rarrrarr skill and emp_id rarrrarr language hold.

## 8.2 Fourth Normal Form

Fourth normal form (4NF) eliminates redundancy caused by multi-valued dependencies. A relation R is in 4NF if it is in BCNF and for every non-trivial MVD alpha rarrrarr beta in F-plus, alpha is a superkey.

The 4NF decomposition algorithm is analogous to BCNF decomposition. Given a relation R and a set of FDs and MVDs, if R is not in 4NF, identify a violating MVD alpha rarrrarr beta. Decompose R into (alpha union beta) and (R minus beta). Repeat recursively until all relations are in 4NF.

Using the earlier example, Projects(emp_id, skill, language) violates 4NF because emp_id is not a superkey but emp_id rarrrarr skill holds. Decompose into EmployeeSkill(emp_id, skill) and EmployeeLanguage(emp_id, language). Both resulting relations are in 4NF.

## 8.3 Join Dependencies and Fifth Normal Form

A join dependency (JD), denoted by bowtie {R1, R2, Rk}, states that a relation is equal to the natural join of its projections onto the attribute sets R1 through Rk. A relation satisfies a join dependency if it can be losslessly decomposed into those projections and then reconstructed via natural join.

Fifth normal form (5NF), also called project-join normal form (PJNF), requires that every join dependency in the relation be implied by the candidate keys. Formally, a relation R is in 5NF if for every non-trivial JD bowtie {R1, R2, Rk}, each Ri is a superkey of R.

A join dependency is trivial if one of the Ri equals the entire relation. The non-trivial case typically arises when a relation represents a ternary or higher-degree relationship that must be decomposed into its component binary relationships.

Consider a relation Supply(supplier, part, project) with the constraint that if supplier s supplies part p and supplier s supplies project j and part p is used in project j, then supplier s supplies part p to project j. This constraint cannot be expressed as a functional or multi-valued dependency but can be expressed as the JD bowtie { {supplier, part}, {part, project}, {supplier, project} }. If this JD holds and is not implied by candidate keys, the relation is not in 5NF.

In practice, 5NF violations are rare, and the decomposition may introduce more complexity than it resolves. Most database designs that are in 4NF are acceptably normalized.

## 8.4 Domain-Key Normal Form

Domain-key normal form (DKNF) is the ultimate normal form in which all constraints are enforced purely through domain constraints and key constraints. A relation is in DKNF if every constraint on the relation is a logical consequence of the domain constraints and the key constraints.

A schema in DKNF has the property that all integrity constraints can be checked simply by verifying domain membership and key uniqueness. No additional check constraints or assertion mechanisms are required. Achieving DKNF is difficult in practice because many real-world constraints cannot be expressed as domain or key constraints alone.

## 8.5 Denormalization and Practical Trade-offs

Normalization is not an end in itself but a means to eliminate update anomalies and redundancy. In practice, designers sometimes deliberately denormalize a schema by combining relations that satisfy higher normal forms. Denormalization trades update-time correctness for query-time performance.

The typical motivation for denormalization is query performance. A fully normalized schema may require many joins for common queries, and join operations are expensive, especially on large datasets. By storing redundant data, a denormalized schema can reduce the number of joins required.

However, denormalization introduces update anomalies. When the same fact is stored in multiple places, updates must be applied consistently in every location, or the database becomes inconsistent. Denormalization may be justified when the database is predominantly read-only, when query performance is critical, or when the data warehouse context favors star schemas and snowflake schemas over normalized designs.

The decision to denormalize should be made carefully, with a clear understanding of the query patterns, update frequency, and acceptable levels of inconsistency. In many cases, materialized views and indexes can achieve performance goals without sacrificing normalization.

## 8.6 Comparison of Normal Forms

The normal forms form a strict hierarchy. Every relation in BCNF is also in 3NF. Every relation in 3NF is also in 2NF. Every relation in 2NF is also in 1NF. Similarly, every relation in 4NF is in BCNF, and every relation in 5NF is in 4NF. The hierarchy is: 5NF subset of 4NF subset of BCNF subset of 3NF subset of 2NF subset of 1NF.

Each progressively stricter normal form eliminates additional anomalies. A relation in 1NF eliminates repeating groups. A relation in 2NF eliminates partial dependencies. A relation in 3NF eliminates transitive dependencies. A relation in BCNF eliminates dependencies where the determinant is not a candidate key. A relation in 4NF eliminates non-trivial multi-valued dependencies that are not implied by candidate keys. A relation in 5NF eliminates join dependencies not implied by candidate keys.

In practice, achieving BCNF or 3NF is the standard target for most database designs. Fourth normal form is targeted when multi-valued dependencies are identified. Fifth normal form is rarely pursued because violations are uncommon and the resulting decomposition may introduce more complexity than it resolves.

## 8.7 Normalization and Performance

Normalization should not be viewed as a purely mechanical process. The normalized schema provides a clean, anomaly-free representation of the data. However, queries on a normalized schema may require many joins, and joins are among the most expensive database operations. The physical database design process, which occurs after logical schema design, addresses performance through indexing, materialized views, and selective denormalization.

The relationship between normalization and performance is sometimes misunderstood. Normalization does not cause poor performance in itself. Poor performance is caused by the absence of appropriate access structures. A fully normalized schema with appropriate indexes often outperforms a denormalized schema without indexes because the optimizer can choose among alternative access paths.

Denormalization becomes relevant when queries require data from multiple relations and the join overhead is unacceptable despite indexing. In such cases, the designer may selectively denormalize by storing redundant data while maintaining application-level consistency. This decision should be documented, and the expected anomalies should be clearly identified.

## Summary

This chapter extended normalization theory beyond BCNF. Multi-valued dependencies and 4NF address a class of redundancy not captured by functional dependencies. Join dependencies and 5NF handle higher-order constraints. DKNF represents the theoretical ideal. The normal forms form a strict hierarchy, and achieving BCNF or 3NF is the standard target for most practical designs. The practical decision to denormalize should be based on concrete performance requirements and an understanding of the trade-offs involved.

## Exercises

### Review Questions

1. How does a multi-valued dependency differ from a functional dependency?
2. What is the 4NF decomposition rule?
3. How does a join dependency differ from a multi-valued dependency?
4. Why is 5NF rarely pursued in practice?
5. What conditions might justify denormalization?

### Application Problems

1. Given R(A, B, C, D) with MVDs A rarrrarr B and A rarrrarr C, and FD A rarr D: (a) identify the candidate keys, (b) determine the highest normal form, (c) decompose into 4NF.
2. Consider a relation CourseInstructor(instructor, course, textbook) where an instructor teaches a course using one set of textbooks, and multiple instructors may teach the same course using different textbooks. Identify the MVDs and normalize to 4NF.
3. A relation Salesperson(car, customer, color) records which car each salesperson sold to which customer and the car's color. If a salesperson sells a particular model in a particular color and a customer buys that model in that color from that salesperson, then the relation records exactly that triple. Is this relation in 5NF? Justify your answer.

### Challenge Problem

Research the concept of embedded join dependencies and prove that any relation with a join dependency that is not implied by candidate keys must have a specific structure. Construct a concrete example of a relation in 4NF that is not in 5NF, showing all data and the join dependency. Explain why this redundancy cannot be detected by functional or multi-valued dependency analysis alone.
