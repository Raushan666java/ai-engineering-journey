# Chapter 5: Containerization with Docker

---

## Learning Objectives

- Explain the difference between Virtual Machines and Containers.
- Understand the core components of Docker: Engine, Images, Containers, and Registries.
- Write a Dockerfile to package a simple application.
- Manage container lifecycles using the Docker CLI.
- Use Docker Volumes and Networks for data persistence and communication.

---

## Theory

![Containerization with Docker and Kubernetes Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch04-containers-k8s.png)

### Containers vs. Virtual Machines
Containers provide operating-system-level virtualization. Unlike Virtual Machines (VMs), which include a full guest OS, containers share the host's kernel and isolate only the application and its dependencies. This makes containers significantly lighter, faster to start, and more portable.

### The Docker Architecture
- **Docker Engine:** The background process (daemon) that manages Docker objects.
- **Docker Image:** A read-only template with instructions for creating a Docker container. Images are built in layers.
- **Docker Container:** A runnable instance of an image.
- **Docker Registry:** A service (like Docker Hub) that stores and distributes Docker images.

### Dockerfile: The Blueprint
A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Key instructions include:
- `FROM`: Sets the base image.
- `RUN`: Executes commands in a new layer.
- `COPY`: Copies files from the host to the image.
- `CMD`: Specifies the default command to run when the container starts.

---

## Examples

### Example 1: Packaging a Node.js App
Creating a portable environment for a web application.
- **Step-by-step:**
  1. Create a `Dockerfile`:
     ```dockerfile
     FROM node:16-alpine
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY . .
     EXPOSE 3000
     CMD ["node", "app.js"]
     ```
  2. Build: `docker build -t my-web-app .`
  3. Run: `docker run -p 8080:3000 my-web-app`
- **Expected output:** The app is accessible at `http://localhost:8080`.
- **What the example demonstrates:** How to package an app and its environment into a single unit.

### Example 2: Using Multi-stage Builds
Optimizing image size by separating build and runtime environments.
- **Step-by-step:**
  1. Modify `Dockerfile`:
     ```dockerfile
     # Stage 1: Build
     FROM golang:1.18 AS builder
     WORKDIR /app
     COPY . .
     RUN go build -o myapp
     
     # Stage 2: Run
     FROM alpine:latest
     WORKDIR /root/
     COPY --from=builder /app/myapp .
     CMD ["./myapp"]
     ```
- **Expected output:** A very small final image containing only the compiled binary.
- **What the example demonstrates:** Efficient image construction for production environments.

---

## Summary

- Containerization provides a consistent environment across development, testing, and production.
- Docker is the most popular platform for building, sharing, and running containers.
- Images are built in layers, allowing for efficient caching and distribution.
- Dockerfiles automate the creation of images, ensuring reproducibility.
- Containers are ephemeral; data that must persist should be stored in Docker Volumes.

---

## Exercises

### Review Questions
1. Why are containers faster than virtual machines?
2. What is the purpose of the `EXPOSE` instruction in a Dockerfile?
3. How do you list all running containers on your system?
4. What is a Docker Layer and how does it relate to caching?

### Application Problems
1. Create a Dockerfile for a static website using `nginx` as the base image.
2. Write a command to start a MySQL container with a persistent volume for the database data.
3. You have a container that is crashing on startup. How would you inspect its logs?

### Challenge Problem
1. Design a strategy for managing environment-specific configurations (e.g., database URLs for dev vs. prod) when using the same Docker image across different environments.
