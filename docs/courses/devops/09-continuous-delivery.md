# Chapter 9: Continuous Delivery & Deployment (CD)

---

## Learning Objectives

- Distinguish between Continuous Delivery (CD) and Continuous Deployment.
- Understand the importance of the Deployment Pipeline in the software lifecycle.
- Explain advanced deployment strategies: Blue-Green, Canary, and Rolling Updates.
- Implement a basic CD workflow using automated tools.
- Discuss the role of manual approvals vs. full automation in enterprise environments.

---

## Theory

### Delivery vs. Deployment
- **Continuous Delivery:** An extension of CI where code is always in a state that *could* be deployed to production. Deployment to production requires a manual "push of a button."
- **Continuous Deployment:** Every change that passes the automated tests is *automatically* deployed to production. This requires a high level of confidence in the testing suite.

### The Deployment Pipeline
The pipeline is an automated manifestation of the process for getting software from version control into the hands of users. It typically includes:
1.  **Staging Environment:** A replica of production used for final validation and performance testing.
2.  **UAT (User Acceptance Testing):** Ensuring the software meets business requirements.
3.  **Production:** The live environment serving real users.

### Advanced Deployment Strategies
1.  **Rolling Update:** Gradually replacing instances of the old version with the new version.
2.  **Blue-Green Deployment:** Maintaining two identical environments. "Blue" is live, while the "Green" is the new version. Once verified, traffic is switched from Blue to Green.
3.  **Canary Deployment:** Releasing the new version to a small subset of users (e.g., 5%) before rolling it out to everyone.

---

## Examples

### Example 1: Blue-Green Switching with Nginx
Manually switching traffic between two app versions.
- **Step-by-step:**
  1. Version 1 is running on Port 8081 (Blue).
  2. Version 2 is deployed to Port 8082 (Green).
  3. Update Nginx config:
     ```nginx
     upstream myapp {
         server 127.0.0.1:8082; # Switch from 8081 to 8082
     }
     ```
  4. Reload Nginx: `nginx -s reload`
- **Expected output:** Users are now seeing the new version of the application instantly.
- **What the example demonstrates:** Minimizing downtime during releases.

### Example 2: Canary Deployment in Kubernetes
Routing a portion of traffic to a new version.
- **Step-by-step:**
  1. Create a Deployment for `v1` with label `track: stable`.
  2. Create a Deployment for `v2` with label `track: canary` (only 1 replica).
  3. Create a Service that selects both labels:
     ```yaml
     selector:
       app: myapp # Both deployments share this label
     ```
- **Expected output:** Approximately 1 in every X requests (depending on replica ratio) goes to the canary version.
- **What the example demonstrates:** Testing new features on a small percentage of live traffic.

---

## Summary

- CD ensures that software can be released to production at any time.
- Continuous Deployment represents the highest level of DevOps maturity.
- Deployment strategies like Blue-Green and Canary reduce the risk of introducing bugs to all users at once.
- Automated rollbacks are essential for maintaining high availability during failed deployments.
- The goal of CD is to make software releases a "non-event" — routine, reliable, and frequent.

---

## Exercises

### Review Questions
1. What is the main difference between Continuous Delivery and Continuous Deployment?
2. Why is a Staging environment important?
3. Explain the benefits of a Canary deployment.
4. How does a Rolling Update handle failures?

### Application Problems
1. Draw a diagram of a deployment pipeline for a mobile application.
2. Propose a rollback strategy for a database schema change that goes wrong during deployment.
3. Your Canary deployment shows a 10% increase in error rates. What are your next steps?

### Challenge Problem
1. Discuss the cultural and technical challenges an organization might face when transitioning from manual quarterly releases to Continuous Deployment.
