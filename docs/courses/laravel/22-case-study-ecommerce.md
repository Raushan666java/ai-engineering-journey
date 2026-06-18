# Chapter 22: Case Study â€” SaaS E-Commerce Platform

---

## Learning Objectives

- Architect a multi-tenant SaaS e-commerce platform using Laravel 13's core infrastructural components
- Perform capacity estimation for a high-traffic, multi-store marketplace serving millions of users
- Design a normalized, tenant-isolated relational schema with polymorphic relationships for media
- Implement a distributed checkout pipeline with Redis-backed cart state, transactional order creation, and queue-driven fulfillment
- Construct a real-time product search layer using Laravel Scout with Meilisearch, including faceted filters and ranked sorting
- Build a multi-tenant caching strategy with per-tenant Redis namespaces and selective invalidation

---

## Theory â€” End-to-End Design

![E-Commerce Case Study](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/22-case-study-ecommerce.png)


### 6.1 Requirements Gathering

Before writing a single line of code, we must derive hard requirements from the business problem. Our client operates a white-label e-commerce platform where independent merchants launch branded online stores. The platform must simultaneously serve store owners, their customers, and platform administrators.

**Functional Requirements**

| Requirement | Detail |
|---|---|
| Multi-tenancy | Each store is a tenant. Tenants share the same codebase and database but see only their own data. |
| Product catalog | Each store manages up to 100,000 SKUs with variants, images, categories, and SEO metadata. |
| Order management | 10 million orders per year across all stores, with full lifecycle tracking (pending â†’ confirmed â†’ processing â†’ shipped â†’ delivered â†’ returned). |
| Customer accounts | 1 million registered users who can maintain profiles, addresses, payment methods, and order history across multiple stores. |
| Checkout pipeline | Cart persistence, payment processing (Stripe via Cashier), inventory reservation, order confirmation, and email notification. |
| Product search | Full-text search across the entire catalog with faceted filtering, typo tolerance, and sorting by relevance, price, and recency. |
| Real-time updates | Order status notifications broadcast to store dashboards and customer browsers via WebSockets. |
| Uptime SLA | 99.9% availability (â‰ˆ8.7 hours of downtime per year, â‰ˆ43 minutes per month). |
| Page load budget | 500ms server-side response time at p95 for all public-facing pages. |

**Non-Functional Requirements**

| Requirement | Target |
|---|---|
| Read QPS | ~200 queries per second (product browsing, search, cart reads) |
| Write QPS | ~50 writes per second (order placement, cart mutations, inventory updates) |
| Storage growth | ~5 TB/year (product images, order records, audit logs, media) |
| Cache footprint | ~50 GB working set (hot products, active carts, session data) |
| Bandwidth | ~100 Mbps sustained (API traffic, image serving, WebSocket frames) |

### 6.2 Capacity Estimation

Capacity estimation grounds architecture decisions in numbers rather than intuition. We work through each domain.

**Traffic Estimation**

10 million orders per year yields roughly 27,400 orders per day, or about 0.3 orders per second at the daily average. However, e-commerce traffic is bursty: Black Friday can produce 10â€“20Ã— the daily average. We size for 10Ã— peak.

```
Daily orders avg = 10,000,000 / 365 â‰ˆ 27,397
Orders per second avg = 27,397 / 86,400 â‰ˆ 0.32
Orders per second peak (10Ã—) â‰ˆ 3.2

Checkout involves ~10 database writes per order (order, items, payment, inventory, etc.)
Write QPS peak â‰ˆ 3.2 Ã— 10 = 32 â†’ round to 50 for headroom

Browsing-to-purchase ratio is typically 50:1 to 100:1
Read QPS peak â‰ˆ 32 Ã— 6 = 192 â†’ round to 200
```

**Storage Estimation**

```
Product records: 100,000 stores Ã— 100 products avg = 10M products
Each product record â‰ˆ 2 KB â†’ 20 GB
Product images: 10M products Ã— 3 images avg Ã— 500 KB = 15 TB
  â†’ But we offload images to S3/CDN, database stores only URLs (~200 bytes) â†’ 2 GB

Order records: 10M orders/year Ã— 2 KB + 3 items/order Ã— 500 bytes = 20 GB/year + 15 GB/year
Order growth at 10M/year â†’ 35 GB/year

Media (polymorphic): banners, logos, category images â†’ estimate 500 GB/year stored on S3
Database metadata for media â†’ ~10 GB/year

Total database storage â†’ ~60 GB/year (excluding images stored on S3)
TOTAL external storage (S3 + CDN) â†’ ~5 TB/year
```

**Memory Estimation**

```
Hot products: Pareto principle â€” 20% of products get 80% of views.
2M hot products Ã— 2 KB each â†’ 4 GB

Active carts: Assume 5% of 1M users have active carts at any time
50,000 carts Ã— 5 KB each â†’ 250 MB

Session data: 1M users, assume 10% active sessions
100,000 sessions Ã— 1 KB â†’ 100 MB

Full-text search index: ~50 GB (Meilisearch stores inverted indexes in memory)
Total cache + search memory â‰ˆ 50 GB â†’ justifies a dedicated Redis cluster + dedicated Meilisearch instance
```

### 6.3 Data Model

The data model must enforce tenant isolation at the schema level, avoid cross-tenant data leaks, and support high-throughput transactional workloads.

**Core Schema**

```sql
-- Tenants (stores)
CREATE TABLE tenants (
    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    domain      VARCHAR(255) NOT NULL UNIQUE,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    settings    JSON,
    plan        ENUM('basic', 'professional', 'enterprise') NOT NULL DEFAULT 'basic',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Products belong to a tenant, not to a user
CREATE TABLE products (
    id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id     BIGINT UNSIGNED NOT NULL,
    sku           VARCHAR(100) NOT NULL,
    name          VARCHAR(500) NOT NULL,
    slug          VARCHAR(500) NOT NULL,
    description   TEXT,
    price         DECIMAL(12, 2) NOT NULL,
    compare_at_price DECIMAL(12, 2) NULL,
    cost_price    DECIMAL(12, 2) NULL,
    currency      CHAR(3) NOT NULL DEFAULT 'USD',
    weight        DECIMAL(8, 2) NULL,
    status        ENUM('draft', 'active', 'archived') NOT NULL DEFAULT 'draft',
    category_id   BIGINT UNSIGNED NULL,
    metadata      JSON,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_tenant_status (tenant_id, status),
    INDEX idx_category (category_id),
    UNIQUE INDEX idx_tenant_sku (tenant_id, sku),

    CONSTRAINT fk_product_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Product variants (size, color, etc.)
CREATE TABLE product_variants (
    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id  BIGINT UNSIGNED NOT NULL,
    tenant_id   BIGINT UNSIGNED NOT NULL,
    sku         VARCHAR(100) NOT NULL,
    name        VARCHAR(255) NOT NULL,
    price       DECIMAL(12, 2) NULL,  -- overrides product price
    stock       INT NOT NULL DEFAULT 0,
    options     JSON,  -- e.g., {"color": "Red", "size": "M"}
    sort_order  INT NOT NULL DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_product (product_id),
    INDEX idx_tenant (tenant_id),
    UNIQUE INDEX idx_tenant_variant_sku (tenant_id, sku),

    CONSTRAINT fk_variant_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    CONSTRAINT fk_variant_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Orders
CREATE TABLE orders (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id       BIGINT UNSIGNED NOT NULL,
    user_id         BIGINT UNSIGNED NOT NULL,
    order_number    VARCHAR(50) NOT NULL,
    status          ENUM('pending', 'confirmed', 'processing', 'shipped',
                         'delivered', 'cancelled', 'returned') NOT NULL DEFAULT 'pending',
    subtotal        DECIMAL(12, 2) NOT NULL,
    tax_total       DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    shipping_total  DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    discount_total  DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    grand_total     DECIMAL(12, 2) NOT NULL,
    currency        CHAR(3) NOT NULL DEFAULT 'USD',
    shipping_address_id BIGINT UNSIGNED NULL,
    billing_address_id  BIGINT UNSIGNED NULL,
    notes           TEXT NULL,
    placed_at       TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_tenant_status (tenant_id, status),
    INDEX idx_user (user_id),
    INDEX idx_placed_at (placed_at),
    UNIQUE INDEX idx_order_number (order_number),

    CONSTRAINT fk_order_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Order items
CREATE TABLE order_items (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id        BIGINT UNSIGNED NOT NULL,
    tenant_id       BIGINT UNSIGNED NOT NULL,
    product_id      BIGINT UNSIGNED NOT NULL,
    variant_id      BIGINT UNSIGNED NULL,
    product_name    VARCHAR(500) NOT NULL,  -- snapshot at time of purchase
    variant_label   VARCHAR(255) NULL,
    quantity        INT NOT NULL DEFAULT 1,
    unit_price      DECIMAL(12, 2) NOT NULL,
    total_price     DECIMAL(12, 2) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_order (order_id),
    INDEX idx_tenant (tenant_id),
    INDEX idx_product (product_id),

    CONSTRAINT fk_item_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    CONSTRAINT fk_item_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_item_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Payments
CREATE TABLE payments (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id        BIGINT UNSIGNED NOT NULL,
    tenant_id       BIGINT UNSIGNED NOT NULL,
    stripe_payment_intent_id VARCHAR(255) NULL,
    method          VARCHAR(50) NOT NULL,
    status          ENUM('pending', 'succeeded', 'failed', 'refunded', 'partial_refund') NOT NULL DEFAULT 'pending',
    amount          DECIMAL(12, 2) NOT NULL,
    currency        CHAR(3) NOT NULL DEFAULT 'USD',
    transaction_id  VARCHAR(255) NULL,
    refunded_amount DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    metadata        JSON,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_order (order_id),
    INDEX idx_tenant (tenant_id),
    INDEX idx_status (status),

    CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    CONSTRAINT fk_payment_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Polymorphic media table
CREATE TABLE media (
    id                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id         BIGINT UNSIGNED NOT NULL,
    mediable_type     VARCHAR(255) NOT NULL,  -- e.g., App\Models\Product, App\Models\Category
    mediable_id       BIGINT UNSIGNED NOT NULL,
    disk              VARCHAR(50) NOT NULL DEFAULT 's3',
    filename          VARCHAR(500) NOT NULL,
    original_filename VARCHAR(500) NOT NULL,
    mime_type         VARCHAR(100) NOT NULL,
    size              BIGINT UNSIGNED NOT NULL,
    collection_name   VARCHAR(100) NOT NULL DEFAULT 'default',  -- e.g., 'images', 'videos', 'documents'
    sort_order        INT NOT NULL DEFAULT 0,
    metadata          JSON,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_tenant (tenant_id),
    INDEX idx_mediable (mediable_type, mediable_id),
    INDEX idx_collection (mediable_type, mediable_id, collection_name),

    CONSTRAINT fk_media_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Inventory ledger (for audit trail)
CREATE TABLE inventory_movements (
    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tenant_id   BIGINT UNSIGNED NOT NULL,
    variant_id  BIGINT UNSIGNED NOT NULL,
    quantity    INT NOT NULL,
    type        ENUM('reservation', 'release', 'confirmation', 'restock', 'adjustment') NOT NULL,
    reference_type   VARCHAR(255) NULL,  -- e.g., App\Models\Order
    reference_id     BIGINT UNSIGNED NULL,
    before_qty  INT NOT NULL,
    after_qty   INT NOT NULL,
    created_by  BIGINT UNSIGNED NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_variant (variant_id),
    INDEX idx_tenant (tenant_id),
    INDEX idx_type (type),
    INDEX idx_created_at (created_at),

    CONSTRAINT fk_inventory_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_inventory_variant FOREIGN KEY (variant_id) REFERENCES product_variants(id) ON DELETE CASCADE
) ENGINE=InnoDB;
```

**Schema Design Rationale**

Every business table carries a `tenant_id` column indexed for fast filtering. This is **discriminator-based multi-tenancy**: a single schema with a tenant discriminator column. We chose this over the separate-database approach because:

1. **Operational simplicity**: one migration set, one backup strategy, one connection pool.
2. **Cross-tenant analytics**: the platform team can run aggregated queries.
3. **Lower infrastructure cost**: no per-tenant database provisioning.

The `media` table uses a polymorphic relationship (`mediable_type`, `mediable_id`) so that products, categories, brands, and CMS pages can all attach media without separate join tables. The `collection_name` column further groups media within a parent â€” e.g., a product might have an `images` collection and a `videos` collection.

The `inventory_movements` table is an append-only ledger. Every stock changeâ€”reservation, confirmation, release, restock, adjustmentâ€”is recorded with before/after quantities. This gives us a full audit trail and enables point-in-time inventory reconstruction.

### 6.4 Multi-Tenant Middleware and Scoping

The correct `tenant_id` must be injected into every request before any business logic runs.

```php
// App\Http\Middleware\ResolveTenant.php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ResolveTenant
{
    public function handle(Request $request, Closure $next): Response
    {
        $domain = $request->getHost();

        $tenant = \App\Models\Tenant::query()
            ->where('domain', $domain)
            ->firstOrFail();

        $request->merge(['tenant_id' => $tenant->id]);
        app()->instance(\App\Models\Tenant::class, $tenant);

        return $next($request);
    }
}
```

A global scope automatically applies the tenant filter to every query:

```php
// App\Models\Scopes\TenantScope.php
<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class TenantScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        $tenantId = request()->input('tenant_id');

        if ($tenantId) {
            $builder->where('tenant_id', $tenantId);
        }
    }
}
```

```php
// App\Traits\BelongsToTenant.php
<?php

namespace App\Traits;

use App\Models\Scopes\TenantScope;

trait BelongsToTenant
{
    protected static function bootBelongsToTenant(): void
    {
        static::addGlobalScope(new TenantScope);

        static::creating(function ($model) {
            if (empty($model->tenant_id)) {
                $model->tenant_id = request()->input('tenant_id');
            }
        });
    }
}
```

Every tenant-scoped model then uses the trait:

```php
<?php

namespace App\Models;

use App\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use BelongsToTenant;

    // ...
}
```

### 6.5 Checkout Pipeline

The checkout pipeline is the most transactionally sensitive path in the system. It involves multiple services and must maintain consistency across cart state, inventory, payment, and order persistence.

#### 6.5.1 Cart Service (Redis-Backed)

The cart lives in Redis, not MySQL. This avoids write contention on the orders table during browsing and lets customers add items without authentication (carts merge on login).

```php
// App\Services\CartService.php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Redis;
use App\Models\ProductVariant;

class CartService
{
    private string $prefix;

    public function __construct(string $sessionId)
    {
        $this->prefix = "cart:{$sessionId}";
    }

    public function addItem(int $variantId, int $quantity = 1): void
    {
        Redis::hincrby("{$this->prefix}:items", $variantId, $quantity);
        Redis::expire("{$this->prefix}:items", 86400); // 24h TTL
    }

    public function removeItem(int $variantId): void
    {
        Redis::hdel("{$this->prefix}:items", $variantId);
    }

    public function getItems(): array
    {
        $items = Redis::hgetall("{$this->prefix}:items");

        if (empty($items)) {
            return [];
        }

        $variantIds = array_keys($items);

        $variants = ProductVariant::with('product')
            ->whereIn('id', $variantIds)
            ->get()
            ->keyBy('id');

        $result = [];

        foreach ($items as $variantId => $quantity) {
            $variant = $variants[$variantId] ?? null;
            if (!$variant) {
                continue;
            }

            $result[] = [
                'variant'    => $variant,
                'quantity'   => (int) $quantity,
                'unit_price' => $variant->price ?? $variant->product->price,
                'total'      => ((int) $quantity) * ($variant->price ?? $variant->product->price),
            ];
        }

        return $result;
    }

    public function clear(): void
    {
        Redis::del("{$this->prefix}:items");
    }

    public function count(): int
    {
        $items = Redis::hgetall("{$this->prefix}:items");

        return array_sum(array_map('intval', $items ?: []));
    }
}
```

#### 6.5.2 Order Creation Service

When the customer clicks "Place Order", the system executes a carefully ordered sequence inside a database transaction.

```php
// App\Services\OrderService.php
<?php

namespace App\Services;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\ProductVariant;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class OrderService
{
    public function __construct(
        private CartService $cartService,
        private PaymentService $paymentService,
        private InventoryService $inventoryService,
    ) {}

    public function checkout(array $checkoutData): Order
    {
        $cartItems = $this->cartService->getItems();

        if (empty($cartItems)) {
            throw new \RuntimeException('Cart is empty.');
        }

        $tenantId = request()->input('tenant_id');
        $userId   = auth()->id();

        // 1. Reserve inventory in Redis
        $this->inventoryService->reserveStock($cartItems, $tenantId);

        try {
            $order = DB::transaction(function () use ($cartItems, $checkoutData, $tenantId, $userId) {
                // 2. Calculate totals
                $subtotal = collect($cartItems)->sum('total');
                $tax      = $this->calculateTax($subtotal, $checkoutData['shipping_address']);
                $shipping = $this->calculateShipping($cartItems, $checkoutData['shipping_address']);
                $discount = $this->calculateDiscount($checkoutData['coupon_code'] ?? null, $subtotal);
                $grandTotal = $subtotal + $tax + $shipping - $discount;

                // 3. Create order
                $order = Order::create([
                    'tenant_id'           => $tenantId,
                    'user_id'             => $userId,
                    'order_number'        => $this->generateOrderNumber($tenantId),
                    'status'              => 'pending',
                    'subtotal'            => $subtotal,
                    'tax_total'           => $tax,
                    'shipping_total'      => $shipping,
                    'discount_total'      => $discount,
                    'grand_total'         => $grandTotal,
                    'currency'            => 'USD',
                    'shipping_address_id' => $checkoutData['shipping_address_id'],
                    'billing_address_id'  => $checkoutData['billing_address_id'],
                    'notes'               => $checkoutData['notes'] ?? null,
                ]);

                // 4. Create order items (snapshot product data)
                foreach ($cartItems as $item) {
                    OrderItem::create([
                        'order_id'      => $order->id,
                        'tenant_id'     => $tenantId,
                        'product_id'    => $item['variant']->product_id,
                        'variant_id'    => $item['variant']->id,
                        'product_name'  => $item['variant']->product->name,
                        'variant_label' => $item['variant']->name,
                        'quantity'      => $item['quantity'],
                        'unit_price'    => $item['unit_price'],
                        'total_price'   => $item['total'],
                    ]);
                }

                // 5. Confirm inventory in DB
                $this->inventoryService->confirmStock($cartItems, $order->id, $tenantId);

                return $order;
            });
        } catch (\Throwable $e) {
            // Release Redis reservation on failure
            $this->inventoryService->releaseStock($cartItems, $tenantId);
            throw $e;
        }

        // 6. Process payment (outside transaction â€” payment gateway is idempotent)
        $payment = $this->paymentService->charge($order, $checkoutData['payment_method_id']);

        // 7. Update order status on success
        if ($payment->status === 'succeeded') {
            $order->update(['status' => 'confirmed', 'placed_at' => now()]);
        } else {
            $order->update(['status' => 'cancelled']);
            $this->inventoryService->releaseStock($cartItems, $tenantId);

            throw new \RuntimeException('Payment failed.');
        }

        // 8. Dispatch confirmation job
        \App\Jobs\ProcessOrderConfirmation::dispatch($order);

        // 9. Clear the cart
        $this->cartService->clear();

        return $order;
    }

    private function generateOrderNumber(int $tenantId): string
    {
        $date = now()->format('Ymd');

        $seq = DB::table('order_sequences')
            ->where('tenant_id', $tenantId)
            ->where('date', $date)
            ->lockForUpdate()
            ->value('sequence');

        if (!$seq) {
            DB::table('order_sequences')->insert([
                'tenant_id' => $tenantId,
                'date' => $date,
                'sequence' => 1,
            ]);
            $seq = 1;
        } else {
            DB::table('order_sequences')
                ->where('tenant_id', $tenantId)
                ->where('date', $date)
                ->increment('sequence');
            $seq++;
        }

        return "{$date}-{$tenantId}-{$seq}";
    }

    private function calculateTax(float $subtotal, array $address): float
    {
        // Delegate to a tax calculation service or external API
        return round($subtotal * 0.08, 2); // simplified
    }

    private function calculateShipping(array $items, array $address): float
    {
        // Delegate to shipping carrier API or weight-based logic
        return 5.99;
    }

    private function calculateDiscount(?string $couponCode, float $subtotal): float
    {
        if (!$couponCode) {
            return 0.00;
        }

        // Look up coupon in DB, validate, return discount amount
        return 0.00;
    }
}
```

#### 6.5.3 Payment Processing

We use Laravel Cashier (Stripe) with a thin wrapper that returns a normalized payment record:

```php
// App\Services\PaymentService.php
<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Payment;
use Laravel\Cashier\Cashier;
use Stripe\PaymentIntent;

class PaymentService
{
    public function charge(Order $order, string $paymentMethodId): Payment
    {
        $user = $order->user;

        $stripePaymentIntent = \Stripe\PaymentIntent::create([
            'amount'   => (int) ($order->grand_total * 100),
            'currency' => strtolower($order->currency),
            'customer' => $user->stripe_id,
            'payment_method' => $paymentMethodId,
            'off_session'    => true,
            'confirm'        => true,
            'metadata'       => [
                'order_number' => $order->order_number,
                'tenant_id'    => $order->tenant_id,
            ],
        ]);

        return Payment::create([
            'order_id'       => $order->id,
            'tenant_id'      => $order->tenant_id,
            'stripe_payment_intent_id' => $stripePaymentIntent->id,
            'method'         => 'card',
            'status'         => $stripePaymentIntent->status === 'succeeded' ? 'succeeded' : 'failed',
            'amount'         => $order->grand_total,
            'currency'       => $order->currency,
            'transaction_id' => $stripePaymentIntent->charges->data[0]->id ?? null,
        ]);
    }

    public function refund(Payment $payment, ?float $amount = null): Payment
    {
        $refund = \Stripe\Refund::create([
            'payment_intent' => $payment->stripe_payment_intent_id,
            'amount'         => $amount ? (int) ($amount * 100) : null,
        ]);

        $payment->update([
            'status'          => $refund->status === 'succeeded' ? 'refunded' : 'partial_refund',
            'refunded_amount' => DB::raw("refunded_amount + {$amount}"),
        ]);

        return $payment->fresh();
    }
}
```

#### 6.5.4 Inventory Management

Inventory must be handled at two layers for correctness under concurrency. Redis provides fast, atomic stock reservations during cart-to-order conversion. MySQL provides the authoritative ledger.

```php
// App\Services\InventoryService.php
<?php

namespace App\Services;

use App\Models\InventoryMovement;
use App\Models\ProductVariant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class InventoryService
{
    private string $reservationKey(int $tenantId): string
    {
        return "inventory:reservations:{$tenantId}";
    }

    public function reserveStock(array $cartItems, int $tenantId): void
    {
        $redis = Redis::connection();

        foreach ($cartItems as $item) {
            $variant = $item['variant'];
            $qty     = $item['quantity'];

            $available = $variant->stock - (int) $redis->hget(
                $this->reservationKey($tenantId),
                $variant->id
            ) ?? 0;

            if ($available < $qty) {
                throw new \RuntimeException(
                    "Insufficient stock for variant {$variant->sku}. Available: {$available}, requested: {$qty}."
                );
            }
        }

        // All checks passed â€” reserve atomically
        foreach ($cartItems as $item) {
            $redis->hincrby(
                $this->reservationKey($tenantId),
                $item['variant']->id,
                $item['quantity']
            );

            $redis->expire($this->reservationKey($tenantId), 900); // 15 min TTL
        }
    }

    public function confirmStock(array $cartItems, int $orderId, int $tenantId): void
    {
        DB::transaction(function () use ($cartItems, $orderId, $tenantId) {
            foreach ($cartItems as $item) {
                $variant = ProductVariant::where('id', $item['variant']->id)
                    ->lockForUpdate()
                    ->firstOrFail();

                $beforeQty = $variant->stock;

                $variant->decrement('stock', $item['quantity']);

                InventoryMovement::create([
                    'tenant_id'      => $tenantId,
                    'variant_id'     => $variant->id,
                    'quantity'       => -$item['quantity'],
                    'type'           => 'confirmation',
                    'reference_type' => Order::class,
                    'reference_id'   => $orderId,
                    'before_qty'     => $beforeQty,
                    'after_qty'      => $beforeQty - $item['quantity'],
                    'created_by'     => auth()->id(),
                ]);
            }
        });
    }

    public function releaseStock(array $cartItems, int $tenantId): void
    {
        $redis = Redis::connection();

        foreach ($cartItems as $item) {
            $redis->hincrby(
                $this->reservationKey($tenantId),
                $item['variant']->id,
                -$item['quantity']
            );
        }
    }

    public function getAvailableStock(ProductVariant $variant, int $tenantId): int
    {
        $redis = Redis::connection();

        $reserved = (int) $redis->hget(
            $this->reservationKey($tenantId),
            $variant->id
        );

        return $variant->stock - $reserved;
    }
}
```

#### 6.5.5 Order Confirmation Job

```php
// App\Jobs\ProcessOrderConfirmation.php
<?php

namespace App\Jobs;

use App\Models\Order;
use App\Notifications\OrderConfirmed;
use App\Services\AnalyticsService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessOrderConfirmation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Order $order
    ) {}

    public function handle(AnalyticsService $analytics): void
    {
        // 1. Send email notification
        $this->order->user->notify(new OrderConfirmed($this->order));

        // 2. Broadcast real-time update via Reverb
        broadcast(new \App\Events\OrderStatusChanged($this->order))->toOthers();

        // 3. Update analytics pipeline
        $analytics->trackOrder($this->order);

        // 4. Trigger fulfillment workflow if digital product
        if ($this->order->items->every(fn ($item) => $item->product->is_digital)) {
            \App\Jobs\ProcessDigitalFulfillment::dispatch($this->order);
        }
    }
}
```

#### 6.5.6 Real-Time Broadcasting with Reverb

Reverb broadcasts order status changes to both the store's admin dashboard and the customer's order tracking page.

```php
// App\Events\OrderStatusChanged.php
<?php

namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OrderStatusChanged implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public Order $order
    ) {}

    public function broadcastOn(): array
    {
        return [
            new Channel("tenant.{$this->order->tenant_id}.orders"),
            new Channel("user.{$this->order->user_id}.orders"),
        ];
    }

    public function broadcastWith(): array
    {
        return [
            'order_number' => $this->order->order_number,
            'status'       => $this->order->status,
            'updated_at'   => $this->order->updated_at->toIso8601String(),
        ];
    }
}
```

### 6.6 Product Search with Laravel Scout

Search is a first-class feature. Every product page, category browse, and storefront depends on fast, relevant results.

**Scout Configuration**

```php
// config/scout.php
<?php

return [
    'driver' => env('SCOUT_DRIVER', 'meilisearch'),

    'meilisearch' => [
        'host' => env('MEILISEARCH_HOST', 'http://localhost:7700'),
        'key'  => env('MEILISEARCH_KEY'),
    ],

    'queued' => true,  // sync model changes to search index via queue
];
```

**Making a Model Searchable**

```php
<?php

namespace App\Models;

use App\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use BelongsToTenant, Searchable;

    protected $fillable = [
        'tenant_id', 'sku', 'name', 'slug', 'description',
        'price', 'compare_at_price', 'currency', 'status',
        'category_id', 'metadata',
    ];

    public function toSearchableArray(): array
    {
        return [
            'id'          => $this->id,
            'tenant_id'   => $this->tenant_id,
            'name'        => $this->name,
            'description' => $this->description,
            'sku'         => $this->sku,
            'price'       => (float) $this->price,
            'currency'    => $this->currency,
            'category'    => $this->category?->name,
            'tags'        => $this->tags->pluck('name')->toArray(),
            'color'       => $this->metadata['color'] ?? null,
            'size'        => $this->metadata['size'] ?? null,
            'created_at'  => $this->created_at->timestamp,
        ];
    }

    public function searchableShouldBeSentTo(string $index): bool
    {
        // Per-tenant indexes for isolation
        return $index === "products_{$this->tenant_id}";
    }
}
```

**Controller with Faceted Search**

```php
// App\Http\Controllers\ProductSearchController.php
<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Laravel\Scout\Builder;

class ProductSearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $tenantId = $request->input('tenant_id');
        $query    = $request->input('q');
        $filters  = $request->input('filters', []);
        $sort     = $request->input('sort', 'relevance');

        $builder = Product::search($query, function ($meilisearch, $query, $options) use ($tenantId, $filters, $sort) {
            $options['index'] = "products_{$tenantId}";

            // Apply faceted filters
            $filterParts = [];

            $filterParts[] = "tenant_id = {$tenantId}";

            if (!empty($filters['category'])) {
                $filterParts[] = "category = '{$filters['category']}'";
            }

            if (!empty($filters['min_price'])) {
                $filterParts[] = "price >= {$filters['min_price']}";
            }

            if (!empty($filters['max_price'])) {
                $filterParts[] = "price <= {$filters['max_price']}";
            }

            if (!empty($filters['color'])) {
                $filterParts[] = "color = '{$filters['color']}'";
            }

            if (!empty($filters['size'])) {
                $filterParts[] = "size = '{$filters['size']}'";
            }

            if (!empty($filterParts)) {
                $options['filter'] = implode(' AND ', $filterParts);
            }

            // Sorting
            $sortRules = [
                'relevance' => [],
                'price_asc'  => ['price:asc'],
                'price_desc' => ['price:desc'],
                'newest'     => ['created_at:desc'],
            ];

            $options['sort'] = $sortRules[$sort] ?? [];

            return $meilisearch->search($query, $options);
        });

        $results = $builder->paginate(24);

        // Extract facets from Meilisearch response
        $facets = $results->raw()['facetDistribution'] ?? [];

        return response()->json([
            'products' => $results->items(),
            'facets'   => $facets,
            'meta'     => [
                'current_page' => $results->currentPage(),
                'last_page'    => $results->lastPage(),
                'total'        => $results->total(),
            ],
        ]);
    }
}
```

### 6.7 Multi-Tenant Caching

Caching in a multi-tenant system requires key isolation. A product update in Store A must not invalidate the cache for Store B.

```php
// App\Services\CacheService.php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class CacheService
{
    private int $tenantId;

    public function __construct(?int $tenantId = null)
    {
        $this->tenantId = $tenantId ?? request()->input('tenant_id', 0);
    }

    private function key(string $key): string
    {
        return "tenant:{$this->tenantId}:{$key}";
    }

    public function get(string $key, mixed $default = null): mixed
    {
        return Cache::get($this->key($key), $default);
    }

    public function put(string $key, mixed $value, int $ttl = 3600): void
    {
        Cache::put($this->key($key), $value, $ttl);
    }

    public function remember(string $key, int $ttl, callable $callback): mixed
    {
        return Cache::remember($this->key($key), $ttl, $callback);
    }

    public function forget(string $key): void
    {
        Cache::forget($this->key($key));
    }

    public function flushTenant(): void
    {
        $redis = Redis::connection();

        $cursor = null;

        do {
            [$cursor, $keys] = $redis->scan($cursor, [
                'match' => "tenant:{$this->tenantId}:*",
                'count' => 100,
            ]);

            if (!empty($keys)) {
                $redis->del($keys);
            }
        } while ($cursor !== 0);
    }

    // Tenant-aware cache invalidation on product update
    public function invalidateProductCache(int $productId): void
    {
        $keys = [
            "product:{$productId}",
            "product:{$productId}:variants",
            "category_products:{$this->tenantId}",
            "store_front:{$this->tenantId}",
        ];

        foreach ($keys as $key) {
            $this->forget($key);
        }
    }
}
```

**Using Cache Tags (Redis backend)**

```php
// Caching a product with tenant-scoped tags
Cache::tags(["tenant:{$tenantId}", 'products'])
    ->put("product:{$product->id}", $product, 3600);

// Invalidating all product caches for a tenant
Cache::tags(["tenant:{$tenantId}", 'products'])->flush();
```

### 6.8 System Architecture

The full system follows a layered, horizontally scalable topology.

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                           Cloudflare CDN                                 â”‚
â”‚                      (static assets, image resize)                       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                            â”Œâ”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”
                            â”‚   Load Balancerâ”‚  (AWS ALB / DigitalOcean LB)
                            â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚               â”‚               â”‚
            â”Œâ”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”
            â”‚   Web Node 1  â”‚ â”‚ Web Node 2â”‚ â”‚   Web Node N  â”‚
            â”‚  (Octane/Road) â”‚ â”‚(Octane/Rd)â”‚ â”‚  (Octane/Rd)  â”‚
            â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                    â”‚               â”‚               â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚        Redis Cluster           â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
                    â”‚  â”‚ Session / Cache / Cart   â”‚  â”‚
                    â”‚  â”‚ Inventory Reservation    â”‚  â”‚
                    â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚       MySQL (Galera/RDS)       â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
                    â”‚  â”‚  Orders / Products /     â”‚  â”‚
                    â”‚  â”‚  Users / Tenants         â”‚  â”‚
                    â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚       Queue Workers            â”‚
                    â”‚  (Horizon â€” order fulfillment, â”‚
                    â”‚   email, search indexing,      â”‚
                    â”‚   analytics)                    â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚       Reverb (WebSocket)       â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
                    â”‚  â”‚ Real-time order status,  â”‚  â”‚
                    â”‚  â”‚ dashboard updates        â”‚  â”‚
                    â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                    â”‚
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚       Meilisearch              â”‚
                    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
                    â”‚  â”‚ Per-tenant product       â”‚  â”‚
                    â”‚  â”‚ search indexes           â”‚  â”‚
                    â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Architecture Decisions**

| Decision | Rationale |
|---|---|
| Octane (Swoole/RoadRunner) | Each web node persists in memory, eliminating framework boot time on every request. Critical for the 500ms page load budget. |
| Redis for cart + inventory | In-memory atomic operations avoid database contention during high-frequency cart mutations and stock checks. |
| Queue workers for fulfillment | Order confirmation, email, analytics, and search indexing are asynchronous. This protects the checkout endpoint from downstream latency. |
| Reverb for WebSockets | Native Laravel WebSockets server that uses the same Redis backend. No need for a separate Node.js service. |
| Meilisearch per-tenant indexes | Full index isolation prevents cross-tenant data leakage in search results and allows independent index tuning. |
| Database-level tenant scoping | The `TenantScope` global scope ensures developers cannot accidentally write cross-tenant queries. |

### 6.9 Deployment and Scaling Strategy

**Horizontal Scaling Rules**

| Component | Scaling Trigger | Strategy |
|---|---|---|
| Web nodes | CPU > 70% for 5 min | Add Octane nodes behind load balancer |
| Redis | Memory > 80% | Cluster mode with more shards |
| MySQL | Connections > 200 | Read replicas for product browsing (read-heavy) |
| Queue workers | Queue backlog > 1,000 | Auto-scale worker pods via Vapor/Forge |
| Meilisearch | Search latency > 100ms | Add replica nodes for read scaling |

---

## Summary

- Multi-tenant e-commerce requires careful schema design with a `tenant_id` discriminator column on every business table and a global Eloquent scope to enforce isolation.
- Capacity estimation grounds architectural decisions in data: read QPS of ~200, write QPS of ~50, ~5TB storage per year, and ~50GB Redis cache working set.
- The checkout pipeline is a multi-step distributed transaction: Redis cart â†’ inventory reservation â†’ DB transaction (order + items + inventory) â†’ payment gateway â†’ confirmation job. Failure at any step releases reservations.
- Inventory management uses a two-layer approach: fast Redis reservations for concurrency safety during checkout, and a MySQL ledger (`inventory_movements`) for authoritative audit trail.
- Product search uses Laravel Scout with Meilisearch. Per-tenant indexes provide data isolation. Faceted filters (category, price, color, size) and sort options are passed through Meilisearch's filter and sort parameters.
- Multi-tenant caching uses prefixed keys (`tenant:{id}:{key}`), Redis namespaces, and tag-based flushing to prevent cross-tenant cache pollution.
- The system architecture follows a layered topology: CDN â†’ Load Balancer â†’ Octane web nodes â†’ Redis â†’ MySQL â†’ Queue Workers â†’ Reverb â†’ Meilisearch. Each layer scales independently.
- Real-time order status updates are broadcast via Reverb over tenant-scoped and user-scoped channels.

---

## Exercises

### Review Questions

1. Explain why we use a discriminator-based multi-tenancy strategy (shared schema with `tenant_id`) instead of separate databases per tenant. What are the trade-offs?
2. Walk through the checkout pipeline step by step. What happens if the payment succeeds but the `ProcessOrderConfirmation` job fails? How does the system recover?
3. Why is the cart stored in Redis rather than MySQL? What happens if a Redis node fails and cart data is lost?
4. Describe the two-layer inventory management strategy. Why do we reserve stock in Redis and confirm in MySQL rather than doing everything in one database transaction?
5. How do Meilisearch per-tenant indexes prevent cross-tenant data leakage? What would happen if we used a single shared index with a `tenant_id` filter attribute instead?

### Application Problems

1. **Implement a coupon validation system**: Design a `CouponService` that validates a coupon code against a tenant's active promotions. Coupons can be percentage-based or fixed-amount, have minimum order values, usage limits (per-coupon and per-customer), and expiration dates. Integrate it into the existing `OrderService::checkout()` method by passing a validated coupon and applying the discount to the `grand_total`.

2. **Add a product variant price override**: Extend the `OrderService` so that when an order item references a variant with its own price (not null), the variant price is used instead of the parent product price. If the variant price is null, fall back to the product price. Modify the checkout pipeline to store the correct `unit_price` in the `order_items` table.

3. **Design a cache warming strategy**: The system will experience traffic spikes during flash sales. Design a `CacheWarmCommand` (Artisan command) that pre-populates Redis with the top 20% of products (by view count) for a given tenant. Include logic to warm the product detail, category listing, and search result caches. Schedule it to run 15 minutes before a scheduled flash sale.

### Challenge Problem

**Build a multi-tenant analytics aggregate service**

Design and implement a `TenantAnalyticsService` that computes and caches the following metrics for each tenant in near real-time:

- **Daily metrics**: total orders, revenue, average order value, new customers, top 10 products by revenue, top 5 categories by units sold.
- **Processing**: A `MetricsAggregator` job runs every 5 minutes. It reads from `orders` and `order_items` tables created since the last run, computes deltas, and upserts into a `daily_metrics` table (one row per tenant per day).
- **Caching**: The computed metrics are cached in Redis with a 10-minute TTL under `tenant:{id}:analytics:daily:{date}`. 
- **API endpoint**: `GET /api/{tenant}/analytics/daily?from=2025-01-01&to=2025-01-31` returns the cached metrics. If cache is empty, it triggers a synchronous computation (with a warning header `X-Cache: Miss`).
- **Broadcast**: After each aggregation cycle, broadcast a `MetricsUpdated` event via Reverb to `tenant.{id}.analytics` so dashboards update live.

Write the migration for `daily_metrics`, the `TenantAnalyticsService` class, the `MetricsAggregator` job, the API controller, and the Reverb event class. Include explanations of how you handle timezone consistency, concurrent aggregation runs, and cache invalidation when an order is refunded.