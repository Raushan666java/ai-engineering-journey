# Chapter 36: Manufacturing & Industrial â€” AI-Powered Factory Agents

---

## Learning Objectives

- Design and implement manufacturing domain data models (Equipment, ProductionOrder, QualityCheck, MaintenanceLog, Inventory, IoTReading) with Laravel migrations and Eloquent relationships
- Build a PredictiveMaintenanceAgent that analyzes equipment sensor data, predicts failures, and schedules preventative maintenance before breakdowns occur
- Create a QualityControlAgent that inspects production quality data, flags defects using AI pattern detection, and tracks quality trends
- Implement an IoTDataIngestionAgent that ingests industrial sensor telemetry, detects anomalies, and triggers real-time alerts
- Deploy a ProductionSchedulingAgent that optimizes manufacturing schedules against machine capacity, material availability, and order deadlines
- Construct a SafetyComplianceAgent that monitors safety metrics, analyzes incident reports, and verifies regulatory compliance
- Develop an InventoryAutomationAgent that manages raw material and work-in-progress inventory with AI-driven reorder calculations
- Build an EquipmentLifecycleAgent that tracks depreciation, warranty status, calibration schedules, and maintenance history across the equipment fleet

---

## Theory

![Manufacturing Domain](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/36-manufacturing.png)


### 36.1 Manufacturing Data Models

Modern manufacturing operations generate data across six core domains: the equipment that produces goods, the production orders that drive work, the quality checks that verify output, the maintenance logs that track repairs, the inventory that feeds production, and the IoT sensors that monitor everything. These models form the relational backbone upon which all AI agents operate.

#### Migrations

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model_number')->nullable();
            $table->string('serial_number')->unique();
            $table->string('category');
            $table->string('location')->nullable();
            $table->string('status')->default('operational');
            $table->date('purchase_date')->nullable();
            $table->decimal('purchase_cost', 12, 2)->nullable();
            $table->integer('expected_lifespan_years')->default(10);
            $table->date('last_calibration_date')->nullable();
            $table->integer('calibration_interval_days')->default(365);
            $table->date('warranty_expiry')->nullable();
            $table->json('specifications')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('category');
        });

        Schema::create('production_orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('product_id')->constrained();
            $table->decimal('quantity_ordered', 12, 2);
            $table->decimal('quantity_produced', 12, 2)->default(0);
            $table->decimal('quantity_defective', 12, 2)->default(0);
            $table->foreignId('equipment_id')->nullable()->constrained();
            $table->date('scheduled_date');
            $table->date('start_date')->nullable();
            $table->date('completion_date')->nullable();
            $table->string('status')->default('pending');
            $table->string('priority')->default('normal');
            $table->text('notes')->nullable();
            $table->json('bill_of_materials')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('scheduled_date');
            $table->index('priority');
        });

        Schema::create('quality_checks', function (Blueprint $table) {
            $table->id();
            $table->string('check_identifier')->unique();
            $table->foreignId('production_order_id')->constrained();
            $table->foreignId('equipment_id')->nullable()->constrained();
            $table->string('check_type');
            $table->string('parameter');
            $table->decimal('measured_value', 12, 4);
            $table->decimal('spec_min', 12, 4)->nullable();
            $table->decimal('spec_max', 12, 4)->nullable();
            $table->string('unit')->nullable();
            $table->boolean('passes_spec')->default(true);
            $table->string('defect_type')->nullable();
            $table->string('severity')->nullable();
            $table->foreignId('inspected_by')->nullable()->constrained('users');
            $table->text('notes')->nullable();
            $table->timestamp('checked_at');
            $table->timestamps();

            $table->index('check_type');
            $table->index('passes_spec');
            $table->index('checked_at');
        });

        Schema::create('maintenance_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('equipment_id')->constrained()->cascadeOnDelete();
            $table->string('type')->default('corrective');
            $table->string('status')->default('open');
            $table->text('description');
            $table->text('resolution')->nullable();
            $table->string('performed_by')->nullable();
            $table->decimal('cost', 10, 2)->nullable();
            $table->integer('downtime_minutes')->nullable();
            $table->string('priority')->default('medium');
            $table->boolean('requires_calibration')->default(false);
            $table->date('scheduled_date')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->json('parts_replaced')->nullable();
            $table->timestamps();

            $table->index('type');
            $table->index('status');
            $table->index('scheduled_date');
        });

        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->string('sku')->unique();
            $table->string('name');
            $table->string('category');
            $table->string('unit')->default('each');
            $table->decimal('current_stock', 12, 2)->default(0);
            $table->decimal('minimum_stock', 12, 2)->default(0);
            $table->decimal('maximum_stock', 12, 2)->default(0);
            $table->decimal('reorder_point', 12, 2)->default(0);
            $table->decimal('reorder_quantity', 12, 2)->default(0);
            $table->decimal('unit_cost', 10, 2)->default(0);
            $table->string('status')->default('active');
            $table->foreignId('supplier_id')->nullable()->constrained();
            $table->integer('lead_time_days')->default(0);
            $table->string('storage_location')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('category');
            $table->index('status');
        });

        Schema::create('iot_readings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('equipment_id')->constrained()->cascadeOnDelete();
            $table->string('sensor_type');
            $table->string('metric');
            $table->decimal('value', 14, 4);
            $table->string('unit', 20);
            $table->decimal('threshold_min', 14, 4)->nullable();
            $table->decimal('threshold_max', 14, 4)->nullable();
            $table->boolean('is_anomaly')->default(false);
            $table->decimal('anomaly_score', 5, 4)->nullable();
            $table->json('raw_payload')->nullable();
            $table->timestamp('recorded_at');
            $table->timestamps();

            $table->index('sensor_type');
            $table->index('is_anomaly');
            $table->index('recorded_at');
            $table->index(['equipment_id', 'recorded_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('iot_readings');
        Schema::dropIfExists('inventory_items');
        Schema::dropIfExists('maintenance_logs');
        Schema::dropIfExists('quality_checks');
        Schema::dropIfExists('production_orders');
        Schema::dropIfExists('equipment');
    }
};
```

#### Eloquent Models

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Equipment extends Model
{
    protected $fillable = [
        'name', 'model_number', 'serial_number', 'category', 'location',
        'status', 'purchase_date', 'purchase_cost', 'expected_lifespan_years',
        'last_calibration_date', 'calibration_interval_days', 'warranty_expiry',
        'specifications', 'metadata',
    ];

    protected function casts(): array
    {
        return [
            'purchase_date' => 'date',
            'warranty_expiry' => 'date',
            'last_calibration_date' => 'date',
            'specifications' => 'array',
            'metadata' => 'array',
        ];
    }

    public function maintenanceLogs(): HasMany
    {
        return $this->hasMany(MaintenanceLog::class);
    }

    public function iotReadings(): HasMany
    {
        return $this->hasMany(IoTReading::class);
    }

    public function productionOrders(): HasMany
    {
        return $this->hasMany(ProductionOrder::class);
    }

    public function isOperational(): bool
    {
        return $this->status === 'operational';
    }

    public function isOverdueForCalibration(): bool
    {
        if (!$this->last_calibration_date) {
            return true;
        }

        return $this->last_calibration_date->addDays($this->calibration_interval_days)->isPast();
    }

    public function warrantyRemainingDays(): int
    {
        if (!$this->warranty_expiry) {
            return 0;
        }

        return max(0, now()->diffInDays($this->warranty_expiry, false));
    }
}

class ProductionOrder extends Model
{
    protected $fillable = [
        'order_number', 'product_id', 'quantity_ordered', 'quantity_produced',
        'quantity_defective', 'equipment_id', 'scheduled_date', 'start_date',
        'completion_date', 'status', 'priority', 'notes', 'bill_of_materials',
    ];

    protected function casts(): array
    {
        return [
            'scheduled_date' => 'date',
            'start_date' => 'date',
            'completion_date' => 'date',
            'bill_of_materials' => 'array',
        ];
    }

    public function equipment(): BelongsTo
    {
        return $this->belongsTo(Equipment::class);
    }

    public function qualityChecks(): HasMany
    {
        return $this->hasMany(QualityCheck::class);
    }

    public function yieldRate(): float
    {
        if ($this->quantity_ordered <= 0) {
            return 0;
        }

        return ($this->quantity_produced - $this->quantity_defective) / $this->quantity_ordered;
    }

    public function isOnSchedule(): bool
    {
        if ($this->status === 'completed' || $this->status === 'cancelled') {
            return true;
        }

        return !$this->scheduled_date->isPast();
    }
}

class QualityCheck extends Model
{
    protected $fillable = [
        'check_identifier', 'production_order_id', 'equipment_id', 'check_type',
        'parameter', 'measured_value', 'spec_min', 'spec_max', 'unit',
        'passes_spec', 'defect_type', 'severity', 'inspected_by', 'notes', 'checked_at',
    ];

    protected function casts(): array
    {
        return [
            'checked_at' => 'datetime',
            'passes_spec' => 'boolean',
        ];
    }

    public function productionOrder(): BelongsTo
    {
        return $this->belongsTo(ProductionOrder::class);
    }

    public function equipment(): BelongsTo
    {
        return $this->belongsTo(Equipment::class);
    }
}

class MaintenanceLog extends Model
{
    protected $fillable = [
        'equipment_id', 'type', 'status', 'description', 'resolution',
        'performed_by', 'cost', 'downtime_minutes', 'priority',
        'requires_calibration', 'scheduled_date', 'completed_at', 'parts_replaced',
    ];

    protected function casts(): array
    {
        return [
            'scheduled_date' => 'date',
            'completed_at' => 'datetime',
            'parts_replaced' => 'array',
        ];
    }

    public function equipment(): BelongsTo
    {
        return $this->belongsTo(Equipment::class);
    }
}

class InventoryItem extends Model
{
    protected $table = 'inventory_items';

    protected $fillable = [
        'sku', 'name', 'category', 'unit', 'current_stock', 'minimum_stock',
        'maximum_stock', 'reorder_point', 'reorder_quantity', 'unit_cost',
        'status', 'supplier_id', 'lead_time_days', 'storage_location', 'metadata',
    ];

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
        ];
    }

    public function needsReorder(): bool
    {
        return $this->current_stock <= $this->reorder_point;
    }

    public function stockStatus(): string
    {
        if ($this->current_stock <= 0) {
            return 'out_of_stock';
        }

        if ($this->current_stock <= $this->reorder_point) {
            return 'low';
        }

        if ($this->current_stock >= $this->maximum_stock) {
            return 'overstocked';
        }

        return 'adequate';
    }
}

class IoTReading extends Model
{
    protected $table = 'iot_readings';

    protected $fillable = [
        'equipment_id', 'sensor_type', 'metric', 'value', 'unit',
        'threshold_min', 'threshold_max', 'is_anomaly', 'anomaly_score',
        'raw_payload', 'recorded_at',
    ];

    protected function casts(): array
    {
        return [
            'recorded_at' => 'datetime',
            'is_anomaly' => 'boolean',
            'raw_payload' => 'array',
        ];
    }

    public function equipment(): BelongsTo
    {
        return $this->belongsTo(Equipment::class);
    }

    public function isOutOfThreshold(): bool
    {
        if ($this->threshold_min !== null && $this->value < $this->threshold_min) {
            return true;
        }

        if ($this->threshold_max !== null && $this->value > $this->threshold_max) {
            return true;
        }

        return false;
    }
}
```

---

### 36.2 Predictive Maintenance Agents

Equipment failure is the single largest source of unplanned downtime in manufacturing. Predictive maintenance uses AI to analyze sensor trends, vibration patterns, temperature fluctuations, and operational history to forecast failures before they happen. The agent schedules corrective maintenance during planned windows rather than reacting to breakdowns.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\Equipment;
use App\Models\MaintenanceLog;
use App\Models\IoTReading;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class PredictiveMaintenanceAgent
{
    public function analyzeEquipment(Equipment $equipment): array
    {
        $readings = $this->getRecentReadings($equipment);
        $maintenanceHistory = $this->getMaintenanceHistory($equipment);

        $sensorAnalysis = $this->analyzeSensorTrends($readings);
        $failureProbability = $this->predictFailureProbability($sensorAnalysis, $maintenanceHistory);
        $recommendedActions = $this->generateRecommendations($equipment, $failureProbability, $sensorAnalysis);

        if ($failureProbability['overall_risk'] === 'high') {
            $this->scheduleMaintenance($equipment, $failureProbability, $recommendedActions);
        }

        $this->logAnalysis($equipment, $failureProbability, $recommendedActions);

        return [
            'equipment_id' => $equipment->id,
            'equipment_name' => $equipment->name,
            'failure_probability' => $failureProbability,
            'sensor_analysis' => $sensorAnalysis,
            'recommended_actions' => $recommendedActions,
            'analyzed_at' => now()->toIso8601String(),
        ];
    }

    protected function getRecentReadings(Equipment $equipment, int $hours = 168): Collection
    {
        return $equipment->iotReadings()
            ->where('recorded_at', '>=', now()->subHours($hours))
            ->orderBy('recorded_at')
            ->get();
    }

    protected function getMaintenanceHistory(Equipment $equipment, int $months = 12): Collection
    {
        return $equipment->maintenanceLogs()
            ->where('created_at', '>=', now()->subMonths($months))
            ->where('status', 'completed')
            ->orderBy('completed_at')
            ->get();
    }

    protected function analyzeSensorTrends(Collection $readings): array
    {
        $grouped = $readings->groupBy('metric');

        $analysis = [];

        foreach ($grouped as $metric => $metricReadings) {
            $values = $metricReadings->pluck('value')->toArray();
            $count = count($values);

            if ($count < 5) {
                $analysis[$metric] = [
                    'metric' => $metric,
                    'readings_count' => $count,
                    'avg' => $count > 0 ? array_sum($values) / $count : 0,
                    'trend' => 'insufficient_data',
                    'volatility' => 0,
                ];

                continue;
            }

            $avg = array_sum($values) / $count;
            $variance = array_sum(array_map(fn($v) => ($v - $avg) ** 2, $values)) / $count;
            $stdDev = sqrt($variance);

            $firstHalf = array_slice($values, 0, (int)($count / 2));
            $secondHalf = array_slice($values, (int)($count / 2));
            $firstAvg = count($firstHalf) > 0 ? array_sum($firstHalf) / count($firstHalf) : 0;
            $secondAvg = count($secondHalf) > 0 ? array_sum($secondHalf) / count($secondHalf) : 0;

            $deltaPercent = $firstAvg > 0 ? (($secondAvg - $firstAvg) / $firstAvg) * 100 : 0;

            $trend = 'stable';

            if (abs($deltaPercent) > 15) {
                $trend = $deltaPercent > 0 ? 'rising' : 'falling';
            } elseif (abs($deltaPercent) > 5) {
                $trend = $deltaPercent > 0 ? 'slightly_rising' : 'slightly_falling';
            }

            $outOfThreshold = $metricReadings->filter(fn($r) => $r->isOutOfThreshold())->count();

            $analysis[$metric] = [
                'metric' => $metric,
                'readings_count' => $count,
                'current' => end($values),
                'avg' => round($avg, 4),
                'min' => round(min($values), 4),
                'max' => round(max($values), 4),
                'std_dev' => round($stdDev, 4),
                'trend' => $trend,
                'delta_percent' => round($deltaPercent, 2),
                'volatility' => round($stdDev / max($avg, 0.001), 4),
                'out_of_threshold_count' => $outOfThreshold,
            ];
        }

        return $analysis;
    }

    protected function predictFailureProbability(
        array $sensorAnalysis,
        Collection $maintenanceHistory
    ): array {
        $riskFactors = [];
        $totalWeight = 0;
        $weightedSum = 0;

        foreach ($sensorAnalysis as $metric => $analysis) {
            $weight = 1;

            if ($analysis['trend'] === 'rising' || $analysis['trend'] === 'falling') {
                $weight = 3;
            } elseif ($analysis['trend'] === 'slightly_rising' || $analysis['trend'] === 'slightly_falling') {
                $weight = 1.5;
            }

            $metricRisk = 0;

            if (in_array($analysis['trend'], ['rising', 'falling'])) {
                $metricRisk += 0.4;
            }

            if ($analysis['volatility'] > 0.1) {
                $metricRisk += 0.3;
            }

            if ($analysis['out_of_threshold_count'] > 0) {
                $metricRisk += 0.3 * min($analysis['out_of_threshold_count'] / 10, 1);
            }

            $riskFactors[$metric] = [
                'risk_score' => round($metricRisk, 4),
                'weight' => $weight,
            ];

            $weightedSum += $metricRisk * $weight;
            $totalWeight += $weight;
        }

        $timeSinceLastMaintenance = $maintenanceHistory->isNotEmpty()
            ? now()->diffInDays($maintenanceHistory->last()->completed_at)
            : 365;

        $maintenanceFactor = min($timeSinceLastMaintenance / 90, 1) * 0.2;

        $sensorRisk = $totalWeight > 0 ? $weightedSum / $totalWeight : 0;
        $overallProbability = min($sensorRisk + $maintenanceFactor, 1);

        $riskLevel = 'low';

        if ($overallProbability >= 0.7) {
            $riskLevel = 'high';
        } elseif ($overallProbability >= 0.4) {
            $riskLevel = 'medium';
        }

        return [
            'overall_risk' => $riskLevel,
            'probability_score' => round($overallProbability, 4),
            'sensor_risk_component' => round($sensorRisk, 4),
            'maintenance_age_component' => round($maintenanceFactor, 4),
            'days_since_last_maintenance' => $timeSinceLastMaintenance,
            'risk_factors' => $riskFactors,
        ];
    }

    protected function generateRecommendations(
        Equipment $equipment,
        array $failureProbability,
        array $sensorAnalysis
    ): array {
        $recommendations = [];

        if ($failureProbability['overall_risk'] === 'high') {
            $recommendations[] = [
                'action' => 'schedule_immediate_maintenance',
                'priority' => 'critical',
                'description' => "Schedule immediate maintenance for {$equipment->name}. Failure probability is {$failureProbability['probability_score']}.",
                'due_within_days' => 1,
            ];
        }

        if ($failureProbability['overall_risk'] === 'medium') {
            $recommendations[] = [
                'action' => 'schedule_preventative_maintenance',
                'priority' => 'high',
                'description' => "Schedule preventative maintenance for {$equipment->name} within the next 7 days.",
                'due_within_days' => 7,
            ];
        }

        foreach ($sensorAnalysis as $metric => $analysis) {
            if ($analysis['trend'] === 'rising') {
                $recommendations[] = [
                    'action' => 'investigate_sensor_trend',
                    'priority' => 'medium',
                    'description' => "{$metric} is rising ({$analysis['delta_percent']}% over period). Investigate root cause.",
                    'due_within_days' => 14,
                ];
            }

            if ($analysis['out_of_threshold_count'] > 5) {
                $recommendations[] = [
                    'action' => 'calibrate_sensor',
                    'priority' => 'high',
                    'description' => "{$metric} has {$analysis['out_of_threshold_count']} out-of-threshold readings. Sensor calibration recommended.",
                    'due_within_days' => 3,
                ];
            }
        }

        if ($equipment->isOverdueForCalibration()) {
            $recommendations[] = [
                'action' => 'calibrate_equipment',
                'priority' => 'high',
                'description' => "{$equipment->name} is overdue for calibration. Last calibrated: {$equipment->last_calibration_date?->toDateString()}.",
                'due_within_days' => 1,
            ];
        }

        return $recommendations;
    }

    protected function scheduleMaintenance(
        Equipment $equipment,
        array $failureProbability,
        array $recommendations
    ): void {
        $criticalActions = array_filter($recommendations, fn($r) => $r['priority'] === 'critical');

        if (!empty($criticalActions)) {
            MaintenanceLog::create([
                'equipment_id' => $equipment->id,
                'type' => 'predictive',
                'status' => 'scheduled',
                'description' => "AI-scheduled urgent maintenance. Risk: {$failureProbability['overall_risk']} ({$failureProbability['probability_score']}).",
                'priority' => 'critical',
                'scheduled_date' => now()->addDay(),
            ]);

            Log::warning("PredictiveMaintenanceAgent: Scheduled critical maintenance for equipment #{$equipment->id} ({$equipment->name})");
        }
    }

    protected function logAnalysis(
        Equipment $equipment,
        array $failureProbability,
        array $recommendations
    ): void {
        Log::info("PredictiveMaintenanceAgent: Analyzed equipment #{$equipment->id}", [
            'equipment' => $equipment->name,
            'risk' => $failureProbability['overall_risk'],
            'probability' => $failureProbability['probability_score'],
            'recommendations_count' => count($recommendations),
        ]);
    }
}
```

---

### 36.3 Quality Control Automation

Quality control in manufacturing generates enormous volumes of inspection data. A QualityControlAgent automates the analysis of this data, detecting defect patterns that human inspectors would miss, tracking drift in production parameters, and triggering corrective actions when quality deviates from specification.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\ProductionOrder;
use App\Models\QualityCheck;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class QualityControlAgent
{
    public function analyzeProductionRun(ProductionOrder $order): array
    {
        $checks = $order->qualityChecks()
            ->orderBy('checked_at')
            ->get();

        if ($checks->isEmpty()) {
            return [
                'production_order_id' => $order->id,
                'status' => 'no_data',
                'message' => 'No quality checks recorded for this production run.',
            ];
        }

        $defectAnalysis = $this->analyzeDefects($checks);
        $trendAnalysis = $this->analyzeTrends($checks);
        $parameterDrift = $this->detectParameterDrift($checks);
        $overallQuality = $this->assessOverallQuality($defectAnalysis, $trendAnalysis, $parameterDrift);

        if ($overallQuality['action_required']) {
            $this->triggerQualityAlert($order, $overallQuality);
        }

        Log::info("QualityControlAgent: Analyzed production order #{$order->id}", [
            'defect_rate' => $overallQuality['defect_rate'],
            'grade' => $overallQuality['grade'],
            'action_required' => $overallQuality['action_required'],
        ]);

        return [
            'production_order_id' => $order->id,
            'order_number' => $order->order_number,
            'total_checks' => $checks->count(),
            'overall_quality' => $overallQuality,
            'defect_analysis' => $defectAnalysis,
            'trend_analysis' => $trendAnalysis,
            'parameter_drift' => $parameterDrift,
            'analyzed_at' => now()->toIso8601String(),
        ];
    }

    protected function analyzeDefects(Collection $checks): array
    {
        $total = $checks->count();
        $failed = $checks->where('passes_spec', false);
        $failureCount = $failed->count();

        $defectTypes = $failed->groupBy('defect_type')->map(fn($group, $type) => [
            'defect_type' => $type ?: 'unspecified',
            'count' => $group->count(),
            'percentage' => $total > 0 ? round(($group->count() / $total) * 100, 2) : 0,
            'severity_distribution' => $group->groupBy('severity')
                ->map(fn($s) => $s->count())
                ->toArray(),
        ])->values()->toArray();

        $severityBreakdown = [
            'critical' => $failed->where('severity', 'critical')->count(),
            'major' => $failed->where('severity', 'major')->count(),
            'minor' => $failed->where('severity', 'minor')->count(),
        ];

        return [
            'total_checks' => $total,
            'passed' => $total - $failureCount,
            'failed' => $failureCount,
            'defect_rate' => $total > 0 ? round(($failureCount / $total) * 100, 2) : 0,
            'defect_types' => $defectTypes,
            'severity_breakdown' => $severityBreakdown,
        ];
    }

    protected function analyzeTrends(Collection $checks): array
    {
        $chronological = $checks->sortBy('checked_at');

        $windowSize = max(10, (int)($chronological->count() / 5));
        $windows = $chronological->chunk($windowSize);

        $trends = [];
        $windowIndex = 0;

        foreach ($windows as $window) {
            $windowTotal = $window->count();
            $windowFailed = $window->where('passes_spec', false)->count();
            $defectRate = $windowTotal > 0 ? ($windowFailed / $windowTotal) * 100 : 0;

            $trends[] = [
                'window' => $windowIndex + 1,
                'start_time' => $window->first()->checked_at->toIso8601String(),
                'end_time' => $window->last()->checked_at->toIso8601String(),
                'checks' => $windowTotal,
                'defects' => $windowFailed,
                'defect_rate' => round($defectRate, 2),
            ];

            $windowIndex++;
        }

        $defectRates = array_column($trends, 'defect_rate');
        $direction = 'stable';

        if (count($defectRates) >= 3) {
            $first = array_sum(array_slice($defectRates, 0, (int)(count($defectRates) / 2)));
            $second = array_sum(array_slice($defectRates, (int)(count($defectRates) / 2)));

            $firstCount = count(array_slice($defectRates, 0, (int)(count($defectRates) / 2)));
            $secondCount = count(array_slice($defectRates, (int)(count($defectRates) / 2)));

            $firstAvg = $firstCount > 0 ? $first / $firstCount : 0;
            $secondAvg = $secondCount > 0 ? $second / $secondCount : 0;

            if ($secondAvg > $firstAvg * 1.2) {
                $direction = 'worsening';
            } elseif ($secondAvg < $firstAvg * 0.8) {
                $direction = 'improving';
            }
        }

        return [
            'windows' => $trends,
            'direction' => $direction,
            'recommendation' => $direction === 'worsening'
                ? 'Quality is degrading. Investigate process parameters.'
                : ($direction === 'improving'
                    ? 'Quality is improving. Continue current process controls.'
                    : 'Quality is stable. Maintain current monitoring.'),
        ];
    }

    protected function detectParameterDrift(Collection $checks): array
    {
        $grouped = $checks->groupBy('parameter');

        $driftReport = [];

        foreach ($grouped as $parameter => $parameterChecks) {
            $values = $parameterChecks->pluck('measured_value')->toArray();
            $count = count($values);

            if ($count < 10) {
                continue;
            }

            $avg = array_sum($values) / $count;
            $specMin = $parameterChecks->first()->spec_min;
            $specMax = $parameterChecks->first()->spec_max;

            $firstHalf = array_slice($values, 0, (int)($count / 2));
            $secondHalf = array_slice($values, (int)($count / 2));

            $firstAvg = count($firstHalf) > 0 ? array_sum($firstHalf) / count($firstHalf) : 0;
            $secondAvg = count($secondHalf) > 0 ? array_sum($secondHalf) / count($secondHalf) : 0;

            $driftAmount = $specMax - $specMin > 0
                ? abs($secondAvg - $firstAvg) / ($specMax - $specMin)
                : 0;

            $marginToLimit = min(
                $specMax !== null ? ($specMax - $secondAvg) / ($specMax - $specMin) : PHP_FLOAT_MAX,
                $specMin !== null ? ($secondAvg - $specMin) / ($specMax - $specMin) : PHP_FLOAT_MAX
            );

            $driftReport[$parameter] = [
                'parameter' => $parameter,
                'recent_avg' => round($secondAvg, 4),
                'baseline_avg' => round($firstAvg, 4),
                'drift_amount' => round($driftAmount, 4),
                'drift_percentage' => round($driftAmount * 100, 2),
                'margin_to_limit' => round($marginToLimit, 4),
                'alert' => $driftAmount > 0.3 || $marginToLimit < 0.1,
            ];
        }

        return $driftReport;
    }

    protected function assessOverallQuality(
        array $defectAnalysis,
        array $trendAnalysis,
        array $parameterDrift
    ): array {
        $defectRate = $defectAnalysis['defect_rate'];
        $trendDirection = $trendAnalysis['direction'];
        $hasDrift = collect($parameterDrift)->contains('alert', true);

        $grade = 'A';

        if ($defectRate > 10 || $trendDirection === 'worsening') {
            $grade = 'D';
        } elseif ($defectRate > 5 || $hasDrift) {
            $grade = 'C';
        } elseif ($defectRate > 2) {
            $grade = 'B';
        }

        $actionRequired = $grade === 'D' || $grade === 'C' || $defectAnalysis['severity_breakdown']['critical'] > 0;

        return [
            'grade' => $grade,
            'defect_rate' => $defectRate,
            'action_required' => $actionRequired,
            'critical_defects' => $defectAnalysis['severity_breakdown']['critical'],
        ];
    }

    protected function triggerQualityAlert(ProductionOrder $order, array $qualityAssessment): void
    {
        Log::warning("QualityControlAgent: Quality alert for order #{$order->id}", [
            'order' => $order->order_number,
            'grade' => $qualityAssessment['grade'],
            'defect_rate' => $qualityAssessment['defect_rate'],
            'critical_defects' => $qualityAssessment['critical_defects'],
        ]);
    }
}
```

---

### 36.4 IoT Data Ingestion & Processing

Industrial IoT sensors generate millions of data points per day â€” temperature, vibration, pressure, RPM, energy consumption, and dozens of other metrics. The IoTDataIngestionAgent handles the ingestion pipeline: parsing raw sensor payloads, validating against thresholds, detecting statistical anomalies, and routing alerts to the appropriate teams.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\Equipment;
use App\Models\IoTReading;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class IoTDataIngestionAgent
{
    public function ingestReading(array $payload): array
    {
        $validated = $this->validatePayload($payload);

        if (!$validated['valid']) {
            Log::warning('IoTDataIngestionAgent: Invalid payload rejected', [
                'errors' => $validated['errors'],
            ]);

            return [
                'ingested' => false,
                'errors' => $validated['errors'],
            ];
        }

        $equipment = Equipment::find($payload['equipment_id']);

        if (!$equipment) {
            return [
                'ingested' => false,
                'errors' => ['Equipment not found.'],
            ];
        }

        $isAnomaly = $this->detectAnomaly($payload, $equipment);
        $anomalyScore = $this->calculateAnomalyScore($payload, $equipment);

        $reading = IoTReading::create([
            'equipment_id' => $equipment->id,
            'sensor_type' => $payload['sensor_type'],
            'metric' => $payload['metric'],
            'value' => $payload['value'],
            'unit' => $payload['unit'],
            'threshold_min' => $payload['threshold_min'] ?? null,
            'threshold_max' => $payload['threshold_max'] ?? null,
            'is_anomaly' => $isAnomaly,
            'anomaly_score' => $anomalyScore,
            'raw_payload' => $payload,
            'recorded_at' => $payload['recorded_at'] ?? now(),
        ]);

        $alert = null;

        if ($isAnomaly) {
            $alert = $this->generateAlert($reading, $anomalyScore, $equipment);
        }

        Log::info("IoTDataIngestionAgent: Reading ingested for equipment #{$equipment->id}", [
            'metric' => $payload['metric'],
            'value' => $payload['value'],
            'is_anomaly' => $isAnomaly,
        ]);

        return [
            'ingested' => true,
            'reading_id' => $reading->id,
            'equipment_id' => $equipment->id,
            'equipment_name' => $equipment->name,
            'is_anomaly' => $isAnomaly,
            'anomaly_score' => $anomalyScore,
            'alert' => $alert,
        ];
    }

    public function batchIngest(array $payloads): array
    {
        $results = [];

        foreach ($payloads as $payload) {
            $results[] = $this->ingestReading($payload);
        }

        $ingested = count(array_filter($results, fn($r) => $r['ingested']));
        $anomalies = count(array_filter($results, fn($r) => $r['is_anomaly'] ?? false));

        Log::info("IoTDataIngestionAgent: Batch ingest complete", [
            'total' => count($payloads),
            'ingested' => $ingested,
            'anomalies' => $anomalies,
        ]);

        return [
            'total' => count($payloads),
            'ingested' => $ingested,
            'failed' => count($payloads) - $ingested,
            'anomalies_detected' => $anomalies,
            'results' => $results,
        ];
    }

    protected function validatePayload(array $payload): array
    {
        $errors = [];

        if (empty($payload['equipment_id'])) {
            $errors[] = 'equipment_id is required.';
        }

        if (empty($payload['sensor_type'])) {
            $errors[] = 'sensor_type is required.';
        }

        if (empty($payload['metric'])) {
            $errors[] = 'metric is required.';
        }

        if (!isset($payload['value']) || !is_numeric($payload['value'])) {
            $errors[] = 'value must be a numeric value.';
        }

        if (empty($payload['unit'])) {
            $errors[] = 'unit is required.';
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors,
        ];
    }

    protected function detectAnomaly(array $payload, Equipment $equipment): bool
    {
        $thresholdMin = $payload['threshold_min'] ?? null;
        $thresholdMax = $payload['threshold_max'] ?? null;

        if ($thresholdMin !== null && $payload['value'] < $thresholdMin) {
            return true;
        }

        if ($thresholdMax !== null && $payload['value'] > $thresholdMax) {
            return true;
        }

        $recentReadings = IoTReading::where('equipment_id', $equipment->id)
            ->where('metric', $payload['metric'])
            ->where('recorded_at', '>=', now()->subHours(24))
            ->pluck('value');

        if ($recentReadings->count() >= 10) {
            $avg = $recentReadings->avg();
            $stdDev = sqrt(
                $recentReadings->reduce(fn($carry, $v) => $carry + ($v - $avg) ** 2, 0)
                / $recentReadings->count()
            );

            $zScore = $stdDev > 0 ? abs($payload['value'] - $avg) / $stdDev : 0;

            if ($zScore > 3) {
                return true;
            }
        }

        return false;
    }

    protected function calculateAnomalyScore(array $payload, Equipment $equipment): float
    {
        $score = 0;

        $thresholdMin = $payload['threshold_min'] ?? null;
        $thresholdMax = $payload['threshold_max'] ?? null;

        if ($thresholdMin !== null && $payload['value'] < $thresholdMin) {
            $ratio = $thresholdMin > 0 ? $payload['value'] / $thresholdMin : 0;
            $score += max(0, (1 - $ratio)) * 0.5;
        }

        if ($thresholdMax !== null && $payload['value'] > $thresholdMax) {
            $ratio = $thresholdMax > 0 ? $payload['value'] / $thresholdMax : 0;
            $score += max(0, ($ratio - 1)) * 0.5;
        }

        $recentReadings = IoTReading::where('equipment_id', $equipment->id)
            ->where('metric', $payload['metric'])
            ->where('recorded_at', '>=', now()->subHours(24))
            ->pluck('value');

        if ($recentReadings->count() >= 10) {
            $avg = $recentReadings->avg();
            $stdDev = sqrt(
                $recentReadings->reduce(fn($carry, $v) => $carry + ($v - $avg) ** 2, 0)
                / $recentReadings->count()
            );

            $zScore = $stdDev > 0 ? abs($payload['value'] - $avg) / $stdDev : 0;
            $score += min($zScore / 5, 0.5);
        }

        return round(min($score, 1), 4);
    }

    protected function generateAlert(IoTReading $reading, float $anomalyScore, Equipment $equipment): array
    {
        $alertLevel = 'info';

        if ($anomalyScore >= 0.8) {
            $alertLevel = 'critical';
        } elseif ($anomalyScore >= 0.5) {
            $alertLevel = 'warning';
        }

        Log::warning("IoTDataIngestionAgent: Anomaly detected on {$equipment->name}", [
            'equipment_id' => $equipment->id,
            'metric' => $reading->metric,
            'value' => $reading->value,
            'anomaly_score' => $anomalyScore,
            'alert_level' => $alertLevel,
        ]);

        return [
            'type' => 'iot_anomaly',
            'level' => $alertLevel,
            'message' => "Anomalous reading on {$equipment->name}: {$reading->metric} = {$reading->value} {$reading->unit} (score: {$anomalyScore})",
            'reading_id' => $reading->id,
            'generated_at' => now()->toIso8601String(),
        ];
    }
}
```

---

### 36.5 Production Scheduling Agents

Production scheduling is a constrained optimization problem: assign production orders to machines and time slots while respecting capacity limits, material availability, maintenance windows, and delivery deadlines. A ProductionSchedulingAgent applies heuristic optimization to generate feasible schedules and reschedules dynamically when disruptions occur.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\Equipment;
use App\Models\ProductionOrder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class ProductionSchedulingAgent
{
    public function generateSchedule(array $filters = []): array
    {
        $pendingOrders = $this->getPendingOrders($filters);
        $availableEquipment = $this->getAvailableEquipment();

        if ($pendingOrders->isEmpty()) {
            return [
                'status' => 'no_orders',
                'message' => 'No pending orders to schedule.',
            ];
        }

        if ($availableEquipment->isEmpty()) {
            return [
                'status' => 'no_capacity',
                'message' => 'No available equipment for production.',
            ];
        }

        $capacityPlan = $this->checkCapacity($pendingOrders, $availableEquipment);
        $schedule = $this->optimizeSchedule($pendingOrders, $availableEquipment, $capacityPlan);
        $this->applySchedule($schedule);

        Log::info("ProductionSchedulingAgent: Schedule generated", [
            'orders_scheduled' => count($schedule['assignments']),
            'utilization' => $schedule['overall_utilization'],
            'orders_on_time' => $schedule['on_time_count'],
        ]);

        return $schedule;
    }

    public function rescheduleDueToDisruption(Equipment $equipment): array
    {
        $affectedOrders = ProductionOrder::where('equipment_id', $equipment->id)
            ->whereIn('status', ['pending', 'in_progress'])
            ->get();

        foreach ($affectedOrders as $order) {
            $order->update([
                'equipment_id' => null,
                'status' => 'pending',
            ]);
        }

        Log::info("ProductionSchedulingAgent: Rescheduling due to equipment #{$equipment->id} disruption", [
            'affected_orders' => $affectedOrders->count(),
            'equipment' => $equipment->name,
        ]);

        return $this->generateSchedule();
    }

    protected function getPendingOrders(array $filters): Collection
    {
        $query = ProductionOrder::whereIn('status', ['pending', 'approved'])
            ->orderBy('priority')
            ->orderBy('scheduled_date');

        if (!empty($filters['equipment_id'])) {
            $query->where('equipment_id', $filters['equipment_id']);
        }

        if (!empty($filters['from_date'])) {
            $query->where('scheduled_date', '>=', $filters['from_date']);
        }

        if (!empty($filters['to_date'])) {
            $query->where('scheduled_date', '<=', $filters['to_date']);
        }

        return $query->get();
    }

    protected function getAvailableEquipment(): Collection
    {
        return Equipment::where('status', 'operational')->get();
    }

    protected function checkCapacity(Collection $orders, Collection $equipment): array
    {
        $totalOrderQuantity = $orders->sum('quantity_ordered');
        $totalEquipmentCapacity = $equipment->sum('expected_lifespan_years') * 365;

        $equipmentUtilization = [];

        foreach ($equipment as $eq) {
            $assignedOrders = $orders->where('equipment_id', $eq->id);
            $assignedQuantity = $assignedOrders->sum('quantity_ordered');

            $dailyCapacity = 100;
            $availableDays = 30;
            $maxCapacity = $dailyCapacity * $availableDays;

            $utilizationPercent = $maxCapacity > 0
                ? min(($assignedQuantity / $maxCapacity) * 100, 100)
                : 0;

            $equipmentUtilization[$eq->id] = [
                'equipment_id' => $eq->id,
                'equipment_name' => $eq->name,
                'assigned_quantity' => $assignedQuantity,
                'max_capacity' => $maxCapacity,
                'utilization_percent' => round($utilizationPercent, 2),
            ];
        }

        $overallUtilization = $totalEquipmentCapacity > 0
            ? round(($totalOrderQuantity / $totalEquipmentCapacity) * 100, 2)
            : 0;

        $overCapacity = collect($equipmentUtilization)->filter(
            fn($e) => $e['utilization_percent'] > 90
        )->isNotEmpty();

        return [
            'total_orders' => $orders->count(),
            'total_quantity' => $totalOrderQuantity,
            'overall_utilization' => $overallUtilization,
            'over_capacity' => $overCapacity,
            'equipment_utilization' => array_values($equipmentUtilization),
        ];
    }

    protected function optimizeSchedule(Collection $orders, Collection $equipment, array $capacityPlan): array
    {
        $priorityMap = ['critical' => 0, 'high' => 1, 'normal' => 2, 'low' => 3];

        $sortedOrders = $orders->sortBy(fn($o) => [
            $priorityMap[$o->priority] ?? 99,
            $o->scheduled_date,
        ])->values();

        $equipmentSchedule = [];

        foreach ($equipment as $eq) {
            $equipmentSchedule[$eq->id] = [
                'equipment' => $eq,
                'available_date' => now(),
                'assignments' => [],
            ];
        }

        $assignments = [];
        $unassigned = [];

        foreach ($sortedOrders as $order) {
            $bestEquipment = null;
            $bestCompletion = null;

            foreach ($equipmentSchedule as $eqId => &$schedule) {
                $dailyRate = 100;
                $durationDays = (int)ceil($order->quantity_ordered / $dailyRate);
                $completionDate = $schedule['available_date']->copy()->addDays($durationDays);

                if ($bestCompletion === null || $completionDate < $bestCompletion) {
                    $bestEquipment = $eqId;
                    $bestCompletion = $completionDate;
                }
            }

            if ($bestEquipment !== null) {
                $schedule = &$equipmentSchedule[$bestEquipment];
                $dailyRate = 100;
                $durationDays = (int)ceil($order->quantity_ordered / $dailyRate);
                $startDate = $schedule['available_date']->copy();

                $schedule['assignments'][] = [
                    'order_id' => $order->id,
                    'order_number' => $order->order_number,
                    'quantity' => $order->quantity_ordered,
                    'start_date' => $startDate->toDateString(),
                    'end_date' => $bestCompletion->toDateString(),
                    'duration_days' => $durationDays,
                ];

                $schedule['available_date'] = $bestCompletion;

                $assignments[] = [
                    'order_id' => $order->id,
                    'order_number' => $order->order_number,
                    'equipment_id' => $bestEquipment,
                    'equipment_name' => $equipmentSchedule[$bestEquipment]['equipment']->name,
                    'quantity' => $order->quantity_ordered,
                    'start_date' => $startDate->toDateString(),
                    'end_date' => $bestCompletion->toDateString(),
                    'duration_days' => $durationDays,
                    'meets_deadline' => !$order->scheduled_date->isPast()
                        && $bestCompletion->lte($order->scheduled_date),
                ];
            } else {
                $unassigned[] = $order->id;
            }

            unset($schedule);
        }

        $onTime = count(array_filter($assignments, fn($a) => $a['meets_deadline']));
        $capacityUtilization = [];

        foreach ($equipmentSchedule as $eqId => $schedule) {
            $totalDays = $schedule['available_date']->diffInDays(now()) ?: 1;
            $capacityUtilization[] = [
                'equipment_id' => $eqId,
                'equipment_name' => $schedule['equipment']->name,
                'assignments' => count($schedule['assignments']),
                'total_days_utilized' => $totalDays,
            ];
        }

        return [
            'assignments' => $assignments,
            'unassigned_order_ids' => $unassigned,
            'on_time_count' => $onTime,
            'total_scheduled' => count($assignments),
            'overall_utilization' => $capacityPlan['overall_utilization'],
            'capacity_utilization' => $capacityUtilization,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    protected function applySchedule(array $schedule): void
    {
        foreach ($schedule['assignments'] as $assignment) {
            ProductionOrder::where('id', $assignment['order_id'])->update([
                'equipment_id' => $assignment['equipment_id'],
                'start_date' => $assignment['start_date'],
                'scheduled_date' => $assignment['start_date'],
                'status' => 'scheduled',
            ]);
        }

        foreach ($schedule['unassigned_order_ids'] as $orderId) {
            Log::warning("ProductionSchedulingAgent: Order #{$orderId} could not be scheduled due to capacity constraints.");
        }
    }
}
```

---

### 36.6 Safety Compliance Monitoring

Manufacturing facilities operate under strict safety regulations â€” OSHA, ISO 45001, and industry-specific standards. A SafetyComplianceAgent monitors incident reports, tracks safety metrics, analyzes near-miss patterns, and generates compliance documentation automatically.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\MaintenanceLog;
use App\Models\Equipment;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class SafetyComplianceAgent
{
    public function runSafetyAudit(array $scope = []): array
    {
        $incidents = $this->getRecentIncidents($scope);
        $inspections = $this->getOverdueInspections();
        $complianceStatus = $this->checkComplianceStatus($incidents, $inspections);
        $incidentAnalysis = $this->analyzeIncidents($incidents);

        $recommendations = $this->generateSafetyRecommendations(
            $complianceStatus,
            $incidentAnalysis,
            $inspections
        );

        if (!empty($recommendations['critical'])) {
            $this->escalateCriticalFindings($recommendations['critical']);
        }

        Log::info("SafetyComplianceAgent: Safety audit complete", [
            'compliance_score' => $complianceStatus['compliance_score'],
            'incidents_analyzed' => $incidents->count(),
            'overdue_inspections' => $inspections->count(),
            'critical_findings' => count($recommendations['critical']),
        ]);

        return [
            'audit_date' => now()->toDateString(),
            'scope' => $scope,
            'compliance_status' => $complianceStatus,
            'incident_analysis' => $incidentAnalysis,
            'inspection_status' => [
                'overdue' => $inspections->count(),
                'items' => $inspections->map(fn($i) => [
                    'equipment_id' => $i->id,
                    'equipment_name' => $i->name,
                    'last_calibration' => $i->last_calibration_date?->toDateString(),
                    'days_overdue' => $i->last_calibration_date
                        ? now()->diffInDays($i->last_calibration_date->addDays($i->calibration_interval_days), false)
                        : null,
                ]),
            ],
            'recommendations' => $recommendations,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    protected function getRecentIncidents(array $scope): Collection
    {
        $query = MaintenanceLog::where('type', 'safety_incident')
            ->where('created_at', '>=', now()->subDays($scope['days'] ?? 90));

        if (!empty($scope['equipment_id'])) {
            $query->where('equipment_id', $scope['equipment_id']);
        }

        if (!empty($scope['severity'])) {
            $query->where('priority', $scope['severity']);
        }

        return $query->with('equipment')->get();
    }

    protected function getOverdueInspections(): Collection
    {
        return Equipment::where('status', 'operational')
            ->get()
            ->filter(fn($e) => $e->isOverdueForCalibration());
    }

    protected function checkComplianceStatus(Collection $incidents, Collection $overdueInspections): array
    {
        $score = 100;
        $deductions = [];

        $recentCriticalIncidents = $incidents->where('priority', 'critical')->count();
        if ($recentCriticalIncidents > 0) {
            $deduction = $recentCriticalIncidents * 15;
            $score -= $deduction;
            $deductions[] = "{$recentCriticalIncidents} critical safety incidents (-{$deduction} points)";
        }

        $recentMajorIncidents = $incidents->where('priority', 'high')->count();
        if ($recentMajorIncidents > 0) {
            $deduction = $recentMajorIncidents * 5;
            $score -= $deduction;
            $deductions[] = "{$recentMajorIncidents} major safety incidents (-{$deduction} points)";
        }

        if ($overdueInspections->count() > 0) {
            $deduction = min($overdueInspections->count() * 3, 30);
            $score -= $deduction;
            $deductions[] = "{$overdueInspections->count()} overdue inspections (-{$deduction} points)";
        }

        $score = max($score, 0);

        $status = 'excellent';

        if ($score < 60) {
            $status = 'critical';
        } elseif ($score < 80) {
            $status = 'needs_improvement';
        } elseif ($score < 90) {
            $status = 'satisfactory';
        }

        return [
            'compliance_score' => $score,
            'status' => $status,
            'deductions' => $deductions,
        ];
    }

    protected function analyzeIncidents(Collection $incidents): array
    {
        if ($incidents->isEmpty()) {
            return [
                'total' => 0,
                'message' => 'No incidents in the reporting period.',
            ];
        }

        $bySeverity = $incidents->groupBy('priority')->map(fn($g) => $g->count());
        $byType = $incidents->groupBy('type')->map(fn($g) => $g->count());
        $byEquipment = $incidents->groupBy('equipment_id')->map(function ($g, $eqId) {
            $equipment = $g->first()->equipment;

            return [
                'equipment_id' => $eqId,
                'equipment_name' => $equipment?->name ?? 'Unknown',
                'incident_count' => $g->count(),
                'severity' => $g->pluck('priority')->toArray(),
            ];
        })->values();

        $downtimeTotal = $incidents->sum('downtime_minutes');
        $costTotal = $incidents->sum('cost');

        return [
            'total' => $incidents->count(),
            'by_severity' => $bySeverity,
            'by_type' => $byType,
            'by_equipment' => $byEquipment,
            'total_downtime_minutes' => $downtimeTotal,
            'total_cost' => $costTotal,
        ];
    }

    protected function generateSafetyRecommendations(
        array $complianceStatus,
        array $incidentAnalysis,
        Collection $overdueInspections
    ): array {
        $critical = [];
        $high = [];
        $medium = [];

        if ($complianceStatus['status'] === 'critical') {
            $critical[] = [
                'area' => 'compliance',
                'action' => 'immediate_audit',
                'description' => 'Overall compliance score is critical. Full safety audit required.',
            ];
        }

        if ($overdueInspections->isNotEmpty()) {
            foreach ($overdueInspections as $eq) {
                $critical[] = [
                    'area' => 'inspection',
                    'action' => 'schedule_inspection',
                    'description' => "{$eq->name} is overdue for calibration. Last: {$eq->last_calibration_date?->toDateString()}.",
                ];
            }
        }

        if (($incidentAnalysis['total'] ?? 0) > 5) {
            $high[] = [
                'area' => 'incident_trend',
                'action' => 'trend_analysis',
                'description' => 'Incident frequency is elevated. Root cause analysis recommended.',
            ];
        }

        if (($incidentAnalysis['total_cost'] ?? 0) > 10000) {
            $high[] = [
                'area' => 'financial_impact',
                'action' => 'cost_analysis',
                'description' => 'Safety incident costs exceed $10,000 in the reporting period.',
            ];
        }

        $medium[] = [
            'area' => 'prevention',
            'action' => 'safety_training',
            'description' => 'Schedule refresher safety training for all production floor staff.',
        ];

        return [
            'critical' => $critical,
            'high' => $high,
            'medium' => $medium,
        ];
    }

    protected function escalateCriticalFindings(array $criticalFindings): void
    {
        foreach ($criticalFindings as $finding) {
            Log::critical("SafetyComplianceAgent: Critical finding â€” {$finding['description']}");
        }
    }
}
```

---

### 36.7 Inventory Automation

Manufacturing inventory is complex â€” raw materials, work-in-progress, finished goods, and consumables each have different reorder patterns. An InventoryAutomationAgent monitors stock levels across all categories, calculates reorder quantities using demand forecasts, and generates purchase orders automatically when stock falls below threshold.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\InventoryItem;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class InventoryAutomationAgent
{
    public function runInventoryCheck(): array
    {
        $items = InventoryItem::where('status', 'active')->get();

        $stockAnalysis = $this->analyzeStockLevels($items);
        $reorderNeeds = $this->calculateReorderNeeds($items);
        $alerts = $this->generateStockAlerts($stockAnalysis);

        if (!empty($reorderNeeds['orders_to_place'])) {
            foreach ($reorderNeeds['orders_to_place'] as $order) {
                Log::info("InventoryAutomationAgent: Reorder needed for {$order['sku']}", $order);
            }
        }

        Log::info("InventoryAutomationAgent: Inventory check complete", [
            'items_checked' => $items->count(),
            'out_of_stock' => $stockAnalysis['out_of_stock'],
            'low_stock' => $stockAnalysis['low_stock'],
            'reorders_needed' => count($reorderNeeds['orders_to_place']),
        ]);

        return [
            'check_date' => now()->toDateString(),
            'stock_analysis' => $stockAnalysis,
            'reorder_needs' => $reorderNeeds,
            'alerts' => $alerts,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    public function monitorStockLevels(): array
    {
        $criticalItems = InventoryItem::where('status', 'active')
            ->whereColumn('current_stock', '<=', 'reorder_point')
            ->get();

        return [
            'critical_count' => $criticalItems->count(),
            'critical_items' => $criticalItems->map(fn($i) => [
                'id' => $i->id,
                'sku' => $i->sku,
                'name' => $i->name,
                'current_stock' => $i->current_stock,
                'reorder_point' => $i->reorder_point,
            ]),
            'checked_at' => now()->toIso8601String(),
        ];
    }

    protected function analyzeStockLevels(Collection $items): array
    {
        $outOfStock = 0;
        $lowStock = 0;
        $adequate = 0;
        $overstocked = 0;

        foreach ($items as $item) {
            $status = $item->stockStatus();

            match ($status) {
                'out_of_stock' => $outOfStock++,
                'low' => $lowStock++,
                'overstocked' => $overstocked++,
                default => $adequate++,
            };
        }

        $totalValue = $items->sum(fn($i) => $i->current_stock * $i->unit_cost);

        $categories = $items->groupBy('category')->map(function ($group) {
            $totalStock = $group->sum('current_stock');
            $totalValue = $group->sum(fn($i) => $i->current_stock * $i->unit_cost);

            $lowInCategory = $group->filter(fn($i) => $i->needsReorder())->count();

            return [
                'category' => $group->first()->category,
                'items' => $group->count(),
                'total_stock' => $totalStock,
                'total_value' => round($totalValue, 2),
                'items_needing_reorder' => $lowInCategory,
            ];
        })->values();

        return [
            'total_items' => $items->count(),
            'out_of_stock' => $outOfStock,
            'low_stock' => $lowStock,
            'adequate' => $adequate,
            'overstocked' => $overstocked,
            'total_inventory_value' => round($totalValue, 2),
            'by_category' => $categories,
        ];
    }

    protected function calculateReorderNeeds(Collection $items): array
    {
        $ordersToPlace = [];

        foreach ($items as $item) {
            if (!$item->needsReorder()) {
                continue;
            }

            $demandRate = $this->estimateDailyDemand($item);
            $safetyStock = $demandRate * $item->lead_time_days * 0.5;
            $reorderQuantity = max(
                $item->reorder_quantity,
                ceil($item->maximum_stock - $item->current_stock)
            );

            $ordersToPlace[] = [
                'sku' => $item->sku,
                'name' => $item->name,
                'current_stock' => $item->current_stock,
                'reorder_point' => $item->reorder_point,
                'recommended_quantity' => (int)$reorderQuantity,
                'estimated_daily_demand' => round($demandRate, 2),
                'safety_stock' => (int)ceil($safetyStock),
                'lead_time_days' => $item->lead_time_days,
                'supplier_id' => $item->supplier_id,
                'estimated_cost' => round($reorderQuantity * $item->unit_cost, 2),
                'priority' => $item->current_stock <= 0 ? 'critical' : 'normal',
            ];
        }

        return [
            'orders_to_place' => $ordersToPlace,
            'total_reorder_cost' => round(
                array_sum(array_column($ordersToPlace, 'estimated_cost')),
                2
            ),
        ];
    }

    protected function estimateDailyDemand(InventoryItem $item): float
    {
        $totalConsumed = $item->current_stock;
        $totalProduced = $item->maximum_stock;

        $estimatedDemand = ($totalConsumed + $totalProduced) > 0
            ? ($totalConsumed / max($totalConsumed + $totalProduced, 1)) * 10
            : 1;

        return max($estimatedDemand, 0.5);
    }

    protected function generateStockAlerts(array $stockAnalysis): array
    {
        $alerts = [];

        if ($stockAnalysis['out_of_stock'] > 0) {
            $alerts[] = [
                'level' => 'critical',
                'message' => "{$stockAnalysis['out_of_stock']} item(s) are out of stock. Immediate reorder required.",
            ];
        }

        if ($stockAnalysis['low_stock'] > 5) {
            $alerts[] = [
                'level' => 'warning',
                'message' => "{$stockAnalysis['low_stock']} item(s) are below reorder point. Review inventory levels.",
            ];
        }

        foreach ($stockAnalysis['by_category'] as $category) {
            if ($category['items_needing_reorder'] > $category['items'] * 0.3) {
                $alerts[] = [
                    'level' => 'warning',
                    'message' => "Category '{$category['category']}' has {$category['items_needing_reorder']} items needing reorder (over 30% of category).",
                ];
            }
        }

        return $alerts;
    }
}
```

---

### 36.8 Equipment Lifecycle Management

Industrial equipment represents a significant capital investment that must be managed across its entire lifecycle â€” from purchase and commissioning through maintenance, calibration, and eventual retirement. An EquipmentLifecycleAgent tracks depreciation, warranty status, calibration schedules, and total cost of ownership to optimize replacement timing and budget planning.

```php
<?php

namespace App\Agents\Manufacturing;

use App\Models\Equipment;
use App\Models\MaintenanceLog;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class EquipmentLifecycleAgent
{
    public function analyzeLifecycle(Equipment $equipment): array
    {
        $maintenanceHistory = $equipment->maintenanceLogs()
            ->where('status', 'completed')
            ->orderBy('completed_at')
            ->get();

        $depreciation = $this->calculateDepreciation($equipment);
        $warrantyStatus = $this->checkWarrantyStatus($equipment);
        $calibrationStatus = $this->checkCalibrationStatus($equipment);
        $maintenanceCosts = $this->analyzeMaintenanceCosts($equipment, $maintenanceHistory);
        $lifecycleStage = $this->determineLifecycleStage($equipment, $maintenanceHistory);
        $totalCostOfOwnership = $this->calculateTCO($equipment, $maintenanceHistory, $depreciation);
        $recommendations = $this->generateLifecycleRecommendations(
            $equipment,
            $lifecycleStage,
            $warrantyStatus,
            $calibrationStatus,
            $maintenanceCosts,
            $totalCostOfOwnership
        );

        Log::info("EquipmentLifecycleAgent: Lifecycle analysis for {$equipment->name}", [
            'stage' => $lifecycleStage,
            'tco' => $totalCostOfOwnership['total'],
            'remaining_useful_life' => $depreciation['remaining_life_years'],
        ]);

        return [
            'equipment_id' => $equipment->id,
            'equipment_name' => $equipment->name,
            'serial_number' => $equipment->serial_number,
            'category' => $equipment->category,
            'purchase_details' => [
                'date' => $equipment->purchase_date?->toDateString(),
                'cost' => $equipment->purchase_cost,
                'age_years' => $equipment->purchase_date
                    ? round($equipment->purchase_date->diffInYears(now()), 1)
                    : null,
            ],
            'lifecycle_stage' => $lifecycleStage,
            'depreciation' => $depreciation,
            'warranty' => $warrantyStatus,
            'calibration' => $calibrationStatus,
            'maintenance_costs' => $maintenanceCosts,
            'total_cost_of_ownership' => $totalCostOfOwnership,
            'recommendations' => $recommendations,
            'analyzed_at' => now()->toIso8601String(),
        ];
    }

    public function runFleetWideAnalysis(): array
    {
        $allEquipment = Equipment::all();
        $results = [];

        foreach ($allEquipment as $equipment) {
            $results[] = $this->analyzeLifecycle($equipment);
        }

        $stages = collect($results)->groupBy('lifecycle_stage.stage')
            ->map(fn($g) => $g->count());

        $totalTCO = collect($results)->sum('total_cost_of_ownership.total');
        $totalRemainingLife = collect($results)->sum('depreciation.remaining_life_years');

        return [
            'fleet_size' => $allEquipment->count(),
            'stages' => $stages,
            'total_tco' => round($totalTCO, 2),
            'average_remaining_life' => $allEquipment->count() > 0
                ? round($totalRemainingLife / $allEquipment->count(), 1)
                : 0,
            'equipment_analyses' => $results,
            'generated_at' => now()->toIso8601String(),
        ];
    }

    protected function calculateDepreciation(Equipment $equipment): array
    {
        if (!$equipment->purchase_date || !$equipment->purchase_cost) {
            return [
                'method' => 'straight_line',
                'purchase_cost' => null,
                'current_value' => null,
                'accumulated_depreciation' => null,
                'remaining_life_years' => null,
            ];
        }

        $salvageValue = $equipment->purchase_cost * 0.1;
        $depreciableBase = $equipment->purchase_cost - $salvageValue;
        $usefulLife = $equipment->expected_lifespan_years;
        $annualDepreciation = $usefulLife > 0 ? $depreciableBase / $usefulLife : 0;
        $yearsOwned = $equipment->purchase_date->diffInYears(now());
        $accumulatedDepreciation = min($yearsOwned * $annualDepreciation, $depreciableBase);
        $currentValue = $equipment->purchase_cost - $accumulatedDepreciation;
        $remainingLife = max($usefulLife - $yearsOwned, 0);

        return [
            'method' => 'straight_line',
            'purchase_cost' => $equipment->purchase_cost,
            'salvage_value' => round($salvageValue, 2),
            'annual_depreciation' => round($annualDepreciation, 2),
            'accumulated_depreciation' => round($accumulatedDepreciation, 2),
            'current_value' => round(max($currentValue, 0), 2),
            'remaining_life_years' => round($remainingLife, 1),
        ];
    }

    protected function checkWarrantyStatus(Equipment $equipment): array
    {
        if (!$equipment->warranty_expiry) {
            return [
                'has_warranty' => false,
                'status' => 'no_warranty',
                'expiry_date' => null,
                'remaining_days' => 0,
            ];
        }

        $remainingDays = $equipment->warrantyRemainingDays();
        $status = 'active';

        if ($remainingDays <= 0) {
            $status = 'expired';
        } elseif ($remainingDays <= 30) {
            $status = 'expiring_soon';
        }

        return [
            'has_warranty' => true,
            'status' => $status,
            'expiry_date' => $equipment->warranty_expiry->toDateString(),
            'remaining_days' => $remainingDays,
        ];
    }

    protected function checkCalibrationStatus(Equipment $equipment): array
    {
        $overdue = $equipment->isOverdueForCalibration();

        $nextDue = null;

        if ($equipment->last_calibration_date) {
            $nextDue = $equipment->last_calibration_date
                ->addDays($equipment->calibration_interval_days)
                ->toDateString();
        }

        return [
            'last_calibration' => $equipment->last_calibration_date?->toDateString(),
            'interval_days' => $equipment->calibration_interval_days,
            'next_due' => $nextDue,
            'overdue' => $overdue,
        ];
    }

    protected function analyzeMaintenanceCosts(Equipment $equipment, Collection $maintenanceHistory): array
    {
        if ($maintenanceHistory->isEmpty()) {
            return [
                'total_maintenance_cost' => 0,
                'total_downtime_minutes' => 0,
                'maintenance_count' => 0,
                'average_cost_per_event' => 0,
                'cost_by_type' => [],
            ];
        }

        $byType = $maintenanceHistory->groupBy('type')
            ->map(fn($group) => [
                'type' => $group->first()->type,
                'count' => $group->count(),
                'total_cost' => $group->sum('cost'),
                'total_downtime' => $group->sum('downtime_minutes'),
            ])->values();

        $totalCost = $maintenanceHistory->sum('cost');
        $totalDowntime = $maintenanceHistory->sum('downtime_minutes');

        return [
            'total_maintenance_cost' => round($totalCost, 2),
            'total_downtime_minutes' => $totalDowntime,
            'maintenance_count' => $maintenanceHistory->count(),
            'average_cost_per_event' => $maintenanceHistory->count() > 0
                ? round($totalCost / $maintenanceHistory->count(), 2)
                : 0,
            'cost_by_type' => $byType,
        ];
    }

    protected function determineLifecycleStage(Equipment $equipment, Collection $maintenanceHistory): array
    {
        if (!$equipment->purchase_date) {
            return ['stage' => 'unknown', 'description' => 'Insufficient data to determine lifecycle stage.'];
        }

        $yearsOwned = $equipment->purchase_date->diffInYears(now());
        $usefulLife = $equipment->expected_lifespan_years;
        $lifePercent = $usefulLife > 0 ? ($yearsOwned / $usefulLife) * 100 : 0;

        $maintenanceFrequency = $maintenanceHistory->count() / max($yearsOwned, 1);

        $stage = 'mature';
        $description = 'Equipment is in its mature operational phase.';

        if ($lifePercent < 10) {
            $stage = 'commissioning';
            $description = 'Recently commissioned. Tracking initial performance baseline.';
        } elseif ($lifePercent < 30) {
            $stage = 'early_life';
            $description = 'Early operational phase. Low maintenance expected.';
        } elseif ($lifePercent < 70) {
            $stage = 'mature';
            $description = 'Mature operational phase. Routine maintenance required.';
        } elseif ($lifePercent < 90) {
            $stage = 'late_life';
            $description = 'Late life stage. Increasing maintenance costs expected. Replacement planning recommended.';
        } else {
            $stage = 'end_of_life';
            $description = 'Beyond expected lifespan. Replacement strongly recommended.';
        }

        if ($maintenanceFrequency > 12 && $lifePercent > 50) {
            $stage = 'high_maintenance';
            $description = 'Frequent maintenance events indicate accelerated wear. Evaluate replacement.';
        }

        return [
            'stage' => $stage,
            'description' => $description,
            'percent_of_life_consumed' => round($lifePercent, 1),
            'years_owned' => round($yearsOwned, 1),
            'maintenance_events_per_year' => round($maintenanceFrequency, 1),
        ];
    }

    protected function calculateTCO(Equipment $equipment, Collection $maintenanceHistory, array $depreciation): array
    {
        $purchaseCost = $equipment->purchase_cost ?? 0;
        $maintenanceCost = $maintenanceHistory->sum('cost');
        $downtimeCost = $maintenanceHistory->sum('downtime_minutes') * 50;

        $total = $purchaseCost + $maintenanceCost + $downtimeCost;
        $yearsOwned = $equipment->purchase_date
            ? max($equipment->purchase_date->diffInYears(now()), 1)
            : 1;

        return [
            'purchase_cost' => $purchaseCost,
            'total_maintenance_cost' => round($maintenanceCost, 2),
            'estimated_downtime_cost' => round($downtimeCost, 2),
            'total' => round($total, 2),
            'annualized' => round($total / $yearsOwned, 2),
            'current_value' => $depreciation['current_value'],
        ];
    }

    protected function generateLifecycleRecommendations(
        Equipment $equipment,
        array $lifecycleStage,
        array $warrantyStatus,
        array $calibrationStatus,
        array $maintenanceCosts,
        array $totalCostOfOwnership
    ): array {
        $recommendations = [];

        if ($lifecycleStage['stage'] === 'end_of_life') {
            $recommendations[] = [
                'priority' => 'critical',
                'action' => 'plan_replacement',
                'description' => "{$equipment->name} is beyond its expected lifespan. Begin replacement procurement.",
                'timeline' => '3-6 months',
            ];
        }

        if ($lifecycleStage['stage'] === 'late_life' || $lifecycleStage['stage'] === 'high_maintenance') {
            $annualMaintenance = $totalCostOfOwnership['annualized'];
            $purchaseCost = $equipment->purchase_cost ?? 0;

            if ($annualMaintenance > $purchaseCost * 0.3) {
                $recommendations[] = [
                    'priority' => 'high',
                    'action' => 'cost_analysis_for_replacement',
                    'description' => "Annual maintenance cost ({$annualMaintenance}) exceeds 30% of purchase price ({$purchaseCost}). Replacement may be cost-effective.",
                    'timeline' => '6-12 months',
                ];
            }

            $recommendations[] = [
                'priority' => 'medium',
                'action' => 'increased_monitoring',
                'description' => "Increase monitoring frequency for {$equipment->name} due to late-life stage.",
                'timeline' => 'immediate',
            ];
        }

        if ($warrantyStatus['status'] === 'expiring_soon') {
            $recommendations[] = [
                'priority' => 'high',
                'action' => 'warranty_renewal',
                'description' => "Warranty for {$equipment->name} expires in {$warrantyStatus['remaining_days']} days. Evaluate renewal.",
                'timeline' => 'within 30 days',
            ];
        }

        if ($calibrationStatus['overdue']) {
            $recommendations[] = [
                'priority' => 'high',
                'action' => 'calibration_required',
                'description' => "{$equipment->name} requires calibration. Last: {$calibrationStatus['last_calibration']}.",
                'timeline' => 'immediate',
            ];
        }

        return $recommendations;
    }
}
```

---

## Summary

This chapter demonstrated how to build AI-powered manufacturing agents across eight critical domains of factory operations. The **manufacturing data models** provide the relational foundation â€” Equipment, ProductionOrder, QualityCheck, MaintenanceLog, InventoryItem, and IoTReading â€” with proper migrations and Eloquent relationships. The **PredictiveMaintenanceAgent** analyzes sensor trends and maintenance history to forecast equipment failures and schedule preventative maintenance before breakdowns occur. The **QualityControlAgent** inspects production data for defects, tracks quality trends over time, and detects parameter drift that signals process degradation. The **IoTDataIngestionAgent** handles the high-volume sensor telemetry pipeline with payload validation, statistical anomaly detection, and automatic alerting. The **ProductionSchedulingAgent** solves the constrained scheduling problem by optimizing order-to-equipment assignments against capacity and priority. The **SafetyComplianceAgent** monitors incident reports, tracks compliance scores, and escalates critical safety findings. The **InventoryAutomationAgent** manages raw material stock levels with demand estimation and automatic reorder calculation. Finally, the **EquipmentLifecycleAgent** tracks the full asset lifecycle â€” from commissioning through end-of-life â€” with depreciation modeling, warranty monitoring, and total-cost-of-ownership analysis.

---

## Exercises

### Review Questions

1. What six core data models form the foundation of a manufacturing platform in Laravel? Describe the purpose of each and their key relationships.

2. How does the `PredictiveMaintenanceAgent` calculate failure probability? What two components contribute to the overall risk score?

3. Explain the quality grading system used by `QualityControlAgent::assessOverallQuality()`. What defect rates trigger each grade level?

4. What two methods does `IoTDataIngestionAgent` use to detect anomalies in sensor readings? How does the anomaly score combine them?

5. Describe how `ProductionSchedulingAgent` handles rescheduling when equipment becomes unavailable due to disruption.

### Application Problems

1. **Extend the PredictiveMaintenanceAgent** to add a `generateMaintenanceReport()` method that produces a monthly summary of all equipment analyzed, including total maintenance scheduled, cost avoided by prevention, and equipment reliability scores.

2. **Implement a supplier quality module** in `QualityControlAgent` that correlates defect rates by supplier of raw materials. Add a `SupplierQualityReport` that ranks suppliers by defect percentage and flags suppliers exceeding a configurable threshold.

3. **Build a production dashboard response** using the agents from sections 36.5 and 36.2. Create a `ManufacturingDashboardController` that aggregates schedule utilization, equipment health scores, and pending maintenance into a single JSON endpoint.

4. **Extend the IoTDataIngestionAgent** to support MQTT-style subscription topics. Add a `subscribeToSensor(callable $callback)` method that routes incoming payloads by `sensor_type` to specialized handlers (temperature, vibration, pressure).

5. **Add predictive reorder logic** to `InventoryAutomationAgent` that factors in upcoming production orders. Modify `calculateReorderNeeds()` to accept a collection of `ProductionOrder` records and adjust reorder quantities based on scheduled material consumption.

### Challenge Problems

1. **Design a multi-agent orchestration system** where the `ProductionSchedulingAgent`, `InventoryAutomationAgent`, and `PredictiveMaintenanceAgent` collaborate. When the scheduling agent assigns an order, it must first confirm material availability with the inventory agent and equipment health with the maintenance agent. If either check fails, the schedule must be adjusted. Implement the coordination layer using Laravel events and a mediator agent.

2. **Build an anomaly classification system** for IoT readings that uses historical labeled data to classify anomalies by type (sensor_fault, process_drift, impending_failure, environmental). Extend `IoTDataIngestionAgent::detectAnomaly()` with a pattern-matching engine that compares current readings against known failure signatures stored in a `failure_patterns` database table.

3. **Implement a complete equipment replacement optimizer** that analyzes TCO projections over a 5-year horizon. The optimizer should compare three strategies: maintain existing equipment (with projected maintenance cost escalation), replace with new equipment (with depreciation and warranty), or refurbish (with intermediate cost). Generate a financial comparison report with net-present-value calculations.