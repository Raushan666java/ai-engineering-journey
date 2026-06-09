# Chapter 12 — Indexing

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) distinguish between ordered and hash indices; (2) differentiate between dense and sparse indices; (3) describe the structure and operations of B+ trees; (4) describe static, extensible, and linear hashing; (5) describe bitmap indices; and (6) evaluate index selection trade-offs.

## 12.1 Basic Concepts

An index is an auxiliary data structure that accelerates data access by providing efficient paths to tuples based on attribute values. Without an index, the DBMS must perform a sequential scan of the entire relation to locate tuples satisfying a condition. With a suitable index, the access cost can be reduced to logarithmic or constant time.

Every index is associated with a search key, which is a set of attributes used to look up tuples. The search key is distinct from the primary key: the search key may be any attribute or combination of attributes, and multiple indices may be defined on different search keys for the same relation. Each index contains entries in the form (search-key value, pointer). The pointer may reference the actual tuple directly or may reference the disk block containing the tuple.

## 12.2 Ordered Indices

Ordered indices maintain the search key values in sorted order. A primary index, also called a clustering index, determines the physical order of data records on disk. A relation can have at most one primary index because data records can be sorted in only one physical order. A secondary index maps search key values to records without affecting the physical order.

A dense index contains one index entry for every search key value in the relation. A sparse index contains one entry per data block. Sparse indices are smaller and thus faster to traverse, but they can only be used when the search key order matches the physical record order. Dense indices are necessary for secondary indices and for queries requiring verification of duplicate key existence.

The primary trade-off between dense and sparse indices is space versus access speed. Dense indices require more storage but always point directly to the desired record. Sparse indices require less storage but may require scanning a block after the initial lookup. For a primary index, a sparse index is typically sufficient.

Secondary indices must always be dense because the physical order of data does not correspond to the search key order. A secondary index on a non-key attribute may have duplicate search key values, which are typically handled by storing a list of pointers for each value.

## 12.3 B+ Tree Index Structure

The B+ tree is the most widely used index structure in relational database systems. It is a balanced tree structure that supports efficient insertion, deletion, and search operations with logarithmic cost.

A B+ tree consists of two types of nodes. Internal nodes contain between ceiling(n/2) and n pointers and between ceiling(n/2)-1 and n-1 key values, where n is the maximum fanout. Internal nodes direct the search toward the appropriate leaf node. Leaf nodes contain between ceiling(n/2) and n pointers and corresponding key values. Leaf nodes are linked together in a sequential chain, enabling efficient range queries.

All leaves are at the same depth, ensuring that every search path has the same length. The height of a B+ tree is logarithmic in the number of entries. For a typical fanout of 100, a tree with 10 million entries has a height of approximately 4.

Search in a B+ tree begins at the root and follows internal node pointers until reaching a leaf node. At each internal node, the search key is compared with the key values to determine the appropriate child pointer. At the leaf, a linear search identifies the correct entry.

Insertion first locates the correct leaf node. If the leaf has space, the entry is inserted in sorted order. If the leaf is full, it is split into two leaves, and the median key is promoted to the parent internal node. Splits may propagate upward; if the root splits, a new root is created and the height increases by one.

Deletion locates the entry, removes it, and may merge leaf nodes if they fall below the minimum occupancy. Merges may propagate upward. In practice, many implementations delay merging to avoid thrashing.

## 12.4 Hash Indices

Hash indices map search key values to bucket addresses using a hash function. The hash function should distribute values uniformly across buckets to minimize collisions.

Static hashing uses a fixed number of buckets. Queries are extremely efficient when there are no collisions: a single hash computation locates the desired bucket. However, collisions degrade performance, and the fixed bucket count makes static hashing unsuitable for growing databases.

Extensible hashing uses a directory of pointers to buckets. The global depth d determines the directory size: 2 to the power d entries. The hash function produces an integer, and the last d bits of the hash value index the directory. When a bucket overflows, it splits, the local depth is incremented, and the directory may double in size. Extensible hashing maintains good performance under growth because the directory expands as needed. However, the directory itself can become large, and the doubling operation is expensive.

Linear hashing avoids the directory structure of extensible hashing. Buckets are split in a predetermined linear order rather than splitting only overflowing buckets. A pointer tracks the next bucket to split. As new buckets are added, the hash function range gradually expands. Linear hashing uses a family of hash functions selected by a level parameter. The technique avoids the space overhead of a directory but may cause higher collision rates.

## 12.5 Bitmap Indices

Bitmap indices are designed for queries involving multiple Boolean or low-cardinality attributes. A bitmap index maintains a separate bitmap, which is a sequence of bits, for each distinct value of the indexed attribute. Each bit position corresponds to a tuple; the bit is set to 1 if the tuple possesses the attribute value.

Bitmap indices support efficient Boolean operations. Multiple bitmaps can be combined using bitwise AND, OR, and NOT operations, which can be executed extremely efficiently on modern hardware. Bitmap indices are particularly useful in data warehousing and decision support systems where queries involve complex combinations of conditions on low-cardinality attributes such as region, product category, or customer status.

The primary limitation of bitmap indices is that they are inefficient for high-cardinality attributes, where the number of distinct values is large. In such cases, the bitmap for each value becomes sparse, and the storage cost becomes prohibitive.

## 12.6 Index Trade-offs

The decision to create an index involves trade-offs. Indices accelerate read queries but slow down write operations because each index must be updated when the underlying data changes. The space overhead of indices must also be considered; a secondary index may require as much storage as the data itself.

Not all queries benefit from indices. A query that retrieves a large fraction of the relation will be faster with a sequential scan than with an index because the index lookup overhead per tuple is high. The break-even point is typically around 5 to 10 percent of the relation.

The query optimizer automatically considers available indices when choosing a query plan. The database administrator's task is to provide the optimizer with a useful set of indices without imposing excessive write overhead.

## Summary

This chapter surveyed indexing techniques. Ordered indices, particularly B+ trees, are the primary indexing mechanism in relational databases. Hash indices provide efficient equality lookups. Bitmap indices serve data warehousing needs. The selection of indices requires balancing query performance against write overhead and storage cost.

## Exercises

### Review Questions

1. What is the difference between a primary (clustering) index and a secondary index?
2. Under what conditions is a sparse index usable?
3. Why is the B+ tree height logarithmic in the number of entries?
4. How does extensible hashing handle bucket overflow?
5. What type of query workload benefits from bitmap indices?

### Application Problems

1. Given a relation with 1,000,000 tuples and an index with fanout 200, calculate the approximate height of the B+ tree. How many node accesses are required for a single equality lookup? For a range query returning 10,000 tuples?
2. Design a B+ tree insertion sequence for the values 1, 4, 7, 10, 13, 16, 19, 22, 25, 28 with a node capacity of 4 (3 keys, 4 pointers). Show the tree after each insertion. Trace the split propagation for the insertion that causes the root to split.
3. Compare the storage requirements of a dense primary index, a sparse primary index, and a secondary index on a relation with 500,000 tuples of 200 bytes each. Assume index entries are 12 bytes.

### Challenge Problem

Consider a B+ tree of order d (each node holds between d and 2d keys). Prove that any sequence of n insertions into an initially empty tree results in at most O(n/d) node splits. Then construct a worst-case insertion sequence that forces the maximum number of splits. How many splits does your sequence produce for d=2 and n=20?
