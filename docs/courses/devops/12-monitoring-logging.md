# Chapter 12: Monitoring and Logging

## Learning Objectives

![Monitoring and Logging Stack Architecture](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/devops/ch12-monitoring-logging.png)

By the end of this chapter, students will be able to:

1. Deploy and configure Prometheus for metrics collection and alerting
2. Design Grafana dashboards for operational visibility
3. Configure Loki for log aggregation and querying with LogQL
4. Deploy the ELK stack (Elasticsearch, Logstash, Kibana) for centralized logging
5. Implement structured logging with JSON and appropriate log levels

## Theory

### 12.1 Monitoring Principles

Monitoring is the systematic collection, analysis, and visualization of system data to understand behavior, detect anomalies, and support decision making. Effective monitoring answers four questions:

1. What is broken right now? (Alerting)
2. What is trending in the wrong direction? (Dashboards)
3. What happened during the incident last night? (Temporal analysis)
4. Why did the system behave that way? (Diagnostics)

### 12.2 Prometheus

Prometheus is a metrics-based monitoring system designed for reliability and operational simplicity.

**Architecture**:
- **Prometheus Server** â€” Scrapes metrics from targets at configured intervals, stores data in a time-series database.
- **Exporters** â€” Agents that expose metrics in Prometheus format (node_exporter for host metrics, kube-state-metrics for Kubernetes, custom application exporters).
- **Pushgateway** â€” Accepts metrics from short-lived jobs that cannot be scraped.
- **Alertmanager** â€” Handles alerts: deduplication, grouping, routing, silencing, and notification.

**Data Model** â€” Metrics are identified by a metric name and key-value labels. Four metric types: Counter (monotonically increasing), Gauge (up/down values), Histogram (bucketed observations), Summary (quantile-based observations).

**PromQL (Prometheus Query Language)** â€” Powerful query language for metric aggregation and analysis:

```promql
# CPU utilization per instance
100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Request error rate
sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))

# 95th percentile request latency
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service))
```

**Recording Rules** â€” Precompute frequently used or expensive queries for faster dashboard loading:

```yaml
groups:
  - name: instance.rules
    rules:
      - record: instance:node_cpu_utilization:rate5m
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```

**Alerting Rules** â€” Define conditions that trigger alerts:

```yaml
groups:
  - name: instance.alerts
    rules:
      - alert: HighCPUUsage
        expr: instance:node_cpu_utilization:rate5m > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Instance {{ $labels.instance }} CPU usage above 80%"
```

### 12.3 Alertmanager

Alertmanager processes alerts before sending notifications:

```yaml
route:
  receiver: team-pager
  group_by: [alertname, cluster]
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  routes:
    - receiver: team-pager
      matchers:
        - severity = critical
    - receiver: team-chat
      matchers:
        - severity = warning

receivers:
  - name: team-pager
    pagerduty_configs:
      - service_key: <key>
  - name: team-chat
    slack_configs:
      - channel: "#alerts"
```

### 12.4 Grafana

Grafana visualizes metrics from multiple data sources (Prometheus, Loki, Elasticsearch, CloudWatch, etc.).

**Dashboard Design Principles**:
- Top row: global status (service availability, overall error rate)
- Second row: resource utilization (CPU, memory, disk, network)
- Application-specific panels: request rate, latency, error count
- Bottom row: detailed debugging views

**Alerting** â€” Grafana supports rule-based alerting from any data source. Rules can include multiple conditions, evaluation intervals, and notification channels.

### 12.5 Loki

Loki is a log aggregation system designed for cost-effective, scalable log storage. Unlike the ELK stack, Loki does not index log content; it indexes only metadata labels.

**LogQL** â€” Loki's query language combines log stream selection with PromQL-like aggregation:

```logQL
# Count errors by service
sum by (service) (count_over_time({job="api"} |= "ERROR" [5m]))

# Extract JSON fields and filter
{job="api"} | json | level = "error" | line_format "{{.message}}"
```

Loki works with Promtail (agent for shipping logs), Fluentd, or any log shipper.

### 12.6 ELK Stack (Elastic Stack)

**Elasticsearch** â€” Distributed search and analytics engine. Stores logs as JSON documents. Provides full-text search, aggregations, and high availability through sharding and replication.

**Logstash** â€” Server-side data processing pipeline. Ingests logs from multiple sources, transforms them, and sends to Elasticsearch. Supports plugins for input, filter, and output stages.

**Kibana** â€” Visualization and management interface. Provides log exploration (Discover), dashboard creation, and alerting.

**Beats** â€” Lightweight data shippers. Filebeat (log files), Metricbeat (system metrics), Heartbeat (uptime monitoring), Winlogbeat (Windows event logs).

### 12.7 Structured Logging

Structured logging outputs logs as machine-parseable structured data (JSON) rather than unstructured text:

```json
{
  "timestamp": "2026-06-09T14:30:00.123Z",
  "level": "ERROR",
  "logger": "payment-service",
  "message": "Payment processing failed",
  "service": "payment-api",
  "trace_id": "abc123def456",
  "user_id": "user_789",
  "payment_id": "pay_123456",
  "error": {
    "type": "CardDeclined",
    "code": "declined_insufficient_funds",
    "amount": 4999,
    "currency": "USD"
  },
  "duration_ms": 342,
  "environment": "production"
}
```

### 12.8 Log Levels

Standard log levels and their appropriate usage:

- **TRACE** â€” Detailed debugging information, used only during development
- **DEBUG** â€” Diagnostic information for troubleshooting in non-production environments
- **INFO** â€” Normal application events (request started, payment processed, user registered)
- **WARN** â€” Unexpected events that do not affect functionality (deprecated API usage, retry attempts)
- **ERROR** â€” Failed operations that require attention (database connection failure, payment processing error)
- **FATAL** â€” Catastrophic failures requiring immediate human intervention (application crash, data corruption)

### 12.9 Logging Best Practices

- Log in JSON format for machine parsing
- Include correlation IDs (trace_id, request_id) for request tracing
- Use consistent field names across services
- Log at the appropriate level; avoid logging sensitive data (PII, passwords, tokens)
- Implement log rotation and retention policies
- Use structured context fields, not string interpolation
- Ensure logs are asynchronous and non-blocking
- Configure sampling for high-volume logs

## Summary

Monitoring and logging provide visibility into system behavior. Prometheus collects and stores metrics with a powerful query language and integrated alerting. Grafana visualizes metrics from multiple data sources. Loki provides cost-effective log aggregation indexed by labels. The ELK stack offers full-text search and advanced log analytics. Structured logging with JSON enables machine parsing and correlation. Proper log levels and best practices ensure logs are useful without overwhelming storage or operators.

## Exercises

### Review Questions

1. How does Prometheus's pull model differ from push-based monitoring systems?
2. What is the purpose of recording rules in Prometheus? When should they be used?
3. Compare Loki and Elasticsearch for log storage. What trade-offs does each make?
4. Why is structured logging preferred over unstructured logging in production systems?
5. How does Alertmanager handle alert grouping and inhibition?

### Application Problems

1. Deploy Prometheus and node_exporter on a Linux host. Configure targets in prometheus.yml. Monitor CPU, memory, disk, and network metrics. Create a Grafana dashboard with panels for each metric.
2. Write recording rules for CPU utilization, memory utilization, and disk space usage. Create alerting rules that fire when any resource exceeds 80% utilization for 5 minutes. Configure Alertmanager to send alerts to a webhook endpoint.
3. Implement structured logging in a Node.js application using Pino or Winston. Output JSON logs with levels, timestamps, service name, correlation ID, and contextual fields. Ship logs to Loki using Promtail.

### Challenge Problem

Design a complete monitoring and logging strategy for a microservices platform with 30 services running on Kubernetes. Include: Prometheus metric collection strategy (what to scrape, scrape intervals, retention), Grafana dashboard hierarchy (service-level, system-level, business-level), Loki log pipeline (log shipper, retention, label strategy), alerting philosophy (grouping, severity levels, notification channels), and integration with incident management (PagerDuty). The system must handle 10,000 metric samples/second and 50 GB of logs daily. Define retention periods, storage sizing, and estimated infrastructure costs.
