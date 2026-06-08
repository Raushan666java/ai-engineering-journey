package day33.observability;

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;
import java.util.function.*;

/**
 * DAY 33: OBSERVABILITY PATTERNS
 * 
 * Topics Covered:
 * 1. Structured Logging
 * 2. Metrics Collection (Prometheus)
 * 3. Distributed Tracing (OpenTelemetry)
 * 4. Health Checks & Readiness Probes
 * 5. Alerting & Monitoring
 * 
 * Real-world applications:
 * - Google: Dapper distributed tracing system
 * - Twitter: Zipkin for microservices tracing
 * - Uber: Jaeger for distributed tracing
 * - Netflix: Atlas for metrics collection
 */

public class ObservabilityPatterns {
    
    /**
     * PATTERN 1: STRUCTURED LOGGING
     * ==============================
     * 
     * Machine-readable logs in JSON format
     * Correlation IDs for request tracking
     * Log levels and context
     * Centralized log aggregation
     */
    
    static class StructuredLogger {
        private final String serviceName;
        private final String version;
        private final BlockingQueue<LogEntry> logQueue;
        private final ExecutorService logProcessor;
        private volatile boolean running;
        
        public enum LogLevel {
            TRACE, DEBUG, INFO, WARN, ERROR, FATAL
        }
        
        public StructuredLogger(String serviceName, String version) {
            this.serviceName = serviceName;
            this.version = version;
            this.logQueue = new LinkedBlockingQueue<>();
            this.logProcessor = Executors.newSingleThreadExecutor();
            this.running = false;
        }
        
        public void start() {
            running = true;
            logProcessor.submit(() -> {
                while (running || !logQueue.isEmpty()) {
                    try {
                        LogEntry entry = logQueue.poll(100, TimeUnit.MILLISECONDS);
                        if (entry != null) {
                            // In production: send to log aggregator (ELK, Loki, CloudWatch)
                            System.out.println(entry.toJson());
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
            });
        }
        
        public void log(LogLevel level, String message, Map<String, Object> context) {
            LogEntry entry = new LogEntry(serviceName, version, level, message, context);
            logQueue.offer(entry);
        }
        
        public void trace(String message) {
            log(LogLevel.TRACE, message, Collections.emptyMap());
        }
        
        public void debug(String message, Map<String, Object> context) {
            log(LogLevel.DEBUG, message, context);
        }
        
        public void info(String message) {
            log(LogLevel.INFO, message, Collections.emptyMap());
        }
        
        public void info(String message, Map<String, Object> context) {
            log(LogLevel.INFO, message, context);
        }
        
        public void warn(String message, Map<String, Object> context) {
            log(LogLevel.WARN, message, context);
        }
        
        public void error(String message, Throwable error) {
            Map<String, Object> context = new HashMap<>();
            context.put("error_class", error.getClass().getName());
            context.put("error_message", error.getMessage());
            context.put("stack_trace", getStackTrace(error));
            log(LogLevel.ERROR, message, context);
        }
        
        private String getStackTrace(Throwable error) {
            return Arrays.stream(error.getStackTrace())
                .limit(5)
                .map(StackTraceElement::toString)
                .collect(Collectors.joining(" | "));
        }
        
        public void shutdown() {
            running = false;
            logProcessor.shutdown();
        }
    }
    
    static class LogEntry {
        private final Instant timestamp;
        private final String service;
        private final String version;
        private final StructuredLogger.LogLevel level;
        private final String message;
        private final Map<String, Object> context;
        private final String traceId;
        private final String spanId;
        
        public LogEntry(String service, String version, StructuredLogger.LogLevel level, 
                       String message, Map<String, Object> context) {
            this.timestamp = Instant.now();
            this.service = service;
            this.version = version;
            this.level = level;
            this.message = message;
            this.context = new HashMap<>(context);
            this.traceId = getTraceIdFromContext();
            this.spanId = UUID.randomUUID().toString().substring(0, 8);
        }
        
        private String getTraceIdFromContext() {
            // In production: extract from ThreadLocal or MDC
            return UUID.randomUUID().toString();
        }
        
        public String toJson() {
            StringBuilder json = new StringBuilder("{");
            json.append("\"timestamp\":\"").append(timestamp).append("\",");
            json.append("\"service\":\"").append(service).append("\",");
            json.append("\"version\":\"").append(version).append("\",");
            json.append("\"level\":\"").append(level).append("\",");
            json.append("\"message\":\"").append(escapeJson(message)).append("\",");
            json.append("\"trace_id\":\"").append(traceId).append("\",");
            json.append("\"span_id\":\"").append(spanId).append("\"");
            
            if (!context.isEmpty()) {
                json.append(",\"context\":{");
                context.forEach((k, v) -> 
                    json.append("\"").append(k).append("\":\"").append(v).append("\",")
                );
                json.setLength(json.length() - 1);
                json.append("}");
            }
            
            json.append("}");
            return json.toString();
        }
        
        private String escapeJson(String str) {
            return str.replace("\"", "\\\"").replace("\n", "\\n");
        }
    }
    
    /**
     * PATTERN 2: METRICS COLLECTION (PROMETHEUS)
     * ===========================================
     * 
     * Counter - Monotonically increasing value
     * Gauge - Value that can go up or down
     * Histogram - Observations in buckets
     * Summary - Similar to histogram with quantiles
     */
    
    static class MetricsRegistry {
        private final Map<String, Counter> counters;
        private final Map<String, Gauge> gauges;
        private final Map<String, Histogram> histograms;
        private final String namespace;
        
        public MetricsRegistry(String namespace) {
            this.namespace = namespace;
            this.counters = new ConcurrentHashMap<>();
            this.gauges = new ConcurrentHashMap<>();
            this.histograms = new ConcurrentHashMap<>();
        }
        
        public Counter counter(String name, String help) {
            return counters.computeIfAbsent(name, k -> new Counter(namespace, name, help));
        }
        
        public Gauge gauge(String name, String help) {
            return gauges.computeIfAbsent(name, k -> new Gauge(namespace, name, help));
        }
        
        public Histogram histogram(String name, String help, double[] buckets) {
            return histograms.computeIfAbsent(name, k -> new Histogram(namespace, name, help, buckets));
        }
        
        // Prometheus exposition format
        public String scrape() {
            StringBuilder output = new StringBuilder();
            
            // Export counters
            counters.values().forEach(counter -> output.append(counter.export()));
            
            // Export gauges
            gauges.values().forEach(gauge -> output.append(gauge.export()));
            
            // Export histograms
            histograms.values().forEach(histogram -> output.append(histogram.export()));
            
            return output.toString();
        }
    }
    
    static class Counter {
        private final String namespace;
        private final String name;
        private final String help;
        private final Map<Map<String, String>, Double> values;
        
        public Counter(String namespace, String name, String help) {
            this.namespace = namespace;
            this.name = name;
            this.help = help;
            this.values = new ConcurrentHashMap<>();
        }
        
        public void inc() {
            inc(Collections.emptyMap(), 1.0);
        }
        
        public void inc(Map<String, String> labels) {
            inc(labels, 1.0);
        }
        
        public void inc(Map<String, String> labels, double amount) {
            values.merge(labels, amount, Double::sum);
        }
        
        public String export() {
            StringBuilder sb = new StringBuilder();
            sb.append("# HELP ").append(namespace).append("_").append(name).append(" ").append(help).append("\n");
            sb.append("# TYPE ").append(namespace).append("_").append(name).append(" counter\n");
            
            values.forEach((labels, value) -> {
                sb.append(namespace).append("_").append(name);
                if (!labels.isEmpty()) {
                    sb.append("{");
                    labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                    sb.setLength(sb.length() - 1);
                    sb.append("}");
                }
                sb.append(" ").append(value).append("\n");
            });
            
            return sb.toString();
        }
    }
    
    static class Gauge {
        private final String namespace;
        private final String name;
        private final String help;
        private final Map<Map<String, String>, Double> values;
        
        public Gauge(String namespace, String name, String help) {
            this.namespace = namespace;
            this.name = name;
            this.help = help;
            this.values = new ConcurrentHashMap<>();
        }
        
        public void set(double value) {
            set(Collections.emptyMap(), value);
        }
        
        public void set(Map<String, String> labels, double value) {
            values.put(labels, value);
        }
        
        public void inc() {
            inc(Collections.emptyMap());
        }
        
        public void inc(Map<String, String> labels) {
            values.merge(labels, 1.0, Double::sum);
        }
        
        public void dec() {
            dec(Collections.emptyMap());
        }
        
        public void dec(Map<String, String> labels) {
            values.merge(labels, -1.0, Double::sum);
        }
        
        public String export() {
            StringBuilder sb = new StringBuilder();
            sb.append("# HELP ").append(namespace).append("_").append(name).append(" ").append(help).append("\n");
            sb.append("# TYPE ").append(namespace).append("_").append(name).append(" gauge\n");
            
            values.forEach((labels, value) -> {
                sb.append(namespace).append("_").append(name);
                if (!labels.isEmpty()) {
                    sb.append("{");
                    labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                    sb.setLength(sb.length() - 1);
                    sb.append("}");
                }
                sb.append(" ").append(value).append("\n");
            });
            
            return sb.toString();
        }
    }
    
    static class Histogram {
        private final String namespace;
        private final String name;
        private final String help;
        private final double[] buckets;
        private final Map<Map<String, String>, HistogramData> data;
        
        public Histogram(String namespace, String name, String help, double[] buckets) {
            this.namespace = namespace;
            this.name = name;
            this.help = help;
            this.buckets = buckets;
            this.data = new ConcurrentHashMap<>();
        }
        
        public void observe(double value) {
            observe(Collections.emptyMap(), value);
        }
        
        public void observe(Map<String, String> labels, double value) {
            data.computeIfAbsent(labels, k -> new HistogramData(buckets)).observe(value);
        }
        
        public String export() {
            StringBuilder sb = new StringBuilder();
            sb.append("# HELP ").append(namespace).append("_").append(name).append(" ").append(help).append("\n");
            sb.append("# TYPE ").append(namespace).append("_").append(name).append(" histogram\n");
            
            data.forEach((labels, histData) -> {
                // Export buckets
                for (int i = 0; i < buckets.length; i++) {
                    sb.append(namespace).append("_").append(name).append("_bucket");
                    sb.append("{");
                    labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                    sb.append("le=\"").append(buckets[i]).append("\"}");
                    sb.append(" ").append(histData.getBucketCount(i)).append("\n");
                }
                
                // +Inf bucket
                sb.append(namespace).append("_").append(name).append("_bucket");
                sb.append("{");
                labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                sb.append("le=\"+Inf\"}");
                sb.append(" ").append(histData.getCount()).append("\n");
                
                // Sum
                sb.append(namespace).append("_").append(name).append("_sum");
                if (!labels.isEmpty()) {
                    sb.append("{");
                    labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                    sb.setLength(sb.length() - 1);
                    sb.append("}");
                }
                sb.append(" ").append(histData.getSum()).append("\n");
                
                // Count
                sb.append(namespace).append("_").append(name).append("_count");
                if (!labels.isEmpty()) {
                    sb.append("{");
                    labels.forEach((k, v) -> sb.append(k).append("=\"").append(v).append("\","));
                    sb.setLength(sb.length() - 1);
                    sb.append("}");
                }
                sb.append(" ").append(histData.getCount()).append("\n");
            });
            
            return sb.toString();
        }
    }
    
    static class HistogramData {
        private final double[] buckets;
        private final long[] bucketCounts;
        private long count;
        private double sum;
        
        public HistogramData(double[] buckets) {
            this.buckets = buckets;
            this.bucketCounts = new long[buckets.length];
            this.count = 0;
            this.sum = 0;
        }
        
        public synchronized void observe(double value) {
            count++;
            sum += value;
            
            for (int i = 0; i < buckets.length; i++) {
                if (value <= buckets[i]) {
                    bucketCounts[i]++;
                }
            }
        }
        
        public long getBucketCount(int index) {
            return bucketCounts[index];
        }
        
        public long getCount() {
            return count;
        }
        
        public double getSum() {
            return sum;
        }
    }
    
    /**
     * PATTERN 3: DISTRIBUTED TRACING (OpenTelemetry)
     * ===============================================
     * 
     * Trace - Complete request flow across services
     * Span - Single operation within a trace
     * Context Propagation - Pass trace context between services
     */
    
    static class Tracer {
        private final String serviceName;
        private final Map<String, Trace> activeTraces;
        private final List<Span> completedSpans;
        
        public Tracer(String serviceName) {
            this.serviceName = serviceName;
            this.activeTraces = new ConcurrentHashMap<>();
            this.completedSpans = new CopyOnWriteArrayList<>();
        }
        
        public Trace startTrace(String operationName) {
            String traceId = UUID.randomUUID().toString();
            Trace trace = new Trace(traceId, serviceName, operationName);
            activeTraces.put(traceId, trace);
            return trace;
        }
        
        public Span startSpan(String traceId, String operationName) {
            Trace trace = activeTraces.get(traceId);
            if (trace == null) {
                throw new IllegalArgumentException("Unknown trace: " + traceId);
            }
            return trace.startSpan(operationName, null);
        }
        
        public void finishTrace(String traceId) {
            Trace trace = activeTraces.remove(traceId);
            if (trace != null) {
                trace.finish();
                completedSpans.addAll(trace.getSpans());
            }
        }
        
        public List<Span> getCompletedSpans() {
            return new ArrayList<>(completedSpans);
        }
        
        public void exportTraces() {
            System.out.println("\n=== Trace Export (Jaeger Format) ===");
            
            Map<String, List<Span>> spansByTrace = completedSpans.stream()
                .collect(Collectors.groupingBy(Span::getTraceId));
            
            spansByTrace.forEach((traceId, spans) -> {
                System.out.println("\nTrace ID: " + traceId);
                System.out.println("Duration: " + calculateTraceDuration(spans) + "ms");
                System.out.println("Spans:");
                
                // Build span tree
                Map<String, Span> spansById = spans.stream()
                    .collect(Collectors.toMap(Span::getSpanId, s -> s));
                
                spans.stream()
                    .filter(s -> s.getParentSpanId() == null)
                    .forEach(root -> printSpanTree(root, spansById, 0));
            });
        }
        
        private long calculateTraceDuration(List<Span> spans) {
            Instant earliest = spans.stream()
                .map(Span::getStartTime)
                .min(Instant::compareTo)
                .orElse(Instant.now());
            
            Instant latest = spans.stream()
                .map(Span::getEndTime)
                .filter(Objects::nonNull)
                .max(Instant::compareTo)
                .orElse(Instant.now());
            
            return Duration.between(earliest, latest).toMillis();
        }
        
        private void printSpanTree(Span span, Map<String, Span> allSpans, int depth) {
            String indent = "  ".repeat(depth);
            System.out.println(indent + "├─ " + span.getOperationName() + 
                             " (" + span.getDurationMs() + "ms)");
            
            // Print tags
            span.getTags().forEach((k, v) -> 
                System.out.println(indent + "   │  " + k + ": " + v)
            );
            
            // Find and print children
            allSpans.values().stream()
                .filter(s -> span.getSpanId().equals(s.getParentSpanId()))
                .forEach(child -> printSpanTree(child, allSpans, depth + 1));
        }
    }
    
    static class Trace {
        private final String traceId;
        private final String serviceName;
        private final String operationName;
        private final Instant startTime;
        private Instant endTime;
        private final List<Span> spans;
        
        public Trace(String traceId, String serviceName, String operationName) {
            this.traceId = traceId;
            this.serviceName = serviceName;
            this.operationName = operationName;
            this.startTime = Instant.now();
            this.spans = new CopyOnWriteArrayList<>();
            
            // Create root span
            Span rootSpan = new Span(traceId, UUID.randomUUID().toString(), 
                                    operationName, serviceName, null);
            spans.add(rootSpan);
        }
        
        public Span startSpan(String operationName, String parentSpanId) {
            if (parentSpanId == null) {
                parentSpanId = spans.get(0).getSpanId(); // Use root as parent
            }
            
            Span span = new Span(traceId, UUID.randomUUID().toString(), 
                               operationName, serviceName, parentSpanId);
            spans.add(span);
            return span;
        }
        
        public void finish() {
            this.endTime = Instant.now();
            spans.forEach(Span::finish);
        }
        
        public String getTraceId() {
            return traceId;
        }
        
        public List<Span> getSpans() {
            return new ArrayList<>(spans);
        }
    }
    
    static class Span {
        private final String traceId;
        private final String spanId;
        private final String operationName;
        private final String serviceName;
        private final String parentSpanId;
        private final Instant startTime;
        private Instant endTime;
        private final Map<String, String> tags;
        private final List<SpanLog> logs;
        
        public Span(String traceId, String spanId, String operationName, 
                   String serviceName, String parentSpanId) {
            this.traceId = traceId;
            this.spanId = spanId;
            this.operationName = operationName;
            this.serviceName = serviceName;
            this.parentSpanId = parentSpanId;
            this.startTime = Instant.now();
            this.tags = new ConcurrentHashMap<>();
            this.logs = new CopyOnWriteArrayList<>();
            
            // Default tags
            tags.put("service.name", serviceName);
        }
        
        public void setTag(String key, String value) {
            tags.put(key, value);
        }
        
        public void log(String event, Map<String, String> fields) {
            logs.add(new SpanLog(Instant.now(), event, fields));
        }
        
        public void finish() {
            if (endTime == null) {
                this.endTime = Instant.now();
            }
        }
        
        public String getTraceId() {
            return traceId;
        }
        
        public String getSpanId() {
            return spanId;
        }
        
        public String getParentSpanId() {
            return parentSpanId;
        }
        
        public String getOperationName() {
            return operationName;
        }
        
        public Instant getStartTime() {
            return startTime;
        }
        
        public Instant getEndTime() {
            return endTime;
        }
        
        public long getDurationMs() {
            if (endTime == null) {
                return Duration.between(startTime, Instant.now()).toMillis();
            }
            return Duration.between(startTime, endTime).toMillis();
        }
        
        public Map<String, String> getTags() {
            return Collections.unmodifiableMap(tags);
        }
    }
    
    static class SpanLog {
        Instant timestamp;
        String event;
        Map<String, String> fields;
        
        public SpanLog(Instant timestamp, String event, Map<String, String> fields) {
            this.timestamp = timestamp;
            this.event = event;
            this.fields = new HashMap<>(fields);
        }
    }
    
    /**
     * PATTERN 4: HEALTH CHECKS
     * =========================
     * 
     * Liveness Probe - Is application alive?
     * Readiness Probe - Can application serve traffic?
     * Startup Probe - Has application finished starting?
     */
    
    static class HealthCheckManager {
        private final List<HealthCheck> checks;
        private final Map<String, HealthStatus> statusCache;
        
        public HealthCheckManager() {
            this.checks = new CopyOnWriteArrayList<>();
            this.statusCache = new ConcurrentHashMap<>();
        }
        
        public void register(HealthCheck check) {
            checks.add(check);
        }
        
        public HealthStatus liveness() {
            // Check critical components only
            List<HealthCheck> criticalChecks = checks.stream()
                .filter(HealthCheck::isCritical)
                .collect(Collectors.toList());
            
            return performChecks(criticalChecks, "liveness");
        }
        
        public HealthStatus readiness() {
            // Check all dependencies
            return performChecks(checks, "readiness");
        }
        
        public HealthStatus startup() {
            // Check startup dependencies
            List<HealthCheck> startupChecks = checks.stream()
                .filter(HealthCheck::isStartupCheck)
                .collect(Collectors.toList());
            
            return performChecks(startupChecks, "startup");
        }
        
        private HealthStatus performChecks(List<HealthCheck> checksToRun, String probeType) {
            Map<String, String> details = new ConcurrentHashMap<>();
            
            boolean allHealthy = checksToRun.parallelStream()
                .allMatch(check -> {
                    try {
                        boolean healthy = check.check();
                        details.put(check.getName(), healthy ? "UP" : "DOWN");
                        return healthy;
                    } catch (Exception e) {
                        details.put(check.getName(), "ERROR: " + e.getMessage());
                        return false;
                    }
                });
            
            HealthStatus status = new HealthStatus(
                allHealthy ? HealthStatus.Status.UP : HealthStatus.Status.DOWN,
                probeType,
                details
            );
            
            statusCache.put(probeType, status);
            return status;
        }
        
        public Map<String, HealthStatus> getAllStatuses() {
            Map<String, HealthStatus> all = new HashMap<>();
            all.put("liveness", liveness());
            all.put("readiness", readiness());
            all.put("startup", startup());
            return all;
        }
    }
    
    interface HealthCheck {
        String getName();
        boolean check();
        boolean isCritical();
        boolean isStartupCheck();
    }
    
    static class DatabaseHealthCheck implements HealthCheck {
        private final String name;
        private boolean connected;
        
        public DatabaseHealthCheck(String name) {
            this.name = name;
            this.connected = true;
        }
        
        @Override
        public String getName() {
            return "database_" + name;
        }
        
        @Override
        public boolean check() {
            // Simulate database ping
            return connected;
        }
        
        @Override
        public boolean isCritical() {
            return true;
        }
        
        @Override
        public boolean isStartupCheck() {
            return true;
        }
        
        public void setConnected(boolean connected) {
            this.connected = connected;
        }
    }
    
    static class HealthStatus {
        enum Status { UP, DOWN }
        
        private final Status status;
        private final String probeType;
        private final Map<String, String> details;
        private final Instant timestamp;
        
        public HealthStatus(Status status, String probeType, Map<String, String> details) {
            this.status = status;
            this.probeType = probeType;
            this.details = details;
            this.timestamp = Instant.now();
        }
        
        public Status getStatus() {
            return status;
        }
        
        public String toJson() {
            StringBuilder json = new StringBuilder("{");
            json.append("\"status\":\"").append(status).append("\",");
            json.append("\"probe\":\"").append(probeType).append("\",");
            json.append("\"timestamp\":\"").append(timestamp).append("\",");
            json.append("\"checks\":{");
            
            details.forEach((k, v) -> 
                json.append("\"").append(k).append("\":\"").append(v).append("\",")
            );
            
            if (!details.isEmpty()) {
                json.setLength(json.length() - 1);
            }
            
            json.append("}}");
            return json.toString();
        }
    }
    
    /**
     * PATTERN 5: ALERTING
     * ====================
     * 
     * Alert rules based on metrics
     * Alert severity levels
     * Alert routing and notification
     */
    
    static class AlertManager {
        private final List<AlertRule> rules;
        private final List<Alert> activeAlerts;
        private final List<AlertReceiver> receivers;
        
        public AlertManager() {
            this.rules = new CopyOnWriteArrayList<>();
            this.activeAlerts = new CopyOnWriteArrayList<>();
            this.receivers = new CopyOnWriteArrayList<>();
        }
        
        public void addRule(AlertRule rule) {
            rules.add(rule);
        }
        
        public void addReceiver(AlertReceiver receiver) {
            receivers.add(receiver);
        }
        
        public void evaluate(Map<String, Double> metrics) {
            for (AlertRule rule : rules) {
                boolean firing = rule.evaluate(metrics);
                
                if (firing) {
                    // Check if alert already active
                    boolean alreadyActive = activeAlerts.stream()
                        .anyMatch(a -> a.getRuleName().equals(rule.getName()));
                    
                    if (!alreadyActive) {
                        Alert alert = new Alert(rule.getName(), rule.getSeverity(), 
                                              rule.getMessage(), metrics);
                        activeAlerts.add(alert);
                        notifyReceivers(alert);
                    }
                } else {
                    // Resolve alert if it was active
                    activeAlerts.removeIf(alert -> {
                        if (alert.getRuleName().equals(rule.getName())) {
                            resolveAlert(alert);
                            return true;
                        }
                        return false;
                    });
                }
            }
        }
        
        private void notifyReceivers(Alert alert) {
            System.out.println("\n🚨 ALERT FIRED: " + alert.getRuleName());
            System.out.println("Severity: " + alert.getSeverity());
            System.out.println("Message: " + alert.getMessage());
            
            receivers.forEach(receiver -> receiver.receive(alert));
        }
        
        private void resolveAlert(Alert alert) {
            System.out.println("\n✓ ALERT RESOLVED: " + alert.getRuleName());
        }
        
        public List<Alert> getActiveAlerts() {
            return new ArrayList<>(activeAlerts);
        }
    }
    
    static class AlertRule {
        private final String name;
        private final String severity;
        private final String message;
        private final Predicate<Map<String, Double>> condition;
        
        public AlertRule(String name, String severity, String message, 
                        Predicate<Map<String, Double>> condition) {
            this.name = name;
            this.severity = severity;
            this.message = message;
            this.condition = condition;
        }
        
        public boolean evaluate(Map<String, Double> metrics) {
            return condition.test(metrics);
        }
        
        public String getName() {
            return name;
        }
        
        public String getSeverity() {
            return severity;
        }
        
        public String getMessage() {
            return message;
        }
    }
    
    static class Alert {
        private final String ruleName;
        private final String severity;
        private final String message;
        private final Map<String, Double> metrics;
        private final Instant firedAt;
        
        public Alert(String ruleName, String severity, String message, Map<String, Double> metrics) {
            this.ruleName = ruleName;
            this.severity = severity;
            this.message = message;
            this.metrics = new HashMap<>(metrics);
            this.firedAt = Instant.now();
        }
        
        public String getRuleName() {
            return ruleName;
        }
        
        public String getSeverity() {
            return severity;
        }
        
        public String getMessage() {
            return message;
        }
    }
    
    interface AlertReceiver {
        void receive(Alert alert);
    }
    
    static class SlackReceiver implements AlertReceiver {
        private final String channel;
        
        public SlackReceiver(String channel) {
            this.channel = channel;
        }
        
        @Override
        public void receive(Alert alert) {
            System.out.println("  → Sending to Slack #" + channel);
            // In production: send to Slack webhook
        }
    }
    
    static class PagerDutyReceiver implements AlertReceiver {
        private final String serviceKey;
        
        public PagerDutyReceiver(String serviceKey) {
            this.serviceKey = serviceKey;
        }
        
        @Override
        public void receive(Alert alert) {
            if ("critical".equals(alert.getSeverity()) || "high".equals(alert.getSeverity())) {
                System.out.println("  → Paging on-call engineer via PagerDuty");
                // In production: send to PagerDuty API
            }
        }
    }
    
    /**
     * DEMONSTRATION
     */
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(70));
        System.out.println("DAY 33: OBSERVABILITY PATTERNS");
        System.out.println("=".repeat(70));
        
        // Demo 1: Structured Logging
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 1: STRUCTURED LOGGING");
        System.out.println("=".repeat(70));
        
        StructuredLogger logger = new StructuredLogger("api-service", "1.0.0");
        logger.start();
        
        logger.info("Application started");
        logger.info("Processing request", Map.of("user_id", "123", "endpoint", "/api/users"));
        logger.warn("High memory usage", Map.of("memory_percent", 85));
        
        try {
            throw new RuntimeException("Database connection failed");
        } catch (Exception e) {
            logger.error("Failed to connect to database", e);
        }
        
        Thread.sleep(200);
        logger.shutdown();
        
        // Demo 2: Metrics Collection
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 2: METRICS COLLECTION (PROMETHEUS)");
        System.out.println("=".repeat(70));
        
        MetricsRegistry metrics = new MetricsRegistry("myapp");
        
        // Counter: HTTP requests
        Counter httpRequests = metrics.counter("http_requests_total", "Total HTTP requests");
        httpRequests.inc(Map.of("method", "GET", "status", "200"), 150);
        httpRequests.inc(Map.of("method", "GET", "status", "404"), 5);
        httpRequests.inc(Map.of("method", "POST", "status", "201"), 30);
        
        // Gauge: Active connections
        Gauge activeConnections = metrics.gauge("active_connections", "Number of active connections");
        activeConnections.set(42);
        
        // Histogram: Response times
        Histogram responseTime = metrics.histogram("http_response_time_seconds", 
            "HTTP response time", new double[]{0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0});
        
        for (int i = 0; i < 100; i++) {
            double latency = Math.random() * 0.5;
            responseTime.observe(Map.of("endpoint", "/api/users"), latency);
        }
        
        System.out.println("\n--- Prometheus Metrics Exposition ---");
        System.out.println(metrics.scrape());
        
        // Demo 3: Distributed Tracing
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 3: DISTRIBUTED TRACING");
        System.out.println("=".repeat(70));
        
        Tracer tracer = new Tracer("api-gateway");
        
        // Trace 1: User request flow
        Trace trace1 = tracer.startTrace("GET /api/users/123");
        String traceId = trace1.getTraceId();
        
        Span authSpan = tracer.startSpan(traceId, "authenticate");
        authSpan.setTag("user_id", "123");
        Thread.sleep(10);
        authSpan.finish();
        
        Span dbSpan = tracer.startSpan(traceId, "database.query");
        dbSpan.setTag("db.statement", "SELECT * FROM users WHERE id=123");
        dbSpan.setTag("db.type", "postgres");
        Thread.sleep(25);
        dbSpan.finish();
        
        Span cacheSpan = tracer.startSpan(traceId, "cache.set");
        cacheSpan.setTag("cache.key", "user:123");
        Thread.sleep(5);
        cacheSpan.finish();
        
        tracer.finishTrace(traceId);
        
        tracer.exportTraces();
        
        // Demo 4: Health Checks
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 4: HEALTH CHECKS");
        System.out.println("=".repeat(70));
        
        HealthCheckManager healthManager = new HealthCheckManager();
        
        DatabaseHealthCheck dbCheck = new DatabaseHealthCheck("postgres");
        healthManager.register(dbCheck);
        
        System.out.println("\n--- Health Status (All Healthy) ---");
        Map<String, HealthStatus> statuses = healthManager.getAllStatuses();
        statuses.forEach((name, status) -> 
            System.out.println(name + ": " + status.toJson())
        );
        
        // Simulate database failure
        dbCheck.setConnected(false);
        System.out.println("\n--- Health Status (Database Down) ---");
        statuses = healthManager.getAllStatuses();
        statuses.forEach((name, status) -> 
            System.out.println(name + ": " + status.toJson())
        );
        
        // Demo 5: Alerting
        System.out.println("\n" + "=".repeat(70));
        System.out.println("DEMO 5: ALERTING");
        System.out.println("=".repeat(70));
        
        AlertManager alertManager = new AlertManager();
        
        // Add alert rules
        alertManager.addRule(new AlertRule(
            "HighErrorRate",
            "critical",
            "Error rate is above 5%",
            m -> m.getOrDefault("error_rate", 0.0) > 5.0
        ));
        
        alertManager.addRule(new AlertRule(
            "HighLatency",
            "warning",
            "P95 latency is above 1 second",
            m -> m.getOrDefault("p95_latency", 0.0) > 1000.0
        ));
        
        // Add receivers
        alertManager.addReceiver(new SlackReceiver("alerts"));
        alertManager.addReceiver(new PagerDutyReceiver("prod-service-key"));
        
        // Evaluate with normal metrics
        System.out.println("\n--- Normal Metrics ---");
        Map<String, Double> normalMetrics = new HashMap<>();
        normalMetrics.put("error_rate", 2.5);
        normalMetrics.put("p95_latency", 800.0);
        alertManager.evaluate(normalMetrics);
        
        // Evaluate with high error rate
        System.out.println("\n--- High Error Rate ---");
        Map<String, Double> badMetrics = new HashMap<>();
        badMetrics.put("error_rate", 12.5);
        badMetrics.put("p95_latency", 1500.0);
        alertManager.evaluate(badMetrics);
        
        System.out.println("\nActive alerts: " + alertManager.getActiveAlerts().size());
        
        // Resolve alerts
        alertManager.evaluate(normalMetrics);
        
        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
