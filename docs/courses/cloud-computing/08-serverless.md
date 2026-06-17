# Chapter 08: Serverless Computing

## Learning Objectives

- Define Serverless Computing and Function-as-a-Service (FaaS).
- Explain the event-driven execution model of serverless functions.
- Compare serverless architectures with traditional server-based models.
- Design an event-driven workflow using managed cloud services.
- Analyze the cost implications and scaling characteristics of serverless workloads.

---

## Theory

### What is Serverless Computing?
Serverless computing is a cloud execution model where the cloud provider dynamically manages the allocation and provisioning of servers. A serverless application runs in stateless compute containers that are event-triggered, ephemeral, and fully managed by the provider. The term "serverless" does not mean servers are not involved; rather, it means that the developers do not need to manage, patch, or scale the underlying infrastructure.

### Function-as-a-Service (FaaS)
FaaS is the core component of serverless computing. It allows developers to deploy individual pieces of logic (functions) that respond to events. Key characteristics of FaaS include:
- **Statelessness:** Functions do not persist state between executions. Any required state must be stored in external databases or object storage.
- **Ephemeral nature:** The execution environment exists only for the duration of the function call.
- **Auto-scaling:** The provider automatically scales the number of function instances based on the incoming request volume.
- **Micro-billing:** Users are charged based on the number of executions and the duration of execution (usually in milliseconds), rather than for idle server time.

![Serverless Architecture](../assets/images/diagrams/cloud-computing/ch08-serverless.png)

### Event-Driven Architectures
Serverless functions are typically part of an event-driven architecture. An event is a change in state or an update that happens in the cloud environment. Common event sources include:
- **Object Storage:** A new file is uploaded to an S3 bucket or Blob storage.
- **Database Streams:** A record is inserted or updated in a NoSQL database like DynamoDB.
- **HTTP Requests:** An API Gateway receives a REST or GraphQL request.
- **Message Queues:** A new message arrives in an SQS or Pub/Sub queue.
- **Scheduled Events:** A cron-like trigger executes a function at specific intervals.

---

## Examples

### Example 1: Image Thumbnail Generator (AWS Lambda)
This example demonstrates a common serverless pattern: processing a file upload using an event trigger.

**Workflow:**
1. A user uploads an image to an S3 bucket named `original-images`.
2. S3 triggers an AWS Lambda function.
3. The Lambda function retrieves the image, resizes it using a library like `Pillow`, and saves the thumbnail to a bucket named `resized-images`.

**Code Snippet (Python):**
```python
import boto3
import os
import sys
import uuid
from PIL import Image
import PIL.Image

s3_client = boto3.client('s3')

def resize_image(image_path, resized_path):
    with PIL.Image.open(image_path) as image:
        image.thumbnail((128, 128))
        image.save(resized_path)

def handler(event, context):
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        download_path = '/tmp/{}{}'.format(uuid.uuid4(), key)
        upload_path = '/tmp/resized-{}'.format(key)
        
        s3_client.download_file(bucket, key, download_path)
        resize_image(download_path, upload_path)
        s3_client.upload_file(upload_path, '{}-resized'.format(bucket), key)
```

**Expected Output:**
A new object appears in the `-resized` bucket shortly after an upload to the source bucket.

### Example 2: Serverless Web API (Azure Functions)
This example shows how to create a simple HTTP-triggered function that interacts with a database.

**Workflow:**
1. A client sends a POST request with JSON data to the function URL.
2. The Azure Function processes the data and saves it to Cosmos DB.
3. The function returns a success message to the client.

**Code Snippet (JavaScript):**
```javascript
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    if (name) {
        context.bindings.outputDocument = JSON.stringify({
            id: new Date().toISOString(),
            name: name
        });
    }

    context.res = {
        body: responseMessage
    };
}
```

---

## Summary

- Serverless computing abstracts infrastructure management, allowing developers to focus solely on code.
- Function-as-a-Service (FaaS) enables the execution of logic in response to discrete events.
- Serverless functions are stateless and ephemeral, requiring external services for persistence.
- Scaling is handled automatically by the cloud provider, providing high availability by default.
- Costs are calculated based on actual usage (executions and duration) rather than reserved capacity.
- Common use cases include data processing, web backends, scheduled tasks, and real-time streaming.

---

## Exercises

### Review Questions
1. What is the difference between "Cold Start" and "Warm Start" in the context of serverless functions?
2. Why is statelessness a fundamental requirement for serverless functions?
3. How does the billing model of AWS Lambda differ from that of an EC2 instance?
4. List three cloud services that can act as event sources for a serverless function.
5. What are the typical timeout limits for serverless functions, and why do they exist?

### Application Problems
1. Design a serverless workflow for a newsletter subscription service where a user submits an email via a web form, the email is validated, and then stored in a database.
2. A company wants to move its legacy nightly batch processing job (which takes 2 hours) to a serverless platform. Identify potential challenges and propose a solution.
3. Calculate the estimated monthly cost for a Lambda function that executes 5 million times per month, with an average duration of 200ms and 512MB of allocated memory.

### Challenge Problem
Design a multi-region serverless architecture that provides automatic failover for a REST API. Specify the components used for traffic routing, compute, and data synchronization across regions.