# 📊 Monitoring & Logging - Complete Theory

## 📋 Observability Fundamentals

### Three Pillars of Observability
1. **Metrics**: Numerical data over time
2. **Logs**: Discrete events and messages
3. **Traces**: Request flow through distributed systems

### Monitoring vs Observability
- **Monitoring**: Known unknowns (predefined dashboards)
- **Observability**: Unknown unknowns (exploratory analysis)

## 📈 Metrics and Monitoring

### Types of Metrics
- **Counter**: Monotonically increasing values
- **Gauge**: Point-in-time values
- **Histogram**: Distribution of values
- **Summary**: Quantiles and totals

### Key Metrics to Monitor
```
Golden Signals:
- Latency: Response time
- Traffic: Request rate
- Errors: Error rate
- Saturation: Resource utilization

USE Method:
- Utilization: Resource usage percentage
- Saturation: Queue length
- Errors: Error count
```

## 🔥 Prometheus

### Architecture
```
Prometheus Server → Targets (Applications)
       ↓
   Time Series DB
       ↓
   Grafana (Visualization)
```

### Prometheus Configuration
```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'application'
    static_configs:
      - targets: ['app:3000']
    metrics_path: /metrics
    scrape_interval: 5s
```

### PromQL Queries
```promql
# CPU usage
100 - (avg(irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100

# HTTP request rate
rate(http_requests_total[5m])

# 95th percentile response time
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# Error rate
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m])
```

## 📊 Grafana

### Dashboard Configuration
```json
{
  "dashboard": {
    "title": "Application Metrics",
    "panels": [
      {
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{status}}"
          }
        ]
      }
    ]
  }
}
```

### Alert Rules
```yaml
groups:
- name: application.rules
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
    for: 2m
    labels:
      severity: critical
    annotations:
      summary: "High error rate detected"
      description: "Error rate is {{ $value | humanizePercentage }}"

  - alert: HighResponseTime
    expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: "High response time"
      description: "95th percentile is {{ $value }}s"
```

## 📝 Logging

### Log Levels
```
FATAL: System unusable
ERROR: Error conditions
WARN: Warning conditions
INFO: Informational messages
DEBUG: Debug messages
TRACE: Very detailed debug info
```

### Structured Logging
```json
{
  "timestamp": "2023-12-01T10:30:00Z",
  "level": "INFO",
  "service": "user-service",
  "message": "User login successful",
  "userId": "12345",
  "ip": "192.168.1.100",
  "duration": 150
}
```

## 🔍 ELK Stack

### Architecture
```
Application → Filebeat → Logstash → Elasticsearch → Kibana
```

### Logstash Configuration
```ruby
input {
  beats {
    port => 5044
  }
}

filter {
  if [fields][log_type] == "application" {
    grok {
      match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}" }
    }
    
    date {
      match => [ "timestamp", "ISO8601" ]
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
```

### Filebeat Configuration
```yaml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/application/*.log
  fields:
    log_type: application
  fields_under_root: true

output.logstash:
  hosts: ["logstash:5044"]

processors:
- add_host_metadata:
    when.not.contains.tags: forwarded
```

## 🔔 Alerting

### Alert Manager Configuration
```yaml
global:
  smtp_smarthost: 'localhost:587'
  smtp_from: 'alerts@company.com'

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'

receivers:
- name: 'web.hook'
  email_configs:
  - to: 'admin@company.com'
    subject: 'Alert: {{ .GroupLabels.alertname }}'
    body: |
      {{ range .Alerts }}
      Alert: {{ .Annotations.summary }}
      Description: {{ .Annotations.description }}
      {{ end }}
  
  slack_configs:
  - api_url: 'https://hooks.slack.com/services/...'
    channel: '#alerts'
    title: 'Alert: {{ .GroupLabels.alertname }}'
    text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'
```

## 🔍 Distributed Tracing

### Jaeger Architecture
```
Application → Jaeger Agent → Jaeger Collector → Storage → Jaeger UI
```

### OpenTelemetry Integration
```javascript
// Node.js example
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const jaegerExporter = new JaegerExporter({
  endpoint: 'http://jaeger:14268/api/traces',
});

const sdk = new NodeSDK({
  traceExporter: jaegerExporter,
  serviceName: 'user-service',
});

sdk.start();
```

## 📱 Application Performance Monitoring

### APM Tools
- **New Relic**: Full-stack monitoring
- **Datadog**: Infrastructure and application monitoring
- **AppDynamics**: Application performance management
- **Dynatrace**: AI-powered monitoring

### Custom Metrics in Applications
```javascript
// Prometheus metrics in Node.js
const promClient = require('prom-client');

const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration.labels(req.method, req.route?.path || req.path, res.statusCode).observe(duration);
    httpRequestTotal.labels(req.method, req.route?.path || req.path, res.statusCode).inc();
  });
  
  next();
});
```

## 🚨 Incident Response

### SRE Practices
- **SLI**: Service Level Indicators
- **SLO**: Service Level Objectives
- **SLA**: Service Level Agreements
- **Error Budget**: Acceptable failure rate

### Incident Management
1. **Detection**: Automated alerts
2. **Response**: On-call rotation
3. **Mitigation**: Quick fixes
4. **Resolution**: Root cause analysis
5. **Post-mortem**: Lessons learned

### Runbooks
```markdown
# High CPU Usage Runbook

## Symptoms
- CPU usage > 80% for 5+ minutes
- Application response time increased

## Investigation Steps
1. Check current CPU usage: `top` or `htop`
2. Identify top processes: `ps aux --sort=-%cpu`
3. Check system load: `uptime`
4. Review application logs

## Mitigation
1. Scale horizontally if possible
2. Restart problematic services
3. Kill resource-intensive processes if safe

## Escalation
- If issue persists > 15 minutes, escalate to senior engineer
- Contact: +1-555-0123 or #incident-response
```