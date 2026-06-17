# Chapter 48: Manufacturing Interview Q&A

---

## 1. Manufacturing Domain Knowledge

![Manufacturing Interview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/48-interview-manufacturing.png)


### Q1: What are the six core manufacturing domain entities in a Laravel manufacturing platform? How do they relate?

The six core entities are **Equipment, ProductionOrder, QualityCheck, MaintenanceLog, InventoryItem, and IoTReading**. Equipment is the central entity â€” each piece of machinery has a `hasMany` relationship to maintenance logs, IoT readings, and production orders. ProductionOrder links to a product and optionally to equipment, and has `hasMany` quality checks. QualityCheck stands alone with foreign keys to both production order and equipment. MaintenanceLog belongs to equipment and tracks corrective, preventative, and predictive maintenance events. InventoryItem manages raw materials and consumables with stock levels and reorder points. IoTReading stores sensor telemetry and belongs to equipment with composite indexes on `(equipment_id, recorded_at)` for time-series queries.

The migrations cascade appropriately â€” deleting equipment cascades to its IoT readings and maintenance logs, but production orders remain for historical record.

### Q2: Explain the difference between corrective, preventative, predictive, and condition-based maintenance. How would each be modeled in a Laravel manufacturing application?

| Type | Trigger | Laravel Model |
|------|---------|---------------|
| **Corrective** | Equipment has already failed | `MaintenanceLog` with `type = 'corrective'`, `status = 'urgent'`, filled after breakdown |
| **Preventative** | Calendar-based schedule | `MaintenanceLog` with `type = 'preventative'`, `scheduled_date` set by recurring schedule, `Equipment.calibration_interval_days` |
| **Predictive** | AI analysis of sensor trends | `MaintenanceLog` with `type = 'predictive'`, created by `PredictiveMaintenanceAgent` when `failureProbability >= 0.7` |
| **Condition-based** | Real-time threshold violation | `MaintenanceLog` with `type = 'condition_based'`, triggered by `IoTDataIngestionAgent` when anomaly score exceeds 0.8 |

The four types share the same `maintenance_logs` table but differ in `type`, `priority`, and how they are initiated â€” manual entry for corrective, cron-scheduled for preventative, agent-dispatched for predictive and condition-based.

### Q3: What manufacturing metrics are typically tracked, and how would you calculate them in Laravel?

Key metrics and their Laravel calculation patterns:

- **Overall Equipment Effectiveness (OEE)** = Availability Ã— Performance Ã— Quality. Availability = uptime / total time (from `MaintenanceLog.downtime_minutes`), Performance = actual output / theoretical max (`ProductionOrder.quantity_produced` / capacity), Quality = good units / total units (`(quantity_produced - quantity_defective) / quantity_produced`).

- **Yield Rate**: `ProductionOrder` model's `yieldRate()` method: `($this->quantity_produced - $this->quantity_defective) / $this->quantity_ordered`.

- **Defect Rate**: Computed per production run in `QualityControlAgent::analyzeDefects()` â€” `(failedChecks / totalChecks) Ã— 100`, grouped by defect type and severity.

- **Mean Time Between Failures (MTBF)**: Aggregate over `Equipment`'s completed maintenance logs: total operational hours / number of failure events.

- **Mean Time To Repair (MTTR)**: Average `downtime_minutes` from completed corrective maintenance logs.

- **Inventory Turnover**: Cost of goods sold / average inventory value, computed from `InventoryItem` stock levels and unit costs.

```php
$oee = Equipment::with(['maintenanceLogs', 'productionOrders'])->get()->map(fn ($eq) => [
    'equipment' => $eq->name,
    'availability' => $this->calcAvailability($eq),
    'performance' => $this->calcPerformance($eq),
    'quality' => $this->calcQuality($eq),
    'oee' => round($availability * $performance * $quality, 4),
]);
```

### Q4: What is Industrial IoT (IIoT), and what challenges does it introduce when building a Laravel application?

Industrial IoT refers to the network of sensors and smart devices attached to manufacturing equipment â€” temperature probes, vibration sensors, pressure transducers, energy meters, and RPM monitors. These sensors generate continuous, high-frequency telemetry data.

Challenges for Laravel applications:

- **Throughput**: A single CNC machine might emit 100+ readings per second. Writing each as an individual `INSERT` overwhelms the database. Solution: batch ingestion via `IoTDataIngestionAgent::batchIngest()` with chunked `INSERT` statements or a dedicated time-series database bridge.

- **Data volume**: A factory with 50 machines generates ~432 million readings per day. Solution: partition the `iot_readings` table by month on `recorded_at`, use table partitioning in PostgreSQL, and implement data retention policies that roll up raw readings into hourly/daily aggregates after 90 days.

- **Latency**: Some alerts require sub-second response (e.g., temperature exceeding safety threshold). Solution: process critical thresholds at the edge before data reaches Laravel, or use Redis streams for real-time ingestion.

- **Network reliability**: Factory floor networks can be intermittent. Solution: implement idempotent ingestion with deduplication by sensor reading hash, and allow batch retry with backoff.

### Q5: Describe the role of ISO 55000, ISO 9001, and ISO 45001 in a manufacturing software platform.

- **ISO 55000** (Asset Management): Requires systematic lifecycle management of physical assets. Maps to `EquipmentLifecycleAgent` â€” depreciation modeling, maintenance cost tracking, replacement planning, and total cost of ownership calculations.

- **ISO 9001** (Quality Management): Mandates documented quality control processes, defect tracking, corrective action workflows, and continuous improvement. Maps to `QualityControlAgent` â€” defect rate tracking, trend analysis, parameter drift detection, and quality alerts.

- **ISO 45001** (Occupational Health and Safety): Requires safety incident reporting, risk assessment, and compliance monitoring. Maps to `SafetyComplianceAgent` â€” incident analysis, compliance scoring, overdue inspection tracking, and critical finding escalation.

In Laravel, each standard maps to an agent or service class that generates compliance reports, maintains the required audit trail, and alerts stakeholders when metrics fall outside acceptable ranges.

---

## 2. Technical Implementation

### Q6: How would you implement a predictive maintenance agent using the Laravel AI SDK?

Create a `PredictiveMaintenanceAgent` that implements the `Agent` and `HasTools` contracts. The agent analyzes sensor data trends, failure history, and equipment metadata to forecast failures and recommend maintenance actions.

```php
class PredictiveMaintenanceAgent implements Agent, HasTools
{
    use Promptable;

    public function tools(): array
    {
        return [
            Tool::for('analyze_sensor_trends')
                ->describe('Analyze sensor readings for patterns and anomalies')
                ->withParameters(['equipment_id' => 'int', 'hours' => 168]),

            Tool::for('predict_failure_probability')
                ->describe('Calculate failure probability from sensor trends and history')
                ->withParameters(['sensor_analysis' => 'array', 'equipment_id' => 'int']),

            Tool::for('schedule_maintenance')
                ->describe('Create a maintenance log entry')
                ->withParameters(['equipment_id' => 'int', 'priority' => 'string', 'description' => 'string']),
        ];
    }

    public function analyze(Equipment $equipment): array
    {
        $readings = $equipment->iotReadings()
            ->where('recorded_at', '>=', now()->subDays(7))
            ->orderBy('recorded_at')
            ->get();

        $trends = [];
        foreach ($readings->groupBy('metric') as $metric => $metricReadings) {
            $values = $metricReadings->pluck('value')->toArray();
            $avg = array_sum($values) / count($values);
            $slope = $this->linearRegression($values);

            $trends[$metric] = [
                'current' => end($values),
                'average' => round($avg, 2),
                'slope' => round($slope, 4),
                'direction' => $slope > 0.1 ? 'rising' : ($slope < -0.1 ? 'falling' : 'stable'),
                'volatility' => $this->calcStdDev($values, $avg),
            ];
        }

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'equipment' => $equipment->only(['name', 'category', 'status']),
                    'sensor_trends' => $trends,
                    'maintenance_history' => $equipment->maintenanceLogs()
                        ->where('status', 'completed')->get()->toArray(),
                    'task' => 'Assess failure risk and recommend maintenance actions.',
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'failure_risk' => ['type' => 'string', 'enum' => ['low', 'medium', 'high', 'critical']],
                    'probability_score' => ['type' => 'number'],
                    'estimated_days_to_failure' => ['type' => 'integer'],
                    'likely_failure_mode' => ['type' => 'string'],
                    'recommended_actions' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'priority_parts' => ['type' => 'array', 'items' => ['type' => 'string']],
                ],
            ],
        );

        if ($response['failure_risk'] === 'critical') {
            MaintenanceLog::create([
                'equipment_id' => $equipment->id,
                'type' => 'predictive',
                'status' => 'scheduled',
                'priority' => 'critical',
                'description' => "AI-predicted {$response['likely_failure_mode']} within {$response['estimated_days_to_failure']} days.",
                'scheduled_date' => now()->addDay(),
            ]);
        }

        return $response;
    }
}
```

The agent combines statistical sensor analysis with the LLM's ability to recognize failure patterns. Statistical methods detect trend direction and volatility; the LLM correlates these with known failure signatures and historical maintenance effectiveness.

### Q7: How would you build a quality control automation system with AI pattern detection?

Build a `QualityControlAgent` that analyzes inspection data, detects defect patterns, tracks quality trends, and triggers corrective actions. The core analysis pipeline examines defect distribution, temporal trends, and parameter drift.

```php
class QualityControlAgent implements Agent
{
    use Promptable;

    public function analyzeProductionRun(ProductionOrder $order): array
    {
        $checks = $order->qualityChecks()->orderBy('checked_at')->get();

        $defectRate = $checks->count() > 0
            ? round(($checks->where('passes_spec', false)->count() / $checks->count()) * 100, 2)
            : 0;

        $defectTypes = $checks->where('passes_spec', false)
            ->groupBy('defect_type')
            ->map(fn ($g, $type) => [
                'type' => $type ?: 'unspecified',
                'count' => $g->count(),
                'severity' => $g->pluck('severity')->countBy()->toArray(),
            ])->values();

        $drift = $this->detectParameterDrift($checks);

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'defect_rate' => $defectRate,
                    'defect_types' => $defectTypes,
                    'parameter_drift' => $drift,
                    'product' => $order->product->name,
                    'equipment' => $order->equipment?->name,
                    'task' => 'Assess quality status, identify root causes, and recommend corrective actions.',
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'quality_grade' => ['type' => 'string', 'enum' => ['A', 'B', 'C', 'D']],
                    'root_cause_assessment' => ['type' => 'string'],
                    'corrective_actions' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'requires_line_stop' => ['type' => 'boolean'],
                    'estimated_scrap_cost' => ['type' => 'number'],
                ],
            ],
        );

        if ($response['requires_line_stop']) {
            $order->update(['status' => 'on_hold']);
            Log::critical("QualityControlAgent: Line stop recommended for order {$order->order_number}");
        }

        return $response;
    }

    protected function detectParameterDrift(Collection $checks): array
    {
        $drift = [];
        foreach ($checks->groupBy('parameter') as $param => $paramChecks) {
            $values = $paramChecks->pluck('measured_value')->toArray();
            if (count($values) < 10) continue;

            $half = (int)(count($values) / 2);
            $firstAvg = array_sum(array_slice($values, 0, $half)) / $half;
            $secondAvg = array_sum(array_slice($values, $half)) / (count($values) - $half);
            $specRange = ($checks[0]->spec_max - $checks[0]->spec_min);

            $drift[$param] = [
                'baseline_avg' => round($firstAvg, 4),
                'recent_avg' => round($secondAvg, 4),
                'drift_percent' => $specRange > 0
                    ? round((abs($secondAvg - $firstAvg) / $specRange) * 100, 2) : 0,
                'alert' => $specRange > 0 && (abs($secondAvg - $firstAvg) / $specRange) > 0.3,
            ];
        }
        return $drift;
    }
}
```

The agent combines statistical process control (SPC) methods â€” calculating drift between windowed averages â€” with LLM-based root cause assessment. The LLM evaluates whether defect patterns suggest a tooling issue, raw material problem, or process parameter deviation.

### Q8: How would you implement a high-throughput IoT data ingestion pipeline in Laravel?

Design a multi-stage ingestion pipeline that handles millions of sensor readings per day. The `IoTDataIngestionAgent` validates, deduplicates, and processes payloads in batches. For high throughput, use queue workers and batch inserts rather than individual Eloquent saves.

```php
class IoTDataIngestionAgent
{
    public function batchIngest(array $payloads): array
    {
        $validated = [];
        $rejected = [];

        foreach ($payloads as $payload) {
            $errors = $this->validatePayload($payload);
            if (!empty($errors)) {
                $rejected[] = ['payload' => $payload, 'errors' => $errors];
                continue;
            }

            $payload['is_anomaly'] = $this->detectThresholdBreach($payload);
            $payload['anomaly_score'] = $payload['is_anomaly']
                ? $this->calculateZScoreAnomaly($payload) : null;
            $payload['recorded_at'] = $payload['recorded_at'] ?? now();
            $validated[] = $payload;
        }

        $chunks = array_chunk($validated, 500);
        foreach ($chunks as $chunk) {
            $this->bulkInsert($chunk);
            $anomalies = array_filter($chunk, fn ($r) => $r['is_anomaly']);
            foreach ($anomalies as $anomaly) {
                $this->dispatchAnomalyAlert($anomaly);
            }
        }

        return [
            'total' => count($payloads),
            'ingested' => count($validated),
            'rejected' => count($rejected),
            'anomalies' => count(array_filter($validated, fn ($r) => $r['is_anomaly'])),
        ];
    }

    protected function bulkInsert(array $readings): void
    {
        $insert = array_map(fn ($r) => [
            'equipment_id' => $r['equipment_id'],
            'sensor_type' => $r['sensor_type'],
            'metric' => $r['metric'],
            'value' => $r['value'],
            'unit' => $r['unit'],
            'threshold_min' => $r['threshold_min'] ?? null,
            'threshold_max' => $r['threshold_max'] ?? null,
            'is_anomaly' => $r['is_anomaly'],
            'anomaly_score' => $r['anomaly_score'],
            'raw_payload' => json_encode($r),
            'recorded_at' => $r['recorded_at'],
            'created_at' => now(),
            'updated_at' => now(),
        ], $readings);

        DB::table('iot_readings')->insertOrIgnore($insert);
    }

    protected function detectThresholdBreach(array $payload): bool
    {
        if (isset($payload['threshold_min']) && $payload['value'] < $payload['threshold_min']) {
            return true;
        }
        if (isset($payload['threshold_max']) && $payload['value'] > $payload['threshold_max']) {
            return true;
        }
        return false;
    }

    protected function calculateZScoreAnomaly(array $payload): float
    {
        $recent = IoTReading::where('equipment_id', $payload['equipment_id'])
            ->where('metric', $payload['metric'])
            ->where('recorded_at', '>=', now()->subHours(24))
            ->pluck('value');

        if ($recent->count() < 10) return 0;

        $mean = $recent->avg();
        $std = sqrt($recent->reduce(fn ($c, $v) => $c + ($v - $mean) ** 2, 0) / $recent->count());
        return $std > 0 ? min(abs($payload['value'] - $mean) / $std / 5, 1) : 0;
    }

    protected function dispatchAnomalyAlert(array $reading): void
    {
        ProcessAnomalyAlert::dispatch(
            equipmentId: $reading['equipment_id'],
            metric: $reading['metric'],
            value: $reading['value'],
            score: $reading['anomaly_score'],
        )->onQueue('alerts');
    }
}
```

For truly high-volume scenarios, you can bypass Laravel entirely for ingestion â€” use a Go or Rust sidecar that batches sensor data and POSTs to a Laravel endpoint every 5 seconds, or consume from a Redis stream or Kafka topic via a long-running Artisan command.

### Q9: How would you implement a production scheduling agent that respects equipment capacity, material availability, and order deadlines?

Build a `ProductionSchedulingAgent` that uses a greedy earliest-completion heuristic with priority sorting. The agent assigns orders to available equipment, respecting capacity constraints, and flags orders that cannot meet their deadlines.

```php
class ProductionSchedulingAgent
{
    public function generateSchedule(array $filters = []): array
    {
        $orders = ProductionOrder::whereIn('status', ['pending', 'approved'])
            ->orderByRaw("FIELD(priority, 'critical', 'high', 'normal', 'low')")
            ->orderBy('scheduled_date')
            ->when($filters['equipment_id'] ?? null, fn ($q, $id) => $q->where('equipment_id', $id))
            ->get();

        $equipment = Equipment::where('status', 'operational')->get();

        $calendar = [];
        foreach ($equipment as $eq) {
            $calendar[$eq->id] = ['available' => now(), 'assignments' => []];
        }

        $assignments = [];
        $unassigned = [];
        $priorityMap = ['critical' => 0, 'high' => 1, 'normal' => 2, 'low' => 3];

        $sorted = $orders->sortBy(fn ($o) => [
            $priorityMap[$o->priority] ?? 99,
            $o->scheduled_date,
        ]);

        foreach ($sorted as $order) {
            $best = null;
            $bestCompletion = null;

            foreach ($calendar as $eqId => &$slot) {
                $dailyRate = $equipment->firstWhere('id', $eqId)->specifications['daily_capacity'] ?? 100;
                $duration = (int) ceil($order->quantity_ordered / $dailyRate);
                $completion = $slot['available']->copy()->addDays($duration);

                if ($bestCompletion === null || $completion < $bestCompletion) {
                    $best = $eqId;
                    $bestCompletion = $completion;
                }
            }

            if ($best !== null) {
                $dailyRate = $equipment->firstWhere('id', $best)->specifications['daily_capacity'] ?? 100;
                $duration = (int) ceil($order->quantity_ordered / $dailyRate);
                $start = $calendar[$best]['available']->copy();

                $assignments[] = [
                    'order_id' => $order->id,
                    'order_number' => $order->order_number,
                    'equipment_id' => $best,
                    'equipment_name' => $equipment->firstWhere('id', $best)->name,
                    'quantity' => $order->quantity_ordered,
                    'start' => $start->toDateString(),
                    'end' => $bestCompletion->toDateString(),
                    'duration_days' => $duration,
                    'meets_deadline' => $bestCompletion->lte($order->scheduled_date),
                ];

                $calendar[$best]['available'] = $bestCompletion;
                $calendar[$best]['assignments'][] = $order->id;

                $order->update([
                    'equipment_id' => $best,
                    'start_date' => $start,
                    'scheduled_date' => $start,
                    'status' => 'scheduled',
                ]);
            } else {
                $unassigned[] = $order->id;
            }
            unset($slot);
        }

        return [
            'assignments' => $assignments,
            'unassigned' => $unassigned,
            'on_time' => count(array_filter($assignments, fn ($a) => $a['meets_deadline'])),
            'total_scheduled' => count($assignments),
            'equipment_utilization' => collect($calendar)->map(fn ($s, $id) => [
                'equipment_id' => $id,
                'assignments' => count($s['assignments']),
                'total_days' => max(1, $s['available']->diffInDays(now())),
            ])->values(),
        ];
    }

    public function rescheduleDueToDisruption(int $equipmentId): array
    {
        ProductionOrder::where('equipment_id', $equipmentId)
            ->whereIn('status', ['scheduled', 'in_progress'])
            ->update(['equipment_id' => null, 'status' => 'pending']);

        return $this->generateSchedule();
    }
}
```

For more sophisticated optimization (minimizing changeover time, balancing workload), integrate a linear programming solver or use the AI SDK to propose alternative schedules and let the LLM evaluate trade-offs.

### Q10: How would you implement safety compliance monitoring with regulatory reporting?

Create a `SafetyComplianceAgent` that tracks incidents, monitors overdue inspections, calculates a compliance score, and generates structured reports aligned with ISO 45001.

```php
class SafetyComplianceAgent
{
    public function runAudit(array $scope = []): array
    {
        $incidents = MaintenanceLog::where('type', 'safety_incident')
            ->where('created_at', '>=', now()->subDays($scope['days'] ?? 90))
            ->with('equipment')
            ->get();

        $overdueCalibrations = Equipment::where('status', 'operational')
            ->get()
            ->filter(fn ($e) => $e->isOverdueForCalibration());

        $score = 100;
        $score -= $incidents->where('priority', 'critical')->count() * 15;
        $score -= $incidents->where('priority', 'high')->count() * 5;
        $score -= min($overdueCalibrations->count() * 3, 30);
        $score = max($score, 0);

        $status = match (true) {
            $score < 60 => 'critical',
            $score < 80 => 'needs_improvement',
            $score < 90 => 'satisfactory',
            default => 'excellent',
        };

        $byEquipment = $incidents->groupBy('equipment_id')->map(fn ($g, $eqId) => [
            'equipment' => $g->first()->equipment?->name ?? 'Unknown',
            'count' => $g->count(),
            'severities' => $g->pluck('priority')->countBy()->toArray(),
            'total_downtime' => $g->sum('downtime_minutes'),
            'total_cost' => $g->sum('cost'),
        ])->values();

        $criticalFindings = [];

        if ($status === 'critical') {
            $criticalFindings[] = 'Compliance score is critical. Full safety audit required.';
        }

        foreach ($overdueCalibrations as $eq) {
            $criticalFindings[] = "{$eq->name} is overdue for calibration (last: {$eq->last_calibration_date?->toDateString()}).";
        }

        if (($incidents->sum('cost') ?? 0) > 10000) {
            $criticalFindings[] = 'Safety incident costs exceed $10,000 in the reporting period.';
        }

        if (!empty($criticalFindings)) {
            Log::critical('SafetyComplianceAgent: Critical findings detected', $criticalFindings);
        }

        return [
            'audit_date' => now()->toDateString(),
            'compliance_score' => $score,
            'status' => $status,
            'incident_summary' => [
                'total' => $incidents->count(),
                'total_downtime_minutes' => $incidents->sum('downtime_minutes'),
                'total_cost' => $incidents->sum('cost'),
                'by_equipment' => $byEquipment,
            ],
            'overdue_inspections' => $overdueCalibrations->count(),
            'critical_findings' => $criticalFindings,
        ];
    }

    public function generateComplianceReport(string $standard = 'ISO_45001'): array
    {
        $audit = $this->runAudit(['days' => 365]);
        $monthlyTrend = MaintenanceLog::where('type', 'safety_incident')
            ->where('created_at', '>=', now()->subMonths(12))
            ->get()
            ->groupBy(fn ($l) => $l->created_at->format('Y-m'))
            ->map(fn ($g) => ['month' => $g->first()->created_at->format('M Y'), 'count' => $g->count()])
            ->values();

        return [
            'standard' => $standard,
            'report_date' => now()->toDateString(),
            'reporting_period' => 'Last 12 months',
            'overall_score' => $audit['compliance_score'],
            'status' => $audit['status'],
            'monthly_incident_trend' => $monthlyTrend,
            'incident_details' => $audit['incident_summary'],
            'overdue_items' => $audit['overdue_inspections'],
        ];
    }
}
```

The report can be exposed as a JSON API endpoint and consumed by a dashboard, or rendered as a PDF using Laravel's DomPDF or Browsershot integration.

### Q11: How would you build an inventory automation agent with AI-driven reorder calculations?

Create an `InventoryAutomationAgent` that monitors stock levels, calculates reorder quantities using demand forecasting, and generates purchase recommendations.

```php
class InventoryAutomationAgent
{
    public function runInventoryCheck(): array
    {
        $items = InventoryItem::where('status', 'active')->get();

        $outOfStock = $items->filter(fn ($i) => $i->current_stock <= 0);
        $lowStock = $items->filter(fn ($i) => $i->needsReorder());
        $totalValue = $items->sum(fn ($i) => $i->current_stock * $i->unit_cost);

        $reorderOrders = [];
        foreach ($lowStock as $item) {
            $dailyDemand = $this->estimateDemand($item);
            $safetyStock = $dailyDemand * $item->lead_time_days * 0.5;
            $orderQty = max(
                $item->reorder_quantity,
                (int) ceil($item->maximum_stock - $item->current_stock + $safetyStock)
            );

            $reorderOrders[] = [
                'sku' => $item->sku,
                'name' => $item->name,
                'current_stock' => $item->current_stock,
                'recommended_quantity' => $orderQty,
                'estimated_cost' => round($orderQty * $item->unit_cost, 2),
                'lead_time_days' => $item->lead_time_days,
                'priority' => $item->current_stock <= 0 ? 'critical' : 'normal',
            ];
        }

        $categories = $items->groupBy('category')->map(fn ($g) => [
            'category' => $g->first()->category,
            'count' => $g->count(),
            'value' => round($g->sum(fn ($i) => $i->current_stock * $i->unit_cost), 2),
            'items_needing_reorder' => $g->filter(fn ($i) => $i->needsReorder())->count(),
        ])->values();

        return [
            'check_date' => now()->toDateString(),
            'total_items' => $items->count(),
            'out_of_stock' => $outOfStock->count(),
            'low_stock' => $lowStock->count(),
            'overstocked' => $items->filter(fn ($i) => $i->stockStatus() === 'overstocked')->count(),
            'total_inventory_value' => round($totalValue, 2),
            'by_category' => $categories,
            'reorder_recommendations' => $reorderOrders,
            'total_reorder_cost' => round(array_sum(array_column($reorderOrders, 'estimated_cost')), 2),
        ];
    }

    protected function estimateDemand(InventoryItem $item): float
    {
        $consumptionRate = ProductionOrder::where('status', 'completed')
            ->where('updated_at', '>=', now()->subDays(30))
            ->get()
            ->sum('quantity_produced');

        $usagePerUnit = $item->bill_of_materials_quantity ?? 1;
        $dailyConsumption = ($consumptionRate * $usagePerUnit) / 30;
        return max($dailyConsumption, 0.5);
    }
}
```

The demand estimation becomes more accurate when the agent receives upcoming `ProductionOrder` data â€” scheduled future consumption may differ significantly from historical averages.

### Q12: How would you implement equipment lifecycle management with depreciation and TCO tracking?

Build an `EquipmentLifecycleAgent` that calculates straight-line depreciation, tracks warranty status, and computes total cost of ownership to guide replacement decisions.

```php
class EquipmentLifecycleAgent
{
    public function analyze(Equipment $equipment): array
    {
        $maintenanceLogs = $equipment->maintenanceLogs()
            ->where('status', 'completed')
            ->get();

        $purchaseCost = $equipment->purchase_cost ?? 0;
        $salvageValue = $purchaseCost * 0.1;
        $usefulLife = $equipment->expected_lifespan_years;
        $annualDepreciation = $usefulLife > 0 ? ($purchaseCost - $salvageValue) / $usefulLife : 0;
        $yearsOwned = $equipment->purchase_date
            ? $equipment->purchase_date->diffInYears(now()) : 0;
        $accumulatedDepreciation = min($yearsOwned * $annualDepreciation, $purchaseCost - $salvageValue);
        $currentValue = max($purchaseCost - $accumulatedDepreciation, 0);
        $remainingLife = max($usefulLife - $yearsOwned, 0);

        $maintenanceCost = $maintenanceLogs->sum('cost');
        $downtimeCost = $maintenanceLogs->sum('downtime_minutes') * 50;
        $tco = $purchaseCost + $maintenanceCost + $downtimeCost;

        $lifePercent = $usefulLife > 0 ? ($yearsOwned / $usefulLife) * 100 : 0;
        $stage = match (true) {
            $lifePercent < 10 => 'commissioning',
            $lifePercent < 30 => 'early_life',
            $lifePercent < 70 => 'mature',
            $lifePercent < 90 => 'late_life',
            default => 'end_of_life',
        };

        $recommendations = [];
        if ($stage === 'end_of_life') {
            $recommendations[] = [
                'priority' => 'critical',
                'action' => 'plan_replacement',
                'description' => "{$equipment->name} is beyond expected lifespan. Begin procurement.",
                'timeline' => '3-6 months',
            ];
        }

        if ($equipment->warrantyRemainingDays() > 0 && $equipment->warrantyRemainingDays() <= 30) {
            $recommendations[] = [
                'priority' => 'high',
                'action' => 'warranty_renewal',
                'description' => "Warranty expires in {$equipment->warrantyRemainingDays()} days.",
                'timeline' => 'within 30 days',
            ];
        }

        return [
            'equipment' => $equipment->only(['id', 'name', 'serial_number', 'category']),
            'purchase' => [
                'date' => $equipment->purchase_date?->toDateString(),
                'cost' => $purchaseCost,
                'age_years' => round($yearsOwned, 1),
            ],
            'depreciation' => [
                'method' => 'straight_line',
                'annual' => round($annualDepreciation, 2),
                'accumulated' => round($accumulatedDepreciation, 2),
                'current_value' => round($currentValue, 2),
                'remaining_life_years' => round($remainingLife, 1),
            ],
            'lifecycle_stage' => $stage,
            'warranty' => [
                'expiry' => $equipment->warranty_expiry?->toDateString(),
                'remaining_days' => $equipment->warrantyRemainingDays(),
                'status' => $equipment->warrantyRemainingDays() > 0 ? 'active' : 'expired',
            ],
            'calibration' => [
                'last' => $equipment->last_calibration_date?->toDateString(),
                'overdue' => $equipment->isOverdueForCalibration(),
            ],
            'total_cost_of_ownership' => [
                'purchase_cost' => $purchaseCost,
                'maintenance_cost' => round($maintenanceCost, 2),
                'downtime_cost' => round($downtimeCost, 2),
                'total' => round($tco, 2),
                'annualized' => round($tco / max($yearsOwned, 1), 2),
            ],
            'recommendations' => $recommendations,
        ];
    }

    public function runFleetAnalysis(): array
    {
        $results = Equipment::all()->map(fn ($eq) => $this->analyze($eq));
        return [
            'fleet_size' => $results->count(),
            'stages' => $results->groupBy('lifecycle_stage')->map(fn ($g) => $g->count()),
            'total_replacement_value' => round($results->sum('depreciation.current_value'), 2),
            'total_tco' => round($results->sum('total_cost_of_ownership.total'), 2),
            'equipment' => $results,
        ];
    }
}
```

### Q13: How would you integrate real-time sensor data from MQTT brokers into a Laravel application?

Use a long-running Artisan command that subscribes to MQTT topics and pipes messages into the `IoTDataIngestionAgent`. PHP's `php-mqtt/client` library handles the MQTT protocol.

```php
// Artisan command: mqtt:listen
class MqttListenCommand extends Command
{
    protected $signature = 'mqtt:listen {--topics=factory/+/sensors/*}';

    public function handle(IoTDataIngestionAgent $ingestionAgent): void
    {
        $client = new \PhpMqtt\Client\MqttClient(
            config('services.mqtt.host'),
            config('services.mqtt.port'),
            'laravel-factory-' . uniqid()
        );

        $connectionSettings = (new \PhpMqtt\Client\ConnectionSettings)
            ->setUsername(config('services.mqtt.username'))
            ->setPassword(config('services.mqtt.password'))
            ->setKeepAliveInterval(60);

        $buffer = [];

        $client->subscribe($this->option('topics'), function (string $topic, string $message) use (&$buffer, $ingestionAgent) {
            $payload = json_decode($message, true);
            $parts = explode('/', $topic);
            $payload['equipment_id'] = $parts[1] ?? null;
            $payload['sensor_type'] = $parts[3] ?? 'generic';

            $buffer[] = $payload;

            if (count($buffer) >= 100) {
                $ingestionAgent->batchIngest($buffer);
                $buffer = [];
            }
        }, 1);

        $client->registerLoopEventHandler(function () use (&$buffer, $ingestionAgent) {
            if (!empty($buffer)) {
                $ingestionAgent->batchIngest($buffer);
                $buffer = [];
            }
        });

        $client->loop(true);
    }
}
```

For higher reliability, run multiple workers behind a Supervisor process. Each worker can subscribe to a subset of topics (e.g., by equipment zone) to parallelize ingestion.

### Q14: How would you implement an AI agent that correlates quality defects back to specific production batches and equipment?

Build a `DefectCorrelationAgent` that analyzes quality check data alongside production order records and equipment maintenance history to identify root causes of defect spikes.

```php
class DefectCorrelationAgent implements Agent
{
    use Promptable;

    public function correlate(int $productionOrderId): array
    {
        $order = ProductionOrder::with(['qualityChecks', 'equipment'])->findOrFail($productionOrderId);
        $defects = $order->qualityChecks->where('passes_spec', false);

        $byParameter = $defects->groupBy('parameter')->map(fn ($g) => [
            'parameter' => $g->first()->parameter,
            'defect_count' => $g->count(),
            'severity_distribution' => $g->pluck('severity')->countBy()->toArray(),
            'avg_deviation' => round($g->avg(fn ($c) => abs($c->measured_value - ($c->spec_min + $c->spec_max) / 2)), 4),
        ])->values();

        $timeWindow = [
            'start' => $order->start_date?->toDateString(),
            'end' => $order->completion_date?->toDateString(),
        ];

        $maintenanceDuringRun = $order->equipment
            ? $order->equipment->maintenanceLogs()
                ->whereBetween('created_at', [$timeWindow['start'] ?? now()->subDay(), $timeWindow['end'] ?? now()])
                ->get()
            : collect();

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'order_number' => $order->order_number,
                    'product' => $order->product->name,
                    'equipment' => $order->equipment?->name,
                    'defects_by_parameter' => $byParameter,
                    'total_defect_rate' => $order->quantity_ordered > 0
                        ? round(($order->quantity_defective / $order->quantity_ordered) * 100, 2) : 0,
                    'maintenance_events_during_run' => $maintenanceDuringRun->toArray(),
                    'task' => 'Identify the most likely root cause of defects. Consider equipment state, parameter drift, and maintenance activity.',
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'likely_root_cause' => ['type' => 'string'],
                    'confidence' => ['type' => 'string', 'enum' => ['high', 'moderate', 'low']],
                    'contributing_factors' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'recommended_corrective_action' => ['type' => 'string'],
                    'should_inspect_equipment' => ['type' => 'boolean'],
                ],
            ],
        );

        if ($response['should_inspect_equipment'] && $order->equipment) {
            MaintenanceLog::create([
                'equipment_id' => $order->equipment->id,
                'type' => 'inspection',
                'status' => 'open',
                'priority' => 'high',
                'description' => "AI-recommended inspection after defect spike in order {$order->order_number}: {$response['likely_root_cause']}",
            ]);
        }

        return array_merge(['order_number' => $order->order_number], $response);
    }
}
```

The agent correlates three data sources â€” inspection measurements, equipment state, and maintenance activity â€” to produce a root cause hypothesis that would take a quality engineer hours to uncover manually.

### Q15: How would you expose manufacturing agent capabilities as MCP tools for external systems?

Register each manufacturing agent's methods as MCP tools. This allows external systems â€” edge devices, ERP systems, or a factory dashboard â€” to invoke agent functionality over the MCP protocol.

```php
// In an MCP server service provider
class ManufacturingMcpServer extends McpServer
{
    public function tools(): array
    {
        return [
            McpTool::make('predictive_maintenance')
                ->description('Analyze equipment sensor data and predict failures')
                ->inputSchema(['equipment_id' => 'int'])
                ->handle(fn (array $args) => app(PredictiveMaintenanceAgent::class)
                    ->analyze(Equipment::findOrFail($args['equipment_id']))),

            McpTool::make('quality_analysis')
                ->description('Analyze quality check data for a production order')
                ->inputSchema(['production_order_id' => 'int'])
                ->handle(fn (array $args) => app(QualityControlAgent::class)
                    ->analyzeProductionRun(ProductionOrder::findOrFail($args['production_order_id']))),

            McpTool::make('ingest_iot_reading')
                ->description('Ingest a single IoT sensor reading')
                ->inputSchema([
                    'equipment_id' => 'int',
                    'sensor_type' => 'string',
                    'metric' => 'string',
                    'value' => 'float',
                    'unit' => 'string',
                ])
                ->handle(fn (array $args) => app(IoTDataIngestionAgent::class)
                    ->ingestReading($args)),

            McpTool::make('generate_schedule')
                ->description('Generate production schedule for pending orders')
                ->inputSchema(['equipment_id' => ['type' => 'int', 'optional' => true]])
                ->handle(fn (array $args) => app(ProductionSchedulingAgent::class)
                    ->generateSchedule($args)),

            McpTool::make('run_safety_audit')
                ->description('Run a safety compliance audit')
                ->inputSchema(['days' => ['type' => 'int', 'optional' => true, 'default' => 90]])
                ->handle(fn (array $args) => app(SafetyComplianceAgent::class)
                    ->runAudit($args)),
        ];
    }
}
```

External systems â€” an ERP running on-premise, a SCADA system, or a third-party MES â€” can now invoke these tools over the MCP protocol without needing direct database access or HTTP endpoints.

---

## 3. Architecture & Design

### Q16: Design an industrial IoT data pipeline architecture for a factory with 200+ sensors per machine across 50 machines.

The architecture uses a five-stage pipeline:

**Stage 1 â€” Edge Collection**: Sensors connect to PLCs or edge gateways that buffer readings locally. The gateway batches readings every 5 seconds and publishes to MQTT topics organized hierarchically: `factory/{zone}/{machine_id}/sensors/{sensor_type}`.

**Stage 2 â€” MQTT Broker**: A clustered Mosquitto or EMQX broker handles the 10,000+ messages per second. The broker routes messages by topic to subscriber workers.

**Stage 3 â€” Ingestion Workers**: A pool of Laravel long-running Artisan commands (supervised by Supervisor) subscribe to subsets of MQTT topics. Each worker collects batches of 500 readings and sends them to a Redis stream or directly to the Laravel ingestion endpoint.

**Stage 4 â€” Processing Layer**: The `IoTDataIngestionAgent` validates payloads, performs threshold-based and z-score anomaly detection, inserts readings in bulk chunks, and dispatches anomaly alerts to a `high` priority queue. Time-series data older than 90 days is rolled up into hourly averages via a scheduled Artisan command.

**Stage 5 â€” Serving & Analytics**: AI agents (`PredictiveMaintenanceAgent`, `QualityControlAgent`, `SafetyComplianceAgent`) query the processed data to generate insights. A dedicated read replica serves dashboard queries. pgvector stores embeddings of sensor patterns for similarity-based anomaly classification.

```php
// Scheduled rollup command
class RollupIotDataCommand extends Command
{
    public function handle(): void
    {
        $cutoff = now()->subDays(90);

        DB::statement("
            INSERT INTO iot_readings_hourly (equipment_id, metric, hour, avg_value, min_value, max_value, reading_count)
            SELECT
                equipment_id,
                metric,
                DATE_TRUNC('hour', recorded_at) AS hour,
                AVG(value),
                MIN(value),
                MAX(value),
                COUNT(*)
            FROM iot_readings
            WHERE recorded_at < ?
            GROUP BY equipment_id, metric, DATE_TRUNC('hour', recorded_at)
        ", [$cutoff]);

        IoTReading::where('recorded_at', '<', $cutoff)->delete();
    }
}
```

Data flow throughput: 10,000 messages/second â†’ MQTT broker â†’ 5 ingestion workers (2,000 msg/s each) â†’ batch insert 500 at a time (20 inserts/s per worker â†’ 100 total inserts/s) â†’ PostgreSQL with appropriate `max_connections` and `work_mem` tuning.

### Q17: How would you design a real-time sensor data processing system that detects anomalies in under one second?

Sub-second anomaly detection requires shifting threshold evaluation to the edge or to the ingestion worker before the database write.

**Architecture**:

1. **Edge threshold checks**: Configure the edge gateway to reject or flag readings that exceed hard thresholds (temperature > 150Â°C) before they ever reach Laravel. Only anomalous readings trigger immediate alerts; normal readings batch.

2. **In-memory anomaly detection**: Ingestion workers maintain an in-memory sliding window (last 100 readings per metric per machine) using a shared Redis sorted set or a local array. Z-score calculation uses this window, not the database, achieving sub-millisecond detection.

```php
class RealTimeAnomalyDetector
{
    protected Redis $redis;
    protected int $windowSize = 100;

    public function __construct()
    {
        $this->redis = Redis::connection('anomaly');
    }

    public function evaluate(int $equipmentId, string $metric, float $value, ?float $thresholdMin, ?float $thresholdMax): array
    {
        if ($thresholdMin !== null && $value < $thresholdMin) {
            return ['is_anomaly' => true, 'score' => 1.0, 'reason' => 'threshold_breach_low'];
        }
        if ($thresholdMax !== null && $value > $thresholdMax) {
            return ['is_anomaly' => true, 'score' => 1.0, 'reason' => 'threshold_breach_high'];
        }

        $key = "sensor_window:{$equipmentId}:{$metric}";
        $this->redis->lpush($key, $value);
        $this->redis->ltrim($key, 0, $this->windowSize - 1);
        $this->redis->expire($key, 3600);

        $window = $this->redis->lrange($key, 0, -1);
        if (count($window) < 10) {
            return ['is_anomaly' => false, 'score' => 0, 'reason' => 'insufficient_data'];
        }

        $mean = array_sum($window) / count($window);
        $variance = array_sum(array_map(fn ($v) => ($v - $mean) ** 2, $window)) / count($window);
        $std = sqrt($variance);
        $zScore = $std > 0 ? abs($value - $mean) / $std : 0;

        if ($zScore > 3) {
            return ['is_anomaly' => true, 'score' => min($zScore / 5, 1), 'reason' => 'z_score_anomaly'];
        }

        return ['is_anomaly' => false, 'score' => 0, 'reason' => 'normal'];
    }
}
```

3. **Alert dispatch path**: The anomaly result is available synchronously from the ingestion call. Critical alerts (`score >= 0.8`) are dispatched immediately via a dedicated queue with priority `high`. The database write for the reading itself can proceed asynchronously.

This design achieves ~200Î¼s per reading for threshold checks and ~800Î¼s for full z-score evaluation, well under the 1-second SLA.

### Q18: Describe a factory automation system design that integrates Laravel with existing PLC and SCADA infrastructure.

The system uses a layered architecture bridging IT (Laravel) with OT (factory floor):

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                  IT Layer                        â”‚
â”‚  Laravel App (AI Agents, Dashboards, APIs)      â”‚
â”‚  PostgreSQL (relational), Redis (streams/cache)  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                       â”‚ MCP + REST + MQTT
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚              OT Bridge Layer                     â”‚
â”‚  MQTT Broker (Mosquitto/EMQX)                   â”‚
â”‚  OPC UA Gateway (converts OPC UA â†’ MQTT JSON)   â”‚
â”‚  Modbus TCP Gateway (serial â†’ TCP tunnel)        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                       â”‚ OPC UA / Modbus / Profinet
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                  OT Layer                        â”‚
â”‚  PLCs (Siemens S7, Allen-Bradley ControlLogix)  â”‚
â”‚  SCADA (Wonderware, Ignition)                    â”‚
â”‚  Sensors, actuators, conveyors, robots           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Key integration patterns**:

- **OPC UA to MQTT Bridge**: An edge gateway application subscribes to OPC UA server variables (temperature tags, vibration readings) and publishes them as MQTT JSON messages. This decouples Laravel from industrial protocol complexity.

- **Command execution**: When a Laravel agent needs to change a setpoint (e.g., reduce conveyor speed), it publishes an MQTT message to `factory/{zone}/commands/{machine_id}`. The OPC UA gateway subscribes to these commands and writes the corresponding OPC UA tag.

- **State synchronization**: A `MachineState` model in Laravel mirrors the current state of each PLC as a cached read model. Workers update this state from MQTT telemetry. When the connection is lost, the cached state shows `last_seen_at` and the system enters safe mode.

```php
class MachineStateSynchronizer
{
    public function syncFromMqtt(string $topic, string $message): void
    {
        $data = json_decode($message, true);
        $machineId = explode('/', $topic)[2] ?? null;

        if (!$machineId) return;

        Cache::put("machine_state:{$machineId}", [
            'status' => $data['status'] ?? 'unknown',
            'mode' => $data['mode'] ?? 'manual',
            'cycle_count' => $data['cycle_count'] ?? 0,
            'last_seen_at' => now()->toIso8601String(),
            'alarms' => $data['alarms'] ?? [],
        ], 60);
    }

    public function sendCommand(int $machineId, string $command, array $parameters = []): bool
    {
        $machine = Equipment::findOrFail($machineId);
        $topic = "factory/{$machine->location}/commands/{$machine->serial_number}";

        $published = Mqtt::publish($topic, json_encode([
            'command' => $command,
            'parameters' => $parameters,
            'issued_at' => now()->toIso8601String(),
            'source' => 'laravel-automation',
        ]));

        Log::info("Command sent to machine #{$machineId}", [
            'command' => $command,
            'topic' => $topic,
        ]);

        return $published;
    }
}
```

**Safety considerations**: All write operations from Laravel to factory equipment include a human-in-the-loop approval gate. Critical commands (emergency stop, mode change) require a verified user session with MFA. The system logs every command with full traceability.

---

## 4. Behavioral & Scenario

### Q19: Design a predictive maintenance system for a factory with 200 CNC machines using Laravel. Walk through your approach.

**Phase 1 â€” Data Foundation**: Deploy vibration, temperature, current draw, and spindle RPM sensors on each CNC machine. Configure edge gateways to publish readings every 10 seconds to an MQTT broker. The Laravel ingestion pipeline (`IoTDataIngestionAgent`) processes 1.7M readings/day.

**Phase 2 â€” Baseline Modeling**: Collect 30 days of normal operation data. For each machine and metric, compute baseline statistics (mean, standard deviation, typical daily patterns). Store these in a `equipment_baselines` table. Machines of the same model should share similar baselines â€” deviations between identical machines signal potential issues.

**Phase 3 â€” Agent Deployment**: The `PredictiveMaintenanceAgent` runs on a cron schedule every 6 hours. It compares the last 24 hours of readings against baselines, calculates trend slopes and volatility, and feeds the analysis to the AI SDK with structured output. The agent generates:

- A risk score (0-1) per machine
- Estimated days to failure for high-risk machines
- Recommended maintenance actions with priority
- Estimated downtime and cost if action is delayed

```php
// Scheduled every 6 hours
class RunPredictiveMaintenanceCommand extends Command
{
    public function handle(PredictiveMaintenanceAgent $agent): void
    {
        $equipment = Equipment::where('status', 'operational')->get();
        $results = [];

        foreach ($equipment as $eq) {
            $results[] = $agent->analyze($eq);
        }

        $critical = array_filter($results, fn ($r) => $r['failure_risk'] === 'critical');
        $high = array_filter($results, fn ($r) => $r['failure_risk'] === 'high');

        Notification::route('slack', config('services.slack.maintenance_webhook'))
            ->notify(new MaintenanceAlertNotification(
                critical: count($critical),
                high: count($high),
                total: count($results),
            ));
    }
}
```

**Phase 4 â€” Continuous Improvement**: Track prediction accuracy by comparing predicted failures against actual breakdowns. If the agent predicts low risk but the machine fails within 7 days, it's a false negative. Log these and retrain the agent's prompts with counter-examples every quarter.

**Results expectation**: After 6 months of operation, the system should predict 70-80% of unplanned breakdowns at least 48 hours in advance, reducing unplanned downtime by 40-60%.

### Q20: How would you build a factory-wide IoT data platform with Laravel that handles 50 million sensor readings per day?

This is a scale question requiring architectural choices beyond standard Laravel patterns.

**Data partitioning strategy**:

- Use PostgreSQL **table partitioning** by month on `recorded_at`
- Each partition contains ~1.5B readings at 50M/day â€” too large. Add **sub-partitioning by equipment category** (e.g., `iot_readings_cnc_2026_06`, `iot_readings_conveyor_2026_06`)
- Create a **lookup table** mapping equipment_id to partition suffix: `iot_readings_{category}_{month}`
- Use a **routing layer** that directs inserts and queries to the correct partition

**Ingestion architecture**:

```
50M readings/day = ~580 readings/second
```

A single Laravel worker can batch-insert ~5,000 readings/second. Three dedicated ingestion workers suffice for average load. For peak load (1,000+ readings/second), add Redis-based buffering:

```php
class BufferedIngestionController
{
    public function __invoke(Request $request): JsonResponse
    {
        $payloads = $request->input('readings');

        $anomalies = [];
        $normal = [];

        foreach ($payloads as $payload) {
            $result = app(RealTimeAnomalyDetector::class)->evaluate(
                $payload['equipment_id'],
                $payload['metric'],
                $payload['value'],
                $payload['threshold_min'] ?? null,
                $payload['threshold_max'] ?? null,
            );

            if ($result['is_anomaly']) {
                $anomalies[] = array_merge($payload, $result);
            } else {
                $normal[] = $payload;
            }
        }

        // Buffer normal readings to Redis, flush every 5 seconds to DB
        if (!empty($normal)) {
            Redis::connection('ingestion_buffer')->rpush(
                'ingestion:buffer',
                ...array_map('json_encode', $normal)
            );
        }

        // Insert anomalies immediately
        if (!empty($anomalies)) {
            app(IoTDataIngestionAgent::class)->batchIngest($anomalies);
        }

        return response()->json([
            'ingested' => count($payloads),
            'anomalies' => count($anomalies),
        ]);
    }
}

// Flush buffer every 5 seconds via scheduler
class FlushIngestionBufferCommand extends Command
{
    public function handle(IoTDataIngestionAgent $agent): void
    {
        $batch = [];
        while ($item = Redis::connection('ingestion_buffer')->lpop('ingestion:buffer')) {
            $batch[] = json_decode($item, true);
            if (count($batch) >= 500) {
                $agent->batchIngest($batch);
                $batch = [];
            }
        }
        if (!empty($batch)) {
            $agent->batchIngest($batch);
        }
    }
}
```

**Query optimization**:

- Create a `sensor_data` materialized view that aggregates raw readings into 5-minute averages. Most dashboard queries hit this view, not the raw table.
- Use TimescaleDB's hypertables if PostgreSQL partitioning isn't performant enough.
- Add a Redis cache layer for recent readings (last 24 hours) since factory dashboards predominantly display current shift data.

**Retention**: Raw readings older than 7 days â†’ aggregate to 5-minute averages. Averages older than 90 days â†’ aggregate to hourly. Purge after 2 years unless required for compliance.

### Q21: A production line goes down unexpectedly. Walk through how you'd use your Laravel agents to diagnose and respond.

**Triage sequence**:

1. **Immediate detection**: The `IoTDataIngestionAgent` detects that readings from the affected equipment have stopped arriving (data gap > 30 seconds when expected interval is 10s). Alternatively, a `ProductionOrder` status flips to `on_hold` via manual input.

2. **Root cause analysis**: The `DefectCorrelationAgent` correlates the last 30 minutes of sensor data before the stoppage. It looks for anomaly patterns â€” spiking vibration, temperature ramp, current draw drop â€” that indicate the failure mode.

3. **Impact assessment**: The `ProductionSchedulingAgent` evaluates affected orders. If machine #7 is down, it checks which orders were assigned to it and reschedules them to other available equipment. Orders whose deadlines cannot be met are flagged for customer notification.

4. **Maintenance dispatch**: If the `PredictiveMaintenanceAgent` had flagged this machine as high-risk in the last 24 hours, the maintenance team receives the pre-generated recommendation. Otherwise, the agent generates a new work order with the likely failure mode and required parts.

```php
class IncidentResponseCoordinator
{
    public function respondToDowntime(int $equipmentId, string $detectedAt): array
    {
        $equipment = Equipment::findOrFail($equipmentId);

        // 1. Analyze last readings
        $recentReadings = $equipment->iotReadings()
            ->where('recorded_at', '>=', now()->subMinutes(30))
            ->orderBy('recorded_at')
            ->get();

        // 2. Check recent maintenance
        $recentMaintenance = $equipment->maintenanceLogs()
            ->where('created_at', '>=', now()->subDays(7))
            ->get();

        // 3. Determine failure mode via AI
        $analysis = app(PredictiveMaintenanceAgent::class)->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'equipment' => $equipment->name,
                    'last_readings' => $recentReadings->toArray(),
                    'recent_maintenance' => $recentMaintenance->toArray(),
                    'symptom' => 'unexpected stoppage',
                    'task' => 'Determine most likely failure mode and required repair steps.',
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'likely_failure_mode' => ['type' => 'string'],
                    'required_parts' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'estimated_repair_time_hours' => ['type' => 'number'],
                    'safety_precautions' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'repair_procedure' => ['type' => 'string'],
                ],
            ],
        );

        // 4. Create maintenance log
        MaintenanceLog::create([
            'equipment_id' => $equipment->id,
            'type' => 'corrective',
            'status' => 'open',
            'priority' => 'critical',
            'description' => "Unplanned stoppage. AI assessment: {$analysis['likely_failure_mode']}",
            'parts_replaced' => $analysis['required_parts'],
        ]);

        // 5. Reschedule affected orders
        $scheduleResult = app(ProductionSchedulingAgent::class)
            ->rescheduleDueToDisruption($equipmentId);

        // 6. Update equipment status
        $equipment->update(['status' => 'maintenance']);

        return [
            'incident_id' => Str::ulid(),
            'equipment' => $equipment->name,
            'detected_at' => $detectedAt,
            'failure_assessment' => $analysis,
            'maintenance_log_created' => true,
            'orders_rescheduled' => count($scheduleResult['assignments']),
            'orders_unassigned' => count($scheduleResult['unassigned']),
        ];
    }
}
```

The entire response â€” from detection to maintenance dispatch and order rescheduling â€” completes in under 2 minutes, compared to 30-60 minutes with manual processes.

### Q22: Your manufacturing execution system (MES) with AI is being adopted by factory operators who distrust AI recommendations. How do you design the system to earn trust?

**Design for transparency and human override**:

1. **Explainable recommendations**: Every agent returns not just a decision but a rationale. The `PredictiveMaintenanceAgent` surfaces which sensor trends drove the risk score. The `QualityControlAgent` shows the specific parameters that drifted.

```php
public function analyze(Equipment $equipment): array
{
    $result = $this->chat(/* ... */);
    return array_merge($result, [
        'evidence' => [
            'temperature_trend' => 'rising 12% over 72 hours (primary driver)',
            'variance_increase' => '3.2x normal (secondary factor)',
            'similar_pattern' => 'Matched 2 of 3 previous bearing failures',
        ],
    ]);
}
```

2. **Confidence scores**: Every AI output includes a confidence level. Recommendations below `0.7` confidence are downgraded from auto-execute to suggest. Operators see: "Recommended action: schedule maintenance (confidence: 0.85)."

3. **Shadow mode for new deployments**: Run agents in read-only shadow mode for the first 30 days. Compare AI recommendations with actual operator decisions. Measure: how often would the AI have been right? wrong? Build a dashboard showing this track record.

4. **Human-in-the-loop gates**: Critical actions (line stops, equipment shutdowns) require operator confirmation. The agent presents its evidence in a simple decision card: "AI recommends stopping Line 3. Evidence: temperature rising 15%, vibration 3x baseline, similar to bearing failure pattern from 2024-11-12. Approve / Override with reason."

5. **Feedback loop**: Operators can mark AI recommendations as helpful or unhelpful. Track acceptance rate per agent, per operator, per shift. Use declining acceptance rates as a trigger for model retraining or prompt improvement.

6. **Progressive autonomy**: As the measured accuracy crosses thresholds, increase autonomy:
   - Month 1: All recommendations require approval
   - Month 2: Auto-approve low-risk actions (schedule routine inspection)
   - Month 3: Auto-approve medium-risk actions with notification
   - Month 4+: Auto-approve all actions with automatic rollback if not acknowledged within 15 minutes

The goal is not to replace operators but to give them AI-powered decision support that earns trust through consistent accuracy and complete transparency.

### Q23: Your supplier sends a bad batch of raw material that causes 30% defect rate on Line 2. How do your agents detect and respond?

**Detection chain**:

1. The `QualityControlAgent` detects the defect rate spike during its hourly check. It compares against the running 24-hour average (normally < 2%) and flags the change as statistically significant.

2. The `DefectCorrelationAgent` correlates the defect pattern across production runs. It notices that all defective runs share the same raw material lot number from the `bill_of_materials` JSON field on the production orders.

3. The `SafetyComplianceAgent` checks whether the defects are safety-critical. If so, it escalates to line stop.

**Response automation**:

```php
class RawMaterialIncidentHandler
{
    public function handle(ProductionOrder $order): void
    {
        $lotNumbers = collect($order->bill_of_materials ?? [])->pluck('lot_number')->unique();

        // Find all orders using same lot
        $affectedOrders = ProductionOrder::where('status', 'pending')
            ->orWhereIn('status', ['in_progress', 'scheduled'])
            ->get()
            ->filter(fn ($o) => collect($o->bill_of_materials ?? [])
                ->pluck('lot_number')
                ->intersect($lotNumbers)
                ->isNotEmpty());

        $defectiveOrders = ProductionOrder::where('status', 'completed')
            ->whereDate('created_at', '>=', now()->subDays(1))
            ->get()
            ->filter(fn ($o) => collect($o->bill_of_materials ?? [])
                ->pluck('lot_number')
                ->intersect($lotNumbers)
                ->isNotEmpty());

        $defectRate = $defectiveOrders->count() > 0
            ? $defectiveOrders->sum('quantity_defective') / $defectiveOrders->sum('quantity_produced')
            : 0;

        // Place pending orders on hold
        foreach ($affectedOrders as $ao) {
            $ao->update(['status' => 'on_hold', 'notes' => "Lot {$lotNumbers->implode(', ')} quarantined due to defect spike."]);
        }

        // Send supplier notification
        $supplierId = $order->product?->supplier_id;
        if ($supplierId) {
            SupplierNotification::dispatch(
                supplierId: $supplierId,
                lotNumbers: $lotNumbers->toArray(),
                defectRate: round($defectRate * 100, 2),
                orderNumbers: $defectiveOrders->pluck('order_number')->toArray(),
            );
        }

        Log::critical("RawMaterialIncidentHandler: Lot {$lotNumbers->implode(', ')} quarantined", [
            'defect_rate' => round($defectRate * 100, 2),
            'orders_affected' => $affectedOrders->count(),
            'supplier_id' => $supplierId,
        ]);
    }
}
```

The system quarantines the affected lot, holds pending orders that use it, notifies the supplier, and logs the incident with full traceability â€” all within minutes of detection.

### Q24: A new regulation requires your factory to report carbon emissions per production batch. How do you implement this in Laravel?

**Implementation approach**:

1. **Data model extension**: Add `emissions_data` and `energy_consumption` columns or tables linked to `ProductionOrder`. If sensor data includes energy meters (kWh), power factor, or fuel consumption, the existing `iot_readings` table already tracks them â€” just add `emission_factor` mapping.

```php
Schema::create('emission_records', function (Blueprint $table) {
    $table->id();
    $table->foreignId('production_order_id')->constrained();
    $table->foreignId('equipment_id')->nullable()->constrained();
    $table->string('energy_type'); // electricity, natural_gas, diesel
    $table->decimal('consumption', 12, 4);
    $table->decimal('emission_factor', 12, 6);
    $table->decimal('co2_equivalent', 12, 4);
    $table->timestamp('recorded_at');
    $table->timestamps();
});
```

2. **Calculation pipeline**: An `EmissionsReportingAgent` processes each completed production order, summing energy consumption from IoT readings and multiplying by emission factors stored in a configuration table.

```php
class EmissionsReportingAgent
{
    public function calculateForOrder(ProductionOrder $order): array
    {
        $energyReadings = IoTReading::where('equipment_id', $order->equipment_id)
            ->where('metric', 'energy_consumption')
            ->whereBetween('recorded_at', [$order->start_date, $order->completion_date ?? $order->updated_at])
            ->get();

        $totalKwh = $energyReadings->sum('value');
        $factors = EmissionFactor::whereIn('energy_type', ['electricity'])->pluck('factor', 'energy_type');
        $co2 = $totalKwh * ($factors['electricity'] ?? 0.5);

        EmissionRecord::create([
            'production_order_id' => $order->id,
            'equipment_id' => $order->equipment_id,
            'energy_type' => 'electricity',
            'consumption' => $totalKwh,
            'emission_factor' => $factors['electricity'] ?? 0.5,
            'co2_equivalent' => $co2,
            'recorded_at' => now(),
        ]);

        return [
            'order_number' => $order->order_number,
            'total_kwh' => round($totalKwh, 2),
            'co2_kg' => round($co2, 4),
            'per_unit' => $order->quantity_produced > 0
                ? round($co2 / $order->quantity_produced, 6) : 0,
        ];
    }

    public function generateMonthlyReport(int $year, int $month): array
    {
        $records = EmissionRecord::whereYear('recorded_at', $year)
            ->whereMonth('recorded_at', $month)
            ->get();

        return [
            'period' => "{$year}-{$month}",
            'total_co2_kg' => round($records->sum('co2_equivalent'), 2),
            'by_equipment' => $records->groupBy('equipment_id')->map(fn ($g) => [
                'total_co2' => $g->sum('co2_equivalent'),
                'total_consumption' => $g->sum('consumption'),
            ]),
            'by_order_count' => $records->groupBy('production_order_id')->count(),
        ];
    }
}
```

3. **Report generation**: Generate standardized PDF reports using Laravel's Browsershot or DomPDF. The report format follows the regulator's template with batch IDs, total CO2, and methodology notes.

4. **Verification**: Store the raw IoT readings used in the calculation alongside the report. If the regulator audits, the system can reproduce the exact calculation for any historical batch.

### Q25: A supplier API your inventory agent depends on starts failing intermittently. How do you make the system resilient?

**Multi-layer resilience strategy**:

1. **Cache fallback**: The `InventoryAutomationAgent` caches supplier data (pricing, lead times, minimum order quantities) with a 1-hour TTL. If the API fails, it uses the cached values and logs a warning.

```php
public function getSupplierPricing(int $supplierId): array
{
    $cacheKey = "supplier_pricing:{$supplierId}";

    return Cache::flexible($cacheKey, [3600, 7200], function () use ($supplierId) {
        $response = Http::timeout(5)->get(config("services.suppliers.{$supplierId}.pricing_url"));

        if ($response->failed()) {
            throw new SupplierApiUnavailableException("Supplier #{$supplierId} API unreachable");
        }

        return $response->json();
    });
}
```

`Cache::flexible()` returns stale data while refreshing in the background during the grace period (3600-7200 seconds), avoiding cascading failures.

2. **Supplier redundancy**: Maintain a primary and secondary supplier for each SKU. If the primary supplier's API is down, the agent falls back to the secondary.

```php
public function determineReorderSource(InventoryItem $item): array
{
    $primary = $item->supplier;
    try {
        return $this->getSupplierPricing($primary->id);
    } catch (SupplierApiUnavailableException) {
        Log::warning("Primary supplier #{$primary->id} API down, falling back to secondary");
        $secondary = $item->supplierAlternate;
        if ($secondary) {
            return $this->getSupplierPricing($secondary->id);
        }
        throw new NoSupplierAvailableException("No supplier available for {$item->sku}");
    }
}
```

3. **Circuit breaker**: Use Laravel's built-in `Cache::lock()` or a dedicated circuit breaker package. After 3 consecutive failures, open the circuit for 5 minutes â€” during that window, the agent uses cached data exclusively without attempting the API.

4. **Degraded mode alerting**: When the agent operates in cache-only mode, it dispatches a notification to the procurement team. The dashboard shows a yellow banner: "Inventory agent in degraded mode â€” supplier API unavailable."

5. **Manual overrides**: Provide an Artisan command and a Nova action that lets procurement staff manually enter supplier data or override reorder decisions while the API is down.

```php
// Artisan command for manual override
class OverrideSupplierDataCommand extends Command
{
    public function handle(): void
    {
        $sku = $this->ask('SKU to override');
        $leadTime = $this->ask('Override lead time (days)');

        Cache::put("supplier_override:{$sku}", ['lead_time_days' => (int) $leadTime], 86400);
        $this->info("Override applied for {$sku} â€” will use {$leadTime} day lead time");
    }
}
```

### Q26: Your factory is expanding from 10 to 100 machines. The current Laravel ingestion architecture can't keep up. How do you scale it?

**Scale diagnosis**: The bottleneck is likely database write throughput. At 100 machines Ã— 200 sensors each Ã— 1 reading every 10 seconds = 2,000 readings/second. Each Eloquent `INSERT` takes ~5ms at peak, so single-threaded insertion caps at 200 reads/second.

**Scaling strategy**:

1. **Batch size optimization**: Increase batch inserts from 100 to 1,000 readings per chunk. Use `DB::insert()` with a raw SQL VALUES clause instead of Eloquent `create()`. This alone pushes throughput from 200/s to 5,000/s.

2. **Write-ahead buffering**: Insert into a Redis Stream or Kafka topic instead of the database. A separate worker reads from the stream every 3 seconds and performs the bulk insert. This decouples ingestion rate from database write rate.

```php
class StreamIngestionController
{
    public function __invoke(Request $request): JsonResponse
    {
        $readings = $request->input('readings');
        $multi = [];

        foreach ($readings as $reading) {
            $id = (string) Str::ulid();
            $multi[] = $id;
            $multi[] = json_encode($reading);
        }

        Redis::connection('ingestion_stream')->executeRaw([
            'XADD', 'sensor:stream', 'MAXLEN', '~', '100000',
            ...$multi,
        ]);

        return response()->json(['queued' => count($readings)]);
    }
}

// Consumer: FlushSensorStreamCommand runs every 3 seconds
class FlushSensorStreamCommand extends Command
{
    public function handle(IoTDataIngestionAgent $agent): void
    {
        $entries = Redis::connection('ingestion_stream')->executeRaw([
            'XREADGROUP', 'GROUP', 'ingesters', 'worker1',
            'COUNT', '2000',
            'BLOCK', '2000',
            'STREAMS', 'sensor:stream', '>',
        ]);

        if (!$entries) return;

        $readings = [];
        foreach ($entries[0][1] as [, $data]) {
            $readings[] = json_decode($data, true);
        }

        $agent->batchIngest($readings);

        // Acknowledge
        Redis::connection('ingestion_stream')->executeRaw([
            'XACK', 'sensor:stream', 'ingesters', ...collect($entries[0][1])->pluck(0)->toArray(),
        ]);
    }
}
```

3. **Partitioned database**: Split `iot_readings` by equipment category into separate tables or PostgreSQL partitions. Queries against a single machine's data scan one partition instead of the full table.

4. **Horizontal worker scaling**: Run 5-10 ingestion workers behind Supervisor, each consuming from a different Redis stream shard. Partition the data by `equipment_id % worker_count` to guarantee ordering within a single machine's readings.

5. **Read replicas**: Move all dashboard and agent queries to a read replica. The primary database handles only writes. Add a dedicated read replica for AI agent queries to prevent analytics queries from blocking ingestion.

6. **Time-series database evaluation**: If PostgreSQL still bottlenecks at 10,000+ writes/second, add a specialized time-series DB (TimescaleDB, InfluxDB) for raw readings. Keep PostgreSQL for business entities (orders, equipment, maintenance logs) and query the time-series store for sensor data via a Laravel bridge class.

```php
class HybridTimeSeriesStore
{
    public function storeReadings(array $readings): void
    {
        if (count($readings) > 100) {
            // Bulk: write to InfluxDB via HTTP API
            InfluxDB::write('iot_readings', $readings);
        }

        // Always write anomalies to PostgreSQL for alerting
        $anomalies = array_filter($readings, fn ($r) => ($r['is_anomaly'] ?? false));
        if (!empty($anomalies)) {
            DB::table('iot_readings_anomalies')->insert($anomalies);
        }
    }

    public function queryReadings(int $equipmentId, string $metric, Carbon $from, Carbon $to): Collection
    {
        // Recent data from cache, older from InfluxDB
        return Cache::remember("sensor:{$equipmentId}:{$metric}:{$from->timestamp}", 60, function () use ($equipmentId, $metric, $from, $to) {
            return InfluxDB::query("SELECT * FROM iot_readings WHERE equipment_id = ? AND metric = ? AND time >= ? AND time <= ?", [
                $equipmentId, $metric, $from->toIso8601String(), $to->toIso8601String(),
            ]);
        });
    }
}
```

The goal is a system that handles 10,000 readings/second at peak with < 1 second end-to-end ingestion latency, and scales linearly by adding workers and database partitions.

---

## Summary

This chapter covered 26 interview questions spanning manufacturing domain knowledge, technical implementation with the Laravel AI SDK, system architecture for industrial IoT, and behavioral scenarios for real-world factory systems. Key themes include predictive maintenance agents that combine statistical trend analysis with LLM pattern recognition, high-throughput IoT data pipelines using batch ingestion and stream buffering, production scheduling with heuristic optimization and disruption rescheduling, safety compliance automation with ISO-aligned scoring, inventory agents with demand forecasting and fallback redundancy, and equipment lifecycle management with total-cost-of-ownership analysis. Each answer demonstrated concrete Laravel code patterns â€” Eloquent models with manufacturing relationships, AI SDK agents with structured output and tools, MCP server registration, queue-backed processing, Redis stream buffering, and `Cache::flexible()` for supplier API resilience. The architectural patterns scale from single-machine deployments to factory-wide systems handling 50 million sensor readings per day.