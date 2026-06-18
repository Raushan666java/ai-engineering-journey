# Chapter 10: Site Reliability Engineering (SRE) and Monitoring

---

## Learning Objectives

- Define Site Reliability Engineering (SRE) and its relationship with DevOps.
- Understand the "Four Golden Signals" of monitoring.
- Differentiate between SLIs, SLOs, and SLAs.
- Use Prometheus and Grafana for metrics collection and visualization.
- Explain the importance of Log Management and Error Tracking.

---

## Theory

![Monitoring, Logging and Observability Stack](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch06-monitoring-observability.png)

### What is Site Reliability Engineering (SRE)?
SRE is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The main goals are to create scalable and highly reliable software systems. SRE is often described as "what happens when you ask a software engineer to design an operations function."

### Reliability Metrics
- **SLI (Service Level Indicator):** A quantitative measure of some aspect of the level of service that is provided (e.g., Latency, Throughput).
- **SLO (Service Level Objective):** A target value or range of values for a service level that is measured by an SLI (e.g., "99.9% of requests must finish in less than 200ms").
- **SLA (Service Level Agreement):** A legal contract between a service provider and a customer that includes consequences (usually financial) if SLOs are not met.

### The Four Golden Signals
1.  **Latency:** The time it takes to service a request.
2.  **Traffic:** A measure of how much demand is being placed on the system.
3.  **Errors:** The rate of requests that fail.
4.  **Saturation:** How "full" your service is (e.g., CPU usage, memory utilization).

### Monitoring Stack
- **Prometheus:** A time-series database and monitoring system that pulls metrics from applications via HTTP.
- **Grafana:** A visualization tool that connects to Prometheus (and other sources) to create interactive dashboards.
- **Alertmanager:** Handles alerts sent by client applications such as the Prometheus server.

---

## Examples

### Example 1: Exposing Metrics in Prometheus Format
Using a client library to export application data.
- **Step-by-step:**
  1. Add a metrics endpoint to a Python app:
     ```python
     from prometheus_client import start_http_server, Summary
     import random
     import time
     
     REQUEST_TIME = Summary('request_processing_seconds', 'Time spent processing request')
     
     @REQUEST_TIME.time()
     def process_request(t):
         time.sleep(t)
     
     if __name__ == '__main__':
         start_http_server(8000)
         while True:
             process_request(random.random())
     ```
  2. Configure Prometheus to scrape `localhost:8000`.
- **Expected output:** Prometheus stores the timing data, which can then be queried using PromQL.
- **What the example demonstrates:** Instrumented code providing real-time telemetry.

### Example 2: Creating a Grafana Dashboard
Visualizing the error rate of a service.
- **Step-by-step:**
  1. Add Prometheus as a Data Source in Grafana.
  2. Create a new Panel.
  3. Enter the PromQL query:
     ```promql
     sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))
     ```
  4. Set the visualization type to "Graph."
- **Expected output:** A line chart showing the percentage of failed requests over time.
- **What the example demonstrates:** Turning raw metrics into actionable insights for engineers.

---

## Summary

- SRE applies engineering principles to system operations to ensure high reliability.
- SLIs and SLOs are the foundation of data-driven reliability management.
- Monitoring should focus on the "Four Golden Signals": Latency, Traffic, Errors, and Saturation.
- Prometheus and Grafana are the industry standard for cloud-native monitoring.
- Alerting should be actionable and focused on symptoms that affect users, not just internal system states.

---

## Exercises

### Review Questions
1. How does SRE differ from traditional Systems Administration?
2. What is an "Error Budget" and how is it calculated?
3. Explain the difference between an SLI and an SLO.
4. Why is "Saturation" an important metric to monitor?

### Application Problems
1. Design an SLO for a messaging application that focuses on "Message Delivery Latency."
2. Write a PromQL query to find the average CPU usage across all nodes in a cluster over the last hour.
3. Identify three sources of "Toil" in an operations team and propose how an SRE would automate them.

### Challenge Problem
1. You are tasked with setting up monitoring for a new microservices-based application. Describe the full stack you would choose and the first five alerts you would configure to ensure the system's health.
