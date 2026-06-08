# Day 41 System Design: Document Similarity Service

This document expands the original `DOCUMENT_SIMILARITY_SYSTEM_DESIGN.md` with diagrams and a clear component breakdown.

## Purpose
Build a service that computes similarity between documents for plagiarism detection, recommended reads, or clustering.

## Components
- API: exposes endpoints to submit documents and request similarity checks
- Storage: object storage (S3) for documents, Postgres for metadata
- Processing: worker pool to compute embeddings and index documents
- Vector Index: FAISS or Annoy for ANN search
- Cache: Redis for recent queries
- Messaging: Kafka for job distribution

## Sequence Flow
1. Client uploads document -> API stores object and metadata -> produces job to Kafka
2. Worker picks job, computes embedding (transformer), stores vector in FAISS, indexes metadata in Postgres
3. Search: API queries FAISS for nearest neighbors, returns ranked list

## Diagram
(See `assets/document_similarity.svg` for architectural diagram)

## Considerations
- Use incremental indexing for new documents
- Use async processing with backpressure controls
- Use API rate limiting and authentication for protection

---
*Author: Placement Preparation*
