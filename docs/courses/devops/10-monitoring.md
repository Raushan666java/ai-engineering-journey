# Chapter 10: Site Reliability Engineering (SRE) and Monitoring

> **Previous:** [Configuration Management](./10-configuration-mgmt.md) | **Next:** [Cloud Platforms](./11-cloud-platforms.md)

---

## Learning Objectives

- Define Site Reliability Engineering (SRE) and its relationship with DevOps.
- Understand the "Four Golden Signals" of monitoring.
- Differentiate between SLIs, SLOs, and SLAs.
- Use Prometheus and Grafana for metrics collection and visualization.
- Explain the importance of Log Management and Error Tracking.
- Implement error budgets to balance reliability and feature velocity.
- Design monitoring dashboards that provide actionable insights.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| SRE Definition | Applying software engineering to operations | SRE makes reliability a quantifiable metric |
| Four Golden Signals | Latency, Traffic, Errors, Saturation | These signals indicate system health at a glance |
| SLI/SLO/SLA | Indicators, Objectives, Agreements | Internal SLOs should be tighter than external SLAs |
| Prometheus | Pull-based metrics with time-series DB | Use exporters to collect infrastructure metrics |
| Grafana | Multi-source visualization dashboards | Use PromQL for metric queries and alert rules |
| Error Budgets | Allowed unreliability = 1 - SLO | Gate releases when budget is exhausted |
| Toil Automation | Manual work elimination | SRE teams spend <50% on operations |
| Incident Response | Severity-based response | Blameless postmortems improve systems |

## Chapter Roadmap

```mermaid
flowchart LR
    A[SRE Definition] --> B[Four Golden Signals]
    B --> C[Latency]
    B --> D[Traffic]
    B --> E[Errors]
    B --> F[Saturation]
    C & D & E & F --> G[SLI/SLO/SLA]
    G --> H[Error Budgets]
    H --> I[Prometheus]
    I --> J[Grafana]
    J --> K[Alertmanager]
    K --> L[Incident Response]
```

## Theory

### What is Site Reliability Engineering (SRE)?

SRE is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The main goals are to create scalable and highly reliable software systems. SRE is often described as "what happens when you ask a software engineer to design an operations function."

**Origins:** Google developed SRE internally, formalized by Ben Treynor Sloss in 2003. The practice has since been adopted by technology companies worldwide. The core insight is that operations problems are engineering problems and should be solved with engineering rigor.

**SRE vs DevOps:**

| Dimension | DevOps | SRE |
|-----------|--------|-----|
| Origin | Community movement | Google engineering practice |
| Focus | Culture, automation, flow | Reliability, capacity, toil |
| Measurement | DORA metrics | SLOs, error budgets |
| Implementation | Principles | Defined engineering role |
| Toil limit | None | 50% maximum |
| Release gating | No equivalent | Error budgets |

### Reliability Metrics

- **SLI (Service Level Indicator):** A quantitative measure of some aspect of the level of service that is provided (e.g., Latency, Throughput).
- **SLO (Service Level Objective):** A target value or range of values for a service level that is measured by an SLI (e.g., "99.9% of requests must finish in less than 200ms").
- **SLA (Service Level Agreement):** A legal contract between a service provider and a customer that includes consequences (usually financial) if SLOs are not met.

### The Four Golden Signals

1. **Latency:** The time it takes to service a request. Distinguish between successful requests and failed requests—a failing service might return errors very quickly, masking the latency problem.
2. **Traffic:** A measure of how much demand is being placed on the system (requests per second, active users, throughput).
3. **Errors:** The rate of requests that fail explicitly (5xx) or implicitly (success with wrong content, slow responses).
4. **Saturation:** How "full" your service is (CPU usage, memory utilization, queue depth). The most overloaded component determines the system's saturation point.

### Error Budgets

The error budget is the acceptable amount of unreliability. For a 99.9% SLO over 30 days:

```
Error Budget = (1 - SLO) × Time Window
             = 0.001 × (30 × 24 × 60 × 60)
             = 2,592 seconds ˜ 43 minutes
```

**Error Budget Mechanics:**
- Budget is consumed by events that violate the SLO
- Budget is replenished as the measurement window rolls forward
- If budget is exhausted, releases are halted until it recovers
- Burn-rate alerts fire before full depletion
- Error budgets create a shared vocabulary between developers and operators

### Toil Elimination

Toil is operational work that is manual, repetitive, automatable, tactical, and devoid of enduring value.

**Examples of toil:**
- Manually restarting crashed processes
- Rotating credentials by hand
- Responding to non-actionable alerts
- Hand-configuring monitoring dashboards
- Manually provisioning infrastructure

**The 50% Rule:** SRE teams should spend no more than 50% of their time on operational work. The remaining time must be invested in engineering projects.

### Incident Management

| Severity | Description | Response Time | Example |
|----------|-------------|---------------|---------|
| SEV-1 | Critical service outage | 15 min | Complete service unavailable |
| SEV-2 | Major component degraded | 30 min | Checkout flow failing |
| SEV-3 | Minor issue, no customer impact | 4 hours | Non-critical API errors |
| SEV-4 | Cosmetic or informational | 24 hours | Dashboard labeling issue |

**Incident Response Flow:**
1. Detection ? Alert fires or user reports issue
2. Triage ? Determine severity, declare incident, assemble response team
3. Mitigation ? Stabilize the system (rollback, redirect, scale up)
4. Resolution ? Apply permanent fix
5. Follow-up ? Blameless postmortem, preventive actions

### Monitoring Stack

- **Prometheus:** A time-series database and monitoring system that pulls metrics from applications via HTTP. Features a powerful query language (PromQL), built-in alerting, and service discovery.
- **Grafana:** A visualization tool that connects to Prometheus (and other sources) to create interactive dashboards. Supports alerting, annotations, and team collaboration.
- **Alertmanager:** Handles alerts sent by Prometheus with deduplication, grouping, routing, silencing, and notification to channels (Slack, PagerDuty, email).

**Prometheus Data Model:**
- Metrics identified by name and key-value label pairs
- Four metric types: Counter (monotonically increasing), Gauge (up/down), Histogram (bucketed observations), Summary (quantile-based observations)
- Recording rules precompute expensive queries for faster dashboards

---

## Examples

### Example 1: Exposing Metrics in Prometheus Format

```typescript
import express from 'express';
import prometheus from 'prom-client';

const app = express();
const register = new prometheus.Registry();

prometheus.collectDefaultMetrics({ register });

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10],
  registers: [register],
});

const httpRequestsTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register],
});

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    const labels = { method: req.method, route: req.route?.path || req.path, status: String(res.statusCode) };
    httpRequestsTotal.inc(labels);
    end(labels);
  });
  next();
});

app.get('/metrics', async (_req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.get('/api/users', (_req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.listen(3000, () => console.log('Server on :3000'));
```

### Example 2: Creating a Grafana Dashboard with PromQL

```typescript
interface DashboardPanel {
  title: string;
  query: string;
  type: 'graph' | 'stat' | 'table' | 'gauge';
  unit?: string;
}

interface GrafanaDashboard {
  title: string;
  panels: DashboardPanel[];
  refreshInterval: string;
}

function generateDashboard(dashboard: GrafanaDashboard): string {
  const panels = dashboard.panels.map((panel, i) => ({
    id: i + 1,
    title: panel.title,
    type: panel.type,
    targets: [{ expr: panel.query, legendFormat: '{{service}}' }],
    gridPos: { h: 8, w: 8, x: (i % 3) * 8, y: Math.floor(i / 3) * 8 },
    fieldConfig: {
      defaults: { unit: panel.unit || 'none' },
    },
  }));

  return JSON.stringify({
    title: dashboard.title,
    panels,
    refresh: dashboard.refreshInterval,
    time: { from: 'now-6h', to: 'now' },
    schemaVersion: 36,
  }, null, 2);
}

const sreDashboard: GrafanaDashboard = {
  title: 'SRE Golden Signals',
  refreshInterval: '30s',
  panels: [
    {
      title: 'Request Latency (p95)',
      query: 'histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service))',
      type: 'graph',
      unit: 's',
    },
    {
      title: 'Requests per Second',
      query: 'sum(rate(http_requests_total[5m])) by (service)',
      type: 'graph',
      unit: 'rps',
    },
    {
      title: 'Error Rate',
      query: 'sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))',
      type: 'stat',
      unit: 'percentunit',
    },
    {
      title: 'CPU Saturation',
      query: '100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)',
      type: 'gauge',
      unit: 'percent',
    },
  ],
};

console.log(generateDashboard(sreDashboard));
```

### Example 3: Error Budget Calculator

```typescript
interface SLOConfig {
  name: string;
  target: number; // 99.9 = 99.9%
  windowDays: number;
  currentUptime: number; // seconds of uptime in the window
}

interface ErrorBudget {
  total: number; // seconds
  consumed: number; // seconds
  remaining: number; // seconds
  remainingPercent: number;
  exhausted: boolean;
}

class ErrorBudgetCalculator {
  calculate(config: SLOConfig): ErrorBudget {
    const totalSeconds = config.windowDays * 24 * 60 * 60;
    const allowedDowntime = totalSeconds * (1 - config.target / 100);
    const consumed = totalSeconds - config.currentUptime;
    const remaining = allowedDowntime - consumed;
    const remainingPercent = (remaining / allowedDowntime) * 100;

    return {
      total: Math.round(allowedDowntime),
      consumed: Math.max(0, Math.round(consumed)),
      remaining: Math.round(remaining),
      remainingPercent: Math.round(remainingPercent * 100) / 100,
      exhausted: remaining <= 0,
    };
  }

  alertStatus(budget: ErrorBudget): 'healthy' | 'warning' | 'critical' | 'exhausted' {
    if (budget.exhausted) return 'exhausted';
    if (budget.remainingPercent < 10) return 'critical';
    if (budget.remainingPercent < 30) return 'warning';
    return 'healthy';
  }

  generateReport(configs: SLOConfig[]): string {
    let report = '# Error Budget Report\n\n';
    report += '| SLO | Target | Window | Total Budget | Consumed | Remaining | Status |\n';
    report += '|-----|--------|--------|--------------|----------|-----------|--------|\n';

    for (const config of configs) {
      const budget = this.calculate(config);
      const status = this.alertStatus(budget);
      report += `| ${config.name} | ${config.target}% | ${config.windowDays}d | ${budget.total}s | ${budget.consumed}s | ${budget.remaining}s | ${status} |\n`;
    }

    return report;
  }
}

const calc = new ErrorBudgetCalculator();
const budgets = [
  { name: 'api-availability', target: 99.9, windowDays: 30, currentUptime: 2591000 },
  { name: 'api-latency', target: 99.5, windowDays: 30, currentUptime: 2590000 },
  { name: 'db-availability', target: 99.99, windowDays: 30, currentUptime: 2591900 },
];

console.log(calc.generateReport(budgets));
const apiBudget = calc.calculate(budgets[0]);
console.log(`API budget remaining: ${apiBudget.remainingPercent}% - ${calc.alertStatus(apiBudget)}`);
```

---

## Concept Comparison Table

| Concept | Description |
|---------|-------------|
| SLI | Quantitative measure of service aspect (latency, availability) |
| SLO | Target value for SLI (99.9% requests under 200ms) |
| SLA | Contractual commitment with consequences |
| Prometheus | Pull-based time-series monitoring |
| Grafana | Visualization with multi-source dashboards |
| Error Budget | Allowed unreliability = (1 - SLO) × window |
| Toil | Manual, repetitive, automatable operational work |
| Alertmanager | Deduplication, grouping, routing, silencing |

## Quick Reference

| Topic | Key Points |
|-------|------------|
| Golden Signals | Latency, Traffic, Errors, Saturation |
| SRE Goal | Quantified reliability with error budgets |
| Prometheus | Pull metrics, time-series DB, PromQL |
| Alertmanager | Grouping, silencing, routing, notification |
| Grafana | Panels, dashboards, data sources, alerts |
| Error Budget | 43 min/month for 99.9% SLO |
| Toil | Manual, repetitive, no enduring value |

## Cross-Application Matrix

| Domain | Application |
|--------|-------------|
| Web | Web application latency monitoring |
| Cloud | Cloud resource utilization tracking |
| Enterprise | SLA compliance dashboards |
| Container | Kubernetes cluster monitoring |

## Chapter Quiz

<details><summary>Question 1: What are the Four Golden Signals?</summary>**A)** CPU, Memory, Disk, Network<br>**B)** Latency, Traffic, Errors, Saturation<br>**C)** Build, Test, Deploy, Monitor<br>**D)** Dev, Staging, QA, Production<br><br>**Answer: B)** Latency, Traffic, Errors, Saturation</details>

<details><summary>Question 2: What is an error budget?</summary>**A)** Budget for fixing errors<br>**B)** Allowed amount of unreliability<br>**C)** Cost of incidents<br>**D)** Team training budget<br><br>**Answer: B)** Allowed amount of unreliability</details>

<details><summary>Question 3: How does Prometheus collect metrics?</summary>**A)** Push model from applications<br>**B)** Pull model by scraping HTTP endpoints<br>**C)** Log file parsing<br>**D)** Database queries<br><br>**Answer: B)** Pull model by scraping HTTP endpoints</details>

<details><summary>Question 4: What is the 50% rule in SRE?</summary>**A)** 50% test coverage<br>**B)** Max 50% of time on operational work<br>**C)** 50% budget for monitoring<br>**D)** 50% of team on-call<br><br>**Answer: B)** Max 50% of time on operational work</details>

<details><summary>Question 5: What distinguishes toil from valuable work?</summary>**A)** It is difficult<br>**B)** It is manual, repetitive, automatable, and has no enduring value<br>**C)** It requires senior engineers<br>**D)** It happens infrequently<br><br>**Answer: B)** It is manual, repetitive, automatable, and has no enduring value</details>

---

### Error Budget Tracker

Managing error budgets requires continuous tracking of SLO compliance and burn rate detection. The following tool implements a comprehensive error budget tracking system with burn-rate alerts.

```typescript
// error-budget-tracker.ts
// Track SLO error budgets with burn-rate alerts

interface SLOConfig {
  name: string;
  target: number;  // e.g., 0.999 for 99.9%
  windowDays: number;
  burnRateThresholds: Array<{ label: string; multiplier: number; alertAfterMinutes: number }>;
}

interface SLIDataPoint {
  timestamp: Date;
  totalRequests: number;
  successfulRequests: number;
  latencyP99: number;
}

interface ErrorBudgetState {
  config: SLOConfig;
  totalBudget: number;
  consumed: number;
  remaining: number;
  remainingPercent: number;
  burnRate: number;
  burnRateAlerts: string[];
  projectedExhaustion: Date | null;
  isExhausted: boolean;
}

class ErrorBudgetTracker {
  private configs: Map<string, SLOConfig> = new Map();
  private data: Map<string, SLIDataPoint[]> = new Map();

  registerSLO(config: SLOConfig): void {
    this.configs.set(config.name, config);
    this.data.set(config.name, []);
  }

  recordDataPoint(name: string, point: SLIDataPoint): void {
    if (!this.data.has(name)) throw new Error(`SLO ${name} not registered`);
    this.data.get(name)!.push(point);
  }

  calculateState(name: string, now: Date): ErrorBudgetState {
    const config = this.configs.get(name);
    if (!config) throw new Error(`SLO ${name} not found`);

    const points = this.data.get(name) || [];
    const windowStart = new Date(now.getTime() - config.windowDays * 86400000);
    const windowPoints = points.filter(p => p.timestamp >= windowStart);

    const totalRequests = windowPoints.reduce((s, p) => s + p.totalRequests, 0);
    const successfulRequests = windowPoints.reduce((s, p) => s + p.successfulRequests, 0);
    const actualAvailability = totalRequests > 0 ? successfulRequests / totalRequests : 1;

    const totalBudget = (1 - config.target) * totalRequests;
    const consumed = (1 - actualAvailability) * totalRequests;
    const remaining = totalBudget - consumed;
    const remainingPercent = totalBudget > 0 ? (remaining / totalBudget) * 100 : 0;

    const recentPoints = windowPoints.slice(-10);
    const recentFailures = recentPoints.reduce((s, p) => s + (p.totalRequests - p.successfulRequests), 0);
    const recentTotal = recentPoints.reduce((s, p) => s + p.totalRequests, 0);
    const recentErrorRate = recentTotal > 0 ? recentFailures / recentTotal : 0;
    const errorBudgetErrorRate = totalBudget > 0 ? Math.max(config.target / (1 - config.target), 1) * (1 - config.target) : 0;
    const burnRate = errorBudgetErrorRate > 0 ? recentErrorRate / errorBudgetErrorRate : 0;

    const burnRateAlerts: string[] = [];
    for (const threshold of config.burnRateThresholds) {
      if (burnRate >= threshold.multiplier) {
        burnRateAlerts.push(`Burn rate ${burnRate.toFixed(1)}x exceeds threshold ${threshold.multiplier}x (alert after ${threshold.alertAfterMinutes}min)`);
      }
    }

    let projectedExhaustion: Date | null = null;
    if (burnRate > 0 && remaining > 0) {
      const msToExhaustion = (remaining / (burnRate * errorBudgetErrorRate)) * (totalRequests > 0 ? (config.windowDays * 86400000) / totalRequests : 0);
      if (msToExhaustion < config.windowDays * 86400000) {
        projectedExhaustion = new Date(now.getTime() + msToExhaustion);
      }
    }

    return { config, totalBudget, consumed, remaining, remainingPercent, burnRate, burnRateAlerts, projectedExhaustion, isExhausted: remaining <= 0 };
  }

  generateReport(name: string, now: Date): string {
    const state = this.calculateState(name, now);
    const lines = [
      `Error Budget Report: ${name}`,
      `  Target: ${(state.config.target * 100).toFixed(1)}% over ${state.config.windowDays} days`,
      `  Budget consumed: ${state.consumed.toFixed(0)} of ${state.totalBudget.toFixed(0)} errors`,
      `  Remaining: ${state.remaining.toFixed(0)} errors (${state.remainingPercent.toFixed(1)}%)`,
      `  Burn rate: ${state.burnRate.toFixed(2)}x`,
      `  Status: ${state.isExhausted ? '? EXHAUSTED' : state.remainingPercent < 20 ? '? WARNING' : '? HEALTHY'}`,
    ];
    if (state.projectedExhaustion) lines.push(`  Projected exhaustion: ${state.projectedExhaustion.toISOString()}`);
    for (const alert of state.burnRateAlerts) lines.push(`  ?? ${alert}`);
    return lines.join('\n');
  }
}

const tracker = new ErrorBudgetTracker();
tracker.registerSLO({ name: 'api-availability', target: 0.999, windowDays: 30, burnRateThresholds: [{ label: 'critical', multiplier: 10, alertAfterMinutes: 5 }, { label: 'warning', multiplier: 3, alertAfterMinutes: 30 }] });

for (let day = 0; day < 30; day++) {
  const total = 100000;
  const failed = day > 25 ? Math.floor(total * 0.005) : Math.floor(total * 0.0005);
  tracker.recordDataPoint('api-availability', { timestamp: new Date(Date.now() - (29 - day) * 86400000), totalRequests: total, successfulRequests: total - failed, latencyP99: 45 });
}

console.log(tracker.generateReport('api-availability', new Date()));
```

**What this demonstrates:** An error budget tracker with burn-rate alerts and projection provides early warning when reliability is degrading faster than the SLO allows.

---

## Practical Takeaways

1. **Monitoring should focus on user-visible symptoms**, not internal system states. Alert on customer-impacting conditions.
2. **Start with one SLO** for your most critical service and expand from there. Don't try to SLO everything at once.
3. **Error budgets create a shared language** between developers and operators for when reliability trumps features.
4. **Use recording rules** in Prometheus to precompute expensive queries and speed up dashboard loading.
5. **Implement burn-rate alerts** to detect error budget consumption before it's too late.

---

## TypeScript: Programmatic Monitoring Dashboard Configuration

Modern monitoring platforms support dashboard as code. Below is a TypeScript example that generates Grafana dashboard JSON configurations programmatically:

```typescript
// dashboard-generator.ts
// Generates Grafana dashboard configurations as code

interface PanelDefinition {
  title: string;
  type: 'graph' | 'stat' | 'table' | 'heatmap';
  datasource: string;
  query: string;
  unit?: string;
  decimals?: number;
  thresholds?: { value: number; color: string }[];
}

interface DashboardConfig {
  title: string;
  description?: string;
  tags: string[];
  timeRange: string;
  refreshInterval: string;
  panels: PanelDefinition[];
}

class GrafanaDashboardGenerator {
  generatePanel(panel: PanelDefinition, index: number): object {
    const base = {
      id: index + 1,
      title: panel.title,
      type: panel.type,
      gridPos: { h: 8, w: 12, x: (index % 2) * 12, y: Math.floor(index / 2) * 8 },
      datasource: panel.datasource,
    };

    const targets = [{ expr: panel.query, legendFormat: '{{label}}' }];

    if (panel.thresholds) {
      return {
        ...base,
        fieldConfig: {
          defaults: {
            unit: panel.unit,
            decimals: panel.decimals,
            thresholds: { steps: panel.thresholds.map(t => ({ value: t.value, color: t.color })) },
          },
        },
        targets,
      };
    }

    return { ...base, targets };
  }

  generateDashboard(config: DashboardConfig): object {
    return {
      title: config.title,
      tags: config.tags,
      time: { from: `now-${config.timeRange}`, to: 'now' },
      refresh: config.refreshInterval,
      panels: config.panels.map((p, i) => this.generatePanel(p, i)),
      schemaVersion: 38,
      version: 1,
    };
  }
}

// Example: Microservice RED dashboard
const generator = new GrafanaDashboardGenerator();
const dashboard = generator.generateDashboard({
  title: 'API Service RED Dashboard',
  tags: ['api', 'microservice', 'sre'],
  timeRange: '6h',
  refreshInterval: '30s',
  panels: [
    { title: 'Request Rate', type: 'graph', datasource: 'Prometheus', query: 'rate(http_requests_total[5m])', unit: 'reqps' },
    { title: 'Error Rate', type: 'graph', datasource: 'Prometheus', query: 'rate(http_requests_total{status=~"5.."}[5m])', unit: 'reqps', thresholds: [{ value: 5, color: 'red' }] },
    { title: 'Latency p99', type: 'graph', datasource: 'Prometheus', query: 'histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))', unit: 's' },
    { title: 'Error Budget', type: 'stat', datasource: 'Prometheus', query: 'error_budget_remaining', unit: 'percent', thresholds: [{ value: 0, color: 'red' }, { value: 50, color: 'yellow' }, { value: 100, color: 'green' }] },
  ],
});

console.log(JSON.stringify(dashboard, null, 2));
```

This approach enables teams to manage monitoring configurations in version control, enforce dashboard standards, and generate per-service dashboards from templates.

## Mermaid: SRE Incident Response Workflow

```mermaid
flowchart TD
    A[Incident Occurs] --> B{Automated Detection?}
    B -->|Yes| C[Alert triggers via Alertmanager]
    B -->|No| D[User reports issue]
    C --> E[On-call engineer acknowledged]
    D --> E
    E --> F{Burn rate within error budget?}
    F -->|Yes: Within budget| G[Classify as low priority]
    F -->|No: Budget overrun| H[Classify as high priority]
    G --> I[Fix during business hours]
    H --> J[Immediate incident response]
    J --> K[Declare severity level]
    K --> L{Severity >= P2?}
    L -->|Yes| M[Incident commander assigned]
    L -->|No| N[Engineer handles solo]
    M --> O[Communicate status page update]
    N --> O
    O --> P[Root cause analysis begins]
    P --> Q[Implement fix]
    Q --> R[Run postmortem]
    R --> S[Add monitoring & alerting]
    S --> T[Update runbooks]
    T --> U[Conduct incident review]
    U --> V[Track action items]
    V --> A
```

## Mermaid: Error Budget Burn Rate Visualization

```mermaid
flowchart LR
    subgraph "Monthly Error Budget (99.9% SLO)"
        A[Total time: 43m 12s budgeted downtime]
    end
    subgraph "Budget Consumption"
        B[Week 1: 15m used]
        C[Week 2: 8m used]
        D[Week 3: 12m used]
        E[Week 4: 5m remaining]
    end
    subgraph "Burn Rate Alerts (multi-window approach)"
        F["<1x: Normal - no action"]
        G["1-2x: Warning - review ops"]
        H["2-5x: Page - immediate"]
        I[">5x: Critical - freeze deploys"]
    end
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
```

## Deeper Explanation: Implementing SLO-Driven Operations

Error budgets are the foundation of SRE practice. They determine when reliability concerns trump feature velocity:

**When error budget is full (>50% remaining):**
- Deployments proceed normally
- Feature velocity is priority
- Technical debt addressed at normal pace

**When error budget is depleting (10-50% remaining):**
- Deployments are gated: require additional testing or longer canary
- Team shifts focus to reliability improvements
- On-call rotations get additional support

**When error budget is exhausted (<10% remaining):**
- Feature deployments freeze entirely
- All engineering effort goes to reliability
- Incident response activated for any further degradation
- Postmortem required before deployments resume

**Calculating error budget programmatically:**

```typescript
interface SLOConfig {
  target: number; // e.g., 0.999 for 99.9%
  windowDays: number;
  totalRequests: number;
  successfulRequests: number;
}

class ErrorBudgetCalculator {
  calculateBudget(config: SLOConfig): {
    totalBudgetSeconds: number;
    usedBudgetSeconds: number;
    remainingBudget: number;
    burnRate: number;
    status: string;
  } {
    const totalSeconds = config.windowDays * 24 * 3600;
    const allowedFailures = totalSeconds * (1 - config.target);
    const actualAvailability = config.successfulRequests / config.totalRequests;
    const actualFailures = totalSeconds * (1 - actualAvailability);
    const budget = ((allowedFailures - actualFailures) / allowedFailures) * 100;
    const burnRate = actualFailures / (totalSeconds * (1 - config.target));

    return {
      totalBudgetSeconds: Math.round(allowedFailures),
      usedBudgetSeconds: Math.round(actualFailures),
      remainingBudget: Math.round(budget * 100) / 100,
      burnRate: Math.round(burnRate * 100) / 100,
      status: budget > 50 ? 'HEALTHY' : budget > 10 ? 'WARNING' : 'EXHAUSTED',
    };
  }
}

const calc = new ErrorBudgetCalculator();
const result = calc.calculateBudget({
  target: 0.999, windowDays: 30, totalRequests: 10000000, successfulRequests: 9995000,
});
console.log(JSON.stringify(result, null, 2));
// Output: ~{ totalBudgetSeconds: 2592, usedBudgetSeconds: 1296, remainingBudget: 50, burnRate: 0.5, status: "HEALTHY" }
```

### Alert Fatigue and Noise Reduction

**Common causes of alert fatigue:**
- Too many alerts firing simultaneously during incidents
- Alerts that never trigger any action (dead alerts)
- Alerts that always fire but are always ignored (background noise)
- Alerts with no clear runbook or remediation steps

**Strategies for reducing noise:**
1. **Alert on symptoms, not causes:** Alert when users are affected (latency exceeds threshold, error rate increases), not when internal metrics deviate.
2. **Use alert aggregation:** Group related alerts into a single notification. Alertmanager's grouping feature prevents alert storms.
3. **Implement alert suppression:** During scheduled maintenance, suppress related alerts using maintenance windows.
4. **Require sustained duration:** Fire alerts only when a condition persists for a minimum duration (e.g., 5 minutes).
5. **Remove zombie alerts:** Quarterly audit of all alert rules. Remove any that haven't fired or been acted on in 90 days.

**Alert routing based on severity:**

```typescript
enum AlertSeverity { CRITICAL = 'CRITICAL', WARNING = 'WARNING', INFO = 'INFO' }

interface AlertConfig {
  severity: AlertSeverity;
  condition: string;
  duration: string;
  notificationChannels: string[];
  runbook?: string;
}

const alertConfigs: AlertConfig[] = [
  {
    severity: AlertSeverity.CRITICAL,
    condition: 'error_rate > 5%',
    duration: '5m',
    notificationChannels: ['pagerduty', 'slack-urgent'],
    runbook: '/runbooks/high-error-rate.md',
  },
  {
    severity: AlertSeverity.WARNING,
    condition: 'error_rate > 2%',
    duration: '10m',
    notificationChannels: ['slack-alerts'],
  },
  {
    severity: AlertSeverity.INFO,
    condition: 'disk_usage > 80%',
    duration: '30m',
    notificationChannels: ['slack-alerts'],
  },
];
```

### Multi-Tenant Monitoring Design

In enterprise environments, monitoring must support multiple teams and services:

```mermaid
flowchart TD
    subgraph "Service A Team"
        A1[App Metrics] --> A2[Team Grafana]
        A2 --> A3[Team Alertmanager]
    end
    subgraph "Service B Team"
        B1[App Metrics] --> B2[Team Grafana]
        B2 --> B3[Team Alertmanager]
    end
    subgraph "Platform SRE Team"
        A2 --> C1[Global Grafana]
        B2 --> C1
        A3 --> C2[Global Alertmanager]
        B3 --> C2
        C1 --> C3[Executive Dashboard]
        C2 --> C4[On-call Rotation]
    end

    style A2 fill:#4A90D9,color:#fff
    style B2 fill:#4A90D9,color:#fff
    style C1 fill:#E6522C,color:#fff
    style C2 fill:#F05032,color:#fff
```

Each team owns their own dashboards and alerts. The platform team provides global visibility and escalation oversight.

### Service Level Objectives in Practice

**Choosing SLO targets:**
- **99.9%** (~8.7h downtime/year): Internal tools, development environments, non-critical services
- **99.95%** (~4.4h downtime/year): Standard production services with acceptable maintenance windows
- **99.99%** (~52m downtime/year): Customer-facing services, payment systems, core infrastructure
- **99.999%** (~5m downtime/year): Critical infrastructure, emergency services, real-time systems

**SLO implementation checklist:**
1. Define SLIs for each service (latency, error rate, throughput, availability)
2. Set SLO targets based on business requirements
3. Calculate error budgets monthly
4. Configure burn-rate alerts with multi-window, multi-burn-rate approach
5. Gate deployments when budget is depleted
6. Review SLOs quarterly and adjust targets based on actual performance


// configuration mgmt
// cicd-infrastructure-automation implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'configuration mgmt', data: { topic: 'cicd-infrastructure-automation' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }
## Summary

- SRE applies engineering principles to system operations to ensure high reliability.
- SLIs and SLOs are the foundation of data-driven reliability management.
- Error budgets quantify allowed unreliability and gate release velocity.
- Monitoring should focus on the Four Golden Signals: Latency, Traffic, Errors, and Saturation.
- Prometheus and Grafana are the industry standard for cloud-native monitoring.
- Alerting should be actionable and focused on symptoms that affect users.
- Toil elimination ensures SRE teams invest in automation rather than manual operations.
- Blameless postmortems drive systemic improvement after incidents.

---

## Exercises

### Review Questions
1. How does SRE differ from traditional Systems Administration?
2. What is an "Error Budget" and how is it calculated?
3. Explain the difference between an SLI and an SLO.
4. Why is "Saturation" an important metric to monitor?
5. What is the difference between toil and valuable operational work?

### Application Problems
1. Design an SLO for a messaging application that focuses on "Message Delivery Latency." Calculate the error budget for a 99.95% SLO over a 28-day window.
2. Write a PromQL query to find the average CPU usage across all nodes in a cluster over the last hour.
3. Identify three sources of "Toil" in an operations team and propose how an SRE would automate them.
4. Create a burn-rate alert rule that fires when 5% of a 30-day error budget is consumed in 1 hour.
5. Implement the TypeScript dashboard generator above to create a RED dashboard for a sample microservice. Extend it with panels for database connection pool usage and garbage collection metrics.
6. Using the error budget calculator, model the following scenario: a service has a 99.95% SLO over 30 days. On day 15, the service experiences a 30-minute outage. Calculate the remaining budget and determine whether deployments should be gated.

### Challenge Problem
1. You are tasked with setting up monitoring for a new microservices-based application. Describe the full stack you would choose and the first five alerts you would configure to ensure system health. Define SLOs for each service, calculate error budgets, and specify the monitoring dashboard layout using the Four Golden Signals framework. Include a toil reduction plan that would bring operational work below 50% of team time.
