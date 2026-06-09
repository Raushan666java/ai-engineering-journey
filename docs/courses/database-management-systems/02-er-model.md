# Chapter 2 — The Entity-Relationship Model

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) identify and construct the fundamental components of an ER diagram, including entities, attributes, and relationships; (2) classify attributes as simple or composite, single-valued or multivalued, stored or derived; (3) define keys and distinguish among superkeys, candidate keys, primary keys, and foreign keys in the ER context; (4) model weak entities and their identifying relationships; and (5) apply specialization, generalization, and aggregation to complex modeling scenarios.

## 2.1 Entities and Attributes

The entity-relationship (ER) model, introduced by Peter Chen in 1976, is a conceptual data model that facilitates the design of databases at a high level of abstraction. The fundamental construct is the entity, which is a distinguishable object in the real world. An entity may be concrete, such as a specific student named Alice Zhang, or abstract, such as the course CS 101. An entity set is a collection of entities that share the same properties; for example, all students enrolled at a university form the entity set Student.

Each entity is described by a set of attributes. An attribute is a property that takes a value from a domain. The domain of an attribute defines the set of permissible values. For the entity set Student, attributes could include student_id, name, date_of_birth, email, phone_numbers, and gpa.

Attributes are classified along several dimensions. A simple attribute is atomic and cannot be subdivided, such as student_id. A composite attribute can be decomposed into smaller components; for instance, the attribute name can be divided into first_name, middle_initial, and last_name. A single-valued attribute holds at most one value for any given entity; student_id is single-valued because each student has exactly one identifier. A multivalued attribute may hold multiple values; phone_numbers is multivalued because a student may register several telephone numbers. A stored attribute is persisted in the database; date_of_birth is stored. A derived attribute can be computed from other attributes; age is derived from date_of_birth and the current date.

In ER diagrams, entity sets are represented as rectangles, attribute names appear as ovals connected to their entity, composite attributes are composed of subordinate ovals, multivalued attributes appear as double ovals, and derived attributes appear as dashed ovals.

## 2.2 Relationships

A relationship is an association among two or more entities. A relationship set is a collection of relationships of the same type. For example, the relationship set Enrolls associates students with courses; each relationship in the set pairs a particular student with a particular course.

The degree of a relationship set is the number of entity sets that participate. A unary relationship involves one entity set and is typically recursive; for example, the relationship Manages within an Employee entity set pairs a manager with subordinate employees. A binary relationship involves two entity sets and is the most common form. A ternary relationship involves three entity sets; for example, a doctor prescribes a medication to a patient involves three participants.

The cardinality ratio of a relationship set constrains the number of entities from one entity set that can be associated with entities from another. In a one-to-one (1:1) relationship, each entity in A is associated with at most one entity in B and vice versa. In a one-to-many (1:N) relationship, each entity in A can be associated with multiple entities in B, but each entity in B is associated with at most one entity in A. In a many-to-many (M:N) relationship, each entity in A can be associated with multiple entities in B and vice versa; the enrollment relationship between Student and Course is typically M:N.

Participation constraint specifies whether every entity in a set must participate in a relationship. Total participation requires that every entity in the set must appear in at least one relationship. Partial participation allows entities to exist without participating. In ER diagrams, relationship sets are rendered as diamonds, and cardinality constraints are labeled adjacent to the connecting lines.

## 2.3 Keys

A superkey is a set of one or more attributes whose values uniquely identify an entity within an entity set. A candidate key is a minimal superkey, meaning that no proper subset of it is a superkey. The primary key is the candidate key chosen by the database designer as the principal means of identification. Attributes of the primary key are underlined in ER diagrams.

For a weak entity set, which lacks sufficient attributes to form a primary key, its entities are identified through their relationship with another entity set. The weak entity must participate totally in an identifying relationship with the owner entity set, and the combination of the weak entity's partial key and the owner's primary key forms the primary key of the weak entity set. In ER diagrams, weak entity sets appear as double rectangles, their identifying relationships as double diamonds, and partial key attributes as dashed underlines.

## 2.4 ER Diagram Notation

Standard ER diagram notation uses the following conventions. Rectangles represent entity sets. Double rectangles represent weak entity sets. Diamonds represent relationship sets. Double diamonds represent identifying relationships. Ovals represent attributes. Double ovals represent multivalued attributes. Dashed ovals represent derived attributes. Underlined attribute names indicate primary key attributes. Dashed underlines indicate partial key attributes. Lines connect entity sets to relationships and attributes. Cardinality ratios (1:1, 1:N, M:N) are written adjacent to the relationship.

## 2.5 Specialization, Generalization, and Aggregation

Specialization is the process of defining a set of subclasses of an entity type. Each subclass inherits all attributes and relationships of the superclass and may define additional attributes or participate in additional relationships. For example, the entity set Person can be specialized into Student and Instructor. Student inherits all Person attributes and adds student_id and major. Specialization is depicted as a triangle labeled ISA connecting the subclass to the superclass.

Generalization is the inverse process: extracting common features from multiple entity sets to form a higher-level entity set. Generalization and specialization are two perspectives on the same modeling mechanism and are represented identically in ER diagrams.

Constraints on specialization include disjointness and completeness. Disjointness, denoted by the symbol d, requires that an entity belong to at most one subclass. Overlapping, denoted by the symbol o, permits an entity to belong to multiple subclasses. Total specialization, also called total participation, requires that every superclass entity belong to at least one subclass. Partial specialization allows entities that are not members of any subclass.

Aggregation is an abstraction that treats a relationship set as a higher-level entity set for purposes of another relationship. Aggregation is used when a relationship set must participate in a relationship with another entity set. In ER diagrams, aggregation is rendered as a dashed rectangle containing the aggregated relationship and its participating entity sets.

## 2.6 Transforming ER Diagrams into Relational Schemas

The ER model is a conceptual tool; the relational model is the implementation target. Transforming an ER diagram into a relational schema follows systematic rules.

Each regular entity set maps to a relation. The attributes of the relation are the attributes of the entity set. The primary key of the entity set becomes the primary key of the relation. Composite attributes are flattened into their constituent simple attributes. Multivalued attributes require a separate relation with the primary key of the entity set and the multivalued attribute.

Each relationship set maps to a relation. For a binary 1:N relationship, the primary key of the entity on the N side is merged into the relation on the N side as a foreign key. For a binary 1:1 relationship, the foreign key can be placed in either relation, typically the one with total participation. For a binary M:N relationship, a new relation is created containing the primary keys of both participating entity sets as foreign keys, and the combination forms the primary key. Attributes of the relationship set are included in this relation.

Weak entity sets map to a relation whose primary key combines the primary key of the owner entity set with the partial key of the weak entity. The identifying relationship does not require a separate relation because the foreign key and primary key combination already captures the dependency.

Specialization and generalization can be represented using several strategies. In the ER-to-relational mapping, each subclass may map to its own relation containing the primary key of the superclass and the subclass-specific attributes. Alternatively, the entire ISA hierarchy may be collapsed into a single relation with nullable attributes for subclass-specific features, or each subclass may be stored in a separate relation that includes all attributes, both inherited and specific, but this approach loses the connection between superclass and subclass entities.

## Summary

The ER model is the most widely used conceptual data modeling tool in database design. It provides a rich vocabulary for describing entities, their attributes, and their interrelationships. This chapter covered the full range of ER constructs: entity sets, attribute types, relationship sets with their degree, cardinality and participation constraints, keys including the special case of weak entities, and the abstraction mechanisms of specialization, generalization, and aggregation. Mastery of the ER model is essential before proceeding to the logical design phase, where ER diagrams are transformed into relational schemas using systematic mapping rules.

## Exercises

### Review Questions

1. Distinguish between an entity and an entity set.
2. What is the difference between a composite attribute and a multivalued attribute?
3. Define the term cardinality ratio and give one example for each of 1:1, 1:N, and M:N.
4. What is a weak entity set, and what condition must it satisfy to be representable in a database?
5. Explain the difference between specialization and generalization.

### Application Problems

1. Draw an ER diagram for a university database with the following requirements. Instructors have a unique identifier, name, department, and rank. Courses have a unique course number, title, credits, and a syllabus. Students have a unique identifier, name, and major. Each course is taught by exactly one instructor. A student may enroll in multiple courses, and each course may have multiple enrolled students. Each enrollment carries a grade. Represent all entities, attributes, relationships, and cardinality constraints.
2. Design an ER diagram for a hospital management system covering patients, doctors, nurses, rooms, and appointments. Include at least one weak entity and one unary relationship.
3. For the university database in Problem 1, identify all composite, multivalued, and derived attributes that might be appropriate.

### Challenge Problem

Consider the following real-world scenario. An airline reservation system must manage airplanes, airports, flights, passengers, bookings, and crew assignments. Each flight is operated by one airplane but may have multiple crew members. Crew members include pilots and flight attendants, each with distinct attributes. Flights are scheduled between airports with departure and arrival times. A passenger may book multiple flights in a single reservation. Construct a comprehensive ER diagram. Then identify any modeling scenario where aggregation is needed and explain why a direct relationship would be inadequate.
