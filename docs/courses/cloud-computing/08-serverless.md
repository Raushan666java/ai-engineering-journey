# Chapter 8: Serverless Computing

## Learning Objectives

After completing this chapter, students will be able to:

1. Explain the serverless computing model and its benefits over traditional infrastructure.
2. Create and configure AWS Lambda functions with appropriate triggers and settings.
3. Design Step Functions workflows for complex orchestration.
4. Configure API Gateway REST and HTTP APIs with usage plans and throttling.
5. Implement EventBridge event-driven architectures.
6. Integrate SQS and SNS for decoupled messaging.
7. Apply serverless best practices for performance, security, and cost.

## Theory

### 8.1 Serverless Computing Overview

Serverless computing is a cloud execution model where the cloud provider manages the infrastructure, automatically allocating and scaling compute resources based on demand. The term "serverless" does not mean servers are absent; rather, servers are abstracted away from the developer. Developers write and deploy code without provisioning, managing, or scaling servers. Serverless computing is event-driven: code executes in response to triggers such as HTTP requests, database changes, file uploads, or scheduled events.

The key characteristics of serverless computing are: no server management (the provider handles all infrastructure), automatic scaling (from zero to thousands of concurrent executions), pay-per-execution billing (charged for compute time consumed, no cost when idle), and built-in fault tolerance and availability. Serverless is ideal for event-driven workloads, intermittent traffic patterns, and applications where operational overhead reduction is prioritized over granular infrastructure control.

### 8.2 AWS Lambda

AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources. Lambda supports multiple programming languages: Node.js, Python, Java, Go, Ruby, .NET Core, and custom runtimes.

**Functions.** A Lambda function is the fundamental unit of deployment. Each function consists of code, a runtime configuration, and function settings (memory, timeout, IAM role, environment variables, VPC configuration, and triggers). Functions are versioned and can have aliases (dev, staging, production) for traffic shifting.

**Triggers (Event Sources).** Lambda functions are invoked by triggers. Synchronous invocation: API Gateway, ALB, Cognito, Lex, Alexa. The caller waits for the function to complete and receives the response. Asynchronous invocation: S3, SNS, EventBridge, SQS, CloudWatch Logs. The event is queued by Lambda; the function processes it when capacity is available. Stream-based invocation: DynamoDB Streams and Kinesis. Lambda polls the stream and processes batches of records.

**Runtimes.** AWS provides managed runtimes for popular languages. Custom runtimes can be created using the Lambda Runtime API. Container images (up to 10 GB) are supported for functions packaged as Docker images. The Runtime API handles the communication between the Lambda service and the function code.

**Layers.** Lambda layers are ZIP archives containing libraries, custom runtimes, or other dependencies. Layers allow sharing code across functions without duplication. A function can use up to five layers. The Lambda service extracts layers into the `/opt` directory.

**Cold Starts and Warm Starts.** A cold start occurs when a new Lambda execution environment is created, requiring code download and initialization before the handler runs. Cold starts add latency (100ms to several seconds depending on runtime and package size). Warm starts reuse existing execution environments. Strategies to mitigate cold starts: provisioned concurrency (keep specified number of environments warm), lower timeout settings, smaller function packages, and minimizing initialization code. Java and .NET runtimes experience longer cold starts than Python and Node.js.

**Concurrency and Throttling.** Concurrency is the number of function executions at any given time. The default account-level concurrency limit is 1,000 per region (can be raised). Reserved concurrency guarantees a set number of concurrent executions for a specific function and also acts as a throttle. Provisioned concurrency pre-initializes execution environments. When concurrency is exceeded, additional invocations are throttled (return 429 TooManyRequests for synchronous, queued for asynchronous).

**Memory and Timeout.** Lambda memory can be configured from 128 MB to 10,240 MB (in 1 MB increments). CPU allocation scales proportionally with memory. Network throughput also scales with memory allocation. The default timeout is 3 seconds, maximum is 15 minutes. For longer-running processes, use Step Functions or container-based compute.

**Environment Variables.** Environment variables are key-value pairs available to the function code at runtime. They are encrypted at rest with KMS and can store configuration values, database connection strings, and feature flags. Sensitive values should be encrypted.

**Lambda Function URLs.** Function URLs provide dedicated HTTPS endpoints for Lambda functions without requiring API Gateway. They support CORS configuration and IAM-based or NONE (public) auth types. Function URLs are ideal for webhook receivers and simple API endpoints.

**Lambda in VPC.** Lambda functions can access resources in a VPC (RDS, ElastiCache, internal ALBs) by attaching to VPC subnets and security groups. VPC-enabled functions use Elastic Network Interfaces (ENIs) in the VPC. VPC functions incur a cold start penalty because ENI setup takes additional time. Lambda cannot access the internet from a VPC without a NAT gateway.

**Best Practices.** Separate business logic from event handler code, minimize deployment package size, use environment variables for configuration, implement idempotent function logic (handle duplicate invocations), set appropriate memory and timeout values based on profiling, use dead letter queues for async invocation failures, implement structured logging with JSON, and use AWS X-Ray for tracing and debugging.

### 8.3 AWS Step Functions

Step Functions is a serverless orchestration service that coordinates multiple AWS services into flexible, visual workflows. Step Functions uses state machines to define workflows as a series of steps (states).

**State Types.** Task states perform a unit of work (invoke a Lambda function, run a batch job, post to an SNS topic). Choice states branch execution based on conditions. Parallel states execute multiple branches concurrently. Map states iterate over items in a dataset. Wait states pause execution for a specified duration. Pass states pass input to output without processing. Succeed/ Fail states terminate execution successfully or with failure.

**Workflows.** Standard workflows are designed for long-running, durable workflows (up to one year). Express workflows are designed for high-volume, event-processing workflows (up to five minutes). Standard workflows cost more per state transition but provide exactly-once execution. Express workflows provide at-least-once execution at lower cost.

**Error Handling.** Step Functions supports retry and catch on task failures. Retry specifies the maximum attempts, backoff rate, and interval. Catch defines fallback states on specific error types. This eliminates the need for custom error handling code in Lambda functions.

**Callbacks with Task Tokens.** Step Functions can pause execution and wait for external systems to report completion using task tokens. Use cases include human approval workflows, third-party API calls with callbacks, and long-running processes that exceed Lambda's 15-minute timeout.

### 8.4 Amazon API Gateway

API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale. It handles all aspects of API management including traffic management, authorization, throttling, monitoring, and API versioning.

**API Types.** REST APIs offer API management features (usage plans, API keys, caching, throttling, request/response transformation). HTTP APIs are lower-latency, lower-cost APIs designed for Lambda and HTTP backends. HTTP APIs offer a subset of REST API features. WebSocket APIs maintain persistent connections for real-time two-way communication.

**Stages and Deployments.** APIs are deployed to stages (e.g., dev, staging, production). Each stage has its own endpoint URL, stage variables, and throttling settings. Canary deployments send a percentage of traffic to a different API version.

**API Keys and Usage Plans.** API keys are alphanumeric tokens identifying API consumers. Usage plans define throttling and quota limits for API keys. Combined with usage plans, API keys enable monetization of APIs and rate limiting by customer tier.

**Throttling and Caching.** API Gateway throttles requests at the account level (default 10,000 requests per second per region) and at the method level. When throttled, clients receive 429 TooManyRequests responses. API Gateway can cache responses for a configurable TTL (default 300 seconds), reducing backend load and improving latency.

**Authorization.** IAM authorization uses IAM policies and SigV4 signing. Lambda authorizers (formerly custom authorizers) validate tokens or credentials using Lambda. Cognito user pools integrate with API Gateway for JWT-based authentication.

**Request/Response Transformation.** API Gateway can transform requests before forwarding to the backend and responses before returning to clients. Transformation uses Apache Velocity Template Language (VTL) for REST APIs. HTTP APIs support request/response parameters directly.

### 8.5 Amazon EventBridge

EventBridge is a serverless event bus service connecting applications using events. It ingests events from AWS services, custom applications, and SaaS partners, then routes them to targets based on rules.

**Events.** Events are JSON structures representing a change in state. Each event contains a source, detail-type, resources, time, and a detail object with event-specific data. EventBridge enforces a schema registry for event structure validation.

**Event Buses.** A default bus ingests AWS service events automatically. Custom event buses receive events from custom applications. Partner event buses receive events from SaaS partners (Datadog, Zendesk, PagerDuty, Segment). Event buses can be cross-account and cross-region.

**Rules and Targets.** Rules match incoming events using event patterns and route them to targets. A single rule can route to multiple targets. Targets include Lambda, Step Functions, SQS, SNS, Kinesis, and API Gateway. EventBridge supports input transformation before delivering to targets.

**EventBridge Pipes.** Pipes provides point-to-point integration between event sources and targets with optional filtering, enrichment, and transformation. Sources include DynamoDB Streams, Kinesis, SQS, and MSK. Enrichment can use Lambda or Step Functions. Pipes simplifies common integration patterns compared to building custom consumers.

**Schemas and Schema Registry.** EventBridge discovers and stores event structure as schemas. Schema registries support multiple schema formats (JSON Schema, Avro). Code bindings can be generated for TypeScript, Java, and Python, enabling type-safe event processing.

### 8.6 Amazon SQS (Simple Queue Service)

SQS is a fully managed message queuing service for decoupling application components. SQS supports two queue types: standard queues (high throughput, at-least-once delivery, best-effort ordering) and FIFO queues (exactly-once processing, first-in-first-out ordering, up to 3,000 messages per second with batching).

**Message Lifecycle.** Producers send messages to the queue. Messages are stored redundantly across multiple availability zones. Consumers poll the queue and receive messages. After processing, consumers delete messages from the queue. If not deleted within the visibility timeout, the message becomes visible again for other consumers.

**Dead-Letter Queues (DLQ).** Messages that fail processing multiple times are moved to a DLQ. The maximum receives setting determines when a message is moved. DLQs prevent problematic messages from blocking the queue.

**Delay Queues and Message Timers.** Delay queues postpone the delivery of new messages (up to 15 minutes). Message timers delay delivery of individual messages.

**Visibility Timeout.** When a consumer receives a message, it becomes invisible to other consumers for the visibility timeout duration. If the consumer does not delete the message within this period, it becomes visible again. Visibility timeout should balance processing time against reprocessing risk.

### 8.7 Amazon SNS (Simple Notification Service)

SNS is a fully managed pub/sub messaging service. Publishers send messages to topics, and messages are delivered to all subscribed endpoints. Endpoint types include SQS, Lambda, HTTP/HTTPS, email, SMS, mobile push, and EventBridge.

**Fan-Out Pattern.** SNS fans out messages to multiple subscribers. Combined with SQS, this enables parallel processing of the same event by multiple consumers. The SNS-to-SQS pattern provides reliable delivery (SQS persistence) and independent processing.

**Message Filtering.** SNS message filtering allows subscribers to receive only a subset of messages based on filter policies. Filter policies are JSON objects with conditions (exact match, prefix, suffix, numeric ranges, exists, and anything-but).

**FIFO Topics.** FIFO topics guarantee message ordering and exactly-once delivery to SQS FIFO queues. FIFO topics support filter policies and message deduplication using message group IDs and deduplication IDs.

## Examples

### Example 8.1: Create a Lambda Function

```bash
# Create a Lambda function
aws lambda create-function \
  --function-name process-order \
  --runtime python3.12 \
  --role arn:aws:iam::123456789:role/lambda-execution-role \
  --handler handler.lambda_handler \
  --zip-file fileb://function.zip \
  --memory-size 512 \
  --timeout 30 \
  --environment Variables={TABLE_NAME=Orders}

# Add an S3 trigger
aws lambda create-event-source-mapping \
  --function-name process-order \
  --event-source-arn arn:aws:s3:::my-bucket \
  --events s3:ObjectCreated:*
```

### Example 8.2: Step Functions State Machine

```json
{
  "Comment": "Order processing workflow",
  "StartAt": "ValidateOrder",
  "States": {
    "ValidateOrder": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123:function:validate-order",
      "Next": "ProcessPayment",
      "Retry": [
        {
          "ErrorEquals": ["States.ALL"],
          "IntervalSeconds": 5,
          "MaxAttempts": 3,
          "BackoffRate": 2.0
        }
      ],
      "Catch": [
        {
          "ErrorEquals": ["ValidationError"],
          "Next": "OrderFailed"
        }
      ]
    },
    "ProcessPayment": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123:function:process-payment",
      "Next": "FulfillOrder"
    },
    "FulfillOrder": {
      "Type": "Parallel",
      "Branches": [
        {
          "StartAt": "UpdateInventory",
          "States": {
            "UpdateInventory": {
              "Type": "Task",
              "Resource": "arn:aws:lambda:us-east-1:123:function:update-inventory",
              "End": true
            }
          }
        },
        {
          "StartAt": "NotifyCustomer",
          "States": {
            "NotifyCustomer": {
              "Type": "Task",
              "Resource": "arn:aws:lambda:us-east-1:123:function:notify-customer",
              "End": true
            }
          }
        }
      ],
      "Next": "OrderCompleted"
    },
    "OrderFailed": {
      "Type": "Fail",
      "Error": "ValidationError",
      "Cause": "Order validation failed"
    },
    "OrderCompleted": {
      "Type": "Succeed"
    }
  }
}
```

### Example 8.3: API Gateway with Lambda Proxy

```bash
# Create REST API
aws apigateway create-rest-api --name "Order API"

# Get root resource ID
aws apigateway get-resources --rest-api-id abc123

# Create resource and method
aws apigateway create-resource \
  --rest-api-id abc123 --parent-id root-id --path-part orders

aws apigateway put-method \
  --rest-api-id abc123 --resource-id res-id \
  --http-method POST --authorization-type NONE

# Integrate with Lambda
aws apigateway put-integration \
  --rest-api-id abc123 --resource-id res-id \
  --http-method POST --type AWS_PROXY \
  --integration-http-method POST \
  --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:123:function:process-order/invocations

# Deploy API
aws apigateway create-deployment \
  --rest-api-id abc123 --stage-name prod
```

## Summary

Serverless computing abstracts infrastructure management, enabling developers to focus on code. AWS Lambda runs code in response to events with automatic scaling and pay-per-execution pricing. Step Functions orchestrates complex workflows with error handling and parallel execution. API Gateway provides API management with throttling, caching, authorization, and request transformation. EventBridge enables event-driven architectures with rules, schemas, and Pipes. SQS decouples application components through message queuing, while SNS provides pub/sub messaging with fan-out and filtering. Serverless best practices include minimizing cold starts, using provisioned concurrency, implementing idempotent handlers, and choosing appropriate memory and timeout settings.

## Exercises

### Review Questions

1. What distinguishes serverless computing from traditional infrastructure models?
2. Explain the difference between synchronous and asynchronous Lambda invocations.
3. What causes Lambda cold starts, and what strategies mitigate them?
4. How do reserved concurrency and provisioned concurrency differ?
5. Describe the five state types in Step Functions and their use cases.
6. Compare REST APIs and HTTP APIs in API Gateway.
7. How does EventBridge differ from SQS for event-driven integration?
8. Explain the SNS fan-out pattern and its benefits for event processing.
9. What is a dead-letter queue and when should it be used?
10. How does Lambda handle VPC access, and what are the performance implications?

### Application Problems

1. A video processing application uploads files to S3, transcodes them (which may take 30 minutes), generates thumbnails, updates a database, and notifies the user. Design a serverless architecture using Lambda, Step Functions, S3 events, and SNS.

2. An e-commerce platform experiences variable traffic with peaks at 10,000 orders per minute. Each order requires payment processing (300ms), inventory update (200ms), shipping label generation (500ms), and customer notification. Design a serverless order processing pipeline.

3. A company receives webhook events from 50 SaaS services at varying rates up to 5,000 events per second. Events must be filtered, enriched, and routed to different processing pipelines based on event type. Design an EventBridge architecture covering event buses, rules, schema registry, and Pipes.

4. A mobile app backend serves 100,000 users across REST and WebSocket APIs. The API is consumed by iOS, Android, and web clients. Design the API Gateway architecture including API type selection, authentication, throttling per client type, caching, and custom domain configuration.

### Challenge Problem

Design a complete serverless architecture for a food delivery platform servicing 5 million users across 50 cities. Requirements: customers place orders through mobile and web apps, restaurants manage menus and accept/reject orders, drivers receive delivery assignments via mobile app, real-time order tracking for customers, surge pricing during peak hours, scheduled orders for future delivery, payment processing with multiple providers, push notifications for order status changes, and analytics pipeline for business intelligence. Your design must include: Lambda function breakdown by domain, API Gateway configuration for mobile and web APIs, Step Functions workflow for order lifecycle (submit, accept, prepare, pickup, deliver, complete), EventBridge event schema for order domain events, SQS/SNS topology for decoupled communication, real-time WebSocket architecture for driver and customer tracking, error handling and retry strategy, cold start mitigation approach, estimated cost per 1,000 orders, and monitoring/observability design.
