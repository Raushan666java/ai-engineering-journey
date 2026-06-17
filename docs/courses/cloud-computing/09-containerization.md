# Chapter 09: Containerization and Orchestration

## Learning Objectives

- Explain the difference between virtualization and containerization.
- Describe the architecture and components of Docker.
- Define the role of Kubernetes in container orchestration.
- Identify the key components of a Kubernetes cluster (Nodes, Pods, Services, Deployments).
- Compare managed Kubernetes services (EKS, AKS, GKE) and their benefits.

---

## Theory

### Containers vs. Virtual Machines
While Virtual Machines (VMs) virtualize the underlying hardware, containers virtualize the operating system.
- **Virtual Machines:** Include a full guest OS, a hypervisor, and virtualized hardware. They are hardware-independent but have higher overhead and slower boot times.
- **Containers:** Share the host OS kernel and isolate the application processes. They are lightweight, start in seconds, and ensure "it works on my machine" consistency across environments.

### Docker Fundamentals
Docker is the most popular platform for building, shipping, and running containers. Its architecture consists of:
- **Docker Engine:** The runtime that executes containers.
- **Dockerfile:** A text document containing all the commands a user could call on the command line to assemble an image.
- **Image:** A read-only template used to create containers. Images are built in layers.
- **Container:** A runnable instance of an image.
- **Registry:** A storage and distribution system for Docker images (e.g., Docker Hub, Amazon ECR).

![Containerization Architecture](../assets/images/diagrams/cloud-computing/ch09-containerization.png)

### Container Orchestration with Kubernetes
As the number of containers grows, managing them manually becomes impossible. Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.

**Key Kubernetes Objects:**
- **Pod:** The smallest deployable unit in Kubernetes, representing a single instance of a running process.
- **Node:** A worker machine (VM or physical) in Kubernetes.
- **Deployment:** Manages a set of identical Pods, handling updates and scaling.
- **Service:** An abstract way to expose an application running on a set of Pods as a network service.
- **Namespace:** Provides a mechanism for isolating groups of resources within a single cluster.

---

## Examples

### Example 1: Creating a Dockerized Web Application
This example shows how to package a simple Python Flask application into a Docker image.

**Dockerfile:**
```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

**Commands to Build and Run:**
```bash
docker build -t flask-app .
docker run -p 4000:80 flask-app
```

**Expected Output:**
Navigating to `http://localhost:4000` in a browser displays the application's response.

### Example 2: Deploying to Kubernetes
This example demonstrates a basic Kubernetes Deployment and Service manifest.

**deployment.yaml:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

**Command:**
```bash
kubectl apply -f deployment.yaml
```

**Expected Result:**
Kubernetes creates 3 Nginx pods and a LoadBalancer to distribute traffic among them.

---

## Summary

- Containers provide a lightweight, consistent environment for applications by sharing the host OS kernel.
- Docker simplifies the creation and distribution of container images.
- Kubernetes is the industry-standard orchestrator for managing large-scale container deployments.
- The control plane manages the cluster, while worker nodes execute the workloads.
- Declarative configuration (YAML) allows for version-controlled and reproducible infrastructure.
- Managed services like EKS, AKS, and GKE reduce the operational burden of managing the Kubernetes control plane.

---

## Exercises

### Review Questions
1. Why are containers considered more "efficient" than virtual machines in terms of resource utilization?
2. Explain the concept of "layers" in a Docker image.
3. What is the role of the `kube-scheduler` in a Kubernetes cluster?
4. Differentiate between a `ClusterIP`, `NodePort`, and `LoadBalancer` service type in Kubernetes.
5. What happens when a Pod in a Deployment fails?

### Application Problems
1. Write a `Dockerfile` for a Node.js application that uses `npm install` and starts the app with `node index.js`.
2. Create a Kubernetes YAML manifest that deploys 5 replicas of a Redis container and exposes it internally within the cluster.
3. A development team reports that an application works in their local Docker environment but fails when deployed to EKS. List three potential configuration differences to investigate.

### Challenge Problem
Design a CI/CD pipeline that automatically builds a Docker image from a GitHub repository, pushes it to a private registry (like Amazon ECR), and updates a Kubernetes Deployment in a production cluster. Specify the tools and steps involved.