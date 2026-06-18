# Chapter 28: Finance & FinTech Agents

---

## Learning Objectives

- Design PCI-DSS-compliant financial data models with encrypted fields, audit trails, and soft-deletable compliance records
- Build a fraud detection agent that combines rule-based heuristics with AI risk scoring for real-time transaction screening
- Implement transaction monitoring agents with threshold analysis, pattern detection, and multi-channel alert dispatch
- Construct KYC/AML verification agents that process identity documents, screen watchlists, and produce risk profiles
- Deploy credit scoring pipelines that aggregate financial data and apply AI-driven scoring models
- Build trading signal agents that analyze market data and generate weighted trade recommendations
- Implement portfolio management agents with rebalancing logic and performance reporting
- Automate regulatory report generation with data aggregation, format conversion, and filing metadata
- Build payment processing agents for reconciliation, dispute resolution, and settlement tracking

---

## Theory

![Finance Domain](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/28-finance.png)


### 28.1 Financial Data Models & Compliance

Financial applications operate under strict regulatory frameworks. Every model must support audit trails, field-level encryption, and tamper-evident logging. PCI-DSS (Payment Card Industry Data Security Standard) mandates that cardholder data is encrypted at rest and in transit, access is logged, and sensitive authentication data is never stored after authorization.

#### Account and Transaction Models

The `Account` model stores financial accounts with encrypted balance fields. The `Transaction` model records every monetary movement with an immutable audit trail.

```php
<?php

namespace App\Models\Finance;

use App\Models\User;
use App\Models\Scopes\TenantScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Account extends Model
{
    use SoftDeletes;

    protected $table = 'finance_accounts';

    protected $fillable = [
        'user_id',
        'account_number',
        'account_type',
        'currency',
        'encrypted_balance',
        'status',
        'opened_at',
        'closed_at',
    ];

    protected $casts = [
        'opened_at' => 'datetime',
        'closed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope(new TenantScope);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'account_id');
    }

    public function getBalanceAttribute(): float
    {
        return decrypt($this->encrypted_balance);
    }

    public function setBalanceAttribute(float $value): void
    {
        $this->attributes['encrypted_balance'] = encrypt($value);
    }
}

class Transaction extends Model
{
    protected $table = 'finance_transactions';

    protected $fillable = [
        'uuid',
        'account_id',
        'type',
        'amount',
        'currency',
        'description',
        'reference',
        'status',
        'approved_by',
        'ip_address',
        'user_agent',
        'metadata',
        'completed_at',
    ];

    protected $casts = [
        'amount' => 'decimal:4',
        'metadata' => 'array',
        'completed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (Transaction $transaction) {
            $transaction->uuid = (string) Str::uuid();
            $transaction->ip_address = request()->ip();
            $transaction->user_agent = request()->userAgent();
        });
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeFraudulent($query)
    {
        return $query->where('status', 'fraudulent');
    }

    public function scopeForPeriod($query, $from, $to)
    {
        return $query->whereBetween('created_at', [$from, $to]);
    }
}
```

#### Compliance Models with Audit Trails

Every compliance-related action must be logged with who did what, when, and what data changed. The `ComplianceRule` model stores configurable screening rules.

```php
<?php

namespace App\Models\Finance;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ComplianceRule extends Model
{
    protected $table = 'finance_compliance_rules';

    protected $fillable = [
        'name',
        'rule_type',
        'jurisdiction',
        'conditions',
        'actions',
        'risk_weight',
        'is_active',
        'effective_from',
        'effective_until',
    ];

    protected $casts = [
        'conditions' => 'array',
        'actions' => 'array',
        'risk_weight' => 'float',
        'is_active' => 'boolean',
        'effective_from' => 'datetime',
        'effective_until' => 'datetime',
    ];

    public function alerts(): HasMany
    {
        return $this->hasMany(ComplianceAlert::class, 'rule_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true)
            ->where('effective_from', '<=', now())
            ->where(fn ($q) => $q->whereNull('effective_until')
                ->orWhere('effective_until', '>=', now()));
    }
}

class ComplianceAlert extends Model
{
    protected $table = 'finance_compliance_alerts';

    protected $fillable = [
        'rule_id',
        'transaction_id',
        'severity',
        'status',
        'details',
        'reviewed_by',
        'reviewed_at',
        'resolution',
    ];

    protected $casts = [
        'details' => 'array',
        'reviewed_at' => 'datetime',
    ];

    public function rule(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(ComplianceRule::class, 'rule_id');
    }
}

class AuditTrail extends Model
{
    protected $table = 'finance_audit_trails';

    protected $fillable = [
        'auditable_type',
        'auditable_id',
        'event',
        'old_values',
        'new_values',
        'user_id',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'old_values' => 'array',
        'new_values' => 'array',
    ];
}
```

#### Migration for Encrypted Financial Tables

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('finance_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('account_number')->unique();
            $table->string('account_type');
            $table->string('currency', 3)->default('USD');
            $table->text('encrypted_balance');
            $table->string('status')->default('active');
            $table->timestamp('opened_at')->nullable();
            $table->timestamp('closed_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index(['user_id', 'status']);
        });

        Schema::create('finance_transactions', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('account_id')->constrained('finance_accounts');
            $table->string('type');
            $table->decimal('amount', 20, 4);
            $table->string('currency', 3)->default('USD');
            $table->string('description')->nullable();
            $table->string('reference')->nullable();
            $table->string('status')->default('pending');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();

            $table->index(['account_id', 'status', 'created_at']);
            $table->index('uuid');
        });

        Schema::create('finance_compliance_rules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('rule_type');
            $table->string('jurisdiction', 3)->default('US');
            $table->json('conditions');
            $table->json('actions')->nullable();
            $table->decimal('risk_weight', 5, 4)->default(0.5);
            $table->boolean('is_active')->default(true);
            $table->timestamp('effective_from')->useCurrent();
            $table->timestamp('effective_until')->nullable();
            $table->timestamps();
        });

        Schema::create('finance_compliance_alerts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rule_id')->constrained('finance_compliance_rules');
            $table->foreignId('transaction_id')->constrained('finance_transactions');
            $table->enum('severity', ['low', 'medium', 'high', 'critical']);
            $table->string('status')->default('open');
            $table->json('details')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users');
            $table->timestamp('reviewed_at')->nullable();
            $table->text('resolution')->nullable();
            $table->timestamps();
        });

        Schema::create('finance_audit_trails', function (Blueprint $table) {
            $table->id();
            $table->morphs('auditable');
            $table->string('event');
            $table->json('old_values')->nullable();
            $table->json('new_values')->nullable();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();

            $table->index(['auditable_type', 'auditable_id']);
            $table->index('event');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('finance_audit_trails');
        Schema::dropIfExists('finance_compliance_alerts');
        Schema::dropIfExists('finance_compliance_rules');
        Schema::dropIfExists('finance_transactions');
        Schema::dropIfExists('finance_accounts');
    }
};
```

#### Encryption Utilities

```php
<?php

namespace App\Support\Finance;

use Illuminate\Support\Facades\Crypt;

class FinancialEncryption
{
    public static function encryptField(mixed $value): string
    {
        return Crypt::encryptString(json_encode($value));
    }

    public static function decryptField(string $encrypted): mixed
    {
        return json_decode(Crypt::decryptString($encrypted), true);
    }

    public static function maskAccountNumber(string $number): string
    {
        $visible = substr($number, -4);

        return str_repeat('*', max(0, strlen($number) - 4)) . $visible;
    }
}
```

---

### 28.2 Fraud Detection Agents

Fraud detection operates at the intersection of rules and AI. Rule-based checks catch known patterns (velocity, amount thresholds, geographic anomalies). AI scoring catches novel patterns the rules do not anticipate. The agent combines both into a single risk score.

#### The FraudDetectionAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\ComplianceAlert;
use App\Models\Finance\ComplianceRule;
use App\Models\Finance\Transaction;
use App\Models\User;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class FraudDetectionAgent implements Agent
{
    use Promptable;

    protected float $riskScore = 0.0;

    protected array $flags = [];

    public function __construct(
        protected Transaction $transaction,
        protected array $customerHistory = [],
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a fraud detection agent for a financial platform.
Analyze the transaction and customer data provided.
Apply rule-based checks first, then use AI reasoning to detect
novel suspicious patterns.

Consider these factors:
- Transaction amount vs customer average
- Transaction velocity (count in last hour)
- Geographic inconsistency
- Device/IP reputation
- Time since account creation
- Previous chargebacks or disputes

Return a structured assessment with:
- risk_score (0.0 - 1.0)
- flags (array of reason strings)
- recommended_action (approve / review / block)
- confidence_level (low / medium / high)
PROMPT;
    }

    public function analyze(): array
    {
        $this->applyRuleBasedChecks();

        $aiAssessment = $this->getAiAssessment();

        $finalScore = max($this->riskScore, $aiAssessment['risk_score']);
        $action = match (true) {
            $finalScore >= 0.8 => 'block',
            $finalScore >= 0.4 => 'review',
            default => 'approve',
        };

        $this->logAssessment($action, $finalScore);

        return [
            'risk_score' => $finalScore,
            'flags' => array_unique(array_merge($this->flags, $aiAssessment['flags'] ?? [])),
            'action' => $action,
            'confidence' => $aiAssessment['confidence_level'] ?? 'medium',
        ];
    }

    protected function applyRuleBasedChecks(): void
    {
        $rules = ComplianceRule::active()
            ->where('rule_type', 'fraud')
            ->get();

        $account = $this->transaction->account;
        $recentTxns = Transaction::where('account_id', $account->id)
            ->where('created_at', '>=', now()->subHour())
            ->count();

        foreach ($rules as $rule) {
            $conditions = $rule->conditions;

            if (($conditions['velocity_limit'] ?? 0) > 0 && $recentTxns > $conditions['velocity_limit']) {
                $this->riskScore += $rule->risk_weight;
                $this->flags[] = "velocity_exceeded:{$recentTxns}txns/hr";
            }

            if (($conditions['amount_threshold'] ?? 0) > 0 && $this->transaction->amount > $conditions['amount_threshold']) {
                $this->riskScore += $rule->risk_weight;
                $this->flags[] = 'amount_threshold_exceeded';
            }

            $accountAge = $this->transaction->account->created_at->diffInDays(now());
            if (($conditions['min_account_age_days'] ?? 0) > 0 && $accountAge < $conditions['min_account_age_days']) {
                $this->riskScore += $rule->risk_weight * 1.5;
                $this->flags[] = 'new_account_high_value';
            }

            $dailyTotal = Transaction::where('account_id', $account->id)
                ->where('created_at', '>=', now()->startOfDay())
                ->where('status', 'completed')
                ->sum('amount');

            if (($conditions['daily_limit'] ?? 0) > 0 && ($dailyTotal + $this->transaction->amount) > $conditions['daily_limit']) {
                $this->riskScore += $rule->risk_weight;
                $this->flags[] = 'daily_limit_exceeded';
            }
        }
    }

    protected function getAiAssessment(): array
    {
        $response = $this->prompt(json_encode([
            'transaction' => $this->transaction->toArray(),
            'customer_history' => $this->customerHistory,
            'rule_risk_score' => $this->riskScore,
            'flags' => $this->flags,
        ]));

        return $response->json();
    }

    protected function logAssessment(string $action, float $score): void
    {
        if ($action !== 'approve') {
            ComplianceAlert::create([
                'transaction_id' => $this->transaction->id,
                'severity' => match (true) {
                    $score >= 0.8 => 'critical',
                    $score >= 0.6 => 'high',
                    $score >= 0.4 => 'medium',
                    default => 'low',
                },
                'status' => 'open',
                'details' => [
                    'risk_score' => $score,
                    'flags' => $this->flags,
                    'action' => $action,
                ],
            ]);
        }
    }
}
```

#### TransactionMonitor (Real-Time Screening)

```php
<?php

namespace App\Services\Finance;

use App\Ai\Agents\Finance\FraudDetectionAgent;
use App\Events\Finance\FraudAlertTriggered;
use App\Events\Finance\TransactionApproved;
use App\Events\Finance\TransactionBlocked;
use App\Models\Finance\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TransactionMonitor
{
    public function screen(Transaction $transaction): array
    {
        DB::beginTransaction();

        try {
            $agent = new FraudDetectionAgent(
                transaction: $transaction,
                customerHistory: $this->loadCustomerHistory($transaction),
            );

            $assessment = $agent->analyze();

            $transaction->update([
                'status' => $assessment['action'] === 'approve' ? 'completed' : 'fraudulent',
                'metadata' => array_merge($transaction->metadata ?? [], [
                    'fraud_assessment' => $assessment,
                ]),
            ]);

            match ($assessment['action']) {
                'approve' => event(new TransactionApproved($transaction)),
                'block' => event(new TransactionBlocked($transaction)),
                'review' => event(new FraudAlertTriggered($transaction, $assessment)),
            };

            DB::commit();

            return $assessment;
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error('Fraud screening failed', [
                'transaction_id' => $transaction->id,
                'error' => $e->getMessage(),
            ]);

            throw $e;
        }
    }

    protected function loadCustomerHistory(Transaction $transaction): array
    {
        $account = $transaction->account;
        $thirtyDaysAgo = now()->subDays(30);

        $recentTransactions = Transaction::where('account_id', $account->id)
            ->where('created_at', '>=', $thirtyDaysAgo)
            ->get();

        return [
            'account_age_days' => $account->created_at->diffInDays(now()),
            'average_amount' => $recentTransactions->avg('amount'),
            'max_amount' => $recentTransactions->max('amount'),
            'transaction_count_30d' => $recentTransactions->count(),
            'chargeback_count' => $recentTransactions->where('type', 'chargeback')->count(),
            'total_volume_30d' => $recentTransactions->sum('amount'),
        ];
    }
}
```

---

### 28.3 Transaction Monitoring & Alerting

Transaction monitoring agents scan all financial activity for anomalies. They compare each transaction against historical baselines, peer-group averages, and configurable thresholds.

#### The TransactionMonitoringAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\Transaction;
use App\Notifications\Finance\AnomalyAlertNotification;
use App\Notifications\Finance\ThresholdBreachNotification;
use Illuminate\Support\Facades\Notification;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class TransactionMonitoringAgent implements Agent
{
    use Promptable;

    protected array $anomalies = [];

    protected array $thresholds = [
        'amount_multiplier' => 3.0,
        'frequency_window_minutes' => 15,
        'max_transactions_per_window' => 5,
        'max_daily_total' => 50000,
        'max_single_amount' => 10000,
    ];

    public function __construct(
        protected array $batchTransactions = [],
        protected ?array $customThresholds = null,
    ) {
        if ($customThresholds) {
            $this->thresholds = array_merge($this->thresholds, $customThresholds);
        }
    }

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a transaction monitoring agent responsible for identifying
anomalous financial activity. Analyze the provided transaction batch
against the configured thresholds and historical patterns.

Flag transactions that exhibit:
- Amount significantly above customer's normal range
- Unusual frequency patterns
- Transactions outside normal business hours
- Rapid successive transactions of similar amounts
- Transactions from unusual geographic locations
- Round-dollar amounts just below reporting thresholds

For each anomaly, provide:
- The transaction ID
- Anomaly type
- Severity (low / medium / high)
- Explanation
- Recommended action
PROMPT;
    }

    public function monitor(): array
    {
        $this->runThresholdAnalysis();
        $this->runPatternDetection();
        $aiAssessment = $this->runAiAnalysis();

        $allAnomalies = array_merge($this->anomalies, $aiAssessment['anomalies'] ?? []);

        if (! empty($allAnomalies)) {
            $this->dispatchAlerts($allAnomalies);
        }

        return [
            'total_transactions' => count($this->batchTransactions),
            'anomalies_found' => count($allAnomalies),
            'anomalies' => $allAnomalies,
            'ai_summary' => $aiAssessment['summary'] ?? null,
        ];
    }

    protected function runThresholdAnalysis(): void
    {
        $dailyTotals = [];
        $windowCounts = [];

        foreach ($this->batchTransactions as $txn) {
            $accountId = $txn['account_id'];
            $dateKey = $txn['created_at']->format('Y-m-d');
            $dailyTotals[$accountId][$dateKey] = ($dailyTotals[$accountId][$dateKey] ?? 0) + $txn['amount'];

            if ($txn['amount'] > $this->thresholds['max_single_amount']) {
                $this->anomalies[] = [
                    'transaction_id' => $txn['id'],
                    'type' => 'single_amount_threshold',
                    'severity' => 'high',
                    'message' => "Transaction amount \${$txn['amount']} exceeds single transaction limit of \${$this->thresholds['max_single_amount']}",
                ];
            }
        }

        foreach ($dailyTotals as $accountId => $dates) {
            foreach ($dates as $date => $total) {
                if ($total > $this->thresholds['max_daily_total']) {
                    $this->anomalies[] = [
                        'transaction_id' => null,
                        'account_id' => $accountId,
                        'type' => 'daily_total_threshold',
                        'severity' => 'medium',
                        'message' => "Account {$accountId} daily total \${$total} exceeds limit of \${$this->thresholds['max_daily_total']} on {$date}",
                    ];
                }
            }
        }

        usort($this->batchTransactions, fn ($a, $b) => strtotime($a['created_at']) <=> strtotime($b['created_at']));
        $windowStart = now()->subMinutes($this->thresholds['frequency_window_minutes']);

        foreach ($this->batchTransactions as $txn) {
            $accountId = $txn['account_id'];
            $key = "{$accountId}";

            if (! isset($windowCounts[$key])) {
                $windowCounts[$key] = 0;
                $windowCounts["{$key}_start"] = $txn['created_at'];
            }

            $windowCounts[$key]++;

            if ($windowCounts[$key] > $this->thresholds['max_transactions_per_window']) {
                $this->anomalies[] = [
                    'transaction_id' => $txn['id'],
                    'account_id' => $accountId,
                    'type' => 'velocity_anomaly',
                    'severity' => 'high',
                    'message' => "Account {$accountId} exceeded {$this->thresholds['max_transactions_per_window']} transactions in {$this->thresholds['frequency_window_minutes']} minutes",
                ];
            }
        }
    }

    protected function runPatternDetection(): void
    {
        $grouped = collect($this->batchTransactions)->groupBy('account_id');

        foreach ($grouped as $accountId => $txns) {
            $amounts = $txns->pluck('amount')->filter()->values();
            if ($amounts->count() < 3) {
                continue;
            }

            $mean = $amounts->avg();
            $stdDev = sqrt($amounts->map(fn ($v) => pow($v - $mean, 2))->sum() / max($amounts->count() - 1, 1));

            foreach ($txns as $txn) {
                if ($stdDev > 0 && abs($txn['amount'] - $mean) > $this->thresholds['amount_multiplier'] * $stdDev) {
                    $this->anomalies[] = [
                        'transaction_id' => $txn['id'],
                        'account_id' => $accountId,
                        'type' => 'statistical_outlier',
                        'severity' => 'medium',
                        'message' => "Transaction amount \${$txn['amount']} is {$this->thresholds['amount_multiplier']} standard deviations above account mean of \${$mean}",
                    ];
                }
            }
        }
    }

    protected function runAiAnalysis(): array
    {
        $response = $this->prompt(json_encode([
            'thresholds' => $this->thresholds,
            'transaction_batch' => $this->batchTransactions,
            'rule_anomalies' => $this->anomalies,
        ]));

        return $response->json() ?? ['anomalies' => [], 'summary' => null];
    }

    protected function dispatchAlerts(array $anomalies): void
    {
        $admins = \App\Models\User::role('compliance-officer')->get();

        $criticalAnomalies = array_filter($anomalies, fn ($a) => ($a['severity'] ?? 'low') === 'high');

        if (! empty($criticalAnomalies)) {
            Notification::send($admins, new ThresholdBreachNotification($criticalAnomalies));
        }

        Notification::send($admins, new AnomalyAlertNotification([
            'total_anomalies' => count($anomalies),
            'severity_breakdown' => collect($anomalies)->groupBy('severity')->map->count()->toArray(),
            'summary' => $anomalies,
        ]));
    }
}
```

---

### 28.4 KYC/AML Verification Agents

Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance requires verifying customer identity, screening against sanctions and watchlists, and assigning a risk profile before account activation.

#### The KycVerificationAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\KycDocument;
use App\Models\Finance\KycVerification;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class KycVerificationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected KycVerification $verification,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a KYC/AML verification agent. Your role is to process customer
identity verification requests. You must:

1. Analyze submitted identity documents for authenticity
2. Verify extracted data matches customer-provided information
3. Screen the customer against global watchlists and sanctions lists
4. Assess overall risk profile based on jurisdiction, document quality,
   and watchlist hits
5. Recommend acceptance, manual review, or rejection with clear reasoning

For each verification, output:
- identity_verified (boolean)
- document_authenticity_score (0.0 - 1.0)
- watchlist_matches (array of match details)
- risk_profile (low / medium / high)
- recommended_action (approve / manual_review / reject)
- review_notes (string)
PROMPT;
    }

    public function verify(): array
    {
        $documentAnalysis = $this->analyzeDocuments();
        $watchlistResult = $this->checkWatchlists();

        $aiAssessment = $this->assessWithAi($documentAnalysis, $watchlistResult);

        $riskProfile = $this->determineRiskProfile($documentAnalysis, $watchlistResult, $aiAssessment);

        $action = match (true) {
            $riskProfile['level'] === 'high' => 'reject',
            $riskProfile['level'] === 'medium' => 'manual_review',
            ! $documentAnalysis['all_documents_valid'] => 'manual_review',
            default => 'approve',
        };

        $this->verification->update([
            'status' => $action === 'approve' ? 'verified' : ($action === 'reject' ? 'rejected' : 'pending_review'),
            'risk_profile' => $riskProfile['level'],
            'risk_score' => $riskProfile['score'],
            'verification_data' => [
                'document_analysis' => $documentAnalysis,
                'watchlist_results' => $watchlistResult,
                'ai_assessment' => $aiAssessment,
            ],
            'completed_at' => now(),
        ]);

        return [
            'verification_id' => $this->verification->id,
            'status' => $action,
            'risk_profile' => $riskProfile,
            'document_authenticity' => $documentAnalysis['authenticity_score'],
            'watchlist_matches' => $watchlistResult['matches'],
        ];
    }

    protected function analyzeDocuments(): array
    {
        $documents = $this->verification->documents;

        $results = [];
        $allValid = true;
        $totalScore = 0;

        foreach ($documents as $document) {
            $analysis = $this->analyzeSingleDocument($document);
            $results[] = $analysis;
            $totalScore += $analysis['score'];
            if (! $analysis['valid']) {
                $allValid = false;
            }
        }

        return [
            'documents' => $results,
            'all_documents_valid' => $allValid,
            'authenticity_score' => count($documents) > 0 ? $totalScore / count($documents) : 0,
        ];
    }

    protected function analyzeSingleDocument(KycDocument $document): array
    {
        $extractedData = $this->extractDocumentData($document);

        $dataMatches = $this->compareExtractedData($extractedData);

        $score = match (true) {
            $dataMatches && $document->file_size > 50000 => 0.95,
            $dataMatches => 0.80,
            $document->file_size > 50000 => 0.60,
            default => 0.30,
        };

        return [
            'document_id' => $document->id,
            'type' => $document->document_type,
            'valid' => $score >= 0.60,
            'score' => $score,
            'extracted_data' => $extractedData,
            'data_matches_provided' => $dataMatches,
        ];
    }

    protected function extractDocumentData(KycDocument $document): array
    {
        return [
            'document_number' => substr(md5($document->id), 0, 12),
            'expiry_date' => $document->expiry_date?->format('Y-m-d'),
            'issuing_country' => $document->issuing_country,
            'has_face_match' => $document->face_confidence >= 0.80,
        ];
    }

    protected function compareExtractedData(array $extracted): bool
    {
        return $extracted['has_face_match'] && $extracted['expiry_date'] > now()->format('Y-m-d');
    }

    protected function checkWatchlists(): array
    {
        $customer = $this->verification->customer;

        $matches = [];

        $watchlistEntries = \App\Models\Finance\WatchlistEntry::active()->get();

        foreach ($watchlistEntries as $entry) {
            $nameSimilarity = $this->nameSimilarity(
                $customer->full_name,
                $entry->full_name
            );

            if ($nameSimilarity >= 0.85) {
                $matches[] = [
                    'list_name' => $entry->list_name,
                    'matched_field' => 'full_name',
                    'similarity' => $nameSimilarity,
                    'entry_details' => $entry->details,
                ];
            }

            if ($entry->country && strtolower($customer->country) === strtolower($entry->country)) {
                $matches[] = [
                    'list_name' => $entry->list_name,
                    'matched_field' => 'country',
                    'similarity' => 1.0,
                    'entry_details' => $entry->details,
                ];
            }
        }

        return [
            'screened_at' => now()->toIso8601String(),
            'lists_checked' => $watchlistEntries->count(),
            'matches' => $matches,
            'has_match' => ! empty($matches),
        ];
    }

    protected function nameSimilarity(string $name1, string $name2): float
    {
        $name1 = strtolower(trim($name1));
        $name2 = strtolower(trim($name2));

        if ($name1 === $name2) {
            return 1.0;
        }

        $parts1 = explode(' ', $name1);
        $parts2 = explode(' ', $name2);
        $matches = array_intersect($parts1, $parts2);

        return count($matches) / max(count($parts1), count($parts2));
    }

    protected function assessWithAi(array $documentAnalysis, array $watchlistResult): array
    {
        $response = $this->prompt(json_encode([
            'verification_id' => $this->verification->id,
            'customer_data' => $this->verification->customer->toArray(),
            'document_analysis' => $documentAnalysis,
            'watchlist_results' => $watchlistResult,
        ]));

        return $response->json() ?? [
            'identity_verified' => false,
            'confidence' => 'low',
        ];
    }

    protected function determineRiskProfile(array $docs, array $watchlist, array $ai): array
    {
        $score = 0.0;

        $score += (1 - ($docs['authenticity_score'] ?? 0)) * 0.4;

        if ($watchlist['has_match']) {
            $score += 0.4;
        }

        if (($ai['confidence'] ?? 'low') === 'high') {
            $score -= 0.1;
        }

        $score = max(0.0, min(1.0, $score));

        return [
            'level' => match (true) {
                $score >= 0.7 => 'high',
                $score >= 0.3 => 'medium',
                default => 'low',
            },
            'score' => round($score, 4),
        ];
    }
}
```

#### Supporting KYC Models

```php
<?php

namespace App\Models\Finance;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class KycVerification extends Model
{
    protected $table = 'finance_kyc_verifications';

    protected $fillable = [
        'user_id',
        'status',
        'risk_profile',
        'risk_score',
        'verification_data',
        'completed_at',
    ];

    protected $casts = [
        'verification_data' => 'array',
        'completed_at' => 'datetime',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function documents(): HasMany
    {
        return $this->hasMany(KycDocument::class, 'verification_id');
    }
}

class KycDocument extends Model
{
    protected $table = 'finance_kyc_documents';

    protected $fillable = [
        'verification_id',
        'document_type',
        'file_path',
        'file_size',
        'issuing_country',
        'expiry_date',
        'face_confidence',
        'status',
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'face_confidence' => 'float',
    ];

    public function verification(): BelongsTo
    {
        return $this->belongsTo(KycVerification::class, 'verification_id');
    }
}

class WatchlistEntry extends Model
{
    protected $table = 'finance_watchlist_entries';

    protected $fillable = [
        'list_name',
        'full_name',
        'aliases',
        'country',
        'date_of_birth',
        'category',
        'details',
        'is_active',
        'source',
    ];

    protected $casts = [
        'aliases' => 'array',
        'details' => 'array',
        'date_of_birth' => 'date',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
```

---

### 28.5 Credit Scoring Pipelines

Credit scoring evaluates an applicant's creditworthiness by aggregating financial data, applying a scoring model, and producing a decision with rationale.

#### The CreditScoringAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\CreditApplication;
use App\Models\Finance\CreditScore;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class CreditScoringAgent implements Agent
{
    use Promptable;

    protected array $dataPoints = [];

    public function __construct(
        protected CreditApplication $application,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a credit scoring agent. Evaluate credit applications using
financial data and AI analysis.

Consider these factors:
- Debt-to-income ratio
- Payment history and delinquencies
- Credit utilization
- Length of credit history
- Recent credit inquiries
- Employment stability
- Industry and economic conditions

Output a structured decision with:
- credit_score (300 - 850)
- risk_category (excellent / good / fair / poor / bad)
- approved_amount (nullable, based on score)
- interest_rate (nullable)
- decision_rationale (detailed explanation)
- recommended_actions for the applicant to improve score
PROMPT;
    }

    public function evaluate(): array
    {
        $this->dataPoints = $this->gatherFinancialData();

        $baseScore = $this->calculateBaseScore();

        $aiAdjustment = $this->getAiScoreAdjustment();

        $finalScore = max(300, min(850, $baseScore + $aiAdjustment['adjustment']));

        $decision = $this->makeDecision($finalScore);

        $this->recordScore($finalScore, $decision, $aiAdjustment);

        return [
            'credit_score' => (int) $finalScore,
            'risk_category' => $this->categorizeRisk($finalScore),
            'approved_amount' => $decision['amount'],
            'interest_rate' => $decision['rate'],
            'data_points' => $this->dataPoints,
            'ai_adjustment' => $aiAdjustment,
            'rationale' => $aiAdjustment['rationale'] ?? null,
        ];
    }

    protected function gatherFinancialData(): array
    {
        $applicant = $this->application->applicant;

        $totalIncome = \App\Models\Finance\IncomeRecord::where('user_id', $applicant->id)
            ->where('verified', true)
            ->sum('monthly_amount');

        $totalDebt = \App\Models\Finance\Liability::where('user_id', $applicant->id)
            ->where('status', 'active')
            ->sum('monthly_payment');

        $activeCreditLines = \App\Models\Finance\CreditAccount::where('user_id', $applicant->id)
            ->where('status', 'active')
            ->get();

        $totalCreditLimit = $activeCreditLines->sum('credit_limit');
        $totalBalance = $activeCreditLines->sum('current_balance');
        $utilization = $totalCreditLimit > 0 ? $totalBalance / $totalCreditLimit : 0;

        $delinquencies = \App\Models\Finance\Delinquency::where('user_id', $applicant->id)
            ->where('status', 'unresolved')
            ->count();

        return [
            'monthly_income' => $totalIncome,
            'monthly_debt' => $totalDebt,
            'dti_ratio' => $totalIncome > 0 ? round($totalDebt / $totalIncome, 4) : 1,
            'credit_utilization' => round($utilization, 4),
            'total_credit_limit' => $totalCreditLimit,
            'total_balance' => $totalBalance,
            'delinquencies' => $delinquencies,
            'active_credit_lines' => $activeCreditLines->count(),
            'credit_history_years' => $activeCreditLines->min('opened_at')
                ? $activeCreditLines->min('opened_at')->diffInYears(now())
                : 0,
            'recent_inquiries' => \App\Models\Finance\CreditInquiry::where('user_id', $applicant->id)
                ->where('created_at', '>=', now()->subMonths(6))
                ->count(),
        ];
    }

    protected function calculateBaseScore(): int
    {
        $score = 650;

        $dti = $this->dataPoints['dti_ratio'];
        if ($dti < 0.20) {
            $score += 50;
        } elseif ($dti < 0.36) {
            $score += 25;
        } elseif ($dti > 0.50) {
            $score -= 50;
        }

        $utilization = $this->dataPoints['credit_utilization'];
        if ($utilization < 0.10) {
            $score += 40;
        } elseif ($utilization < 0.30) {
            $score += 20;
        } elseif ($utilization > 0.50) {
            $score -= 30;
        }

        $score -= $this->dataPoints['delinquencies'] * 35;

        $score += min(40, $this->dataPoints['credit_history_years'] * 5);

        $score -= min(30, $this->dataPoints['recent_inquiries'] * 10);

        return max(300, min(850, $score));
    }

    protected function getAiScoreAdjustment(): array
    {
        $response = $this->prompt(json_encode([
            'application' => $this->application->toArray(),
            'financial_data' => $this->dataPoints,
            'base_score' => $this->calculateBaseScore(),
        ]));

        return $response->json() ?? [
            'adjustment' => 0,
            'rationale' => 'No AI adjustment applied.',
            'confidence' => 'medium',
        ];
    }

    protected function makeDecision(int $score): array
    {
        return match (true) {
            $score >= 750 => [
                'amount' => $this->application->requested_amount,
                'rate' => 4.99,
                'approved' => true,
            ],
            $score >= 700 => [
                'amount' => min($this->application->requested_amount, 50000),
                'rate' => 7.99,
                'approved' => true,
            ],
            $score >= 650 => [
                'amount' => min($this->application->requested_amount, 25000),
                'rate' => 12.99,
                'approved' => true,
            ],
            $score >= 600 => [
                'amount' => min($this->application->requested_amount, 10000),
                'rate' => 18.99,
                'approved' => true,
            ],
            default => [
                'amount' => null,
                'rate' => null,
                'approved' => false,
            ],
        };
    }

    protected function categorizeRisk(int $score): string
    {
        return match (true) {
            $score >= 800 => 'excellent',
            $score >= 740 => 'very_good',
            $score >= 670 => 'good',
            $score >= 580 => 'fair',
            $score >= 500 => 'poor',
            default => 'bad',
        };
    }

    protected function recordScore(int $score, array $decision, array $aiAdjustment): void
    {
        CreditScore::create([
            'application_id' => $this->application->id,
            'user_id' => $this->application->user_id,
            'score' => $score,
            'data_points' => $this->dataPoints,
            'ai_adjustment' => $aiAdjustment['adjustment'],
            'decision' => $decision['approved'] ? 'approved' : 'declined',
            'approved_amount' => $decision['amount'],
            'interest_rate' => $decision['rate'],
        ]);
    }
}
```

---

### 28.6 Trading Signal Automation

Trading signal agents ingest market data â€” prices, volumes, economic indicators â€” and generate buy, sell, or hold signals with assigned conviction levels and risk parameters.

#### The TradingSignalAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\MarketData;
use App\Models\Finance\TradingSignal;
use Illuminate\Support\Facades\Http;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class TradingSignalAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected string $symbol,
        protected string $timeframe = '1h',
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a trading signal agent. Analyze market data and generate
actionable trading signals. Use both technical indicators and
AI-powered pattern recognition.

Consider:
- Price action and trend direction
- Support and resistance levels
- Volume profile and liquidity
- Volatility regimes
- Technical indicator divergences
- Market regime (trending / ranging / volatile)
- Current news sentiment where available

Output a structured signal with:
- signal_type (buy / sell / hold / strong_buy / strong_sell)
- conviction_level (0.0 - 1.0)
- entry_price (float)
- stop_loss (float)
- take_profit (float)
- risk_reward_ratio (float)
- time_horizon (short / medium / long)
- technical_rationale (detailed analysis)
- key_levels (array of support/resistance levels)
PROMPT;
    }

    public function generateSignal(): array
    {
        $marketData = $this->fetchMarketData();
        $indicators = $this->calculateIndicators($marketData);
        $riskAssessment = $this->assessRisk($marketData, $indicators);

        $aiSignal = $this->getAiSignal($marketData, $indicators);

        $finalSignal = $this->consolidateSignal($indicators, $aiSignal, $riskAssessment);

        $this->persistSignal($finalSignal, $marketData);

        return $finalSignal;
    }

    protected function fetchMarketData(): array
    {
        $cached = MarketData::where('symbol', $this->symbol)
            ->where('timeframe', $this->timeframe)
            ->where('fetched_at', '>=', now()->subMinute())
            ->first();

        if ($cached) {
            return $cached->data;
        }

        $response = Http::withOptions(['verify' => false])
            ->get("https://api.example.com/v1/market/data", [
                'symbol' => $this->symbol,
                'timeframe' => $this->timeframe,
                'limit' => 200,
            ]);

        $data = $response->json();

        MarketData::create([
            'symbol' => $this->symbol,
            'timeframe' => $this->timeframe,
            'data' => $data,
            'fetched_at' => now(),
        ]);

        return $data;
    }

    protected function calculateIndicators(array $marketData): array
    {
        $prices = collect($marketData['prices'] ?? []);
        $volumes = collect($marketData['volumes'] ?? []);

        if ($prices->isEmpty()) {
            return [
                'sma_20' => null,
                'sma_50' => null,
                'rsi_14' => 50,
                'volume_trend' => 'neutral',
                'volatility' => 0,
            ];
        }

        $sma20 = $prices->take(-20)->avg();
        $sma50 = $prices->take(-50)->avg();

        $gains = 0;
        $losses = 0;
        $changes = [];
        for ($i = 1; $i < $prices->count() && $i < 14; $i++) {
            $change = $prices[$i] - $prices[$i - 1];
            $changes[] = $change;
            if ($change >= 0) {
                $gains += $change;
            } else {
                $losses += abs($change);
            }
        }
        $avgGain = $gains / max(count($changes), 1);
        $avgLoss = $losses / max(count($changes), 1);
        $rsi = $avgLoss > 0 ? 100 - (100 / (1 + ($avgGain / $avgLoss))) : 100;

        $volumeAvg = $volumes->take(-20)->avg();
        $volumeRecent = $volumes->take(-5)->avg();
        $volumeTrend = $volumeAvg > 0
            ? ($volumeRecent / $volumeAvg > 1.2 ? 'increasing' : ($volumeRecent / $volumeAvg < 0.8 ? 'decreasing' : 'neutral'))
            : 'neutral';

        $returns = collect($changes)->map(fn ($c) => $c / max(abs($prices[0]), 0.01));
        $volatility = sqrt($returns->map(fn ($r) => $r * $r)->sum() / max(count($returns), 1));

        return [
            'current_price' => $prices->last(),
            'sma_20' => $sma20,
            'sma_50' => $sma50,
            'rsi_14' => round($rsi, 2),
            'volume_trend' => $volumeTrend,
            'volatility' => round($volatility, 6),
            'trend_direction' => $sma20 > $sma50 ? 'bullish' : 'bearish',
        ];
    }

    protected function assessRisk(array $marketData, array $indicators): array
    {
        $volatility = $indicators['volatility'] ?? 0;

        $riskLevel = match (true) {
            $volatility > 0.05 => 'high',
            $volatility > 0.02 => 'medium',
            default => 'low',
        };

        $positionSize = match ($riskLevel) {
            'high' => 0.05,
            'medium' => 0.10,
            'low' => 0.20,
        };

        return [
            'risk_level' => $riskLevel,
            'recommended_position_size' => $positionSize,
            'volatility_regime' => $volatility > 0.03 ? 'high_volatility' : 'normal',
        ];
    }

    protected function getAiSignal(array $marketData, array $indicators): array
    {
        $response = $this->prompt(json_encode([
            'symbol' => $this->symbol,
            'timeframe' => $this->timeframe,
            'indicators' => $indicators,
            'market_data_summary' => [
                'price_range' => [
                    'high' => max(collect($marketData['prices'] ?? [])->toArray()),
                    'low' => min(collect($marketData['prices'] ?? [])->toArray()),
                ],
                'volume_trend' => $indicators['volume_trend'],
            ],
        ]));

        return $response->json() ?? [
            'signal_type' => 'hold',
            'conviction_level' => 0.3,
        ];
    }

    protected function consolidateSignal(array $indicators, array $aiSignal, array $risk): array
    {
        $technicalSignal = $this->getTechnicalSignal($indicators);

        $aiWeight = 0.6;
        $technicalWeight = 0.4;

        $score = ($aiWeight * $this->signalToScore($aiSignal['signal_type'] ?? 'hold'))
            + ($technicalWeight * $technicalSignal['score']);

        $finalType = $this->scoreToSignal($score);

        $entryPrice = $indicators['current_price'] ?? 0;
        $stopLoss = match ($finalType) {
            'buy', 'strong_buy' => $entryPrice * 0.97,
            'sell', 'strong_sell' => $entryPrice * 1.03,
            default => $entryPrice * 0.99,
        };
        $takeProfit = match ($finalType) {
            'buy', 'strong_buy' => $entryPrice * 1.06,
            'sell', 'strong_sell' => $entryPrice * 0.94,
            default => $entryPrice * 1.01,
        };

        $riskReward = abs(($takeProfit - $entryPrice) / max(abs($stopLoss - $entryPrice), 0.01));

        return [
            'symbol' => $this->symbol,
            'timeframe' => $this->timeframe,
            'signal_type' => $finalType,
            'conviction_level' => round(abs($score), 2),
            'entry_price' => round($entryPrice, 4),
            'stop_loss' => round($stopLoss, 4),
            'take_profit' => round($takeProfit, 4),
            'risk_reward_ratio' => round($riskReward, 2),
            'time_horizon' => $this->timeframe === '1d' ? 'long' : ($this->timeframe === '1h' ? 'medium' : 'short'),
            'risk_level' => $risk['risk_level'],
            'recommended_position_size' => $risk['recommended_position_size'],
            'generated_at' => now()->toIso8601String(),
        ];
    }

    protected function getTechnicalSignal(array $indicators): array
    {
        $score = 0;

        if ($indicators['trend_direction'] === 'bullish') {
            $score += 0.2;
        } else {
            $score -= 0.2;
        }

        $rsi = $indicators['rsi_14'] ?? 50;
        if ($rsi < 30) {
            $score += 0.3;
        } elseif ($rsi > 70) {
            $score -= 0.3;
        }

        if ($indicators['volume_trend'] === 'increasing' && $score > 0) {
            $score += 0.1;
        } elseif ($indicators['volume_trend'] === 'decreasing' && $score < 0) {
            $score += 0.1;
        }

        return ['score' => max(-1, min(1, $score))];
    }

    protected function signalToScore(string $signal): float
    {
        return match ($signal) {
            'strong_buy' => 1.0,
            'buy' => 0.6,
            'hold' => 0.0,
            'sell' => -0.6,
            'strong_sell' => -1.0,
            default => 0.0,
        };
    }

    protected function scoreToSignal(float $score): string
    {
        return match (true) {
            $score >= 0.8 => 'strong_buy',
            $score >= 0.3 => 'buy',
            $score <= -0.8 => 'strong_sell',
            $score <= -0.3 => 'sell',
            default => 'hold',
        };
    }

    protected function persistSignal(array $signal, array $marketData): void
    {
        TradingSignal::create([
            'symbol' => $this->symbol,
            'timeframe' => $this->timeframe,
            'signal_type' => $signal['signal_type'],
            'conviction_level' => $signal['conviction_level'],
            'entry_price' => $signal['entry_price'],
            'stop_loss' => $signal['stop_loss'],
            'take_profit' => $signal['take_profit'],
            'risk_reward_ratio' => $signal['risk_reward_ratio'],
            'metadata' => [
                'indicators' => $marketData,
                'risk_assessment' => [
                    'risk_level' => $signal['risk_level'],
                    'position_size' => $signal['recommended_position_size'],
                ],
            ],
            'generated_at' => now(),
        ]);
    }
}
```

---

### 28.7 Portfolio Management Agents

Portfolio management agents track asset allocations, monitor drift from target weights, generate rebalance orders, and produce performance summaries.

#### The PortfolioAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\Portfolio;
use App\Models\Finance\PortfolioHolding;
use App\Models\Finance\RebalanceTrade;
use Illuminate\Support\Facades\DB;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class PortfolioAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Portfolio $portfolio,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a portfolio management agent. You monitor investment portfolios,
identify allocation drift, suggest rebalancing trades, and generate
performance reports.

Consider:
- Current vs target asset allocation
- Drift thresholds and rebalancing bands
- Tax implications of selling positions
- Transaction costs
- Market conditions and volatility
- Rebalancing frequency guidelines

Output a structured analysis with:
- portfolio_summary (total value, return metrics)
- allocation_analysis (current vs target, drift percentages)
- rebalance_recommendations (buy/sell orders with amounts)
- performance_report (period return, benchmark comparison)
- risk_metrics (volatility, sharpe ratio, max drawdown)
- rebalance_urgency (low / medium / high)
PROMPT;
    }

    public function analyze(): array
    {
        $holdings = $this->portfolio->holdings()->with('asset')->get();
        $totalValue = $holdings->sum(fn ($h) => $h->quantity * $h->current_price);

        $allocation = $this->calculateAllocation($holdings, $totalValue);
        $drift = $this->calculateDrift($allocation);
        $performance = $this->calculatePerformance($holdings);
        $riskMetrics = $this->calculateRiskMetrics($holdings);

        $rebalanceActions = [];
        $urgency = 'low';

        $hasSignificantDrift = collect($drift)->contains(fn ($d) => abs($d['drift_pct']) > 5);

        if ($hasSignificantDrift) {
            $rebalanceActions = $this->generateRebalanceOrders($drift, $totalValue);
            $urgency = collect($drift)->contains(fn ($d) => abs($d['drift_pct']) > 10) ? 'high' : 'medium';
        }

        $aiReport = $this->getAiReport($totalValue, $allocation, $performance, $riskMetrics);

        return [
            'portfolio_id' => $this->portfolio->id,
            'total_value' => round($totalValue, 2),
            'allocation' => $allocation,
            'drift_analysis' => $drift,
            'performance' => $performance,
            'risk_metrics' => $riskMetrics,
            'rebalance_urgency' => $urgency,
            'rebalance_orders' => $rebalanceActions,
            'ai_summary' => $aiReport,
            'analyzed_at' => now()->toIso8601String(),
        ];
    }

    protected function calculateAllocation($holdings, float $totalValue): array
    {
        $allocation = [];

        foreach ($holdings as $holding) {
            $assetClass = $holding->asset->asset_class ?? 'other';
            $marketValue = $holding->quantity * $holding->current_price;

            if (! isset($allocation[$assetClass])) {
                $allocation[$assetClass] = [
                    'market_value' => 0,
                    'target_allocation' => $this->portfolio->target_allocation[$assetClass] ?? 0,
                ];
            }

            $allocation[$assetClass]['market_value'] += $marketValue;
        }

        foreach ($allocation as $class => &$data) {
            $data['current_allocation'] = $totalValue > 0
                ? round(($data['market_value'] / $totalValue) * 100, 2)
                : 0;
        }

        return $allocation;
    }

    protected function calculateDrift(array $allocation): array
    {
        $drift = [];

        foreach ($allocation as $class => $data) {
            $current = $data['current_allocation'];
            $target = $data['target_allocation'];
            $drift[$class] = [
                'current_pct' => $current,
                'target_pct' => $target,
                'drift_pct' => round($current - $target, 2),
                'action' => abs($current - $target) > 5 ? 'rebalance' : 'monitor',
            ];
        }

        return $drift;
    }

    protected function calculatePerformance($holdings): array
    {
        $totalCost = 0;
        $totalValue = 0;
        $totalGainLoss = 0;

        foreach ($holdings as $holding) {
            $cost = $holding->average_cost * $holding->quantity;
            $value = $holding->current_price * $holding->quantity;
            $totalCost += $cost;
            $totalValue += $value;
            $totalGainLoss += ($holding->current_price - $holding->average_cost) * $holding->quantity;
        }

        $returnPct = $totalCost > 0 ? ($totalGainLoss / $totalCost) * 100 : 0;

        return [
            'total_cost_basis' => round($totalCost, 2),
            'total_market_value' => round($totalValue, 2),
            'total_gain_loss' => round($totalGainLoss, 2),
            'return_pct' => round($returnPct, 2),
            'period' => 'lifetime',
        ];
    }

    protected function calculateRiskMetrics($holdings): array
    {
        $values = $holdings->pluck('current_price')->filter()->values();

        if ($values->count() < 2) {
            return [
                'volatility' => 0,
                'sharpe_ratio' => 0,
                'max_drawdown' => 0,
                'diversification_score' => $holdings->count(),
            ];
        }

        $mean = $values->avg();
        $variance = $values->map(fn ($v) => pow($v - $mean, 2))->sum() / ($values->count() - 1);
        $volatility = sqrt($variance);
        $sharpe = $volatility > 0 ? ($mean / $volatility) * sqrt(252) : 0;

        $peak = $values->first();
        $drawdown = 0;
        foreach ($values as $v) {
            if ($v > $peak) {
                $peak = $v;
            }
            $dd = ($peak - $v) / $peak;
            if ($dd > $drawdown) {
                $drawdown = $dd;
            }
        }

        return [
            'volatility' => round($volatility, 6),
            'sharpe_ratio' => round($sharpe, 4),
            'max_drawdown' => round($drawdown * 100, 2),
            'num_holdings' => $holdings->count(),
        ];
    }

    protected function generateRebalanceOrders(array $drift, float $totalValue): array
    {
        $orders = [];

        foreach ($drift as $class => $data) {
            $driftAmount = ($data['drift_pct'] / 100) * $totalValue;

            if ($driftAmount > 100) {
                $orders[] = [
                    'asset_class' => $class,
                    'action' => 'sell',
                    'estimated_amount' => round(abs($driftAmount), 2),
                    'reason' => "{$class} is overweight by {$data['drift_pct']}%",
                ];
            } elseif ($driftAmount < -100) {
                $orders[] = [
                    'asset_class' => $class,
                    'action' => 'buy',
                    'estimated_amount' => round(abs($driftAmount), 2),
                    'reason' => "{$class} is underweight by {$data['drift_pct']}%",
                ];
            }
        }

        return $orders;
    }

    protected function getAiReport(float $totalValue, array $allocation, array $performance, array $risk): string
    {
        $response = $this->prompt(json_encode([
            'portfolio_name' => $this->portfolio->name,
            'total_value' => $totalValue,
            'allocation' => $allocation,
            'performance' => $performance,
            'risk_metrics' => $risk,
            'target_allocation' => $this->portfolio->target_allocation,
        ]));

        return $response->text();
    }
}
```

#### Portfolio and Holding Models

```php
<?php

namespace App\Models\Finance;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portfolio extends Model
{
    protected $table = 'finance_portfolios';

    protected $fillable = [
        'user_id',
        'name',
        'description',
        'target_allocation',
        'risk_profile',
        'currency',
        'status',
    ];

    protected $casts = [
        'target_allocation' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function holdings(): HasMany
    {
        return $this->hasMany(PortfolioHolding::class, 'portfolio_id');
    }
}

class PortfolioHolding extends Model
{
    protected $table = 'finance_portfolio_holdings';

    protected $fillable = [
        'portfolio_id',
        'asset_id',
        'quantity',
        'average_cost',
        'current_price',
    ];

    protected $casts = [
        'quantity' => 'decimal:8',
        'average_cost' => 'decimal:4',
        'current_price' => 'decimal:4',
    ];

    public function portfolio(): BelongsTo
    {
        return $this->belongsTo(Portfolio::class);
    }

    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }
}

class RebalanceTrade extends Model
{
    protected $table = 'finance_rebalance_trades';

    protected $fillable = [
        'portfolio_id',
        'order_type',
        'asset_class',
        'amount',
        'status',
        'executed_at',
    ];

    protected $casts = [
        'amount' => 'decimal:4',
        'executed_at' => 'datetime',
    ];
}
```

---

### 28.8 Regulatory Reporting Automation

Regulatory reporting agents aggregate financial data across the platform and generate formatted compliance reports for submission to regulatory bodies.

#### The RegulatoryReportAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\ComplianceAlert;
use App\Models\Finance\RegulatoryReport;
use App\Models\Finance\Transaction;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class RegulatoryReportAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected string $reportType,
        protected string $jurisdiction,
        protected string $periodStart,
        protected string $periodEnd,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a regulatory reporting agent responsible for generating
compliance reports for financial regulators.

You must:
1. Aggregate transaction data for the reporting period
2. Calculate regulatory metrics (total volume, suspicious activity count,
   currency flows, large transaction reports)
3. Format the report according to the jurisdiction's standards
4. Flag any data quality issues or missing information
5. Generate a human-readable summary for compliance officers

Output a structured report with:
- report_metadata (type, period, generated_at)
- aggregated_data (summary statistics)
- regulatory_metrics (jurisdiction-specific calculations)
- suspicious_activity_summary
- data_quality_flags
- report_body (formatted text for filing)
- compliance_officer_summary
PROMPT;
    }

    public function generate(): array
    {
        $data = $this->aggregateData();
        $metrics = $this->calculateRegulatoryMetrics($data);
        $reportBody = $this->formatReport($data, $metrics);

        $aiReview = $this->getAiReview($data, $metrics);

        $report = $this->persistReport($data, $metrics, $reportBody, $aiReview);

        return [
            'report_id' => $report->id,
            'report_type' => $this->reportType,
            'jurisdiction' => $this->jurisdiction,
            'period' => [
                'start' => $this->periodStart,
                'end' => $this->periodEnd,
            ],
            'metrics' => $metrics,
            'ai_review' => $aiReview,
            'report_url' => Storage::url($report->file_path),
            'generated_at' => now()->toIso8601String(),
        ];
    }

    protected function aggregateData(): array
    {
        $transactions = Transaction::whereBetween('created_at', [$this->periodStart, $this->periodEnd])->get();

        return [
            'total_transactions' => $transactions->count(),
            'total_volume' => $transactions->sum('amount'),
            'by_currency' => $transactions->groupBy('currency')
                ->map(fn ($txns) => [
                    'count' => $txns->count(),
                    'volume' => $txns->sum('amount'),
                ])->toArray(),
            'by_status' => $transactions->groupBy('status')
                ->map(fn ($txns) => $txns->count())->toArray(),
            'by_type' => $transactions->groupBy('type')
                ->map(fn ($txns) => [
                    'count' => $txns->count(),
                    'volume' => $txns->sum('amount'),
                ])->toArray(),
            'large_transactions' => $transactions->where('amount', '>=', 10000)->values()->toArray(),
            'unique_accounts' => $transactions->pluck('account_id')->unique()->count(),
            'suspicious_count' => $transactions->where('status', 'fraudulent')->count(),
        ];
    }

    protected function calculateRegulatoryMetrics(array $data): array
    {
        $metrics = [
            'total_volume_usd' => $data['total_volume'],
            'total_transactions' => $data['total_transactions'],
            'average_transaction_size' => $data['total_transactions'] > 0
                ? round($data['total_volume'] / $data['total_transactions'], 2) : 0,
            'unique_customers' => $data['unique_accounts'],
            'large_transaction_reports' => count($data['large_transactions']),
            'suspicious_activity_reports' => $data['suspicious_count'],
            'currency_breakdown' => $data['by_currency'],
        ];

        if (in_array($this->jurisdiction, ['US', 'CA', 'AU'])) {
            $metrics['sar_required'] = $data['suspicious_count'] > 0;
            $metrics['sar_count'] = $data['suspicious_count'];
        }

        if (in_array($this->jurisdiction, ['EU', 'UK'])) {
            $metrics['high_value_transactions'] = count(array_filter(
                $data['large_transactions'],
                fn ($t) => $t['amount'] >= 10000
            ));
            $metrics['cross_border_count'] = 0;
        }

        return $metrics;
    }

    protected function formatReport(array $data, array $metrics): string
    {
        $header = strtoupper("Regulatory Report - {$this->jurisdiction}");
        $typeLine = "Report Type: {$this->reportType}";
        $periodLine = "Period: {$this->periodStart} to {$this->periodEnd}";
        $generatedLine = "Generated: " . now()->toIso8601String();

        $separator = str_repeat('=', 80);

        $summary = "SUMMARY\n{$separator}\n"
            . "Total Volume: \${$metrics['total_volume_usd']}\n"
            . "Total Transactions: {$metrics['total_transactions']}\n"
            . "Avg Transaction: \${$metrics['average_transaction_size']}\n"
            . "Suspicious Activities: {$metrics['suspicious_activity_reports']}\n";

        $body = "{$separator}\n{$header}\n{$typeLine}\n{$periodLine}\n{$generatedLine}\n{$separator}\n\n"
            . $summary . "\n"
            . "{$separator}\nDETAILED BREAKDOWN\n{$separator}\n\n"
            . "By Currency:\n" . json_encode($metrics['currency_breakdown'] ?? [], JSON_PRETTY_PRINT) . "\n\n"
            . "By Type:\n" . json_encode($data['by_type'], JSON_PRETTY_PRINT) . "\n\n"
            . "Large Transactions (>= \$10,000): {$metrics['large_transaction_reports']} reports required.\n";

        if (isset($metrics['sar_required']) && $metrics['sar_required']) {
            $body .= "\n** SAR Filing Required **\n";
            $body .= "Suspicious Activity Reports must be filed for {$metrics['sar_count']} transactions.\n";
        }

        return $body;
    }

    protected function getAiReview(array $data, array $metrics): array
    {
        $response = $this->prompt(json_encode([
            'report_type' => $this->reportType,
            'jurisdiction' => $this->jurisdiction,
            'aggregated_data' => $data,
            'calculated_metrics' => $metrics,
        ]));

        return $response->json() ?? [
            'data_quality' => 'acceptable',
            'issues' => [],
            'recommendations' => [],
        ];
    }

    protected function persistReport(array $data, array $metrics, string $body, array $aiReview): RegulatoryReport
    {
        $filename = "regulatory/{$this->jurisdiction}/{$this->reportType}_{$this->periodStart}_{$this->periodEnd}.txt";

        Storage::put($filename, $body);

        return RegulatoryReport::create([
            'report_type' => $this->reportType,
            'jurisdiction' => $this->jurisdiction,
            'period_start' => $this->periodStart,
            'period_end' => $this->periodEnd,
            'file_path' => $filename,
            'aggregated_data' => $data,
            'metrics' => $metrics,
            'ai_review' => $aiReview,
            'status' => 'generated',
            'generated_at' => now(),
        ]);
    }
}

class RegulatoryReport extends Model
{
    protected $table = 'finance_regulatory_reports';

    protected $fillable = [
        'report_type',
        'jurisdiction',
        'period_start',
        'period_end',
        'file_path',
        'aggregated_data',
        'metrics',
        'ai_review',
        'status',
        'filed_at',
        'filing_reference',
        'generated_at',
    ];

    protected $casts = [
        'aggregated_data' => 'array',
        'metrics' => 'array',
        'ai_review' => 'array',
        'period_start' => 'date',
        'period_end' => 'date',
        'filed_at' => 'datetime',
        'generated_at' => 'datetime',
    ];
}
```

---

### 28.9 Payment Processing Automation

Payment processing agents handle the operational lifecycle of payments: reconciliation between internal records and bank statements, dispute resolution, and settlement tracking.

#### PaymentReconciliationAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\Payment;
use App\Models\Finance\ReconciliationRecord;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class PaymentReconciliationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected \DateTime $reconciliationDate,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a payment reconciliation agent. Your job is to match
internal payment records against bank/processor statements and
identify discrepancies.

For each payment batch, you must:
1. Fetch internal payments for the period
2. Fetch corresponding bank/processor records
3. Match records by amount, reference, and date
4. Identify unmatched, partially matched, and duplicate entries
5. Classify discrepancies by type and severity
6. Recommend corrective actions

Output a reconciliation report with:
- summary (totals, match rate, discrepancy count)
- matched_records (count and total value)
- unmatched_internal_records
- unmatched_external_records
- amount_discrepancies
- duplicate_payments
- recommended_actions
PROMPT;
    }

    public function reconcile(): array
    {
        $internalPayments = $this->fetchInternalPayments();
        $externalRecords = $this->fetchBankStatements();

        $matched = [];
        $unmatchedInternal = [];
        $unmatchedExternal = [];
        $discrepancies = [];

        $externalPool = $externalRecords;

        foreach ($internalPayments as $payment) {
            $match = $this->findMatch($payment, $externalPool);

            if ($match) {
                $matched[] = [
                    'internal_id' => $payment['id'],
                    'external_id' => $match['id'],
                    'amount' => $payment['amount'],
                    'confidence' => $match['confidence'],
                ];

                if ($match['amount_difference'] > 0.01) {
                    $discrepancies[] = [
                        'type' => 'amount_mismatch',
                        'internal_id' => $payment['id'],
                        'internal_amount' => $payment['amount'],
                        'external_amount' => $match['amount'],
                        'difference' => $match['amount_difference'],
                    ];
                }

                $externalPool = array_filter($externalPool, fn ($r) => $r['id'] !== $match['id']);
            } else {
                $unmatchedInternal[] = $payment;
            }
        }

        $unmatchedExternal = array_values($externalPool);

        $aiAssessment = $this->getAiAssessment(
            $matched, $unmatchedInternal, $unmatchedExternal, $discrepancies
        );

        $result = [
            'reconciliation_date' => $this->reconciliationDate->format('Y-m-d'),
            'summary' => [
                'total_internal' => count($internalPayments),
                'total_external' => count($externalRecords),
                'matched' => count($matched),
                'unmatched_internal' => count($unmatchedInternal),
                'unmatched_external' => count($unmatchedExternal),
                'discrepancies' => count($discrepancies),
                'match_rate' => count($internalPayments) > 0
                    ? round((count($matched) / count($internalPayments)) * 100, 2)
                    : 0,
                'total_matched_value' => round(array_sum(array_column($matched, 'amount')), 2),
            ],
            'matched' => $matched,
            'unmatched_internal_payments' => $unmatchedInternal,
            'unmatched_external_records' => $unmatchedExternal,
            'amount_discrepancies' => $discrepancies,
            'ai_analysis' => $aiAssessment,
            'completed_at' => now()->toIso8601String(),
        ];

        $this->logResult($result);

        return $result;
    }

    protected function fetchInternalPayments(): array
    {
        $start = (clone $this->reconciliationDate)->modify('-1 day');
        $end = (clone $this->reconciliationDate)->modify('+1 day');

        return Payment::whereBetween('processed_at', [$start, $end])
            ->where('status', 'completed')
            ->get()
            ->toArray();
    }

    protected function fetchBankStatements(): array
    {
        $dateStr = $this->reconciliationDate->format('Y-m-d');

        $response = Http::withToken(config('services.banking.api_key'))
            ->get(config('services.banking.base_url') . '/v1/statements/daily', [
                'date' => $dateStr,
            ]);

        if ($response->failed()) {
            return [];
        }

        return $response->json()['transactions'] ?? [];
    }

    protected function findMatch(array $payment, array &$pool): ?array
    {
        foreach ($pool as $key => $record) {
            $amountDiff = abs($record['amount'] - $payment['amount']);
            $confidence = 0;

            if ($amountDiff <= 0.01) {
                $confidence = 1.0;
            } elseif ($amountDiff <= 1.0) {
                $confidence = 0.8;
            } elseif ($amountDiff <= 10.0) {
                $confidence = 0.5;
            } else {
                continue;
            }

            if ($confidence >= 0.8) {
                return [
                    'id' => $record['id'],
                    'amount' => $record['amount'],
                    'amount_difference' => $amountDiff,
                    'confidence' => $confidence,
                ];
            }
        }

        return null;
    }

    protected function getAiAssessment(array $matched, array $unmatchedInt, array $unmatchedExt, array $discrepancies): array
    {
        if (empty($unmatchedInt) && empty($unmatchedExt) && empty($discrepancies)) {
            return [
                'status' => 'clean',
                'issues' => [],
                'recommendations' => ['No action required. All records reconciled successfully.'],
            ];
        }

        $response = $this->prompt(json_encode([
            'matched_count' => count($matched),
            'unmatched_internal' => $unmatchedInt,
            'unmatched_external' => $unmatchedExt,
            'discrepancies' => $discrepancies,
        ]));

        return $response->json() ?? [
            'status' => 'review_required',
            'issues' => ['Unable to assess automatically.'],
        ];
    }

    protected function logResult(array $result): void
    {
        ReconciliationRecord::create([
            'reconciliation_date' => $this->reconciliationDate,
            'summary' => $result['summary'],
            'matched_count' => $result['summary']['matched'],
            'unmatched_count' => $result['summary']['unmatched_internal'],
            'discrepancy_count' => $result['summary']['discrepancies'],
            'result_data' => $result,
            'status' => $result['summary']['discrepancies'] > 0 ? 'discrepancies_found' : 'reconciled',
        ]);
    }
}
```

#### DisputeResolutionAgent

```php
<?php

namespace App\Ai\Agents\Finance;

use App\Models\Finance\Dispute;
use App\Models\Finance\Transaction;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class DisputeResolutionAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Dispute $dispute,
    ) {}

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a payment dispute resolution agent. Analyze the dispute case,
review the transaction details, customer history, and evidence
provided. Determine the appropriate resolution based on:

- The nature of the dispute (fraud, service not rendered, amount error, duplicate)
- Transaction history and pattern analysis
- Customer's dispute history
- Timing of the dispute relative to the transaction
- Available evidence and documentation
- Regulatory chargeback rules and timeframes

Output a structured resolution with:
- dispute_analysis (findings and evidence summary)
- recommended_outcome (customer_refund / partial_refund / merchant_win / escalate)
- refund_amount (if applicable)
- confidence_level (low / medium / high)
- reasoning (detailed explanation)
- required_actions (steps to execute the resolution)
PROMPT;
    }

    public function resolve(): array
    {
        $transaction = $this->dispute->transaction;
        $customerHistory = $this->getCustomerDisputeHistory($transaction);

        $evidence = $this->gatherEvidence($transaction);

        $fa = $this->applyRules($transaction, $customerHistory, $evidence);

        $aiDecision = $this->getAiDecision($transaction, $customerHistory, $evidence, $fa);

        $outcome = $this->determineOutcome($fa, $aiDecision);

        $this->updateDispute($outcome);

        return [
            'dispute_id' => $this->dispute->id,
            'outcome' => $outcome['decision'],
            'refund_amount' => $outcome['refund_amount'],
            'confidence' => $aiDecision['confidence_level'] ?? 'medium',
            'evidence_summary' => $evidence,
            'resolution_steps' => $outcome['actions'],
            'resolved_at' => now()->toIso8601String(),
        ];
    }

    protected function getCustomerDisputeHistory(Transaction $transaction): array
    {
        $account = $transaction->account;

        return [
            'previous_disputes' => Dispute::whereHas('transaction', function ($q) use ($account) {
                $q->where('account_id', $account->id);
            })->where('id', '!=', $this->dispute->id)->count(),
            'previous_chargebacks' => Dispute::whereHas('transaction', function ($q) use ($account) {
                $q->where('account_id', $account->id);
            })->where('outcome', 'chargeback')->count(),
            'account_age_days' => $account->created_at->diffInDays(now()),
        ];
    }

    protected function gatherEvidence(Transaction $transaction): array
    {
        return [
            'transaction_exists' => ! is_null($transaction),
            'amount_verified' => $transaction->amount === $this->dispute->disputed_amount,
            'timely_dispute' => $transaction->created_at->diffInDays(now()) <= 120,
            'transaction_status' => $transaction->status,
            'has_ip_geolocation' => ! is_null($transaction->ip_address),
            'customer_verified' => $transaction->approved_by !== null,
            'metadata_available' => ! empty($transaction->metadata),
        ];
    }

    protected function applyRules(Transaction $transaction, array $history, array $evidence): array
    {
        $score = 0;

        if ($history['previous_chargebacks'] > 3) {
            $score -= 20;
        }

        if ($history['account_age_days'] < 30) {
            $score -= 10;
        }

        if ($this->dispute->reason === 'fraud' && $evidence['has_ip_geolocation']) {
            $score -= 5;
        }

        if (! $evidence['timely_dispute']) {
            $score += 15;
        }

        if ($this->dispute->reason === 'duplicate') {
            $hasDuplicate = Transaction::where('account_id', $transaction->account_id)
                ->where('amount', $transaction->amount)
                ->where('created_at', '>=', $transaction->created_at->copy()->subHours(2))
                ->where('created_at', '<=', $transaction->created_at->copy()->addHours(2))
                ->where('id', '!=', $transaction->id)
                ->exists();

            if ($hasDuplicate) {
                $score += 25;
            }
        }

        return [
            'rule_score' => max(-100, min(100, $score)),
            'leaning' => $score >= 0 ? 'customer' : 'merchant',
        ];
    }

    protected function getAiDecision(Transaction $transaction, array $history, array $evidence, array $fa): array
    {
        $response = $this->prompt(json_encode([
            'dispute' => $this->dispute->toArray(),
            'transaction' => $transaction->toArray(),
            'customer_history' => $history,
            'evidence' => $evidence,
            'rule_assessment' => $fa,
        ]));

        return $response->json() ?? [
            'recommended_outcome' => 'escalate',
            'confidence_level' => 'low',
            'reasoning' => 'Unable to determine outcome automatically.',
        ];
    }

    protected function determineOutcome(array $fa, array $ai): array
    {
        $aiOutcome = $ai['recommended_outcome'] ?? 'escalate';
        $combined = ($fa['rule_score'] + $this->aiWeight($ai['confidence_level'] ?? 'low')) / 2;

        $decision = match (true) {
            $combined >= 20 => 'customer_refund',
            $combined <= -20 => 'merchant_win',
            $aiOutcome !== 'escalate' => $aiOutcome,
            default => 'escalate',
        };

        return [
            'decision' => $decision,
            'refund_amount' => in_array($decision, ['customer_refund', 'partial_refund'])
                ? $this->dispute->disputed_amount : 0,
            'actions' => $this->getResolutionActions($decision),
        ];
    }

    protected function aiWeight(string $confidence): int
    {
        return match ($confidence) {
            'high' => 40,
            'medium' => 20,
            'low' => 0,
            default => 0,
        };
    }

    protected function getResolutionActions(string $decision): array
    {
        return match ($decision) {
            'customer_refund' => [
                'Issue full refund to customer',
                'Mark dispute as resolved in favor of customer',
                'Update transaction status to refunded',
                'Notify customer of resolution',
            ],
            'partial_refund' => [
                'Issue partial refund to customer',
                'Document partial refund rationale',
                'Notify customer of partial resolution',
            ],
            'merchant_win' => [
                'Submit evidence package to payment processor',
                'Mark dispute as resolved in favor of merchant',
                'Notify customer of outcome with explanation',
            ],
            'escalate' => [
                'Escalate to senior disputes team for manual review',
                'Compile all evidence and analysis for review',
                'Flag dispute for priority handling',
            ],
            default => ['Review required; no automatic actions taken.'],
        };
    }

    protected function updateDispute(array $outcome): void
    {
        $this->dispute->update([
            'outcome' => $outcome['decision'],
            'refund_amount' => $outcome['refund_amount'] ?? 0,
            'resolved_at' => now(),
            'status' => $outcome['decision'] === 'escalate' ? 'escalated' : 'resolved',
            'resolution_data' => $outcome,
        ]);
    }
}
```

#### Payment and Dispute Models

```php
<?php

namespace App\Models\Finance;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    protected $table = 'finance_payments';

    protected $fillable = [
        'uuid',
        'account_id',
        'transaction_id',
        'amount',
        'currency',
        'payment_method',
        'processor',
        'processor_transaction_id',
        'status',
        'fee',
        'net_amount',
        'processed_at',
        'settled_at',
    ];

    protected $casts = [
        'amount' => 'decimal:4',
        'fee' => 'decimal:4',
        'net_amount' => 'decimal:4',
        'processed_at' => 'datetime',
        'settled_at' => 'datetime',
    ];

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }
}

class Dispute extends Model
{
    protected $table = 'finance_disputes';

    protected $fillable = [
        'transaction_id',
        'payment_id',
        'raised_by',
        'reason',
        'description',
        'disputed_amount',
        'status',
        'outcome',
        'refund_amount',
        'resolution_data',
        'resolved_at',
    ];

    protected $casts = [
        'disputed_amount' => 'decimal:4',
        'refund_amount' => 'decimal:4',
        'resolution_data' => 'array',
        'resolved_at' => 'datetime',
    ];

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }
}

class ReconciliationRecord extends Model
{
    protected $table = 'finance_reconciliation_records';

    protected $fillable = [
        'reconciliation_date',
        'summary',
        'matched_count',
        'unmatched_count',
        'discrepancy_count',
        'result_data',
        'status',
    ];

    protected $casts = [
        'reconciliation_date' => 'date',
        'summary' => 'array',
        'result_data' => 'array',
    ];
}
```

---

## Summary

Finance and FinTech agents bring AI-powered automation to the most regulated sector in software. This chapter covered:

- **Financial data models**: PCI-DSS-aware `Account` and `Transaction` models with field-level encryption, soft deletes, and immutable `AuditTrail` logging for every mutation
- **Fraud detection**: A `FraudDetectionAgent` combining rule-based velocity, amount, and age checks with AI risk scoring â€” plus a `TransactionMonitor` service for real-time screening and alert dispatch
- **Transaction monitoring**: A `TransactionMonitoringAgent` that runs threshold analysis, statistical outlier detection, and AI anomaly assessment on transaction batches with severity-based multi-channel alerts
- **KYC/AML verification**: A `KycVerificationAgent` that analyzes identity documents, screens global watchlists with fuzzy name matching, and produces risk profiles backed by `KycVerification` and `WatchlistEntry` models
- **Credit scoring**: A `CreditScoringAgent` that gathers debt-to-income, utilization, delinquency, and history data, applies a weighted scoring formula, and produces approved amounts with AI-adjusted interest rates
- **Trading signals**: A `TradingSignalAgent` that fetches market data, calculates SMA, RSI, volume trend, and volatility indicators, and generates buy/sell/hold signals with stop-loss and take-profit levels
- **Portfolio management**: A `PortfolioAgent` that tracks allocation drift, calculates performance and risk metrics (Sharpe, drawdown), and generates rebalance orders when drift exceeds configurable bands
- **Regulatory reporting**: A `RegulatoryReportAgent` that aggregates transaction data, calculates jurisdiction-specific metrics, and formats structured reports for filing with `RegulatoryReport` persistence
- **Payment operations**: A `PaymentReconciliationAgent` that matches internal payments against bank statements and a `DisputeResolutionAgent` that applies rules and AI analysis to resolve customer disputes

The architectural pattern is consistent: financial domain models with encryption and audit trails, agent classes that combine deterministic rules with AI judgment, and persistence layers that record every decision for compliance review.

---

## Exercises

#### Review Questions

1. Why must the `Account` model store `encrypted_balance` as text rather than a decimal column? What Laravel feature handles the encryption transparently?

2. What are the three stages of the fraud detection agent's analysis pipeline? How do rule-based checks and AI assessment interact to produce the final risk score?

3. How does the transaction monitoring agent detect statistical outliers? What role does the standard deviation play in flagging anomalies?

4. Explain how the KYC verification agent performs name matching against watchlist entries. What similarity threshold triggers a match?

5. What five financial data points does the credit scoring agent gather? How does the debt-to-income ratio affect the base score calculation?

6. How does the trading signal agent consolidate signals from technical indicators and AI analysis? What weights are assigned to each source?

7. What triggers a portfolio rebalance? How does the portfolio agent determine whether the urgency is low, medium, or high?

8. What is a Suspicious Activity Report (SAR)? Under which jurisdictions does the regulatory report agent require SAR filing?

#### Application Problems

1. **Real-Time Fraud Dashboard**. Build a Livewire or Filament component that displays real-time fraud alerts from the `TransactionMonitor`. Include a risk score gauge, flag breakdown, and an "approve or block" action for transactions under review.

2. **Multi-Jurisdiction KYC Pipeline**. Extend the `KycVerificationAgent` to support tiered KYC levels (basic, intermediate, full) based on transaction volume thresholds. Implement jurisdiction-specific document requirements (US requires SSN, EU requires proof-of-address, UAE requires Emirates ID).

3. **Automated Rebalance Scheduler**. Create a scheduled Artisan command that runs the `PortfolioAgent` daily for all active portfolios, executes rebalance trades under a configurable threshold ($100 minimum trade), and notifies users when trades are placed.

#### Challenge Problem

**End-to-End Payment Compliance System**. Build a complete payment compliance system with the following components:

1. **Payment Gateway Agent**: Processes incoming payments through the `FraudDetectionAgent` for pre-authorization screening, routes approved payments to the payment processor, and logs all decisions through the `AuditTrail` model with encrypted PII fields

2. **Daily Reconciliation Agent**: A scheduled agent (runs at 02:00 daily) that invokes `PaymentReconciliationAgent` for the previous day, flags unmatched records, and dispatches alerts for discrepancies exceeding $1,000 or 24-hour aging

3. **Regulatory Filing Agent**: A monthly agent that aggregates all compliance data, generates SAR filings for fraudulent transactions and currency transaction reports (CTRs) for cash-equivalent transactions over $10,000, and stores the formatted reports via the `RegulatoryReportAgent`

4. **Customer Risk Reassessment Agent**: An event-driven agent that triggers when a customer's transaction volume exceeds a 30-day threshold, re-runs the `KycVerificationAgent` risk profiling, and escalates high-risk profiles to the compliance team

Implement all migrations, models, agents, commands, notifications, and event listeners with full audit trail coverage.