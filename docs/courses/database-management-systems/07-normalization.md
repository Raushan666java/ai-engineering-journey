# Chapter 7 — Normalization

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) compute the closure of a set of functional dependencies; (2) compute the closure of an attribute set; (3) determine all candidate keys for a given relation; (4) compute a canonical cover; (5) identify violations of 1NF, 2NF, 3NF, and BCNF; and (6) decompose a relation into BCNF and 3NF while preserving dependencies.

## 7.1 Functional Dependencies

A functional dependency, denoted by alpha rarr beta, is a constraint on the legal instances of a relation. It states that for any two tuples t1 and t2, if t1[alpha] = t2[alpha], then t1[beta] must equal t2[beta]. In other words, the value of alpha uniquely determines the value of beta.

For example, in a relation Employee(emp_id, name, department, salary), the functional dependency emp_id rarr name, department, salary holds because each employee identifier corresponds to exactly one name, department, and salary.

Given a relation schema R, the set of all functional dependencies that must hold on every legal instance of R is denoted by F. Additional dependencies can be inferred from F using Armstrong's axioms.

Armstrong's axioms provide a sound and complete set of inference rules. Reflexivity: if beta is a subset of alpha, then alpha rarr beta. Augmentation: if alpha rarr beta, then alphagamma rarr betagamma for any gamma. Transitivity: if alpha rarr beta and beta rarr gamma, then alpha rarr gamma.

Additional rules can be derived. Union: if alpha rarr beta and alpha rarr gamma, then alpha rarr betagamma. Decomposition: if alpha rarr betagamma, then alpha rarr beta and alpha rarr gamma. Pseudo-transitivity: if alpha rarr beta and betagamma rarr delta, then alphagamma rarr delta.

## 7.2 Closure of an Attribute Set

The closure of an attribute set alpha under F, denoted by alpha-plus, is the set of all attributes that are functionally determined by alpha. The closure is computed by an iterative algorithm. Begin with closure = alpha. While there exists a functional dependency gamma rarr delta in F such that gamma is a subset of closure and delta is not a subset of closure, add delta to closure. Repeat until no more attributes can be added.

Attribute closure is used to determine candidate keys. A set of attributes alpha is a superkey if alpha-plus contains all attributes of R. Alpha is a candidate key if it is a minimal superkey. To determine all candidate keys, compute closures of all singleton attribute sets and incrementally expand until every attribute set whose closure covers R has been identified.

## 7.3 Canonical Cover

A canonical cover Fc is a minimal set of functional dependencies that is equivalent to F. A canonical cover has three properties. The right-hand side of every FD in Fc is a single attribute. No FD in Fc is redundant, meaning that removing any FD changes the closure. The left-hand side of every FD in Fc is minimal, meaning that no attribute can be removed from the left-hand side without changing the closure.

To compute a canonical cover, first decompose each FD so that the right-hand side is a single attribute. Then remove redundant FDs: for each FD in the set, test whether its removal affects the closure. Finally, minimize left-hand sides: for each FD with multiple attributes on the left, test whether removing an attribute from the left-hand side still yields an equivalent set of FDs.

## 7.4 Normal Forms

First normal form (1NF) requires that every attribute in a relation contain only atomic, indivisible values. Relations in the relational model are in 1NF by definition. However, real-world designs sometimes violate 1NF by storing sets or lists in a single attribute, which must be normalized by creating a separate relation.

Second normal form (2NF) eliminates partial dependencies. A relation is in 2NF if it is in 1NF and every non-primary-key attribute is fully functionally dependent on the entire primary key. Partial dependency occurs when a non-key attribute depends on only part of a composite primary key. Consider R(A, B, C, D) with primary key (A, B) and FDs A rarr C. The attribute C depends only on A, which is part of the primary key, violating 2NF. To normalize, decompose into R1(A, C) and R2(A, B, D).

Third normal form (3NF) eliminates transitive dependencies. A relation is in 3NF if it is in 2NF and no non-primary-key attribute is transitively dependent on the primary key. A transitive dependency occurs when a non-key attribute determines another non-key attribute. Consider R(A, B, C) with primary key A and FDs A rarr B, B rarr C. The attribute C is transitively dependent on A through B. To normalize, decompose into R1(A, B) and R2(B, C).

Formally, a relation schema R is in 3NF if for every non-trivial FD alpha rarr beta in F-plus, at least one of the following holds: alpha is a superkey, or each attribute in beta minus alpha is part of a candidate key.

## 7.5 Boyce-Codd Normal Form

BCNF is a stricter version of 3NF. A relation schema R is in BCNF if for every non-trivial FD alpha rarr beta in F-plus, alpha is a superkey. In BCNF, the only allowed dependencies are those where the left-hand side is a superkey.

The BCNF decomposition algorithm proceeds as follows. Given a relation R and a set F of FDs, if R is not in BCNF, identify a violating FD alpha rarr beta. Compute alpha-plus. Decompose R into (alpha-plus) and (R minus alpha-plus union alpha). Repeat recursively on each resulting relation until all are in BCNF.

BCNF decomposition is dependency-preserving if the union of FDs projected onto the decomposed relations is equivalent to the original F set. BCNF decomposition does not always preserve dependencies; in such cases, 3NF is preferred.

## 7.6 3NF Decomposition

The 3NF synthesis algorithm, due to Bernstein, always preserves dependencies. First, compute the canonical cover Fc. For each FD alpha rarr beta in Fc, create a relation with schema alphabetabeta. If no relation contains a candidate key of the original relation, create an additional relation whose attributes form a candidate key. Eliminate any relation that is a subset of another.

The resulting decomposition is dependency-preserving and lossless-join, meaning that the natural join of the decomposed relations recovers the original relation without spurious tuples.

## 7.7 Practical Design Considerations

Normalization theory provides formal guidance for schema design, but practical database design requires judgment. The normal forms eliminate specific classes of anomalies, but the resulting schemas may introduce performance problems due to increased join operations. A designer must understand the trade-offs.

An update anomaly occurs when a fact is stored redundantly and an update to that fact must be applied in multiple places. An insertion anomaly occurs when a fact cannot be recorded because some attribute values are unknown. A deletion anomaly occurs when deleting a fact inadvertently removes other facts. Each normal form eliminates one or more of these anomalies.

In practice, most database schemas are designed to 3NF or BCNF. Schemas in 1NF or 2NF are considered poorly designed and will exhibit update anomalies. Denormalization to lower normal forms may be justified for performance, but the designer must document the expected anomalies and implement compensating measures such as application-level consistency checks.

The normalization decision should be driven by the intended workload. A schema that is read-heavy and rarely updated may tolerate some redundancy. A schema that supports frequent updates to core business entities should be fully normalized. The decision should be made with an understanding of the specific anomalies that will arise and the cost of handling them.

## Summary

This chapter developed the theory of normalization. Functional dependencies capture semantic constraints on data. Attribute closure, canonical covers, and Armstrong's axioms provide the computational foundation. The normal forms from 1NF through BCNF each eliminate successively subtler forms of redundancy and update anomaly. The decomposition algorithms produce well-structured schemas, though the trade-off between BCNF and 3NF should be understood: BCNF may lose dependencies, while 3NF may permit residual redundancy.

## Exercises

### Review Questions

1. State Armstrong's reflexivity, augmentation, and transitivity rules.
2. What is the difference between a partial dependency and a transitive dependency?
3. Under what condition is a relation in BCNF but not in 3NF?
4. Why might BCNF decomposition fail to preserve dependencies?
5. What is the purpose of the canonical cover in the context of 3NF decomposition?

### Application Problems

1. Given R(A, B, C, D, E) and F = { A rarr BC, CD rarr E, B rarr D, E rarr A }: (a) compute the closure of A, (b) compute the closure of CD, (c) find all candidate keys, (d) determine the highest normal form of R.
2. Decompose R(A, B, C, D) with F = { A rarr B, BC rarr D, D rarr A } into BCNF. Is the decomposition dependency-preserving?
3. Given R(A, B, C, D, E) and F = { AB rarr C, C rarr D, D rarr E, E rarr A }: (a) find all candidate keys, (b) compute the canonical cover, (c) produce a 3NF decomposition.
4. Consider a relation Books(author, title, publisher, isbn, pub_year). Assume that isbn uniquely determines all attributes, and that each publisher has a unique name. Identify all FDs, candidate keys, and the highest normal form.

### Challenge Problem

Prove that the 3NF synthesis algorithm produces a lossless-join decomposition. Then construct an example relation and FD set for which no BCNF decomposition can preserve all functional dependencies. Prove that this is the case by showing that every possible BCNF decomposition loses at least one FD.
