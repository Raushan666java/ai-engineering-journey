# Week 7: Reliability & Monitoring - Complete Content

> **Master observability, monitoring, alerting, and building reliable distributed systems**

## 📚 Week Overview

**Duration**: 7 days  
**Difficulty**: Advanced  
**Prerequisites**: Weeks 1-6 completed

### Learning Objectives

By the end of this week, you will:
- ✅ Master the three pillars of observability
- ✅ Implement comprehensive monitoring systems
- ✅ Build effective alerting strategies
- ✅ Implement circuit breakers and resilience patterns
- ✅ Design SLIs, SLOs, and SLAs
- ✅ Practice chaos engineering
- ✅ Build production-ready systems

---

## 🎯 Day 1: Observability Fundamentals

### 1.1 Three Pillars of Observability

```
Observability = Metrics + Logs + Traces

┌─────────────────────────────────────────────┐
│           OBSERVABILITY PYRAMID             │
├─────────────────────────────────────────────┤
│  📊 METRICS                                 │
│  - What: Aggregated numerical data          │
│  - When: Real-time monitoring               │
│  - Example: CPU usage, request rate         │
├─────────────────────────────────────────────┤
│  📝 LOGS                                    │
│  - What: Discrete events                    │
│  - When: Debugging specific issues          │
│  - Example: Error messages, stack traces    │
├─────────────────────────────────────────────┤
│  🔍 TRACES                                  │
│  - What: Request path through system        │
│  - When: Understanding system behavior      │
│  - Example: API call spanning 5 services    │
└─────────────────────────────────────────────┘
```

### 1.2 Metrics Implementation

```python
from typing import Dict, List
from dataclasses import dataclass
from collections import defaultdict
import time
from enum import Enum

class MetricType(Enum):
    COUNTER = "counter"      # Always increasing
    GAUGE = "gauge"         # Can go up/down
    HISTOGRAM = "histogram"  # Distribution

@dataclass
class Metric:
    name: str
    type: MetricType
    value: float
    labels: Dict[str, str]
    timestamp: float

class MetricsCollector:
    """Production-grade metrics collector"""
    
    def __init__(self):
        self.counters: Dict[str, float] = defaultdict(float)
        self.gauges: Dict[str, float] = {}
        self.histograms: Dict[str, List[float]] = defaultdict(list)
        self.metrics_history: List[Metric] = []
    
    def increment_counter(self, name: str, value: float = 1.0, labels: Dict[str, str] = None):
        """Increment a counter (always increasing)"""
        key = self._make_key(name, labels)
        self.counters[key] += value
        self._record_metric(name, MetricType.COUNTER, self.counters[key], labels)
    
    def set_gauge(self, name: str, value: float, labels: Dict[str, str] = None):
        """Set gauge value (can increase/decrease)"""
        key = self._make_key(name, labels)
        self.gauges[key] = value
        self._record_metric(name, MetricType.GAUGE, value, labels)
    
    def observe_histogram(self, name: str, value: float, labels: Dict[str, str] = None):
        """Record histogram observation (distribution)"""
        key = self._make_key(name, labels)
        self.histograms[key].append(value)
        self._record_metric(name, MetricType.HISTOGRAM, value, labels)
    
    def get_percentile(self, name: str, percentile: float, labels: Dict[str, str] = None) -> float:
        """Calculate percentile from histogram"""
        key = self._make_key(name, labels)
        values = sorted(self.histograms[key])
        if not values:
            return 0.0
        index = int(len(values) * percentile / 100)
        return values[min(index, len(values) - 1)]
    
    def _make_key(self, name: str, labels: Dict[str, str] = None) -> str:
        if not labels:
            return name
        label_str = ",".join(f"{k}={v}" for k, v in sorted(labels.items()))
        return f"{name}{{{label_str}}}"
    
    def _record_metric(self, name: str, metric_type: MetricType, value: float, labels: Dict[str, str] = None):
        metric = Metric(
            name=name,
            type=metric_type,
            value=value,
            labels=labels or {},
            timestamp=time.time()
        )
        self.metrics_history.append(metric)
    
    def get_summary(self) -> Dict:
        """Get metrics summary"""
        return {
            "counters": dict(self.counters),
            "gauges": dict(self.gauges),
            "histograms_count": {k: len(v) for k, v in self.histograms.items()}
        }

# Demo: API metrics
metrics = MetricsCollector()

# Counter: Total requests
metrics.increment_counter("http_requests_total", labels={"method": "GET", "endpoint": "/api/users"})
metrics.increment_counter("http_requests_total", labels={"method": "GET", "endpoint": "/api/users"})
metrics.increment_counter("http_requests_total", labels={"method": "POST", "endpoint": "/api/orders"})

# Gauge: Active connections
metrics.set_gauge("active_connections", 42)
metrics.set_gauge("active_connections", 38)  # Can decrease

# Histogram: Response times
for duration in [120, 150, 180, 95, 200, 110, 300]:
    metrics.observe_histogram("http_request_duration_ms", duration, labels={"endpoint": "/api/users"})

print("📊 Metrics Summary:")
print(metrics.get_summary())
print(f"\np95 response time: {metrics.get_percentile('http_request_duration_ms', 95, {'endpoint': '/api/users'})}ms")
print(f"p99 response time: {metrics.get_percentile('http_request_duration_ms', 99, {'endpoint': '/api/users'})}ms")
```

**Output**:
```
📊 Metrics Summary:
{
  'counters': {
    'http_requests_total{endpoint=/api/users,method=GET}': 2.0,
    'http_requests_total{endpoint=/api/orders,method=POST}': 1.0
  },
  'gauges': {
    'active_connections': 38
  },
  'histograms_count': {
    'http_request_duration_ms{endpoint=/api/users}': 7
  }
}

p95 response time: 300ms
p99 response time: 300ms
```

### 1.3 Structured Logging

```python
import json
import logging
from datetime import datetime
from typing import Any, Dict

class StructuredLogger:
    """Production structured logging with JSON output"""
    
    def __init__(self, service_name: str):
        self.service_name = service_name
        self.logger = logging.getLogger(service_name)
        self.logger.setLevel(logging.INFO)
        
        # JSON formatter
        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter('%(message)s'))
        self.logger.addHandler(handler)
    
    def _log(self, level: str, message: str, **kwargs):
        log_entry = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": level,
            "service": self.service_name,
            "message": message,
            **kwargs
        }
        self.logger.info(json.dumps(log_entry))
    
    def info(self, message: str, **kwargs):
        self._log("INFO", message, **kwargs)
    
    def warning(self, message: str, **kwargs):
        self._log("WARNING", message, **kwargs)
    
    def error(self, message: str, **kwargs):
        self._log("ERROR", message, **kwargs)
    
    def debug(self, message: str, **kwargs):
        self._log("DEBUG", message, **kwargs)

# Demo: Structured logging
logger = StructuredLogger("order-service")

logger.info("Order created", 
    order_id="ORD-12345",
    user_id="USR-999",
    amount=99.99,
    payment_method="credit_card"
)

logger.error("Payment failed",
    order_id="ORD-12345",
    error_code="INSUFFICIENT_FUNDS",
    retry_count=3
)
```

### 1.4 Distributed Tracing

```python
import uuid
from typing import Optional, Dict, List
from dataclasses import dataclass
import time

@dataclass
class Span:
    """Represents a single operation in trace"""
    trace_id: str
    span_id: str
    parent_span_id: Optional[str]
    operation_name: str
    start_time: float
    end_time: Optional[float] = None
    tags: Dict[str, str] = None
    logs: List[str] = None
    
    def finish(self):
        self.end_time = time.time()
    
    def duration_ms(self) -> float:
        if self.end_time:
            return (self.end_time - self.start_time) * 1000
        return 0.0

class Tracer:
    """Distributed tracing implementation"""
    
    def __init__(self):
        self.spans: Dict[str, Span] = {}
    
    def start_trace(self, operation_name: str) -> Span:
        """Start a new trace (root span)"""
        trace_id = str(uuid.uuid4())
        span_id = str(uuid.uuid4())
        
        span = Span(
            trace_id=trace_id,
            span_id=span_id,
            parent_span_id=None,
            operation_name=operation_name,
            start_time=time.time(),
            tags={},
            logs=[]
        )
        self.spans[span_id] = span
        return span
    
    def start_span(self, operation_name: str, parent_span: Span) -> Span:
        """Start a child span"""
        span_id = str(uuid.uuid4())
        
        span = Span(
            trace_id=parent_span.trace_id,
            span_id=span_id,
            parent_span_id=parent_span.span_id,
            operation_name=operation_name,
            start_time=time.time(),
            tags={},
            logs=[]
        )
        self.spans[span_id] = span
        return span
    
    def get_trace(self, trace_id: str) -> List[Span]:
        """Get all spans for a trace"""
        return [span for span in self.spans.values() if span.trace_id == trace_id]

# Demo: Trace a distributed request
tracer = Tracer()

# Root span: API Gateway receives request
root_span = tracer.start_trace("POST /api/orders")
root_span.tags = {"http.method": "POST", "http.url": "/api/orders"}

time.sleep(0.01)  # Simulate work

# Child span: Call user service
user_span = tracer.start_span("GET /users/{id}", root_span)
user_span.tags = {"service": "user-service", "user_id": "123"}
time.sleep(0.02)
user_span.finish()

# Child span: Call inventory service
inventory_span = tracer.start_span("POST /inventory/reserve", root_span)
inventory_span.tags = {"service": "inventory-service", "product_id": "PROD-456"}
time.sleep(0.03)
inventory_span.finish()

# Child span: Call payment service
payment_span = tracer.start_span("POST /payments/charge", root_span)
payment_span.tags = {"service": "payment-service", "amount": "99.99"}
time.sleep(0.025)
payment_span.finish()

root_span.finish()

# Visualize trace
print("🔍 Distributed Trace:")
print(f"Trace ID: {root_span.trace_id}\n")
for span in tracer.get_trace(root_span.trace_id):
    indent = "  " if span.parent_span_id else ""
    print(f"{indent}{span.operation_name}: {span.duration_ms():.2f}ms")
    for key, value in (span.tags or {}).items():
        print(f"{indent}  - {key}: {value}")
```

---

## 🎯 Day 2: Monitoring Systems

### 2.1 Health Check System

```python
from enum import Enum
from typing import Dict, Callable
import asyncio

class HealthStatus(Enum):
    HEALTHY = "healthy"
    DEGRADED = "degraded"
    UNHEALTHY = "unhealthy"

class HealthCheck:
    """Comprehensive health check system"""
    
    def __init__(self):
        self.checks: Dict[str, Callable] = {}
    
    def register_check(self, name: str, check_func: Callable):
        """Register a health check"""
        self.checks[name] = check_func
    
    async def run_all_checks(self) -> Dict:
        """Run all health checks"""
        results = {}
        overall_status = HealthStatus.HEALTHY
        
        for name, check_func in self.checks.items():
            try:
                result = await check_func()
                results[name] = result
                
                if result["status"] == HealthStatus.UNHEALTHY:
                    overall_status = HealthStatus.UNHEALTHY
                elif result["status"] == HealthStatus.DEGRADED and overall_status == HealthStatus.HEALTHY:
                    overall_status = HealthStatus.DEGRADED
                    
            except Exception as e:
                results[name] = {
                    "status": HealthStatus.UNHEALTHY,
                    "error": str(e)
                }
                overall_status = HealthStatus.UNHEALTHY
        
        return {
            "status": overall_status.value,
            "checks": results
        }

# Demo: Health checks
health = HealthCheck()

async def check_database():
    """Check database connectivity"""
    await asyncio.sleep(0.01)  # Simulate DB ping
    return {
        "status": HealthStatus.HEALTHY,
        "response_time_ms": 5.2,
        "connections": {"active": 10, "idle": 5}
    }

async def check_cache():
    """Check cache connectivity"""
    await asyncio.sleep(0.005)
    return {
        "status": HealthStatus.HEALTHY,
        "response_time_ms": 2.1,
        "hit_rate": 0.85
    }

async def check_disk_space():
    """Check disk space"""
    used_percent = 75
    if used_percent > 90:
        status = HealthStatus.UNHEALTHY
    elif used_percent > 80:
        status = HealthStatus.DEGRADED
    else:
        status = HealthStatus.HEALTHY
    
    return {
        "status": status,
        "used_percent": used_percent,
        "available_gb": 100
    }

health.register_check("database", check_database)
health.register_check("cache", check_cache)
health.register_check("disk_space", check_disk_space)

# Run health checks
result = asyncio.run(health.run_all_checks())
print("🏥 Health Check Results:")
print(json.dumps(result, indent=2, default=str))
```

### 2.2 Prometheus-Style Metrics

```python
class PrometheusMetrics:
    """Prometheus-compatible metrics exporter"""
    
    def __init__(self):
        self.metrics = MetricsCollector()
    
    def export(self) -> str:
        """Export metrics in Prometheus format"""
        lines = []
        
        # Export counters
        for key, value in self.metrics.counters.items():
            lines.append(f"{key} {value}")
        
        # Export gauges
        for key, value in self.metrics.gauges.items():
            lines.append(f"{key} {value}")
        
        # Export histogram summaries
        for key, values in self.metrics.histograms.items():
            if values:
                sorted_values = sorted(values)
                lines.append(f"{key}_sum {sum(values)}")
                lines.append(f"{key}_count {len(values)}")
                lines.append(f"{key}{{quantile=\"0.5\"}} {sorted_values[len(values)//2]}")
                lines.append(f"{key}{{quantile=\"0.95\"}} {sorted_values[int(len(values)*0.95)]}")
                lines.append(f"{key}{{quantile=\"0.99\"}} {sorted_values[int(len(values)*0.99)]}")
        
        return "\n".join(lines)

# Demo
prom = PrometheusMetrics()
prom.metrics.increment_counter("http_requests_total", labels={"status": "200"})
prom.metrics.set_gauge("memory_usage_bytes", 524288000)

for duration in [50, 75, 100, 125, 150, 200, 500]:
    prom.metrics.observe_histogram("http_duration_seconds", duration / 1000.0)

print("📊 Prometheus Metrics Export:")
print(prom.export())
```

---

## 🎯 Day 3: Circuit Breakers & Resilience

### 3.1 Circuit Breaker Pattern

```python
from enum import Enum
import time
from typing import Callable, Any
import asyncio

class CircuitState(Enum):
    CLOSED = "closed"       # Normal operation
    OPEN = "open"          # Failing, reject requests
    HALF_OPEN = "half_open" # Testing recovery

class CircuitBreaker:
    """Production-grade circuit breaker"""
    
    def __init__(self, 
                 failure_threshold: int = 5,
                 success_threshold: int = 2,
                 timeout: int = 60,
                 expected_exception: type = Exception):
        self.failure_threshold = failure_threshold
        self.success_threshold = success_threshold
        self.timeout = timeout
        self.expected_exception = expected_exception
        
        self.failure_count = 0
        self.success_count = 0
        self.last_failure_time = None
        self.state = CircuitState.CLOSED
    
    async def call(self, func: Callable, *args, **kwargs) -> Any:
        """Execute function with circuit breaker protection"""
        
        if self.state == CircuitState.OPEN:
            if self._should_attempt_reset():
                self.state = CircuitState.HALF_OPEN
                print("🔄 Circuit breaker: HALF_OPEN (testing recovery)")
            else:
                raise Exception(f"Circuit breaker OPEN - failing fast (retry after {self.timeout}s)")
        
        try:
            result = await func(*args, **kwargs)
            self._on_success()
            return result
        except self.expected_exception as e:
            self._on_failure()
            raise e
    
    def _should_attempt_reset(self) -> bool:
        """Check if enough time has passed to attempt reset"""
        return (time.time() - self.last_failure_time) >= self.timeout
    
    def _on_success(self):
        """Handle successful call"""
        self.failure_count = 0
        
        if self.state == CircuitState.HALF_OPEN:
            self.success_count += 1
            if self.success_count >= self.success_threshold:
                self.state = CircuitState.CLOSED
                self.success_count = 0
                print("✅ Circuit breaker: CLOSED (recovered)")
    
    def _on_failure(self):
        """Handle failed call"""
        self.failure_count += 1
        self.last_failure_time = time.time()
        
        if self.state == CircuitState.HALF_OPEN:
            self.state = CircuitState.OPEN
            print("❌ Circuit breaker: OPEN (recovery failed)")
        elif self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
            print(f"⚠️  Circuit breaker: OPEN (threshold {self.failure_count}/{self.failure_threshold} reached)")
    
    def get_state(self) -> CircuitState:
        return self.state

# Demo: Circuit breaker protecting flaky service
circuit_breaker = CircuitBreaker(failure_threshold=3, timeout=2)

async def flaky_service(should_fail: bool):
    """Simulate a flaky external service"""
    await asyncio.sleep(0.01)
    if should_fail:
        raise Exception("Service unavailable")
    return {"status": "success"}

async def test_circuit_breaker():
    print("Testing Circuit Breaker Pattern\n")
    
    # Trigger failures
    print("1️⃣ Triggering failures...")
    for i in range(5):
        try:
            await circuit_breaker.call(flaky_service, should_fail=True)
        except Exception as e:
            print(f"   Call {i+1}: {e}")
    
    print(f"\n2️⃣ Circuit is now: {circuit_breaker.get_state().value}")
    
    # Try calling while circuit is open
    print("\n3️⃣ Attempting calls while circuit is OPEN...")
    try:
        await circuit_breaker.call(flaky_service, should_fail=False)
    except Exception as e:
        print(f"   Rejected: {e}")
    
    # Wait for timeout
    print(f"\n4️⃣ Waiting {circuit_breaker.timeout} seconds for reset...")
    await asyncio.sleep(circuit_breaker.timeout + 0.1)
    
    # Circuit moves to HALF_OPEN and tests
    print("\n5️⃣ Testing recovery...")
    for i in range(3):
        try:
            result = await circuit_breaker.call(flaky_service, should_fail=False)
            print(f"   Call {i+1}: Success!")
        except Exception as e:
            print(f"   Call {i+1}: {e}")
    
    print(f"\n6️⃣ Final state: {circuit_breaker.get_state().value}")

asyncio.run(test_circuit_breaker())
```

### 3.2 Retry with Exponential Backoff

```python
import random

class RetryPolicy:
    """Retry with exponential backoff and jitter"""
    
    def __init__(self, max_retries: int = 3, base_delay: float = 1.0, max_delay: float = 60.0):
        self.max_retries = max_retries
        self.base_delay = base_delay
        self.max_delay = max_delay
    
    async def execute(self, func: Callable, *args, **kwargs) -> Any:
        """Execute function with retry logic"""
        last_exception = None
        
        for attempt in range(self.max_retries + 1):
            try:
                return await func(*args, **kwargs)
            except Exception as e:
                last_exception = e
                
                if attempt == self.max_retries:
                    print(f"❌ All {self.max_retries} retries exhausted")
                    raise last_exception
                
                # Calculate backoff with jitter
                delay = min(self.base_delay * (2 ** attempt), self.max_delay)
                jitter = random.uniform(0, delay * 0.1)  # 10% jitter
                total_delay = delay + jitter
                
                print(f"⚠️  Attempt {attempt + 1} failed: {e}")
                print(f"   Retrying in {total_delay:.2f}s...")
                await asyncio.sleep(total_delay)
        
        raise last_exception

# Demo
retry_policy = RetryPolicy(max_retries=3, base_delay=0.5)

async def unreliable_api(fail_count: int):
    """Simulate unreliable API"""
    if fail_count > 0:
        fail_count -= 1
        raise Exception("API temporarily unavailable")
    return {"status": "success", "data": "Response data"}

async def test_retry():
    print("Testing Retry with Exponential Backoff\n")
    try:
        result = await retry_policy.execute(unreliable_api, fail_count=2)
        print(f"\n✅ Success: {result}")
    except Exception as e:
        print(f"\n❌ Final failure: {e}")

asyncio.run(test_retry())
```

---

## 🎯 Day 4: SLIs, SLOs, and SLAs

### 4.1 Service Level Indicators (SLIs)

```python
class SLICalculator:
    """Calculate Service Level Indicators"""
    
    def __init__(self):
        self.requests_total = 0
        self.requests_successful = 0
        self.response_times = []
    
    def record_request(self, success: bool, response_time_ms: float):
        """Record a request"""
        self.requests_total += 1
        if success:
            self.requests_successful += 1
        self.response_times.append(response_time_ms)
    
    def availability(self) -> float:
        """Calculate availability SLI"""
        if self.requests_total == 0:
            return 0.0
        return (self.requests_successful / self.requests_total) * 100
    
    def latency_p95(self) -> float:
        """Calculate p95 latency SLI"""
        if not self.response_times:
            return 0.0
        sorted_times = sorted(self.response_times)
        index = int(len(sorted_times) * 0.95)
        return sorted_times[index]
    
    def latency_p99(self) -> float:
        """Calculate p99 latency SLI"""
        if not self.response_times:
            return 0.0
        sorted_times = sorted(self.response_times)
        index = int(len(sorted_times) * 0.99)
        return sorted_times[index]
    
    def error_rate(self) -> float:
        """Calculate error rate"""
        if self.requests_total == 0:
            return 0.0
        errors = self.requests_total - self.requests_successful
        return (errors / self.requests_total) * 100

# Demo: Track SLIs
sli = SLICalculator()

# Simulate traffic
import random
for _ in range(1000):
    success = random.random() > 0.02  # 98% success rate
    latency = random.uniform(50, 200) if success else random.uniform(500, 1000)
    sli.record_request(success, latency)

print("📊 Service Level Indicators (SLIs):")
print(f"Availability: {sli.availability():.2f}%")
print(f"Error Rate: {sli.error_rate():.2f}%")
print(f"P95 Latency: {sli.latency_p95():.2f}ms")
print(f"P99 Latency: {sli.latency_p99():.2f}ms")
```

### 4.2 Service Level Objectives (SLOs)

```python
@dataclass
class SLO:
    """Service Level Objective"""
    name: str
    target: float  # Target percentage
    sli_func: Callable[[], float]  # Function to calculate SLI
    
    def is_met(self) -> bool:
        """Check if SLO is being met"""
        return self.sli_func() >= self.target
    
    def remaining_error_budget(self, window_size: int = 30) -> float:
        """Calculate remaining error budget"""
        current_sli = self.sli_func()
        return current_sli - self.target

class SLOMonitor:
    """Monitor SLOs and error budgets"""
    
    def __init__(self):
        self.slos: List[SLO] = []
    
    def add_slo(self, slo: SLO):
        self.slos.append(slo)
    
    def check_all(self) -> Dict:
        """Check all SLOs"""
        results = {}
        for slo in self.slos:
            current_value = slo.sli_func()
            is_met = slo.is_met()
            error_budget = slo.remaining_error_budget()
            
            results[slo.name] = {
                "target": slo.target,
                "current": current_value,
                "is_met": is_met,
                "error_budget": error_budget,
                "status": "✅" if is_met else "❌"
            }
        return results

# Demo: SLO monitoring
monitor = SLOMonitor()

# Define SLOs
monitor.add_slo(SLO(
    name="Availability",
    target=99.9,  # 99.9% uptime
    sli_func=lambda: sli.availability()
))

monitor.add_slo(SLO(
    name="P95 Latency",
    target=95.0,  # At least 95% under 200ms
    sli_func=lambda: 100.0 if sli.latency_p95() < 200 else 0.0
))

monitor.add_slo(SLO(
    name="Error Rate",
    target=98.0,  # Max 2% error rate (inverse)
    sli_func=lambda: 100.0 - sli.error_rate()
))

print("\n📈 Service Level Objectives (SLOs):")
results = monitor.check_all()
for name, data in results.items():
    print(f"\n{data['status']} {name}:")
    print(f"   Target: {data['target']:.2f}%")
    print(f"   Current: {data['current']:.2f}%")
    print(f"   Error Budget: {data['error_budget']:+.2f}%")
```

---

## 🎯 Day 5: Alerting & Incident Management

### 5.1 Alert Manager

```python
from enum import Enum
from typing import List, Callable

class AlertSeverity(Enum):
    INFO = "info"
    WARNING = "warning"
    CRITICAL = "critical"

@dataclass
class Alert:
    name: str
    severity: AlertSeverity
    message: str
    timestamp: float
    labels: Dict[str, str]

class AlertManager:
    """Alert management system"""
    
    def __init__(self):
        self.rules: List[Dict] = []
        self.alerts: List[Alert] = []
        self.notification_handlers: List[Callable] = []
    
    def add_rule(self, name: str, condition: Callable[[], bool], 
                 severity: AlertSeverity, message: str, labels: Dict[str, str] = None):
        """Add alerting rule"""
        self.rules.append({
            "name": name,
            "condition": condition,
            "severity": severity,
            "message": message,
            "labels": labels or {}
        })
    
    def register_handler(self, handler: Callable):
        """Register notification handler"""
        self.notification_handlers.append(handler)
    
    def evaluate_rules(self):
        """Evaluate all rules and fire alerts"""
        for rule in self.rules:
            if rule["condition"]():
                alert = Alert(
                    name=rule["name"],
                    severity=rule["severity"],
                    message=rule["message"],
                    timestamp=time.time(),
                    labels=rule["labels"]
                )
                self.alerts.append(alert)
                self._notify(alert)
    
    def _notify(self, alert: Alert):
        """Send notifications"""
        for handler in self.notification_handlers:
            handler(alert)

# Demo: Alerting
alert_manager = AlertManager()

# Define alerting rules
alert_manager.add_rule(
    name="HighErrorRate",
    condition=lambda: sli.error_rate() > 5.0,  # Alert if >5% errors
    severity=AlertSeverity.CRITICAL,
    message="Error rate exceeded threshold",
    labels={"team": "backend", "service": "api"}
)

alert_manager.add_rule(
    name="HighLatency",
    condition=lambda: sli.latency_p99() > 500,  # Alert if p99 > 500ms
    severity=AlertSeverity.WARNING,
    message="P99 latency is high",
    labels={"team": "backend", "service": "api"}
)

alert_manager.add_rule(
    name="LowAvailability",
    condition=lambda: sli.availability() < 99.5,  # Alert if <99.5%
    severity=AlertSeverity.CRITICAL,
    message="Service availability dropped",
    labels={"team": "backend", "service": "api"}
)

# Register notification handler
def send_notification(alert: Alert):
    severity_emoji = {
        AlertSeverity.INFO: "ℹ️",
        AlertSeverity.WARNING: "⚠️",
        AlertSeverity.CRITICAL: "🚨"
    }
    print(f"{severity_emoji[alert.severity]} ALERT: {alert.name}")
    print(f"   Severity: {alert.severity.value}")
    print(f"   Message: {alert.message}")
    print(f"   Labels: {alert.labels}")
    print(f"   Time: {datetime.fromtimestamp(alert.timestamp)}")

alert_manager.register_handler(send_notification)

# Evaluate rules
print("\n🔔 Evaluating Alert Rules:")
alert_manager.evaluate_rules()
```

---

## 🎯 Day 6: Chaos Engineering

### 6.1 Chaos Testing Framework

```python
import random
from typing import Callable

class ChaosExperiment:
    """Chaos engineering experiment"""
    
    def __init__(self, name: str):
        self.name = name
        self.failures_injected = 0
    
    async def inject_latency(self, func: Callable, min_delay: float, max_delay: float):
        """Inject random latency"""
        delay = random.uniform(min_delay, max_delay)
        print(f"💥 Injecting {delay:.2f}s latency")
        await asyncio.sleep(delay)
        return await func()
    
    async def inject_failure(self, func: Callable, failure_rate: float = 0.5):
        """Inject random failures"""
        if random.random() < failure_rate:
            self.failures_injected += 1
            print(f"💥 Injecting failure (total: {self.failures_injected})")
            raise Exception("Chaos: Simulated failure")
        return await func()
    
    async def inject_timeout(self, func: Callable, timeout: float):
        """Inject timeout"""
        try:
            return await asyncio.wait_for(func(), timeout=timeout)
        except asyncio.TimeoutError:
            print(f"💥 Request timed out after {timeout}s")
            raise

# Demo: Chaos experiment
async def stable_service():
    """A normally stable service"""
    await asyncio.sleep(0.1)
    return {"status": "success"}

async def run_chaos_experiment():
    print("🔬 Running Chaos Engineering Experiment\n")
    
    chaos = ChaosExperiment("Latency & Failure Test")
    circuit = CircuitBreaker(failure_threshold=3)
    
    for i in range(10):
        try:
            # Inject chaos
            result = await chaos.inject_failure(
                lambda: chaos.inject_latency(stable_service, 0.1, 0.5),
                failure_rate=0.3
            )
            
            # Protected by circuit breaker
            await circuit.call(lambda: result)
            print(f"✅ Request {i+1}: Success")
            
        except Exception as e:
            print(f"❌ Request {i+1}: {e}")
    
    print(f"\n📊 Experiment Results:")
    print(f"Failures injected: {chaos.failures_injected}/10")
    print(f"Circuit breaker state: {circuit.get_state().value}")

asyncio.run(run_chaos_experiment())
```

---

## 🎯 Day 7: Production Readiness

### 7.1 Production Readiness Checklist

```python
from typing import List
from dataclasses import dataclass

@dataclass
class ReadinessCheck:
    category: str
    item: str
    completed: bool
    notes: str = ""

class ProductionReadiness:
    """Production readiness assessment"""
    
    def __init__(self):
        self.checks: List[ReadinessCheck] = []
        self._initialize_checks()
    
    def _initialize_checks(self):
        """Initialize standard checks"""
        categories = {
            "Observability": [
                "Metrics collection implemented",
                "Structured logging in place",
                "Distributed tracing configured",
                "Dashboards created",
            ],
            "Reliability": [
                "Circuit breakers implemented",
                "Retry logic with backoff",
                "Health checks configured",
                "Rate limiting in place",
            ],
            "Alerting": [
                "SLOs defined",
                "Alert rules configured",
                "On-call rotation setup",
                "Runbooks documented",
            ],
            "Security": [
                "Authentication implemented",
                "Authorization configured",
                "Secrets management setup",
                "Security scanning enabled",
            ],
            "Scalability": [
                "Load testing completed",
                "Auto-scaling configured",
                "Database indexed",
                "Caching strategy implemented",
            ]
        }
        
        for category, items in categories.items():
            for item in items:
                self.checks.append(ReadinessCheck(category, item, False))
    
    def mark_complete(self, item: str, notes: str = ""):
        """Mark a check as complete"""
        for check in self.checks:
            if check.item == item:
                check.completed = True
                check.notes = notes
                break
    
    def get_score(self) -> float:
        """Calculate readiness score"""
        completed = sum(1 for check in self.checks if check.completed)
        return (completed / len(self.checks)) * 100
    
    def report(self) -> str:
        """Generate readiness report"""
        lines = ["🎯 Production Readiness Report\n"]
        
        current_category = None
        for check in self.checks:
            if check.category != current_category:
                current_category = check.category
                lines.append(f"\n{current_category}:")
            
            status = "✅" if check.completed else "❌"
            lines.append(f"  {status} {check.item}")
            if check.notes:
                lines.append(f"     Note: {check.notes}")
        
        lines.append(f"\n📊 Overall Score: {self.get_score():.1f}%")
        return "\n".join(lines)

# Demo
readiness = ProductionReadiness()

# Mark some items complete
readiness.mark_complete("Metrics collection implemented", "Using Prometheus")
readiness.mark_complete("Structured logging in place", "JSON logs to stdout")
readiness.mark_complete("Circuit breakers implemented", "Using custom implementation")
readiness.mark_complete("Health checks configured", "/health and /ready endpoints")
readiness.mark_complete("SLOs defined", "99.9% availability, p95 < 200ms")

print(readiness.report())
```

---

## 📚 Week 7 Summary

### What You've Mastered

✅ **Observability**
- Metrics (Counter, Gauge, Histogram)
- Structured logging
- Distributed tracing

✅ **Monitoring**
- Health check systems
- Prometheus-style metrics
- Real-time dashboards

✅ **Resilience**
- Circuit breakers
- Retry policies with exponential backoff
- Bulkhead pattern

✅ **SLOs & Alerting**
- Service Level Indicators
- Service Level Objectives
- Error budgets
- Alert management

✅ **Chaos Engineering**
- Failure injection
- Latency injection
- Resilience testing

✅ **Production Readiness**
- Comprehensive checklists
- Readiness scoring
- Best practices

### Key Takeaways

1. **Observability is essential**: You can't fix what you can't see
2. **Fail gracefully**: Circuit breakers prevent cascade failures
3. **Define SLOs**: Know what "good" looks like
4. **Test for chaos**: Break things intentionally before they break accidentally
5. **Be prepared**: Documentation and runbooks save lives

### Next Steps

- **Week 8**: Security & Infrastructure (Auth, encryption, deployment)
- **Practice**: Implement monitoring in your existing projects
- **Read**: "Site Reliability Engineering" book by Google

---

## 🎯 Practice Exercises

1. **Build a monitoring dashboard** for a microservice
2. **Implement circuit breakers** in a distributed system
3. **Define SLOs** for a real application
4. **Run chaos experiments** on your services
5. **Create runbooks** for common incidents

**Congratulations on completing Week 7! 🎉**
