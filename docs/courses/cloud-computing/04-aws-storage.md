# Chapter 4: AWS Storage

## Learning Objectives

After completing this chapter, students will be able to:

1. Explain the S3 data model: buckets, objects, keys, and versioning.
2. Implement S3 lifecycle policies for cost-optimized data management.
3. Configure S3 replication for cross-region and same-region scenarios.
4. Select appropriate S3 storage classes based on access patterns and cost.
5. Apply S3 encryption options: SSE-S3, SSE-KMS, SSE-C, and client-side encryption.
6. Generate and use presigned URLs for temporary object access.
7. Configure S3 static website hosting with custom domain and HTTPS.
8. Design CloudFront distributions with multiple origins, behaviors, and cache policies.

## Theory

### 4.1 Amazon S3 Overview

Amazon Simple Storage Service (S3) is a highly durable, scalable, and secure object storage service. S3 provides 99.999999999% (11 nines) durability and 99.99% availability for objects stored in Standard storage class. Data is stored redundantly across multiple devices and multiple facilities within an AWS region. S3 is designed to scale to exabytes of data and millions of requests per second.

S3 is object storage, not block or file storage. Objects are stored in a flat namespace organized by buckets. Each object consists of data, metadata, and a unique key (identifier). The maximum object size is 5 TB. For objects larger than 5 GB, multipart upload is required (and is recommended for objects over 100 MB for improved throughput and resiliency).

### 4.2 Buckets and Objects

**Buckets.** A bucket is a container for objects stored in S3. Buckets have a globally unique name across all AWS accounts and regions. Bucket names must be DNS-compliant: 3-63 characters, lowercase, no underscores, and no IP address format. Each bucket is created in a specific region and data never leaves that region unless explicitly configured through cross-region replication.

**Objects.** Objects are the fundamental entities stored in S3. Each object is identified by a key, which is the full path to the object (e.g., `photos/2024/vacation/beach.jpg`). Although S3 presents a hierarchical view through key prefix delimiters (typically `/`), the underlying storage is flat. The key is simply a string that identifies the object.

**Metadata.** Objects include system metadata (content-type, content-length, last-modified, ETag) and user-defined metadata (key-value pairs prefixed with `x-amz-meta-`). User-defined metadata cannot be changed after upload; the object must be copied to update metadata.

### 4.3 Versioning

Versioning preserves all versions of an object, including overwrites and deletes, enabling recovery from accidental deletion and rollback to previous versions. Versioning must be explicitly enabled on a bucket and cannot be disabled (only suspended). When versioning is enabled, each object upload generates a unique version ID. Deleting an object with versioning enabled creates a delete marker rather than removing the object. Permanent deletion requires specifying the version ID.

Versioning integrates with lifecycle policies to automatically delete old versions based on age and with replication to replicate all versions across regions.

### 4.4 Lifecycle Policies

Lifecycle policies automate the transition of objects between storage classes and the expiration (deletion) of objects. Rules apply to a bucket or a prefix/tag filter. Transition actions move objects to colder storage classes after a specified number of days: Standard to Standard-IA after 30 days, to One Zone-IA after 60 days, to Glacier Instant Retrieval after 90 days, to Glacier Flexible Retrieval after 180 days, to Glacier Deep Archive after 365 days. Expiration actions permanently delete objects after a specified age, including automatically cleaning up incomplete multipart uploads and expired object delete markers.

### 4.5 Replication

**Cross-Region Replication (CRR).** CRR automatically replicates objects across AWS regions. Use cases include compliance requirements for geographic data distribution, reduced latency by keeping data closer to users in different regions, and disaster recovery preparedness. CRR requires versioning enabled on both source and destination buckets.

**Same-Region Replication (SRR).** SRR replicates objects within the same region. Use cases include aggregating logs from multiple buckets into a single bucket, configuring live replication between production and test environments, and meeting compliance requirements for data isolation.

**Replication Rules.** Source bucket prefix or tags, destination bucket (in the same or different account), IAM role for replication permissions, and choice of replicate or delete marker status. Replication Time Control (RTC) guarantees 15-minute replication SLA for compliance workloads.

### 4.6 Storage Classes

**S3 Standard.** Designed for frequently accessed data requiring low latency and high throughput. 99.99% availability, 11 nines durability, replicates across a minimum of three availability zones. Suitable for cloud-native applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics.

**S3 Intelligent-Tiering.** Automatically moves objects between access tiers based on changing access patterns with zero performance impact and no retrieval charges. Monitoring and automation costs apply per object. Objects not accessed for 30 consecutive days are moved to Infrequent Access tier; after 90 days, Archive Instant Access tier. This class is ideal for data with unknown or unpredictable access patterns.

**S3 Standard-IA.** For data accessed less frequently but requiring rapid access when needed. Lower storage cost than Standard but with a per-GB retrieval fee. 99.9% availability. Suitable for backups, disaster recovery data, and long-term storage.

**S3 One Zone-IA.** Same characteristics as Standard-IA but stored only in a single availability zone. 99.5% availability. Costs 20% less than Standard-IA. Suitable for re-creatable data, secondary backup copies, and data that can be easily regenerated.

**S3 Glacier Instant Retrieval.** Archive storage with millisecond retrieval for data accessed once per quarter. Lowest-cost archive storage for data requiring immediate access.

**S3 Glacier Flexible Retrieval.** Low-cost archive storage with retrieval times from minutes to hours. Free data retrieval for bulk retrievals (5-12 hours). Ideal for backup archives, disaster recovery data, and long-term retention.

**S3 Glacier Deep Archive.** Lowest-cost storage class for data accessed rarely (once or twice per year). Retrieval time is 12 hours for standard and 48 hours for bulk. Suitable for regulatory archives, digital preservation, and data retention for years.

**S3 on Outposts.** Object storage for on-premises AWS Outposts environments, providing S3 API compatibility for data that must remain on-premises.

### 4.7 Encryption

**SSE-S3 (Server-Side Encryption with S3-Managed Keys).** S3 manages the encryption keys using AES-256. Each object is encrypted with a unique key; the key is encrypted with a master key that rotates regularly. Minimal configuration overhead; just add `x-amz-server-side-encryption: AES256` header.

**SSE-KMS (Server-Side Encryption with AWS KMS).** Uses AWS Key Management Service for key management. Provides separate permissions for key usage, audit trails showing who used which key, and control over key rotation and policies. Additional cost per KMS operation. Use `x-amz-server-side-encryption: aws:kms` header.

**SSE-C (Server-Side Encryption with Customer-Provided Keys).** The customer provides the encryption key in the request; S3 encrypts the object and discards the key. The same key is required for decryption. Keys are never stored by AWS. Suitable for organizations with strict key management requirements.

**Client-Side Encryption.** Data is encrypted before being sent to S3. The customer manages the entire encryption process. AWS does not have access to the encryption keys and cannot decrypt the data. AWS provides the S3 Encryption Client library for this purpose.

### 4.8 Presigned URLs

A presigned URL grants temporary access to a specific S3 object. The URL embeds query string authentication parameters with an expiration timestamp. Anyone with the URL can access the object for the specified duration. Presigned URLs are used for: allowing users to upload files directly to S3 without AWS credentials, generating time-limited download links for paid content, providing temporary access to private objects, and enabling browser-based uploads using HTTP PUT.

### 4.9 Static Website Hosting

S3 can host static websites (HTML, CSS, JavaScript, images) without a web server. The bucket must be configured for static website hosting, and public access must be allowed through a bucket policy. The website is accessible at a regional S3 endpoint. A custom domain can be mapped using Amazon Route 53, and CloudFront is recommended for HTTPS and improved performance.

### 4.10 Additional S3 Features

**S3 Select.** Allows retrieving a subset of data from an object using SQL expressions without downloading the entire object. Works with CSV, JSON, and Parquet formats. Improves performance for large object analysis by up to 400%.

**S3 Batch Operations.** Performs bulk actions on billions of objects across regions. Actions include copying objects, setting object tags, restoring archived objects, invoking Lambda functions, and replacing access control lists (ACLs). Batch operations use S3 inventory to identify target objects.

**Access Control.** Bucket policies (resource-based JSON policies), IAM policies (identity-based), Access Control Lists (ACLs, legacy), and S3 Object Ownership. AWS recommends using bucket policies and IAM policies with the bucket owner enforced setting (Object Ownership) to disable ACLs.

**Access Points.** Named network endpoints attached to buckets with dedicated access policies. Simplify managing access to shared datasets by creating unique access points for each application or user group. Each access point has its own policy and network controls (VPC origin restriction).

**Multi-Region Access Points.** Provide a single global endpoint spanning buckets in multiple regions. Automatically route requests to the nearest bucket based on latency, and provide automatic failover in case of regional disruption.

### 4.11 Amazon CloudFront

CloudFront is AWS's content delivery network (CDN), delivering data, video, applications, and APIs to users globally with low latency and high transfer speeds. CloudFront has over 600 points of presence (edge locations) worldwide.

**Distributions.** A distribution defines the configuration for content delivery: origins (S3, EC2, ELB, Lambda, custom origin), behaviors (path patterns, cache policies, allowed HTTP methods, TTL settings), error pages, geo-restrictions, and SSL/TLS certificates.

**Origins.** An origin is the source location of the content. S3 buckets are the most common origin. Application origins include Application Load Balancers, EC2 instances, and custom HTTP servers. Each distribution can have multiple origins with different path-based behaviors.

**Behaviors.** Behaviors map URL path patterns to origins and cache settings. A distribution can have a default behavior (catch-all) and multiple additional behaviors for specific paths like `/api/*` or `/images/*`. Each behavior specifies: origin, viewer protocol policy (HTTP-only, redirect-to-HTTPS, HTTPS-only), allowed HTTP methods, cache policy, origin request policy, response headers policy, and Lambda@Edge associations.

**Cache Policies.** Cache policies control how CloudFront caches responses. They define TTL settings (minimum, default, and maximum), cache key settings (which headers, cookies, and query strings are included in the cache key), and compression support. Cache policies support both CloudFront-managed (preset) and custom configurations.

**Origin Shield.** Origin Shield is a regional caching layer that reduces load on the origin by consolidating requests from edge locations in the region. Origin Shield increases cache hit ratio and reduces origin latency by aggregating requests. Available at an additional cost.

**Lambda@Edge.** Lambda functions that execute in response to CloudFront events: viewer request, viewer response, origin request, and origin response. Use cases include: authentication and authorization at the edge, manipulating headers or cookies, URL rewrites and redirects, content generation or modification, A/B testing, and bot detection.

**Signed URLs and Signed Cookies.** Signed URLs provide access to individual files (one URL per file). Signed cookies provide access to multiple files (a single cookie grants access to all files under a path). Both are used for distributing premium content, restricting access to paying users, and creating time-limited access. CloudFront signed URLs work differently from S3 presigned URLs and are independent of them.

### 4.12 S3 Access Control Best Practices

AWS recommends using S3 Block Public Access settings at both the account level and bucket level to prevent data exposure. The four block public access settings are: BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy, and RestrictPublicBuckets. Account-level block public access is a recommended security baseline. S3 Object Ownership ("bucket owner enforced" setting) should be used to disable ACLs and simplify permissions. S3 Access Analyzer identifies buckets accessible from outside the AWS account.

## Examples

### Example 4.1: S3 Operations with CLI

```bash
# Create a bucket
aws s3 mb s3://my-unique-bucket-name --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \
  --bucket my-unique-bucket-name \
  --versioning-configuration Status=Enabled

# Upload a file with server-side encryption
aws s3 cp myfile.txt s3://my-unique-bucket-name/ \
  --sse AES256

# Set a lifecycle policy
aws s3api put-bucket-lifecycle-configuration \
  --bucket my-unique-bucket-name \
  --lifecycle-configuration file://lifecycle.json
```

### Example 4.2: Generate a Presigned URL

```bash
# Generate a presigned URL valid for 1 hour (3600 seconds)
aws s3 presign s3://my-bucket/myfile.txt --expires-in 3600

# Generate a presigned URL from Python
# import boto3
# url = boto3.client('s3').generate_presigned_url(
#     'get_object',
#     Params={'Bucket': 'my-bucket', 'Key': 'myfile.txt'},
#     ExpiresIn=3600
# )
```

### Example 4.3: CloudFront Distribution with S3 Origin

```bash
# Create a CloudFront distribution with an S3 origin
aws cloudfront create-distribution \
  --origin-domain-name my-bucket.s3.us-east-1.amazonaws.com \
  --default-root-object index.html \
  --enabled

# Invalidate cached objects
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"
```

## Summary

Amazon S3 provides highly durable, scalable object storage with 11 nines durability. Objects are stored in buckets within a flat namespace. Versioning preserves all object versions. Lifecycle policies automate storage class transitions for cost optimization. Replication provides cross-region and same-region data duplication. Six storage classes from Standard to Glacier Deep Archive accommodate different access patterns and cost requirements. Encryption options range from S3-managed to customer-provided keys. Presigned URLs provide temporary object access. S3 serves as a static website host. CloudFront CDN delivers content globally with edge caching, Lambda@Edge for edge compute, and signed URLs for access control. Storage best practices include blocking public access by default, enforcing encryption, and implementing lifecycle policies.

## Exercises

### Review Questions

1. What are the five characteristics of S3 object storage? How does object storage differ from block and file storage?
2. How does S3 achieve 99.999999999% durability?
3. Explain the S3 storage classes and recommend a storage class for the following: a) frequently accessed website images, b) regulatory archives accessed yearly, c) data with unpredictable access patterns.
4. How do S3 lifecycle policies reduce storage costs? Provide a sample lifecycle transition sequence.
5. Compare SSE-S3, SSE-KMS, SSE-C, and client-side encryption. When would you use each?
6. What is a presigned URL and what are common use cases?
7. Describe the relationship between CloudFront distributions, origins, and behaviors.
8. How does Origin Shield improve CloudFront performance?
9. What is the difference between CloudFront signed URLs and signed cookies?
10. Explain S3 Cross-Region Replication and its primary use cases.

### Application Problems

1. A media company uploads 5 TB of video files daily. Viewers access videos within the first week (frequent access), after which views drop sharply. After 90 days, videos are rarely accessed but must be available within 5 minutes. After 2 years, videos must be retained for archival purposes but retrieval within 24 hours is acceptable. Design an S3 lifecycle policy and recommend storage classes for each phase.

2. A global SaaS application needs to serve static assets (JavaScript, CSS, images) to users in North America, Europe, and Asia-Pacific with sub-100ms latency. Assets are stored in an S3 bucket in us-east-1. Design a CloudFront solution including distribution configuration, cache policy TTLs, origin shield placement, and any additional optimization strategies.

3. A document management system stores private legal documents in S3. Users need time-limited access to download specific documents via email links. Design the access control architecture using presigned URLs, including expiration strategy, key management, and security considerations.

4. An organization must replicate all S3 objects from us-east-1 to eu-west-1 for disaster recovery and from us-east-1 to us-west-2 for local user access. Design the replication configuration including versioning requirements, IAM roles, and handling of existing objects.

### Challenge Problem

Design a comprehensive S3 and CloudFront architecture for a global video streaming platform. Requirements: 100 million users, 50 PB of video content, content must be available in 20+ languages with subtitle files, premium content requires user authentication and time-limited access, videos must be protected against hotlinking, hot content is served from CDN while cold content transitions to archive storage, the platform must log all access and support content takedown requests within 24 hours, and monthly storage costs must not exceed $2 million. Your design must address: S3 bucket structure and organization naming convention, lifecycle policy design for the three content tiers (hot, warm, cold), CloudFront distribution configuration with multiple origins and behaviors, signed URL or signed cookie strategy for premium content, security controls for hotlink protection and geo-restriction, logging and audit architecture integrating CloudTrail and S3 access logs, replication strategy for content distribution and disaster recovery, and cost analysis with estimated monthly costs per storage tier.
