---
id: 30-logistics
slug: /laravel/30-logistics
title: "Chapter 30: Logistics & Supply Chain Agents"
sidebar_label: "Chapter 30: Logistics & Supply Chain Agents"
sidebar_position: 30
---
# Chapter 30: Logistics & Supply Chain Agents

> **Previous:** [Education](./29-education.md) | **Next:** [HR Recruitment](./31-hr-recruitment.md)

---

## Learning Objectives

- Design and implement logistics data models for shipments, inventory, suppliers, warehouses, fleet, and orders using Laravel migrations and Eloquent
- Build AI agents that predict inventory demand and calculate reorder points to prevent stockouts
- Implement route optimization agents that minimize delivery distance and time using waypoint algorithms
- Construct shipment tracking agents with automated status detection, exception handling, and multi-channel notifications
- Deploy supplier evaluation agents that generate performance scorecards and automate procurement decisions
- Create warehouse automation agents that optimize pick/pack workflows and bin location assignment
- Build demand forecasting agents using seasonal analysis and machine learning models
- Implement fleet management agents for vehicle health monitoring and maintenance scheduling
- Construct supply chain visibility dashboards with agent-generated real-time analytics reports

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Data Models | Logistics data models for inventory, shipments, routes | Design schemas for supply chain management |
| Inventory Prediction | AI agents for inventory forecasting | Predict demand using historical data and seasonality |
| Route Optimization | Route optimization agents | Optimize delivery routes for cost and time |
| Shipment Tracking | Automated shipment tracking | Track shipments across carriers with status updates |
| Supplier Management | Supplier management agents | Evaluate supplier performance and automate procurement |
| Warehouse Automation | Warehouse operations agents | Optimize picking, packing, and inventory placement |

## Chapter Roadmap

``mermaid
flowchart LR
    A[Order] --> B[Laravel App]
    B --> C[Inventory Agent]
    B --> D[Route Optimizer]
    B --> E[Shipment Tracker]
    B --> F[Supplier Agent]
    B --> G[Warehouse Agent]
    C --> H[Demand Forecast]
    D --> I[Map Service]
    E --> J[Carrier APIs]
    F --> K[Procurement System]
    G --> L[WMS]
``



## Theory

![Logistics Domain](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/30-logistics.png)


### 30.1 Logistics Data Models



> **One-Sentence Takeaway:** Logistics schemas cover inventory, shipments, routes, suppliers, warehouses, and carriers with proper tracking.

Every logistics system rests on a core set of interconnected data models. These models represent the physical and digital flow of goods: where inventory lives, how it moves, who supplies it, and who receives it. In Laravel, we define these relationships through migrations and Eloquent models with proper foreign keys, indexes, and casts.

#### Shipment Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained();
            $table->foreignId('carrier_id')->nullable()->constrained('suppliers');
            $table->string('tracking_number')->unique()->nullable();
            $table->string('status')->default('pending');
            $table->string('origin_address');
            $table->string('destination_address');
            $table->decimal('weight_kg', 8, 2)->nullable();
            $table->decimal('shipping_cost', 10, 2)->nullable();
            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('estimated_delivery')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->json('waypoints')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('tracking_number');
            $table->index('estimated_delivery');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Shipment extends Model
{
    protected $fillable = [
        'order_id', 'warehouse_id', 'carrier_id', 'tracking_number',
        'status', 'origin_address', 'destination_address', 'weight_kg',
        'shipping_cost', 'shipped_at', 'estimated_delivery', 'delivered_at',
        'waypoints', 'metadata',
    ];

    protected $casts = [
        'weight_kg' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
        'shipped_at' => 'datetime',
        'estimated_delivery' => 'datetime',
        'delivered_at' => 'datetime',
        'waypoints' => 'array',
        'metadata' => 'array',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function carrier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class, 'carrier_id');
    }

    public function trackingEvents(): HasMany
    {
        return $this->hasMany(ShipmentTrackingEvent::class);
    }

    public function scopeByStatus($query, string $status)
    {
        return $query->where('status', $status);
    }

    public function scopeOverdue($query)
    {
        return $query->whereNotNull('estimated_delivery')
            ->where('estimated_delivery', '<', now())
            ->whereNotIn('status', ['delivered', 'cancelled']);
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipment_tracking_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shipment_id')->constrained()->cascadeOnDelete();
            $table->string('status');
            $table->string('location')->nullable();
            $table->text('description')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamp('recorded_at');
            $table->timestamps();

            $table->index('shipment_id');
            $table->index('recorded_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipment_tracking_events');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShipmentTrackingEvent extends Model
{
    protected $fillable = [
        'shipment_id', 'status', 'location', 'description',
        'metadata', 'recorded_at',
    ];

    protected $casts = [
        'metadata' => 'array',
        'recorded_at' => 'datetime',
    ];

    public function shipment(): BelongsTo
    {
        return $this->belongsTo(Shipment::class);
    }
}
```

#### Inventory Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->integer('quantity_on_hand')->default(0);
            $table->integer('quantity_reserved')->default(0);
            $table->integer('quantity_available')
                ->virtualAs('quantity_on_hand - quantity_reserved');
            $table->integer('reorder_point')->default(10);
            $table->integer('reorder_quantity')->default(50);
            $table->string('bin_location')->nullable();
            $table->string('lot_number')->nullable();
            $table->date('expiry_date')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->unique(['product_id', 'warehouse_id']);
            $table->index('reorder_point');
            $table->index('expiry_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_items');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InventoryItem extends Model
{
    protected $fillable = [
        'product_id', 'warehouse_id', 'quantity_on_hand',
        'quantity_reserved', 'reorder_point', 'reorder_quantity',
        'bin_location', 'lot_number', 'expiry_date', 'metadata',
    ];

    protected $casts = [
        'quantity_on_hand' => 'integer',
        'quantity_reserved' => 'integer',
        'reorder_point' => 'integer',
        'reorder_quantity' => 'integer',
        'expiry_date' => 'date',
        'metadata' => 'array',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function movements(): HasMany
    {
        return $this->hasMany(InventoryMovement::class, 'inventory_item_id');
    }

    public function scopeLowStock($query)
    {
        return $query->whereColumn('quantity_on_hand', '<=', 'reorder_point');
    }

    public function scopeExpiringBefore($query, string $date)
    {
        return $query->whereNotNull('expiry_date')
            ->where('expiry_date', '<', $date);
    }

    public function reserve(int $quantity): bool
    {
        if ($this->quantity_available < $quantity) {
            return false;
        }
        $this->increment('quantity_reserved', $quantity);
        return true;
    }

    public function release(int $quantity): void
    {
        $this->decrement('quantity_reserved', max(0, $quantity));
    }

    public function needsReorder(): bool
    {
        return $this->quantity_on_hand <= $this->reorder_point;
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventory_movements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inventory_item_id')->constrained()->cascadeOnDelete();
            $table->string('type');
            $table->integer('quantity');
            $table->string('reference_type')->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->text('reason')->nullable();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->timestamps();

            $table->index(['reference_type', 'reference_id']);
            $table->index('type');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_movements');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InventoryMovement extends Model
{
    protected $fillable = [
        'inventory_item_id', 'type', 'quantity',
        'reference_type', 'reference_id', 'reason', 'user_id',
    ];

    protected $casts = [
        'quantity' => 'integer',
    ];

    public function inventoryItem(): BelongsTo
    {
        return $this->belongsTo(InventoryItem::class);
    }
}
```

#### Supplier Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('contact_name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('supplier_type');
            $table->string('status')->default('active');
            $table->integer('lead_time_days')->default(1);
            $table->decimal('reliability_score', 5, 2)->nullable();
            $table->decimal('quality_score', 5, 2)->nullable();
            $table->decimal('cost_score', 5, 2)->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('supplier_type');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('suppliers');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    protected $fillable = [
        'name', 'contact_name', 'email', 'phone', 'address',
        'supplier_type', 'status', 'lead_time_days',
        'reliability_score', 'quality_score', 'cost_score', 'metadata',
    ];

    protected $casts = [
        'lead_time_days' => 'integer',
        'reliability_score' => 'decimal:2',
        'quality_score' => 'decimal:2',
        'cost_score' => 'decimal:2',
        'metadata' => 'array',
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function purchaseOrders(): HasMany
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    public function scorecard(): HasMany
    {
        return $this->hasMany(SupplierScorecard::class);
    }

    public function averageScore(): float
    {
        return round(
            ($this->reliability_score + $this->quality_score + $this->cost_score) / 3,
            2
        );
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('supplier_scorecards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('supplier_id')->constrained()->cascadeOnDelete();
            $table->decimal('on_time_delivery_rate', 5, 2);
            $table->decimal('defect_rate', 5, 2);
            $table->decimal('lead_time_accuracy', 5, 2);
            $table->decimal('communication_rating', 5, 2);
            $table->decimal('overall_score', 5, 2);
            $table->string('period');
            $table->json('details')->nullable();
            $table->timestamp('generated_at');
            $table->timestamps();

            $table->index(['supplier_id', 'period']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_scorecards');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SupplierScorecard extends Model
{
    protected $fillable = [
        'supplier_id', 'on_time_delivery_rate', 'defect_rate',
        'lead_time_accuracy', 'communication_rating', 'overall_score',
        'period', 'details', 'generated_at',
    ];

    protected $casts = [
        'on_time_delivery_rate' => 'decimal:2',
        'defect_rate' => 'decimal:2',
        'lead_time_accuracy' => 'decimal:2',
        'communication_rating' => 'decimal:2',
        'overall_score' => 'decimal:2',
        'details' => 'array',
        'generated_at' => 'datetime',
    ];

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }
}
```

#### Warehouse Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->unique();
            $table->string('address');
            $table->string('city');
            $table->string('state')->nullable();
            $table->string('country');
            $table->string('postal_code')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->integer('capacity_cubic_m')->nullable();
            $table->json('operating_hours')->nullable();
            $table->string('status')->default('active');
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('code');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('warehouses');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Warehouse extends Model
{
    protected $fillable = [
        'name', 'code', 'address', 'city', 'state', 'country',
        'postal_code', 'latitude', 'longitude', 'capacity_cubic_m',
        'operating_hours', 'status', 'metadata',
    ];

    protected $casts = [
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
        'capacity_cubic_m' => 'integer',
        'operating_hours' => 'array',
        'metadata' => 'array',
    ];

    public function inventoryItems(): HasMany
    {
        return $this->hasMany(InventoryItem::class);
    }

    public function shipments(): HasMany
    {
        return $this->hasMany(Shipment::class);
    }

    public function picklists(): HasMany
    {
        return $this->hasMany(Picklist::class);
    }
}
```

#### Purchase Order Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->string('po_number')->unique();
            $table->foreignId('supplier_id')->constrained();
            $table->foreignId('warehouse_id')->constrained();
            $table->string('status')->default('draft');
            $table->date('order_date');
            $table->date('expected_date')->nullable();
            $table->date('received_date')->nullable();
            $table->decimal('total_amount', 12, 2)->default(0);
            $table->text('notes')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('order_date');
            $table->index('expected_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_orders');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PurchaseOrder extends Model
{
    protected $fillable = [
        'po_number', 'supplier_id', 'warehouse_id', 'status',
        'order_date', 'expected_date', 'received_date',
        'total_amount', 'notes', 'metadata',
    ];

    protected $casts = [
        'order_date' => 'date',
        'expected_date' => 'date',
        'received_date' => 'date',
        'total_amount' => 'decimal:2',
        'metadata' => 'array',
    ];

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class);
    }

    public function scopePending($query)
    {
        return $query->whereIn('status', ['draft', 'sent', 'confirmed']);
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchase_order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained();
            $table->integer('quantity_ordered');
            $table->integer('quantity_received')->default(0);
            $table->decimal('unit_cost', 10, 2);
            $table->decimal('total_cost', 12, 2)
                ->virtualAs('quantity_ordered * unit_cost');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_order_items');
    }
};
```

#### Fleet Model

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('license_plate')->unique();
            $table->string('make');
            $table->string('model');
            $table->integer('year');
            $table->string('vehicle_type');
            $table->decimal('max_weight_kg', 8, 2);
            $table->decimal('max_volume_m3', 8, 2);
            $table->integer('odometer_km')->default(0);
            $table->string('status')->default('available');
            $table->date('last_maintenance_date')->nullable();
            $table->date('next_maintenance_date')->nullable();
            $table->integer('maintenance_interval_km')->default(10000);
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('vehicle_type');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{
    protected $fillable = [
        'license_plate', 'make', 'model', 'year', 'vehicle_type',
        'max_weight_kg', 'max_volume_m3', 'odometer_km', 'status',
        'last_maintenance_date', 'next_maintenance_date',
        'maintenance_interval_km', 'metadata',
    ];

    protected $casts = [
        'year' => 'integer',
        'max_weight_kg' => 'decimal:2',
        'max_volume_m3' => 'decimal:2',
        'odometer_km' => 'integer',
        'last_maintenance_date' => 'date',
        'next_maintenance_date' => 'date',
        'maintenance_interval_km' => 'integer',
        'metadata' => 'array',
    ];

    public function maintenanceRecords(): HasMany
    {
        return $this->hasMany(MaintenanceRecord::class);
    }

    public function isDueForMaintenance(): bool
    {
        if ($this->next_maintenance_date && $this->next_maintenance_date->isPast()) {
            return true;
        }
        return false;
    }

    public function scopeAvailable($query)
    {
        return $query->where('status', 'available');
    }

    public function scopeDueForMaintenance($query)
    {
        return $query->whereNotNull('next_maintenance_date')
            ->where('next_maintenance_date', '<=', now());
    }
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('maintenance_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vehicle_id')->constrained()->cascadeOnDelete();
            $table->string('type');
            $table->text('description');
            $table->integer('odometer_at_service');
            $table->decimal('cost', 10, 2)->nullable();
            $table->string('provider')->nullable();
            $table->date('scheduled_date');
            $table->date('completed_date')->nullable();
            $table->string('status')->default('scheduled');
            $table->json('parts_replaced')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('scheduled_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('maintenance_records');
    }
};
```

---

### 30.2 Inventory Prediction Agents



> **One-Sentence Takeaway:** Inventory prediction agents forecast demand using historical sales data, seasonality, and market trends.

Inventory prediction agents use historical sales data, current stock levels, and AI analysis to forecast demand and calculate optimal reorder points. The agent prevents stockouts while minimizing carrying costs by analyzing consumption patterns, seasonality, and lead times.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\InventoryItem;
use App\Models\InventoryMovement;
use App\Models\Product;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItem;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use OpenAI\Laravel\Facades\OpenAI;

class InventoryPredictionAgent
{
    public function __construct(
        protected int $lookbackDays = 90,
        protected float $safetyStockFactor = 1.5,
    ) {}

    public function analyze(InventoryItem $item): InventoryPrediction
    {
        $movements = $this->getHistoricalMovements($item);
        $dailyDemand = $this->calculateDailyDemand($movements);
        $demandStdDev = $this->calculateStdDev($movements, $dailyDemand);
        $leadTimeDays = $this->getLeadTime($item);
        $reorderPoint = $this->calculateReorderPoint(
            $dailyDemand, $leadTimeDays, $demandStdDev
        );
        $economicOrderQty = $this->calculateEOQ($item, $dailyDemand);
        $daysUntilStockout = $this->daysUntilStockout($item, $dailyDemand);
        $recommendation = $this->getAiRecommendation(
            $item, $dailyDemand, $reorderPoint, $daysUntilStockout
        );

        return new InventoryPrediction(
            item: $item,
            dailyDemand: $dailyDemand,
            demandStdDev: $demandStdDev,
            leadTimeDays: $leadTimeDays,
            reorderPoint: (int) ceil($reorderPoint),
            economicOrderQty: (int) ceil($economicOrderQty),
            daysUntilStockout: $daysUntilStockout,
            recommendation: $recommendation,
        );
    }

    protected function getHistoricalMovements(InventoryItem $item): Collection
    {
        $cutoff = now()->subDays($this->lookbackDays);

        return InventoryMovement::where('inventory_item_id', $item->id)
            ->whereIn('type', ['inbound', 'outbound', 'adjustment'])
            ->where('created_at', '>=', $cutoff)
            ->orderBy('created_at')
            ->get();
    }

    protected function calculateDailyDemand(Collection $movements): float
    {
        $outboundTotal = $movements
            ->where('type', 'outbound')
            ->sum('quantity');

        $negativeAdjustments = $movements
            ->where('type', 'adjustment')
            ->where('quantity', '<', 0)
            ->sum('quantity');

        $totalDemand = $outboundTotal + abs($negativeAdjustments);

        return $totalDemand / max($this->lookbackDays, 1);
    }

    protected function calculateStdDev(Collection $movements, float $mean): float
    {
        $dailyTotals = $movements
            ->where('type', 'outbound')
            ->groupBy(fn ($m) => $m->created_at->format('Y-m-d'))
            ->map(fn ($day) => $day->sum('quantity'));

        if ($dailyTotals->isEmpty()) {
            return 0;
        }

        $variance = $dailyTotals->reduce(
            fn ($carry, $qty) => $carry + ($qty - $mean) ** 2, 0
        ) / $dailyTotals->count();

        return sqrt($variance);
    }

    protected function getLeadTime(InventoryItem $item): int
    {
        $product = $item->product;

        if ($product && $product->supplier) {
            return $product->supplier->lead_time_days;
        }

        return 7;
    }

    protected function calculateReorderPoint(
        float $dailyDemand, int $leadTimeDays, float $stdDev
    ): float {
        $leadTimeDemand = $dailyDemand * $leadTimeDays;
        $safetyStock = $stdDev * $this->safetyStockFactor * sqrt($leadTimeDays);

        return $leadTimeDemand + $safetyStock;
    }

    protected function calculateEOQ(InventoryItem $item, float $dailyDemand): float
    {
        $annualDemand = $dailyDemand * 365;
        $orderingCost = 25.00;
        $holdingCost = $item->product?->unit_cost * 0.20 ?? 5.00;

        if ($holdingCost <= 0) {
            return $annualDemand;
        }

        return sqrt((2 * $annualDemand * $orderingCost) / $holdingCost);
    }

    protected function daysUntilStockout(
        InventoryItem $item, float $dailyDemand
    ): int {
        if ($dailyDemand <= 0) {
            return PHP_INT_MAX;
        }

        $availableQuantity = $item->quantity_on_hand - $item->quantity_reserved;

        return (int) floor($availableQuantity / $dailyDemand);
    }

    protected function getAiRecommendation(
        InventoryItem $item, float $dailyDemand,
        int $reorderPoint, int $daysUntilStockout
    ): array {
        $product = $item->product;

        $prompt = sprintf(
            "Analyze this inventory item and provide a recommendation:\n\n".
            "Product: %s\n".
            "Current Stock: %d\n".
            "Reserved: %d\n".
            "Daily Demand: %.2f\n".
            "Calculated Reorder Point: %d\n".
            "Days Until Stockout: %d\n".
            "Reorder Quantity: %d\n".
            "Bin Location: %s\n\n".
            "Respond with JSON: {\"risk_level\": \"low|medium|high\",".
            " \"action\": \"reorder|hold|expedite|adjust\",".
            " \"reason\": \"...\", \"suggested_quantity\": int}",
            $product?->name ?? 'Unknown',
            $item->quantity_on_hand,
            $item->quantity_reserved,
            $dailyDemand,
            $reorderPoint,
            $daysUntilStockout,
            $item->reorder_quantity,
            $item->bin_location ?? 'N/A',
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' => 'You are a supply chain inventory analyst.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }

    public function generateReorderSuggestions(): Collection
    {
        $lowStockItems = InventoryItem::lowStock()
            ->with('product.supplier', 'warehouse')
            ->get();

        return $lowStockItems->map(fn (InventoryItem $item) => [
            'item' => $item,
            'prediction' => $this->analyze($item),
        ]);
    }
}

class InventoryPrediction
{
    public function __construct(
        public readonly InventoryItem $item,
        public readonly float $dailyDemand,
        public readonly float $demandStdDev,
        public readonly int $leadTimeDays,
        public readonly int $reorderPoint,
        public readonly int $economicOrderQty,
        public readonly int $daysUntilStockout,
        public readonly array $recommendation,
    ) {}

    public function toArray(): array
    {
        return [
            'product_id' => $this->item->product_id,
            'product_name' => $this->item->product?->name,
            'warehouse' => $this->item->warehouse?->name,
            'current_stock' => $this->item->quantity_on_hand,
            'reserved' => $this->item->quantity_reserved,
            'daily_demand' => round($this->dailyDemand, 2),
            'demand_std_dev' => round($this->demandStdDev, 2),
            'lead_time_days' => $this->leadTimeDays,
            'reorder_point' => $this->reorderPoint,
            'economic_order_qty' => $this->economicOrderQty,
            'days_until_stockout' => $this->daysUntilStockout,
            'recommendation' => $this->recommendation,
            'needs_reorder' => $this->daysUntilStockout <= $this->leadTimeDays,
        ];
    }
}
```

---


> **Pro Tip:** Combine historical data with external factors like weather, holidays, and economic indicators for more accurate demand forecasts.

### 30.3 Route Optimization Agents



> **One-Sentence Takeaway:** Route optimization agents calculate optimal delivery routes considering distance, traffic, and time windows.

Route optimization agents minimize delivery time, fuel consumption, and operational costs by intelligently sequencing waypoints. The agent considers traffic conditions, distance matrices, delivery time windows, vehicle capacity, and priority constraints to produce optimal routes.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\Shipment;
use App\Models\Vehicle;
use App\Models\Warehouse;
use Illuminate\Support\Collection;
use OpenAI\Laravel\Facades\OpenAI;

class RouteOptimizationAgent
{
    public function optimize(
        Warehouse $origin,
        Collection $shipments,
        ?Vehicle $vehicle = null,
    ): OptimizedRoute {
        $waypoints = $this->extractWaypoints($shipments);
        $distanceMatrix = $this->buildDistanceMatrix($origin, $waypoints);
        $optimizedSequence = $this->solveTsp($distanceMatrix, $waypoints);
        $routeLegs = $this->buildRouteLegs($origin, $optimizedSequence, $distanceMatrix);
        $totalDistance = collect($routeLegs)->sum('distance_km');
        $totalDuration = collect($routeLegs)->sum('duration_minutes');
        $aiSuggestions = $this->getAiOptimizationTips(
            $routeLegs, $origin, $vehicle
        );

        return new OptimizedRoute(
            origin: $origin,
            legs: $routeLegs,
            totalDistance: $totalDistance,
            totalDuration: $totalDuration,
            waypointCount: count($waypoints),
            aiSuggestions: $aiSuggestions,
        );
    }

    protected function extractWaypoints(Collection $shipments): Collection
    {
        return $shipments->map(fn (Shipment $s, int $i) => [
            'id' => $s->id,
            'index' => $i + 1,
            'address' => $s->destination_address,
            'priority' => $this->getShipmentPriority($s),
            'time_window_start' => $s->metadata['delivery_window_start'] ?? null,
            'time_window_end' => $s->metadata['delivery_window_end'] ?? null,
            'weight_kg' => $s->weight_kg ?? 0,
        ]);
    }

    protected function getShipmentPriority(Shipment $shipment): int
    {
        if ($shipment->metadata['priority'] ?? false) {
            return 1;
        }

        $match = match ($shipment->status) {
            'on_time' => 2,
            'delayed' => 1,
            'critical' => 0,
            default => 3,
        };

        if ($shipment->estimated_delivery
            && $shipment->estimated_delivery->isBefore(now()->addHours(24))
        ) {
            $match = min($match, 1);
        }

        return $match;
    }

    protected function buildDistanceMatrix(
        Warehouse $origin, Collection $waypoints
    ): array {
        $points = collect([[
            'lat' => $origin->latitude,
            'lng' => $origin->longitude,
        ]])->merge($waypoints->map(fn ($wp) => [
            'lat' => $wp['latitude'] ?? $this->geocode($wp['address'])['lat'],
            'lng' => $wp['longitude'] ?? $this->geocode($wp['address'])['lng'],
        ]));

        $n = $points->count();
        $matrix = [];

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($i === $j) {
                    $matrix[$i][$j] = ['distance_km' => 0, 'duration_minutes' => 0];
                } else {
                    $matrix[$i][$j] = $this->calculateRoute(
                        $points[$i], $points[$j]
                    );
                }
            }
        }

        return $matrix;
    }

    protected function geocode(string $address): array
    {
        $key = config('services.google.maps_api_key');
        $url = sprintf(
            'https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=%s',
            urlencode($address), $key
        );

        $response = \Http::get($url)->json();

        if (($response['status'] ?? '') === 'OK') {
            $location = $response['results'][0]['geometry']['location'];

            return [
                'lat' => $location['lat'],
                'lng' => $location['lng'],
            ];
        }

        return ['lat' => 0, 'lng' => 0];
    }

    protected function calculateRoute(array $origin, array $destination): array
    {
        $key = config('services.google.maps_api_key');
        $url = sprintf(
            'https://maps.googleapis.com/maps/api/distancematrix/json'.
            '?origins=%f,%f&destinations=%f,%f&key=%s&units=metric',
            $origin['lat'], $origin['lng'],
            $destination['lat'], $destination['lng'],
            $key
        );

        $response = \Http::get($url)->json();

        if (($response['status'] ?? '') === 'OK') {
            $element = $response['rows'][0]['elements'][0] ?? [];

            return [
                'distance_km' => ($element['distance']['value'] ?? 0) / 1000,
                'duration_minutes' => ($element['duration']['value'] ?? 0) / 60,
            ];
        }

        $roughDistance = $this->haversineDistance(
            $origin['lat'], $origin['lng'],
            $destination['lat'], $destination['lng']
        );

        return [
            'distance_km' => $roughDistance,
            'duration_minutes' => $roughDistance / 0.8,
        ];
    }

    protected function haversineDistance(
        float $lat1, float $lng1, float $lat2, float $lng2
    ): float {
        $earthRadius = 6371;
        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);
        $a = sin($dLat / 2) ** 2
            + cos(deg2rad($lat1)) * cos(deg2rad($lat2]) * sin($dLng / 2) ** 2;

        return $earthRadius * 2 * atan2(sqrt($a), sqrt(1 - $a));
    }

    protected function solveTsp(
        array $distanceMatrix, Collection $waypoints
    ): array {
        $n = $waypoints->count();

        if ($n <= 1) {
            return $waypoints->values()->all();
        }

        $prioritized = $waypoints->sortBy('priority')->values();
        $sequence = [];
        $visited = array_fill(0, $n, false);

        $current = 0;
        $sequence[] = $prioritized[$current];
        $visited[$current] = true;

        for ($step = 1; $step < $n; $step++) {
            $nearest = -1;
            $nearestDist = PHP_FLOAT_MAX;

            for ($i = 0; $i < $n; $i++) {
                if (!$visited[$i]) {
                    $dist = $distanceMatrix[$current + 1][$i + 1]['distance_km'];
                    $priority = $prioritized[$i]['priority'];
                    $weightedDist = $dist * (1 + $priority * 0.5);

                    if ($weightedDist < $nearestDist) {
                        $nearestDist = $weightedDist;
                        $nearest = $i;
                    }
                }
            }

            if ($nearest >= 0) {
                $sequence[] = $prioritized[$nearest];
                $visited[$nearest] = true;
                $current = $nearest;
            }
        }

        return $sequence;
    }

    protected function buildRouteLegs(
        Warehouse $origin, array $sequence, array $distanceMatrix
    ): array {
        $legs = [];
        $prevIndex = 0;

        foreach ($sequence as $i => $waypoint) {
            $wpIndex = $waypoint['index'];
            $leg = $distanceMatrix[$prevIndex][$wpIndex] ?? [
                'distance_km' => 0, 'duration_minutes' => 0,
            ];

            $legs[] = [
                'from' => $i === 0 ? $origin->name : $sequence[$i - 1]['address'],
                'to' => $waypoint['address'],
                'shipment_id' => $waypoint['id'],
                'distance_km' => round($leg['distance_km'], 1),
                'duration_minutes' => round($leg['duration_minutes'], 0),
                'priority' => $waypoint['priority'],
            ];

            $prevIndex = $wpIndex;
        }

        return $legs;
    }

    protected function getAiOptimizationTips(
        array $legs, Warehouse $origin, ?Vehicle $vehicle
    ): array {
        $legsSummary = collect($legs)->map(
            fn ($l) => sprintf(
                '%s → %s (%.1f km, %d min)',
                $l['from'], $l['to'], $l['distance_km'], $l['duration_minutes']
            )
        )->implode("\n");

        $prompt = sprintf(
            "Analyze this delivery route and provide optimization suggestions:\n\n".
            "Origin: %s\n".
            "Vehicle: %s %s (%s)\n".
            "Route:\n%s\n\n".
            "Respond with JSON: {\"fuel_savings_tips\": [...],".
            " \"time_savings\": \"...\", \"risk_areas\": [...],".
            " \"consolidation_suggestion\": \"...\"}",
            $origin->name,
            $vehicle?->make ?? 'N/A',
            $vehicle?->model ?? 'N/A',
            $vehicle?->license_plate ?? 'N/A',
            $legsSummary,
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a logistics route optimization analyst.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }
}

class OptimizedRoute
{
    public function __construct(
        public readonly Warehouse $origin,
        public readonly array $legs,
        public readonly float $totalDistance,
        public readonly float $totalDuration,
        public readonly int $waypointCount,
        public readonly array $aiSuggestions,
    ) {}

    public function toArray(): array
    {
        return [
            'origin' => $this->origin->name,
            'total_distance_km' => round($this->totalDistance, 1),
            'total_duration_min' => round($this->totalDuration, 0),
            'waypoints' => $this->waypointCount,
            'legs' => $this->legs,
            'ai_suggestions' => $this->aiSuggestions,
        ];
    }
}
```

---


> **Warning:** Route optimization is computationally expensive. Use heuristic algorithms for daily operations and exact solvers for planning.

### 30.4 Shipment Tracking Automation



> **One-Sentence Takeaway:** Shipment tracking agents monitor shipments across carriers and provide real-time status updates.

Shipment tracking agents monitor shipments in real time, detect status changes, handle delivery exceptions, and dispatch multi-channel notifications to stakeholders. The agent bridges carrier API data with internal systems to provide end-to-end visibility.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\Shipment;
use App\Models\ShipmentTrackingEvent;
use App\Notifications\ShipmentDelayed;
use App\Notifications\ShipmentDelivered;
use App\Notifications\ShipmentException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use OpenAI\Laravel\Facades\OpenAI;

class ShipmentTrackingAgent
{
    protected array $carrierApis = [];

    public function track(Shipment $shipment): TrackingUpdate
    {
        $externalStatus = $this->pollCarrier($shipment);
        $previousStatus = $shipment->status;
        $events = $this->generateTrackingEvents($shipment, $externalStatus);
        $statusChanged = $externalStatus['status'] !== $previousStatus;
        $exceptionDetected = $this->detectException($externalStatus, $shipment);
        $aiAnalysis = null;

        if ($statusChanged || $exceptionDetected) {
            $this->recordEvents($shipment, $events);
            $this->updateShipmentStatus($shipment, $externalStatus);
            $aiAnalysis = $this->analyzeSituation(
                $shipment, $events, $exceptionDetected
            );
        }

        if ($statusChanged) {
            $this->dispatchNotifications(
                $shipment, $externalStatus['status'], $aiAnalysis
            );
        }

        return new TrackingUpdate(
            shipment: $shipment,
            previousStatus: $previousStatus,
            newStatus: $externalStatus['status'],
            events: $events,
            exceptionDetected: $exceptionDetected,
            aiAnalysis: $aiAnalysis,
        );
    }

    public function trackAllActive(): Collection
    {
        $activeShipments = Shipment::whereIn('status', [
            'pending', 'picked_up', 'in_transit', 'out_for_delivery',
        ])->get();

        return $activeShipments->map(
            fn (Shipment $s) => $this->track($s)
        );
    }

    protected function pollCarrier(Shipment $shipment): array
    {
        if (!$shipment->tracking_number || !$shipment->carrier) {
            return [
                'status' => $shipment->status,
                'location' => null,
                'description' => 'No tracking information available.',
                'timestamp' => now(),
            ];
        }

        $carrierClass = $shipment->carrier->metadata['api_handler'] ?? null;

        if ($carrierClass && class_exists($carrierClass)) {
            try {
                $handler = app($carrierClass);

                return $handler->track($shipment->tracking_number);
            } catch (\Exception $e) {
                Log::warning(
                    'Carrier API error: ' . $e->getMessage(),
                    ['shipment_id' => $shipment->id]
                );

                return [
                    'status' => $shipment->status,
                    'error' => $e->getMessage(),
                ];
            }
        }

        return [
            'status' => $shipment->status,
            'description' => 'No carrier API handler configured.',
        ];
    }

    protected function generateTrackingEvents(
        Shipment $shipment, array $externalStatus
    ): array {
        $events = [];
        $statusMap = [
            'pending' => 'Shipment created and awaiting pickup.',
            'picked_up' => 'Package picked up by carrier.',
            'in_transit' => 'Package in transit to destination.',
            'out_for_delivery' => 'Package out for final delivery.',
            'delivered' => 'Package delivered successfully.',
            'delayed' => 'Delivery delayed due to operational reasons.',
            'exception' => 'Delivery exception reported.',
            'cancelled' => 'Shipment cancelled.',
        ];

        $events[] = [
            'status' => $externalStatus['status'] ?? $shipment->status,
            'location' => $externalStatus['location'] ?? null,
            'description' => $externalStatus['description']
                ?? ($statusMap[$shipment->status] ?? 'Status updated.'),
            'metadata' => [
                'source' => $externalStatus['source'] ?? 'internal',
                'carrier_data' => $externalStatus['raw'] ?? null,
            ],
            'recorded_at' => $externalStatus['timestamp'] ?? now(),
        ];

        return $events;
    }

    protected function detectException(
        array $externalStatus, Shipment $shipment
    ): bool {
        if (in_array($externalStatus['status'] ?? '', [
            'exception', 'damaged', 'lost', 'returned',
        ])) {
            return true;
        }

        if ($shipment->estimated_delivery
            && $shipment->estimated_delivery->isPast()
            && !in_array($shipment->status, ['delivered', 'cancelled'])
        ) {
            return true;
        }

        if (isset($externalStatus['error'])) {
            return true;
        }

        return false;
    }

    protected function recordEvents(
        Shipment $shipment, array $events
    ): void {
        foreach ($events as $event) {
            $shipment->trackingEvents()->create([
                'status' => $event['status'],
                'location' => $event['location'],
                'description' => $event['description'],
                'metadata' => $event['metadata'],
                'recorded_at' => $event['recorded_at'],
            ]);
        }
    }

    protected function updateShipmentStatus(
        Shipment $shipment, array $externalStatus
    ): void {
        $update = ['status' => $externalStatus['status']];

        if (($externalStatus['status'] ?? '') === 'delivered') {
            $update['delivered_at'] = $externalStatus['timestamp'] ?? now();
        }

        if (isset($externalStatus['location'])) {
            $update['metadata'] = array_merge(
                $shipment->metadata ?? [],
                ['last_known_location' => $externalStatus['location']]
            );
        }

        $shipment->update($update);
    }

    protected function analyzeSituation(
        Shipment $shipment, array $events, bool $exceptionDetected
    ): ?array {
        if (!$exceptionDetected && $shipment->status === 'in_transit') {
            return null;
        }

        $eventsSummary = collect($events)
            ->map(fn ($e) => sprintf(
                '%s - %s: %s',
                $e['recorded_at']->toDateTimeString(),
                $e['status'],
                $e['description']
            ))
            ->implode("\n");

        $prompt = sprintf(
            "Analyze this shipment situation and provide recommendations:\n\n".
            "Shipment #%d\nTracking: %s\nStatus: %s\n".
            "Origin: %s\nDestination: %s\n".
            "Estimated Delivery: %s\n\nEvents:\n%s\n\n".
            "Exception: %s\n\n".
            "Respond with JSON: {\"severity\": \"low|medium|high|critical\",".
            " \"root_cause\": \"...\", \"recommended_action\": \"...\",".
            " \"customer_message\": \"...\", \"escalate\": bool}",
            $shipment->id,
            $shipment->tracking_number ?? 'N/A',
            $shipment->status,
            $shipment->origin_address,
            $shipment->destination_address,
            $shipment->estimated_delivery?->toDateString() ?? 'N/A',
            $eventsSummary,
            $exceptionDetected ? 'Yes' : 'No',
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a logistics exception handling specialist.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }

    protected function dispatchNotifications(
        Shipment $shipment, string $newStatus, ?array $aiAnalysis
    ): void {
        $notifiable = $shipment->order?->user;

        if (!$notifiable) {
            return;
        }

        match ($newStatus) {
            'delivered' => $notifiable->notify(
                new ShipmentDelivered($shipment)
            ),
            'delayed' => $notifiable->notify(
                new ShipmentDelayed($shipment, $aiAnalysis)
            ),
            'exception' => $notifiable->notify(
                new ShipmentException($shipment, $aiAnalysis)
            ),
            default => null,
        };

        if ($aiAnalysis['escalate'] ?? false) {
            Log::channel('slack')->warning(
                'Shipment escalation required', [
                    'shipment_id' => $shipment->id,
                    'analysis' => $aiAnalysis,
                ]
            );
        }
    }
}

class TrackingUpdate
{
    public function __construct(
        public readonly Shipment $shipment,
        public readonly string $previousStatus,
        public readonly string $newStatus,
        public readonly array $events,
        public readonly bool $exceptionDetected,
        public readonly ?array $aiAnalysis,
    ) {}

    public function toArray(): array
    {
        return [
            'shipment_id' => $this->shipment->id,
            'tracking_number' => $this->shipment->tracking_number,
            'previous_status' => $this->previousStatus,
            'new_status' => $this->newStatus,
            'status_changed' => $this->previousStatus !== $this->newStatus,
            'exception_detected' => $this->exceptionDetected,
            'events' => $this->events,
            'ai_analysis' => $this->aiAnalysis,
        ];
    }
}
```

---

### 30.5 Supplier Management Agents



> **One-Sentence Takeaway:** Supplier agents evaluate supplier performance against KPIs and automate procurement workflows.

Supplier management agents evaluate vendor performance across multiple dimensions — on-time delivery, product quality, pricing competitiveness, and communication responsiveness. The agent generates scorecards, identifies underperforming suppliers, and automates procurement decisions.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\PurchaseOrder;
use App\Models\Supplier;
use App\Models\SupplierScorecard;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use OpenAI\Laravel\Facades\OpenAI;

class SupplierEvaluationAgent
{
    public function __construct(
        protected int $evaluationPeriodDays = 90,
    ) {}

    public function evaluate(Supplier $supplier): EvaluationResult
    {
        $purchaseOrders = $this->getRecentOrders($supplier);
        $onTimeRate = $this->calculateOnTimeDeliveryRate($purchaseOrders);
        $defectRate = $this->calculateDefectRate($supplier, $purchaseOrders);
        $leadTimeAccuracy = $this->calculateLeadTimeAccuracy($purchaseOrders);
        $costCompetitiveness = $this->calculateCostScore($purchaseOrders);
        $communicationRating = $this->assessCommunication($supplier);
        $overallScore = $this->computeOverallScore([
            'on_time_delivery' => $onTimeRate,
            'defect' => $defectRate,
            'lead_time_accuracy' => $leadTimeAccuracy,
            'cost' => $costCompetitiveness,
            'communication' => $communicationRating,
        ]);
        $recommendation = $this->getAiEvaluation(
            $supplier, $overallScore, $onTimeRate, $defectRate
        );

        $this->persistScorecard($supplier, [
            'on_time_delivery_rate' => $onTimeRate,
            'defect_rate' => $defectRate,
            'lead_time_accuracy' => $leadTimeAccuracy,
            'communication_rating' => $communicationRating,
            'overall_score' => $overallScore,
        ], $recommendation);

        return new EvaluationResult(
            supplier: $supplier,
            onTimeDeliveryRate: $onTimeRate,
            defectRate: $defectRate,
            leadTimeAccuracy: $leadTimeAccuracy,
            costScore: $costCompetitiveness,
            communicationRating: $communicationRating,
            overallScore: $overallScore,
            recommendation: $recommendation,
        );
    }

    public function evaluateAll(): Collection
    {
        return Supplier::where('status', 'active')
            ->get()
            ->map(fn (Supplier $s) => $this->evaluate($s));
    }

    protected function getRecentOrders(Supplier $supplier): Collection
    {
        $cutoff = now()->subDays($this->evaluationPeriodDays);

        return PurchaseOrder::where('supplier_id', $supplier->id)
            ->where('order_date', '>=', $cutoff->toDateString())
            ->with('items')
            ->get();
    }

    protected function calculateOnTimeDeliveryRate(
        Collection $purchaseOrders
    ): float {
        $completedOrders = $purchaseOrders->filter(
            fn ($po) => $po->received_date !== null
        );

        if ($completedOrders->isEmpty()) {
            return 100.00;
        }

        $onTime = $completedOrders->filter(
            fn ($po) => $po->expected_date
                && $po->received_date <= $po->expected_date
        );

        return round(
            ($onTime->count() / $completedOrders->count()) * 100, 2
        );
    }

    protected function calculateDefectRate(
        Supplier $supplier, Collection $purchaseOrders
    ): float {
        $totalItems = $purchaseOrders->sum(
            fn ($po) => $po->items->sum('quantity_received')
        );

        if ($totalItems === 0) {
            return 0.00;
        }

        $defectCount = $purchaseOrders->sum(
            fn ($po) => $po->items->sum(
                fn ($item) => $item->metadata['defect_quantity'] ?? 0
            )
        );

        return round(($defectCount / $totalItems) * 100, 2);
    }

    protected function calculateLeadTimeAccuracy(
        Collection $purchaseOrders
    ): float {
        $withDates = $purchaseOrders->filter(
            fn ($po) => $po->expected_date && $po->received_date
        );

        if ($withDates->isEmpty()) {
            return 100.00;
        }

        $totalDeviation = $withDates->sum(
            fn ($po) => abs(
                $po->received_date->diffInDays($po->expected_date)
            )
        );

        $avgDeviation = $totalDeviation / $withDates->count();
        $maxTolerance = 5;

        return round(
            max(0, 100 - ($avgDeviation / $maxTolerance) * 100), 2
        );
    }

    protected function calculateCostScore(Collection $purchaseOrders): float
    {
        if ($purchaseOrders->isEmpty()) {
            return 100.00;
        }

        $averageCostPerOrder = $purchaseOrders->avg('total_amount');
        $costVariance = $purchaseOrders->reduce(
            fn ($carry, $po) => $carry + abs(
                $po->total_amount - $averageCostPerOrder
            ),
            0
        ) / max($purchaseOrders->count(), 1);

        $stabilityScore = max(0, 100 - ($costVariance / max($averageCostPerOrder, 1)) * 50);

        return round($stabilityScore, 2);
    }

    protected function assessCommunication(Supplier $supplier): float
    {
        $baseScore = 85.00;

        if (!$supplier->email) {
            $baseScore -= 10;
        }

        if (!$supplier->phone) {
            $baseScore -= 5;
        }

        return round(max(0, min(100, $baseScore)), 2);
    }

    protected function computeOverallScore(array $metrics): float
    {
        $weights = [
            'on_time_delivery' => 0.35,
            'defect' => 0.25,
            'lead_time_accuracy' => 0.15,
            'cost' => 0.15,
            'communication' => 0.10,
        ];

        $defectScore = max(0, 100 - $metrics['defect']);
        $weightedSum = 0;

        foreach ($weights as $key => $weight) {
            $value = $key === 'defect' ? $defectScore : $metrics[$key];
            $weightedSum += $value * $weight;
        }

        return round($weightedSum, 2);
    }

    protected function getAiEvaluation(
        Supplier $supplier, float $overallScore,
        float $onTimeRate, float $defectRate,
    ): array {
        $prompt = sprintf(
            "Evaluate this supplier's performance and provide recommendations:\n\n".
            "Supplier: %s (%s)\nType: %s\n".
            "Overall Score: %.2f/100\n".
            "On-Time Delivery: %.2f%%\n".
            "Defect Rate: %.2f%%\n".
            "Lead Time: %d days\n\n".
            "Respond with JSON: {\"tier\": \"platinum|gold|silver|bronze|probation\",".
            " \"strengths\": [...], \"weaknesses\": [...],".
            " \"improvement_plan\": \"...\", \"reorder_recommendation\": \"continue|review|discontinue\",".
            " \"negotiation_leverage\": \"...\"}",
            $supplier->name,
            $supplier->contact_name ?? 'N/A',
            $supplier->supplier_type,
            $overallScore,
            $onTimeRate,
            $defectRate,
            $supplier->lead_time_days,
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a supply chain procurement analyst.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }

    protected function persistScorecard(
        Supplier $supplier, array $metrics, array $recommendation
    ): void {
        $supplier->scorecard()->create([
            'on_time_delivery_rate' => $metrics['on_time_delivery_rate'],
            'defect_rate' => $metrics['defect_rate'],
            'lead_time_accuracy' => $metrics['lead_time_accuracy'],
            'communication_rating' => $metrics['communication_rating'],
            'overall_score' => $metrics['overall_score'],
            'period' => now()->format('Y-m'),
            'details' => $recommendation,
            'generated_at' => now(),
        ]);

        $supplier->update([
            'reliability_score' => $metrics['on_time_delivery_rate'],
            'quality_score' => 100 - $metrics['defect_rate'],
            'cost_score' => $metrics['communication_rating'],
        ]);

        if (($recommendation['tier'] ?? '') === 'probation') {
            $supplier->update(['status' => 'under_review']);
        }
    }
}

class EvaluationResult
{
    public function __construct(
        public readonly Supplier $supplier,
        public readonly float $onTimeDeliveryRate,
        public readonly float $defectRate,
        public readonly float $leadTimeAccuracy,
        public readonly float $costScore,
        public readonly float $communicationRating,
        public readonly float $overallScore,
        public readonly array $recommendation,
    ) {}

    public function toArray(): array
    {
        return [
            'supplier_id' => $this->supplier->id,
            'name' => $this->supplier->name,
            'on_time_delivery_rate' => $this->onTimeDeliveryRate,
            'defect_rate' => $this->defectRate,
            'lead_time_accuracy' => $this->leadTimeAccuracy,
            'cost_score' => $this->costScore,
            'communication_rating' => $this->communicationRating,
            'overall_score' => $this->overallScore,
            'tier' => $this->recommendation['tier'] ?? 'unrated',
            'reorder_recommendation' =>
                $this->recommendation['reorder_recommendation'] ?? 'continue',
        ];
    }
}
```

---

### 30.6 Warehouse Automation Agents



> **One-Sentence Takeaway:** Warehouse agents optimize picking routes, slotting, and inventory placement for efficiency.

Warehouse automation agents optimize pick/pack workflows by intelligently assigning bin locations, grouping orders for batch picking, and generating optimal pick paths. The agent minimizes travel time within the warehouse and improves order fulfillment throughput.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\InventoryItem;
use App\Models\Order;
use App\Models\Picklist;
use App\Models\Warehouse;
use Illuminate\Support\Collection;
use OpenAI\Laravel\Facades\OpenAI;

class WarehouseAgent
{
    public function __construct(
        protected int $pickBatchSize = 10,
    ) {}

    public function optimizePicklist(Warehouse $warehouse, Collection $orders): PicklistOptimization
    {
        $items = $this->collectOrderItems($orders);
        $zoneMap = $this->buildZoneMap($warehouse);
        $binnedItems = $this->assignBins($items, $warehouse);
        $pickSequence = $this->optimizePickSequence($binnedItems, $zoneMap);
        $batchAssignments = $this->createPickBatches($pickSequence);
        $aiSuggestions = $this->getAiWarehouseRecommendations(
            $warehouse, $batchAssignments, $orders
        );

        return new PicklistOptimization(
            warehouse: $warehouse,
            batches: $batchAssignments,
            totalItems: $items->count(),
            estimatedMinutes: $this->estimatePickTime($pickSequence),
            aiSuggestions: $aiSuggestions,
        );
    }

    protected function collectOrderItems(Collection $orders): Collection
    {
        return $orders->flatMap(
            fn (Order $order) => $order->items->map(
                fn ($item) => [
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'product_name' => $item->product?->name,
                    'quantity' => $item->quantity,
                    'sku' => $item->product?->sku,
                ]
            )
        );
    }

    protected function buildZoneMap(Warehouse $warehouse): array
    {
        $zoneMap = [];
        $items = InventoryItem::where('warehouse_id', $warehouse->id)
            ->whereNotNull('bin_location')
            ->with('product')
            ->get();

        foreach ($items as $item) {
            $zone = $this->extractZone($item->bin_location);
            $aisle = $this->extractAisle($item->bin_location);

            if (!isset($zoneMap[$zone])) {
                $zoneMap[$zone] = [];
            }
            if (!isset($zoneMap[$zone][$aisle])) {
                $zoneMap[$zone][$aisle] = [];
            }

            $zoneMap[$zone][$aisle][] = [
                'inventory_id' => $item->id,
                'product_id' => $item->product_id,
                'bin' => $item->bin_location,
                'quantity' => $item->quantity_on_hand,
            ];
        }

        return $zoneMap;
    }

    protected function extractZone(string $binLocation): string
    {
        return explode('-', $binLocation)[0] ?? 'A';
    }

    protected function extractAisle(string $binLocation): string
    {
        $parts = explode('-', $binLocation);

        return $parts[1] ?? '01';
    }

    protected function assignBins(
        Collection $items, Warehouse $warehouse
    ): Collection {
        return $items->map(function ($item) use ($warehouse) {
            $inventory = InventoryItem::where('product_id', $item['product_id'])
                ->where('warehouse_id', $warehouse->id)
                ->first();

            if (!$inventory) {
                $inventory = $this->assignNewBin($item, $warehouse);
            }

            $item['bin_location'] = $inventory->bin_location ?? 'UNASSIGNED';
            $item['inventory_id'] = $inventory->id;
            $item['available'] = $inventory->quantity_available;

            return $item;
        });
    }

    protected function assignNewBin(array $item, Warehouse $warehouse): InventoryItem
    {
        $lastBin = InventoryItem::where('warehouse_id', $warehouse->id)
            ->where('bin_location', 'like', 'A-%')
            ->orderBy('bin_location', 'desc')
            ->first();

        $nextNumber = 1;
        if ($lastBin && $lastBin->bin_location) {
            $parts = explode('-', $lastBin->bin_location);
            $nextNumber = ((int) ($parts[1] ?? 0)) + 1;
        }

        $binLocation = sprintf('A-%03d', $nextNumber);

        return InventoryItem::create([
            'product_id' => $item['product_id'],
            'warehouse_id' => $warehouse->id,
            'quantity_on_hand' => 0,
            'quantity_reserved' => 0,
            'reorder_point' => 10,
            'reorder_quantity' => 50,
            'bin_location' => $binLocation,
        ]);
    }

    protected function optimizePickSequence(
        Collection $items, array $zoneMap
    ): Collection {
        return $items->sortBy(function ($item) use ($zoneMap) {
            $bin = $item['bin_location'] ?? '';
            $zone = $this->extractZone($bin);
            $aisle = (int) $this->extractAisle($bin);

            $zoneOrder = array_search($zone, array_keys($zoneMap));
            if ($zoneOrder === false) {
                $zoneOrder = 999;
            }

            return sprintf('%04d-%04d', $zoneOrder, $aisle);
        })->values();
    }

    protected function createPickBatches(Collection $pickSequence): array
    {
        $batches = [];
        $currentBatch = [];
        $currentOrderIds = [];

        foreach ($pickSequence as $item) {
            $orderId = $item['order_id'];

            if (count($currentBatch) >= $this->pickBatchSize
                && !in_array($orderId, $currentOrderIds)
            ) {
                $batches[] = [
                    'id' => count($batches) + 1,
                    'items' => $currentBatch,
                    'order_count' => count(array_unique($currentOrderIds)),
                    'item_count' => count($currentBatch),
                ];
                $currentBatch = [];
                $currentOrderIds = [];
            }

            $currentBatch[] = $item;
            $currentOrderIds[] = $orderId;
        }

        if (!empty($currentBatch)) {
            $batches[] = [
                'id' => count($batches) + 1,
                'items' => $currentBatch,
                'order_count' => count(array_unique($currentOrderIds)),
                'item_count' => count($currentBatch),
            ];
        }

        return $batches;
    }

    protected function estimatePickTime(Collection $pickSequence): int
    {
        $timePerItem = 0.5;
        $travelTimeBetweenBins = 0.25;
        $totalItems = $pickSequence->count();

        return (int) ceil(
            ($totalItems * $timePerItem)
            + (max(0, $totalItems - 1) * $travelTimeBetweenBins)
        );
    }

    protected function getAiWarehouseRecommendations(
        Warehouse $warehouse, array $batches, Collection $orders
    ): array {
        $batchSummary = collect($batches)->map(
            fn ($b) => sprintf(
                'Batch %d: %d items across %d orders',
                $b['id'], $b['item_count'], $b['order_count']
            )
        )->implode("\n");

        $prompt = sprintf(
            "Analyze this warehouse pick operation:\n\n".
            "Warehouse: %s\nOrders: %d\nPick Batches: %d\n\n%s\n\n".
            "Respond with JSON: {\"bottlenecks\": [...],".
            " \"staffing_recommendation\": \"...\",".
            " \"slotting_optimization\": \"...\",".
            " \"cross_docking_opportunity\": \"...\",".
            " \"estimated_productivity\": \"...\"}",
            $warehouse->name,
            $orders->count(),
            count($batches),
            $batchSummary,
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a warehouse operations optimization specialist.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }
}

class PicklistOptimization
{
    public function __construct(
        public readonly Warehouse $warehouse,
        public readonly array $batches,
        public readonly int $totalItems,
        public readonly int $estimatedMinutes,
        public readonly array $aiSuggestions,
    ) {}

    public function toArray(): array
    {
        return [
            'warehouse' => $this->warehouse->name,
            'batches' => count($this->batches),
            'total_items' => $this->totalItems,
            'estimated_pick_time_min' => $this->estimatedMinutes,
            'ai_suggestions' => $this->aiSuggestions,
        ];
    }
}
```

---


> **Remember:** Warehouse slotting optimization reduces picking time. Review slot assignments monthly as order patterns change.

### 30.7 Demand Forecasting Agents



> **One-Sentence Takeaway:** Demand forecasting agents use ML models to predict future demand at SKU and location granularity.

Demand forecasting agents predict future product demand by combining statistical time-series analysis with AI-powered pattern recognition. The agent identifies seasonal trends, growth trajectories, and anomalous demand shifts to generate accurate forecasts that drive procurement and inventory planning.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\InventoryMovement;
use App\Models\Product;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use OpenAI\Laravel\Facades\OpenAI;

class DemandForecastAgent
{
    public function __construct(
        protected int $historicalMonths = 12,
        protected int $forecastMonths = 3,
    ) {}

    public function forecast(Product $product): DemandForecast
    {
        $history = $this->loadHistoricalDemand($product);
        $monthlyTotals = $this->aggregateMonthly($history);
        $seasonalFactors = $this->calculateSeasonalFactors($monthlyTotals);
        $trendLine = $this->calculateTrend($monthlyTotals);
        $forecast = $this->generateForecast(
            $monthlyTotals, $seasonalFactors, $trendLine
        );
        $confidence = $this->calculateConfidence($monthlyTotals, $forecast);
        $aiAnalysis = $this->getAiDemandAnalysis(
            $product, $monthlyTotals, $forecast
        );

        return new DemandForecast(
            product: $product,
            historicalData: $monthlyTotals,
            seasonalFactors: $seasonalFactors,
            forecast: $forecast,
            confidence: $confidence,
            aiAnalysis: $aiAnalysis,
        );
    }

    public function forecastAll(): Collection
    {
        return Product::where('is_active', true)
            ->get()
            ->map(fn (Product $p) => $this->forecast($p));
    }

    protected function loadHistoricalDemand(Product $product): Collection
    {
        $cutoff = now()->subMonths($this->historicalMonths);

        return InventoryMovement::whereHas(
            'inventoryItem',
            fn ($q) => $q->where('product_id', $product->id)
        )
            ->where('type', 'outbound')
            ->where('created_at', '>=', $cutoff)
            ->get();
    }

    protected function aggregateMonthly(Collection $movements): Collection
    {
        return $movements
            ->groupBy(fn ($m) => $m->created_at->format('Y-m'))
            ->map(fn ($group, $month) => [
                'month' => $month,
                'year' => (int) substr($month, 0, 4),
                'month_num' => (int) substr($month, 5, 2),
                'quantity' => $group->sum('quantity'),
                'order_count' => $group->count(),
                'avg_order_size' => round(
                    $group->sum('quantity') / max($group->count(), 1), 1
                ),
            ])
            ->sortBy('month')
            ->values();
    }

    protected function calculateSeasonalFactors(Collection $monthlyTotals): array
    {
        if ($monthlyTotals->isEmpty()) {
            return array_fill(1, 12, 1.0);
        }

        $overallAvg = $monthlyTotals->avg('quantity');

        if ($overallAvg <= 0) {
            return array_fill(1, 12, 1.0);
        }

        $monthlyAvgs = $monthlyTotals
            ->groupBy('month_num')
            ->map(fn ($months) => $months->avg('quantity'));

        $factors = [];
        for ($m = 1; $m <= 12; $m++) {
            $factors[$m] = round(
                ($monthlyAvgs[$m] ?? $overallAvg) / $overallAvg, 4
            );
        }

        return $factors;
    }

    protected function calculateTrend(Collection $monthlyTotals): array
    {
        $n = $monthlyTotals->count();

        if ($n < 2) {
            return ['slope' => 0, 'intercept' => $monthlyTotals->first()['quantity'] ?? 0];
        }

        $xMean = ($n - 1) / 2;
        $yMean = $monthlyTotals->avg('quantity');

        $numerator = 0;
        $denominator = 0;

        foreach ($monthlyTotals as $i => $point) {
            $x = $i;
            $numerator += ($x - $xMean) * ($point['quantity'] - $yMean);
            $denominator += ($x - $xMean) ** 2;
        }

        $slope = $denominator > 0 ? $numerator / $denominator : 0;
        $intercept = $yMean - $slope * $xMean;

        return [
            'slope' => round($slope, 2),
            'intercept' => round($intercept, 2),
            'direction' => $slope > 0 ? 'up' : ($slope < 0 ? 'down' : 'flat'),
            'growth_rate_pct' => round(
                $yMean > 0 ? ($slope / $yMean) * 100 : 0, 2
            ),
        ];
    }

    protected function generateForecast(
        Collection $history, array $seasonalFactors, array $trend
    ): array {
        $lastIndex = $history->count() - 1;
        $forecast = [];

        for ($i = 1; $i <= $this->forecastMonths; $i++) {
            $futureIndex = $lastIndex + $i;
            $trendComponent = $trend['intercept'] + $trend['slope'] * $futureIndex;

            $targetMonth = now()->addMonths($i)->month;
            $seasonalMultiplier = $seasonalFactors[$targetMonth] ?? 1.0;

            $predicted = $trendComponent * $seasonalMultiplier;

            $forecast[] = [
                'month' => now()->addMonths($i)->format('Y-m'),
                'month_name' => now()->addMonths($i)->format('F Y'),
                'predicted_quantity' => (int) round(max(0, $predicted)),
                'trend_component' => round($trendComponent, 1),
                'seasonal_multiplier' => $seasonalMultiplier,
            ];
        }

        return $forecast;
    }

    protected function calculateConfidence(
        Collection $history, array $forecast
    ): array {
        if ($history->count() < 3) {
            return ['score' => 30, 'level' => 'low'];
        }

        $actuals = $history->pluck('quantity')->toArray();
        $mean = array_sum($actuals) / count($actuals);
        $variance = 0;

        foreach ($actuals as $val) {
            $variance += ($val - $mean) ** 2;
        }
        $stdDev = sqrt($variance / count($actuals));

        $cv = $mean > 0 ? $stdDev / $mean : 1;
        $dataPointsScore = min(40, ($history->count() / $this->historicalMonths) * 40);
        $variabilityScore = max(0, (1 - $cv) * 40);
        $trendClarity = $forecast ? 10 : 0;
        $totalScore = (int) round($dataPointsScore + $variabilityScore + $trendClarity);

        $level = match (true) {
            $totalScore >= 70 => 'high',
            $totalScore >= 45 => 'medium',
            default => 'low',
        };

        return ['score' => $totalScore, 'level' => $level];
    }

    protected function getAiDemandAnalysis(
        Product $product, Collection $history, array $forecast
    ): array {
        $historySummary = $history->map(
            fn ($m) => sprintf(
                '%s: %d units (%d orders)',
                $m['month'], $m['quantity'], $m['order_count']
            )
        )->implode("\n");

        $forecastSummary = collect($forecast)->map(
            fn ($f) => sprintf(
                '%s: %d units predicted',
                $f['month_name'], $f['predicted_quantity']
            )
        )->implode("\n");

        $prompt = sprintf(
            "Analyze this product's demand pattern and provide forecast insights:\n\n".
            "Product: %s\nSKU: %s\nPrice: $%.2f\n\n".
            "Historical Demand (12 months):\n%s\n\n".
            "Forecast (3 months):\n%s\n\n".
            "Respond with JSON: {\"demand_pattern\": \"stable|growing|declining|seasonal|erratic\",".
            " \"key_drivers\": [...], \"risks\": [...],".
            " \"inventory_strategy\": \"...\", \"marketing_opportunity\": \"...\"}",
            $product->name,
            $product->sku ?? 'N/A',
            $product->unit_cost ?? 0,
            $historySummary,
            $forecastSummary,
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a demand forecasting and inventory planning analyst.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }
}

class DemandForecast
{
    public function __construct(
        public readonly Product $product,
        public readonly Collection $historicalData,
        public readonly array $seasonalFactors,
        public readonly array $forecast,
        public readonly array $confidence,
        public readonly array $aiAnalysis,
    ) {}

    public function totalPredictedDemand(): int
    {
        return collect($this->forecast)->sum('predicted_quantity');
    }

    public function peakMonth(): ?array
    {
        return collect($this->forecast)->sortByDesc('predicted_quantity')->first();
    }

    public function toArray(): array
    {
        return [
            'product_id' => $this->product->id,
            'product_name' => $this->product->name,
            'historical_period' => $this->historicalMonths ?? 12,
            'forecast_months' => count($this->forecast),
            'total_predicted' => $this->totalPredictedDemand(),
            'seasonal_peaks' => $this->seasonalFactors,
            'forecast' => $this->forecast,
            'confidence' => $this->confidence,
            'ai_analysis' => $this->aiAnalysis,
        ];
    }
}
```

---

### 30.8 Fleet Management Agents



> **One-Sentence Takeaway:** Fleet agents manage vehicle maintenance schedules, fuel efficiency, and driver assignments.

Fleet management agents monitor vehicle health, track odometer readings, schedule preventive maintenance, and predict potential failures before they cause downtime. The agent ensures regulatory compliance and maximizes fleet availability.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\MaintenanceRecord;
use App\Models\Vehicle;
use Illuminate\Support\Collection;
use OpenAI\Laravel\Facades\OpenAI;

class FleetManagementAgent
{
    public function __construct(
        protected int $maintenanceLookaheadDays = 30,
    ) {}

    public function assessVehicle(Vehicle $vehicle): FleetVehicleAssessment
    {
        $isDueForMaintenance = $vehicle->isDueForMaintenance();
        $daysUntilNextService = $this->daysUntilService($vehicle);
        $maintenanceHistory = $this->getRecentMaintenance($vehicle);
        $utilizationScore = $this->calculateUtilization($vehicle, $maintenanceHistory);
        $costPerKm = $this->calculateCostPerKm($vehicle, $maintenanceHistory);
        $predictedIssues = $this->predictMaintenanceNeeds(
            $vehicle, $maintenanceHistory
        );
        $aiRecommendations = $this->getAiFleetRecommendations(
            $vehicle, $isDueForMaintenance, $predictedIssues
        );

        if ($isDueForMaintenance) {
            $this->scheduleMaintenance($vehicle, $aiRecommendations);
        }

        return new FleetVehicleAssessment(
            vehicle: $vehicle,
            isDueForMaintenance: $isDueForMaintenance,
            daysUntilNextService: $daysUntilNextService,
            utilizationScore: $utilizationScore,
            costPerKm: $costPerKm,
            predictedIssues: $predictedIssues,
            aiRecommendations: $aiRecommendations,
        );
    }

    public function assessFleet(): Collection
    {
        return Vehicle::all()->map(
            fn (Vehicle $v) => $this->assessVehicle($v)
        );
    }

    protected function daysUntilService(Vehicle $vehicle): ?int
    {
        if (!$vehicle->next_maintenance_date) {
            return null;
        }

        return (int) now()->diffInDays($vehicle->next_maintenance_date, false);
    }

    protected function getRecentMaintenance(Vehicle $vehicle): Collection
    {
        return $vehicle->maintenanceRecords()
            ->where('created_at', '>=', now()->subMonths(12))
            ->orderBy('created_at', 'desc')
            ->get();
    }

    protected function calculateUtilization(
        Vehicle $vehicle, Collection $maintenanceHistory
    ): float {
        $daysWithIssues = $maintenanceHistory
            ->where('status', 'completed')
            ->sum(
                fn ($r) => $r->completed_date
                    ? max(1, $r->completed_date->diffInDays($r->scheduled_date))
                    : 0
            );

        $totalDays = 365;
        $availableDays = $totalDays - $daysWithIssues;

        return round(($availableDays / $totalDays) * 100, 2);
    }

    protected function calculateCostPerKm(
        Vehicle $vehicle, Collection $maintenanceHistory
    ): float {
        $totalMaintenanceCost = $maintenanceHistory->sum('cost');
        $totalKm = $vehicle->odometer_km;

        if ($totalKm <= 0) {
            return 0;
        }

        return round($totalMaintenanceCost / $totalKm, 4);
    }

    protected function predictMaintenanceNeeds(
        Vehicle $vehicle, Collection $maintenanceHistory
    ): array {
        $issues = [];

        $avgInterval = $maintenanceHistory
            ->where('status', 'completed')
            ->avg(
                fn ($r) => $vehicle->odometer_km - ($r->odometer_at_service)
            );

        $engineServices = $maintenanceHistory->where('type', 'engine');
        $brakeServices = $maintenanceHistory->where('type', 'brake');
        $tireChanges = $maintenanceHistory->where('type', 'tire');

        if ($engineServices->isEmpty()) {
            $issues[] = [
                'type' => 'engine',
                'priority' => 'medium',
                'description' => 'No recent engine service recorded.',
            ];
        }

        $lastBrakeService = $brakeServices->first();
        if ($lastBrakeService) {
            $kmSinceBrake = $vehicle->odometer_km - $lastBrakeService->odometer_at_service;
            if ($kmSinceBrake > 30000) {
                $issues[] = [
                    'type' => 'brake',
                    'priority' => 'high',
                    'description' => sprintf(
                        'Brake service overdue by ~%d km.', $kmSinceBrake - 30000
                    ),
                ];
            }
        }

        $lastTireChange = $tireChanges->first();
        if ($lastTireChange) {
            $kmSinceTires = $vehicle->odometer_km - $lastTireChange->odometer_at_service;
            if ($kmSinceTires > 50000) {
                $issues[] = [
                    'type' => 'tire',
                    'priority' => 'high',
                    'description' => sprintf(
                        'Tires have %d km since last change.', $kmSinceTires
                    ),
                ];
            }
        }

        return $issues;
    }

    protected function getAiFleetRecommendations(
        Vehicle $vehicle, bool $isDue, array $predictedIssues
    ): array {
        $issuesSummary = collect($predictedIssues)->map(
            fn ($i) => sprintf('[%s] %s: %s', $i['priority'], $i['type'], $i['description'])
        )->implode("\n");

        $prompt = sprintf(
            "Analyze this fleet vehicle and provide maintenance recommendations:\n\n".
            "Vehicle: %d %s %s (%d)\nLicense: %s\nType: %s\n".
            "Odometer: %d km\nStatus: %s\n".
            "Due for Maintenance: %s\nNext Service: %s\n".
            "Utilization: %.1f%%\nCost/km: $%.4f\n\n".
            "Predicted Issues:\n%s\n\n".
            "Respond with JSON: {\"overall_health\": \"excellent|good|fair|poor|critical\",".
            " \"immediate_actions\": [...], \"scheduled_maintenance\": {...},".
            " \"replacement_recommendation\": \"...\", \"lifecycle_estimate\": \"...\"}",
            $vehicle->year, $vehicle->make, $vehicle->model,
            $vehicle->year, $vehicle->license_plate, $vehicle->vehicle_type,
            $vehicle->odometer_km, $vehicle->status,
            $isDue ? 'Yes' : 'No',
            $vehicle->next_maintenance_date?->toDateString() ?? 'N/A',
            $this->calculateUtilization($vehicle, collect([])),
            $this->calculateCostPerKm($vehicle, collect([])),
            $issuesSummary,
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a fleet maintenance and logistics analyst.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }

    protected function scheduleMaintenance(
        Vehicle $vehicle, array $recommendations
    ): void {
        $immediateActions = $recommendations['immediate_actions'] ?? [];

        foreach ($immediateActions as $action) {
            MaintenanceRecord::create([
                'vehicle_id' => $vehicle->id,
                'type' => $action['type'] ?? 'general',
                'description' => $action['description'] ?? 'Scheduled maintenance',
                'odometer_at_service' => $vehicle->odometer_km,
                'scheduled_date' => now()->addDays($action['priority_days'] ?? 1),
                'status' => 'scheduled',
            ]);
        }

        $scheduledMaint = $recommendations['scheduled_maintenance'] ?? [];
        if (isset($scheduledMaint['date'])) {
            $vehicle->update([
                'next_maintenance_date' => $scheduledMaint['date'],
                'status' => 'maintenance_scheduled',
            ]);
        }
    }
}

class FleetVehicleAssessment
{
    public function __construct(
        public readonly Vehicle $vehicle,
        public readonly bool $isDueForMaintenance,
        public readonly ?int $daysUntilNextService,
        public readonly float $utilizationScore,
        public readonly float $costPerKm,
        public readonly array $predictedIssues,
        public readonly array $aiRecommendations,
    ) {}

    public function toArray(): array
    {
        return [
            'vehicle_id' => $this->vehicle->id,
            'name' => sprintf(
                '%s %s (%s)',
                $this->vehicle->make,
                $this->vehicle->model,
                $this->vehicle->license_plate
            ),
            'due_for_maintenance' => $this->isDueForMaintenance,
            'days_until_service' => $this->daysUntilNextService,
            'utilization_pct' => $this->utilizationScore,
            'cost_per_km' => $this->costPerKm,
            'predicted_issues' => $this->predictedIssues,
            'overall_health' => $this->aiRecommendations['overall_health'] ?? 'unknown',
        ];
    }
}
```

---

### 30.9 Supply Chain Visibility Dashboard



> **One-Sentence Takeaway:** The visibility dashboard aggregates real-time data from all agents for end-to-end supply chain monitoring.

The supply chain visibility dashboard aggregates data from all logistics agents into a unified real-time analytics layer. The analytics agent generates executive summaries, identifies bottlenecks, computes KPIs, and produces actionable reports that span the entire supply chain.

```php
<?php

namespace App\Agents\Logistics;

use App\Models\InventoryItem;
use App\Models\PurchaseOrder;
use App\Models\Shipment;
use App\Models\Supplier;
use App\Models\Vehicle;
use App\Models\Warehouse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use OpenAI\Laravel\Facades\OpenAI;

class SupplyChainAnalyticsAgent
{
    public function generateReport(): SupplyChainReport
    {
        $inventorySummary = $this->summarizeInventory();
        $orderFulfillment = $this->analyzeOrderFulfillment();
        $shipmentStatus = $this->analyzeShipments();
        $supplierPerformance = $this->summarizeSupplierPerformance();
        $fleetStatus = $this->summarizeFleet();
        $bottlenecks = $this->detectBottlenecks(
            $inventorySummary, $orderFulfillment, $shipmentStatus
        );
        $kpis = $this->calculateKpis(
            $inventorySummary, $orderFulfillment, $shipmentStatus
        );
        $aiInsights = $this->getAiStrategicInsights(
            $kpis, $bottlenecks
        );

        return new SupplyChainReport(
            inventorySummary: $inventorySummary,
            orderFulfillment: $orderFulfillment,
            shipmentStatus: $shipmentStatus,
            supplierPerformance: $supplierPerformance,
            fleetStatus: $fleetStatus,
            bottlenecks: $bottlenecks,
            kpis: $kpis,
            aiInsights: $aiInsights,
            generatedAt: now(),
        );
    }

    protected function summarizeInventory(): array
    {
        $totalItems = InventoryItem::count();
        $totalValue = InventoryItem::join('products', 'inventory_items.product_id', '=', 'products.id')
            ->selectRaw('SUM(inventory_items.quantity_on_hand * products.unit_cost) as total_value')
            ->value('total_value') ?? 0;

        $lowStockCount = InventoryItem::lowStock()->count();
        $expiringCount = InventoryItem::expiringBefore(
            now()->addDays(30)->toDateString()
        )->count();

        $warehouseBreakdown = Warehouse::select([
            'warehouses.id', 'warehouses.name',
            DB::raw('COUNT(inventory_items.id) as item_count'),
            DB::raw('SUM(inventory_items.quantity_on_hand) as total_units'),
        ])
            ->leftJoin('inventory_items', 'warehouses.id', '=', 'inventory_items.warehouse_id')
            ->groupBy('warehouses.id', 'warehouses.name')
            ->get()
            ->toArray();

        return [
            'total_items' => $totalItems,
            'total_value' => round($totalValue, 2),
            'low_stock_count' => $lowStockCount,
            'expiring_count' => $expiringCount,
            'warehouse_breakdown' => $warehouseBreakdown,
        ];
    }

    protected function analyzeOrderFulfillment(): array
    {
        $totalOrders = PurchaseOrder::count();
        $pendingOrders = PurchaseOrder::pending()->count();
        $completedOrders = PurchaseOrder::whereIn('status', ['received', 'completed'])->count();
        $overdueOrders = PurchaseOrder::whereIn('status', ['sent', 'confirmed'])
            ->whereNotNull('expected_date')
            ->where('expected_date', '<', now())
            ->count();

        $fillRate = $totalOrders > 0
            ? round(($completedOrders / $totalOrders) * 100, 2)
            : 0;

        return [
            'total_orders' => $totalOrders,
            'pending' => $pendingOrders,
            'completed' => $completedOrders,
            'overdue' => $overdueOrders,
            'fill_rate_pct' => $fillRate,
        ];
    }

    protected function analyzeShipments(): array
    {
        $total = Shipment::count();
        $inTransit = Shipment::byStatus('in_transit')->count();
        $outForDelivery = Shipment::byStatus('out_for_delivery')->count();
        $delivered = Shipment::byStatus('delivered')->count();
        $delayed = Shipment::byStatus('delayed')->count();
        $overdue = Shipment::overdue()->count();

        $onTimeRate = $delivered > 0
            ? round(($delivered / ($delivered + $delayed)) * 100, 2)
            : 100;

        return [
            'total' => $total,
            'in_transit' => $inTransit,
            'out_for_delivery' => $outForDelivery,
            'delivered' => $delivered,
            'delayed' => $delayed,
            'overdue' => $overdue,
            'on_time_rate_pct' => $onTimeRate,
        ];
    }

    protected function summarizeSupplierPerformance(): array
    {
        $total = Supplier::where('status', 'active')->count();
        $avgScore = Supplier::where('status', 'active')
            ->selectRaw('AVG((COALESCE(reliability_score,0) + COALESCE(quality_score,0) + COALESCE(cost_score,0)) / 3) as avg_score')
            ->value('avg_score') ?? 0;

        $underperformers = Supplier::where('status', 'under_review')->count();

        return [
            'total_active' => $total,
            'average_score' => round($avgScore, 2),
            'under_review' => $underperformers,
        ];
    }

    protected function summarizeFleet(): array
    {
        $total = Vehicle::count();
        $available = Vehicle::where('status', 'available')->count();
        $inService = Vehicle::where('status', 'in_service')->count();
        $dueForMaintenance = Vehicle::dueForMaintenance()->count();
        $maintenanceScheduled = Vehicle::where('status', 'maintenance_scheduled')->count();

        return [
            'total' => $total,
            'available' => $available,
            'in_service' => $inService,
            'due_for_maintenance' => $dueForMaintenance,
            'maintenance_scheduled' => $maintenanceScheduled,
            'availability_rate_pct' => $total > 0
                ? round(($available / $total) * 100, 2) : 0,
        ];
    }

    protected function detectBottlenecks(
        array $inventory, array $orders, array $shipments
    ): array {
        $bottlenecks = [];

        if ($inventory['low_stock_count'] > 10) {
            $bottlenecks[] = [
                'area' => 'inventory',
                'severity' => 'high',
                'message' => sprintf(
                    '%d products below reorder point.', $inventory['low_stock_count']
                ),
                'recommendation' => 'Expedite purchase orders for low-stock items.',
            ];
        }

        if ($orders['overdue'] > 5) {
            $bottlenecks[] = [
                'area' => 'procurement',
                'severity' => 'high',
                'message' => sprintf(
                    '%d overdue purchase orders.', $orders['overdue']
                ),
                'recommendation' => 'Contact suppliers and update expected delivery dates.',
            ];
        }

        if ($shipments['overdue'] > 3) {
            $bottlenecks[] = [
                'area' => 'delivery',
                'severity' => 'medium',
                'message' => sprintf(
                    '%d shipments past estimated delivery.', $shipments['overdue']
                ),
                'recommendation' => 'Notify customers and prioritize exception handling.',
            ];
        }

        if ($this->summarizeFleet()['due_for_maintenance'] > 2) {
            $bottlenecks[] = [
                'area' => 'fleet',
                'severity' => 'medium',
                'message' => 'Multiple vehicles due for maintenance.',
                'recommendation' => 'Schedule maintenance to prevent downtime.',
            ];
        }

        return $bottlenecks;
    }

    protected function calculateKpis(
        array $inventory, array $orders, array $shipments
    ): array {
        return [
            'inventory_turnover' => [
                'label' => 'Inventory Turnover',
                'value' => $inventory['total_value'] > 0
                    ? round($orders['completed'] / ($inventory['total_value'] / 1000), 2)
                    : 0,
                'unit' => 'ratio',
                'trend' => 'stable',
            ],
            'order_fill_rate' => [
                'label' => 'Order Fill Rate',
                'value' => $orders['fill_rate_pct'],
                'unit' => '%',
                'trend' => $orders['fill_rate_pct'] >= 90 ? 'positive' : 'negative',
            ],
            'on_time_delivery' => [
                'label' => 'On-Time Delivery',
                'value' => $shipments['on_time_rate_pct'],
                'unit' => '%',
                'trend' => $shipments['on_time_rate_pct'] >= 95 ? 'positive' : 'needs_attention',
            ],
            'fleet_availability' => [
                'label' => 'Fleet Availability',
                'value' => $this->summarizeFleet()['availability_rate_pct'],
                'unit' => '%',
                'trend' => $this->summarizeFleet()['availability_rate_pct'] >= 80
                    ? 'positive' : 'negative',
            ],
            'supplier_quality' => [
                'label' => 'Supplier Quality Score',
                'value' => $this->summarizeSupplierPerformance()['average_score'],
                'unit' => 'points',
                'trend' => 'monitoring',
            ],
        ];
    }

    protected function getAiStrategicInsights(
        array $kpis, array $bottlenecks
    ): array {
        $kpiSummary = collect($kpis)->map(
            fn ($k, $key) => sprintf('%s: %s %s', $k['label'], $k['value'], $k['unit'])
        )->implode("\n");

        $bottleneckSummary = collect($bottlenecks)->map(
            fn ($b) => sprintf('[%s] %s', $b['severity'], $b['message'])
        )->implode("\n");

        $prompt = sprintf(
            "Analyze this supply chain status and provide strategic insights:\n\n".
            "Key Metrics:\n%s\n\n".
            "Bottlenecks:\n%s\n\n".
            "Respond with JSON: {\"overall_health\": \"healthy|moderate|critical\",".
            " \"top_priority\": \"...\", \"quick_wins\": [...],".
            " \"strategic_recommendations\": [...], \"risk_outlook\": \"...\"}",
            $kpiSummary,
            $bottleneckSummary ?: 'None detected.',
        );

        $response = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'messages' => [
                ['role' => 'system', 'content' =>
                    'You are a supply chain strategic advisor.'],
                ['role' => 'user', 'content' => $prompt],
            ],
            'response_format' => ['type' => 'json_object'],
        ]);

        return json_decode(
            $response->choices[0]->message->content ?? '{}',
            true
        ) ?? [];
    }
}

class SupplyChainReport
{
    public function __construct(
        public readonly array $inventorySummary,
        public readonly array $orderFulfillment,
        public readonly array $shipmentStatus,
        public readonly array $supplierPerformance,
        public readonly array $fleetStatus,
        public readonly array $bottlenecks,
        public readonly array $kpis,
        public readonly array $aiInsights,
        public readonly \DateTimeInterface $generatedAt,
    ) {}

    public function toArray(): array
    {
        return [
            'generated_at' => $this->generatedAt->toIso8601String(),
            'overall_health' => $this->aiInsights['overall_health'] ?? 'unknown',
            'inventory' => $this->inventorySummary,
            'order_fulfillment' => $this->orderFulfillment,
            'shipments' => $this->shipmentStatus,
            'suppliers' => $this->supplierPerformance,
            'fleet' => $this->fleetStatus,
            'bottlenecks' => $this->bottlenecks,
            'kpis' => $this->kpis,
            'ai_insights' => $this->aiInsights,
        ];
    }
}
```

---

## Concept Comparison Table

| Concept | Purpose | Key Benefit | Limitation |
|---------|---------|-------------|------------|
| Inventory Prediction | Demand forecasting ML | Reduced stockouts | Requires quality historical data |
| Route Optimization | Heuristic solvers | Reduced fuel costs | Computationally expensive |
| Shipment Tracking | Carrier API integration | Real-time visibility | API reliability dependency |
| Supplier Management | KPI evaluation | Better procurement decisions | Data quality from suppliers |

## Quick Reference

| Item | Description |
|------|-------------|
| Inventory::predictDemand()|Predict demand for SKU | Route::optimize(, )|Optimize delivery routes |
| Shipment::track()|Track shipment status | Warehouse::optimizeSlotting()|Optimize warehouse slotting |

## Cross-Application Matrix

| Scenario | Approach | Benefit | Challenge |
|----------|----------|---------|-----------|
| Inventory | Prediction agents | Reduced stockouts | Historical data needed |
| Routes | Optimization agents | Fuel cost reduction | Computational cost |
| Shipments | Tracking agents | Real-time visibility | API dependency |
| Suppliers | Management agents | Better procurement | Supplier data quality |

## Chapter Quiz

1. What data sources improve demand forecasting accuracy?
   - A) Only historical sales
   - B) Historical data plus weather, holidays, and economics
   - C) Only weather data
   - D) Only seasonal trends
   <details><summary>Answer&lt;/summary&gt;**B)** Combining historical data with external factors like weather, holidays, and economic indicators improves accuracy.</details>

2. What type of solver is recommended for daily route optimization?
   - A) Exact solver
   - B) Heuristic algorithm
   - C) Brute force
   - D) Random assignment
   <details><summary>Answer&lt;/summary&gt;**B)** Heuristic algorithms are computationally practical for daily route optimization; exact solvers are used for planning.</details>

3. How often should warehouse slotting be reviewed?
   - A) Never
   - B) Monthly
   - C) Yearly
   - D) Only when warehouse is full
   <details><summary>Answer&lt;/summary&gt;**B)** Slotting assignments should be reviewed monthly as order patterns change.</details>

4. What is the main dependency challenge for shipment tracking?
   - A) Database performance
   - B) Carrier API reliability
   - C) Storage costs
   - D) User interface design
   <details><summary>Answer&lt;/summary&gt;**B)** Shipment tracking depends on carrier API reliability for real-time updates.</details>

## Summary

In this chapter, we built a complete logistics and supply chain intelligence system using Laravel and AI agents:

- **Data models** for shipments, inventory, suppliers, warehouses, purchase orders, and fleet vehicles — each with migrations, Eloquent relationships, casts, and query scopes that enforce domain invariants at the database level.
- **Inventory prediction agents** that calculate daily demand, standard deviation, safety stock, reorder points, and economic order quantities, then consult an AI model for natural-language recommendations.
- **Route optimization agents** that solve nearest-neighbor traveling-salesperson problems with priority weighting, integrate with Google Maps APIs for real distance matrices, and surface AI-generated fuel and time savings tips.
- **Shipment tracking automation** that polls carrier APIs, detects status changes and delivery exceptions, records tracking events, and dispatches notifications with AI-generated customer messages and escalation logic.
- **Supplier management agents** that compute on-time delivery rates, defect rates, lead time accuracy, and cost scores, then tier suppliers and drive procurement decisions via AI evaluation.
- **Warehouse automation agents** that collect order items, build zone maps, assign bin locations, create optimized pick batches, and estimate pick times with AI productivity recommendations.
- **Demand forecasting agents** that aggregate historical outbound movements into monthly totals, compute seasonal factors and linear trends, generate multi-month forecasts with confidence levels, and produce AI pattern analysis.
- **Fleet management agents** that track utilization, cost-per-kilometer, predict brake/engine/tire maintenance needs, and schedule preventive maintenance with AI health assessments.
- **Supply chain visibility reports** that consolidate all agent outputs into executive dashboards with KPIs, bottleneck detection, and AI-generated strategic insights.

---

## Exercises

1. **Safety Stock Simulation**: Extend `InventoryPredictionAgent` to run 10,000 Monte Carlo simulations of demand during lead time. Return the 95th percentile as the safety stock level instead of the current standard-deviation-based formula.

2. **Multi-Warehouse Route Optimization**: Modify `RouteOptimizationAgent` to support multiple origin warehouses. The agent should decide which warehouse fulfills each shipment based on proximity, inventory availability, and current workload.

3. **Carrier API Adapter Pattern**: Build a `CarrierApiAdapter` interface and implement adapters for FedEx, UPS, and DHL. Integrate them into `ShipmentTrackingAgent` so it dynamically selects the correct adapter based on the carrier's metadata.

4. **Supplier Negotiation Letter Generator**: Extend `SupplierEvaluationAgent` to generate a personalized negotiation letter when a supplier's tier drops to `bronze` or `probation`. The letter should cite specific performance data and suggest improvement targets.

5. **Dynamic Pick Batch Sizing**: Modify `WarehouseAgent` to dynamically adjust `pickBatchSize` based on real-time warehouse congestion. When pick density is high, use larger batches; when low, smaller batches to avoid delaying urgent orders.

6. **Demand Anomaly Detection**: Extend `DemandForecastAgent` to flag months where actual demand deviates from the forecast by more than 2 standard deviations. Log these as anomalies and trigger an AI analysis of possible causes.

7. **Predictive Fleet Replacement Model**: Extend `FleetManagementAgent` to calculate total cost of ownership (TCO) for each vehicle and recommend replacement when maintenance costs exceed 50% of the vehicle's estimated residual value.

8. **Real-Time Dashboard Endpoint**: Build a Laravel controller that calls `SupplyChainAnalyticsAgent` and returns the report as a JSON API response. Add caching with a 5-minute TTL so the dashboard loads instantly while remaining fresh.