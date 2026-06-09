# Chapter 1 — Introduction to Database Management Systems

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) articulate the limitations of file-based data storage and the motivating factors for database systems; (2) enumerate and explain the core functions of a database management system; (3) distinguish among the hierarchical, network, and relational data models; (4) describe the three-schema architecture and the concept of data independence; and (5) differentiate among DDL, DML, and DCL statements.

## 1.1 Database versus File Systems

Before the advent of database management systems, data was stored and manipulated using conventional file systems. Applications read from and wrote to flat files using programming languages such as COBOL or C. This approach, while straightforward for small-scale use, suffers from several critical deficiencies. Data redundancy is rampant because each application maintains its own set of files, leading to duplicated storage and the attendant risk of inconsistency. When the same data appears in multiple files and is updated in only one location, the system enters an inconsistent state. File systems provide no mechanism for enforcing constraints; a program may write a negative age or a duplicate employee identifier without any intervention from the system. Atomicity guarantees are absent: if a file update is interrupted midway, the file may be left in a corrupt state. Concurrent access by multiple users leads to race conditions and lost updates because file systems offer no built-in concurrency control. Security is rudimentary, typically limited to operating-system-level file permissions that do not discriminate among different pieces of data within a file. Finally, file systems couple data and program logic tightly: a change in the physical layout of a file necessitates rewriting all programs that access that file.

A database management system addresses each of these deficiencies. A DBMS is a collection of interrelated data and a set of programs to access that data. It provides a centralized, controlled environment for defining, creating, querying, updating, and administering data. The DBMS insulates application programs from the physical details of data storage and offers declarative query interfaces that allow users to specify what data they want without specifying how to retrieve it.

## 1.2 Functions of a Database Management System

A DBMS provides the following essential functions. Data definition permits the specification of the structure, constraints, and metadata of the database. Data manipulation supports querying, insertion, modification, and deletion of data. Data storage and management handles the physical organization of data on disk. Transaction management ensures that multiple operations execute atomically, consistently, in isolation, and durably. Concurrency control coordinates simultaneous access by multiple users. Recovery management restores the database to a consistent state after a failure. Security administration controls access to data through authentication and authorization mechanisms. Integrity enforcement maintains the correctness and consistency of stored data. And the data dictionary, or system catalog, stores metadata about the database structure.

## 1.3 Data Models

A data model is a collection of conceptual tools for describing data, data relationships, data semantics, and consistency constraints. Three principal data models have historically dominated the field.

The hierarchical data model organizes data into a tree structure. Records are arranged as parent-child relationships, with each parent potentially having multiple children but each child having exactly one parent. The most prominent implementation was IBM's Information Management System (IMS). Traversal proceeds along predefined paths, and queries follow the hierarchical structure. The model is simple and efficient for certain structured data but lacks flexibility: a child record cannot participate in multiple parent relationships, many-to-many relationships are difficult to represent, and restructuring the hierarchy requires changing all access programs.

The network data model, standardized by the CODASYL committee, extends the hierarchical model by allowing a record to have multiple parents. Records are organized as a directed graph rather than a tree. The network model uses two constructs: record types and set types. A set type defines a one-to-many relationship between an owner record type and a member record type. Queries navigate the graph using a procedural language. The network model provides greater flexibility than the hierarchical model and can represent complex relationships efficiently. However, the navigational access path must be specified in advance, and the resulting programs are difficult to maintain and modify.

The relational data model, proposed by Edgar F. Codd in 1970, represents data as a collection of relations, each of which is a table consisting of rows and columns. The relational model is founded on the mathematical concept of a relation from set theory. It provides a declarative query interface: users specify what data they need, and the DBMS determines the optimal access strategy. This separation of logical and physical concerns is the model's defining advantage. The relational model supplanted its predecessors because of its simplicity, mathematical rigor, and data independence. Today, the overwhelming majority of enterprise databases are relational.

Later chapters also consider the entity-relationship model, which is a conceptual modeling tool rather than an implementation model, and NoSQL data models including document, key-value, column-family, and graph models.

## 1.4 DBMS Architecture and Data Independence

The three-schema architecture, sometimes called the ANSI-SPARC architecture, separates a database system into three levels. The internal schema describes the physical storage structure of the database, including file organizations, indexing strategies, and compression techniques. The conceptual schema describes the logical structure of the entire database, including entities, relationships, constraints, and security policies, independent of physical storage details. The external schema describes the view that specific user groups have of the database, possibly containing only a subset of the conceptual schema or presenting derived data.

Data independence is the ability to modify a schema at one level without requiring changes at the next higher level. Physical data independence is the capacity to modify the internal schema without altering the conceptual or external schemas. For example, adding an index to improve query performance should not require rewriting application queries. Logical data independence is the capacity to modify the conceptual schema without altering external schemas. For example, adding a new column to a relation should not require rewriting existing views. Logical data independence is harder to achieve than physical data independence because changes in the conceptual schema may affect the semantics visible to users.

A DBMS also typically maintains a data dictionary, or system catalog, which is a repository of metadata describing the database structure. The data dictionary stores information about all relations, attributes, indices, views, constraints, and security privileges in the system.

## 1.5 DDL, DML, and DCL

The Data Definition Language (DDL) is the subset of SQL used to define the database schema. DDL statements include CREATE, ALTER, and DROP. They specify relation schemas, attribute domains, integrity constraints, and index definitions. When the DDL processor executes a CREATE TABLE statement, it records the schema in the data dictionary.

The Data Manipulation Language (DML) is used to query and modify the data. DML can be procedural, in which the user specifies both what data is needed and how to retrieve it, or declarative, in which the user specifies only what data is needed. SQL is a declarative DML. DML statements include SELECT, INSERT, UPDATE, and DELETE.

The Data Control Language (DCL) manages security privileges and access rights. DCL statements include GRANT and REVOKE. These statements control which users can perform which operations on which database objects.

## 1.5 Users of a Database System

A DBMS supports multiple categories of users, each interacting with the system at different levels of abstraction. Database administrators (DBAs) are responsible for managing the database environment, including schema definition, storage structure configuration, performance tuning, backup and recovery planning, and security administration. The DBA uses DDL and DCL statements extensively and relies on administrative tools provided by the DBMS vendor.

Application developers write programs that interact with the database through DML statements embedded in host programming languages such as Java, Python, or C++. Application developers must understand the database schema, the available APIs, and the performance characteristics of queries.

End users interact with the database through pre-written applications or through query interfaces. Casual end users may issue ad-hoc queries using SQL or a graphical query tool. Sophisticated end users, such as data analysts, may write complex queries and perform data analysis using SQL, OLAP tools, or business intelligence platforms.

Naive end users interact with the database through parameterized forms and reports, often without any awareness that a database underlies the application. Examples include bank tellers processing transactions, airline reservation agents booking flights, and customers checking order status on an e-commerce website.

## 1.6 Evolution of Database Technology

Database technology has evolved through several generations. The first generation, spanning the 1960s and 1970s, featured the hierarchical and network models embodied in IMS and IDMS. These systems were efficient but required specialized programming skills and were difficult to modify.

The second generation, beginning with Codd's relational model in 1970 and maturing in the 1980s, saw the development of relational database systems such as IBM's System R, Oracle, DB2, Ingres, and later PostgreSQL and MySQL. The relational model's simplicity, data independence, and declarative query language led to widespread adoption.

The third generation, emerging in the 1990s and continuing through the 2000s, introduced object-relational databases that extended the relational model with user-defined types, inheritance, and methods. Systems such as PostgreSQL and Oracle supported these extensions. The same period saw the rise of data warehousing, OLAP, and business intelligence.

The fourth generation, beginning in the mid-2000s, encompasses NoSQL databases and NewSQL systems. NoSQL databases addressed scalability and schema flexibility requirements of web-scale applications. NewSQL systems sought to provide the horizontal scalability of NoSQL while retaining the ACID guarantees of traditional relational databases. Cloud databases, including Amazon Aurora, Google Cloud Spanner, and Snowflake, represent the latest evolution.

## Summary

This chapter established the motivation for database management systems by examining the shortcomings of file-based approaches. We surveyed the hierarchical, network, and relational data models, noting the relational model's dominance. The three-schema architecture was introduced as the foundation for data independence. We distinguished DDL, DML, and DCL, and surveyed the categories of database users and the evolution of database technology. Subsequent chapters build on this foundation by examining each component in detail.

## Exercises

### Review Questions

1. List four disadvantages of file-based data management when compared with a DBMS.
2. What is the difference between the conceptual schema and an external schema?
3. Explain the distinction between physical and logical data independence.
4. Name the three principal data models discussed in Section 1.3 and state one advantage of each.
5. Which types of SQL statements belong to DDL, DML, and DCL respectively?

### Application Problems

1. Suppose an organization maintains employee data in three separate flat files used by payroll, human resources, and benefits administration. An employee changes his or her home address. Explain all the scenarios in which inconsistency could arise across the three files.
2. Design a simple file-based system for a library and then redesign it as a database. List at least three operations that are easier or safer in the database version.
3. Given a relation schema R(A, B, C, D) with functional dependencies A rarr B and B rarr C, identify which level of schema would need to change and whether existing application programs would require modification if a new index is added on column D.

### Challenge Problem

Research the IMS hierarchical database system and the IDMS network database system. Write a comparative analysis of how each would represent a university database with students, courses, instructors, enrollment records, and departmental affiliations. Identify at least two relationships that are cumbersome to represent in each model and explain why the relational model handles these relationships naturally.
