# Chapter 32: Marketing & Advertising Agents

---

## Learning Objectives

- Design comprehensive marketing data models for campaigns, audiences, leads, content, and analytics in Laravel
- Build a campaign optimization agent that analyzes performance data and recommends budget allocation strategies
- Implement audience segmentation using behavioral data combined with AI-powered clustering
- Construct a content generation pipeline that produces blog posts, social media copy, and email variants
- Automate A/B testing workflows â€” test design, deployment, statistical analysis, and winner selection
- Develop an SEO analysis agent that audits pages, analyzes keywords, and recommends content improvements
- Build a social media scheduling agent that manages posts across platforms and monitors engagement
- Implement lead scoring and nurturing agents that rank prospects and trigger automated workflows
- Generate automated marketing analytics reports aggregating multi-source campaign data

---

## Theory

![Marketing Domain](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/32-marketing.png)


### 32.1 Marketing Data Models

Every marketing platform rests on five core entities: Campaign, Audience, Lead, Content, and Analytics. These models capture the full lifecycle from audience targeting through content delivery, lead conversion, and performance measurement.

#### Migration for Marketing Core Tables

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type', 50);
            $table->string('channel', 50);
            $table->text('description')->nullable();
            $table->json('targeting_criteria')->nullable();
            $table->decimal('budget', 12, 2)->default(0);
            $table->decimal('spent', 12, 2)->default(0);
            $table->string('status', 30)->default('draft');
            $table->dateTime('starts_at')->nullable();
            $table->dateTime('ends_at')->nullable();
            $table->timestamps();

            $table->index(['status', 'starts_at']);
            $table->index('type');
        });

        Schema::create('audiences', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('source', 50)->default('manual');
            $table->json('criteria')->nullable();
            $table->json('segments')->nullable();
            $table->integer('estimated_size')->nullable();
            $table->string('status', 30)->default('active');
            $table->string('cluster_id')->nullable();
            $table->timestamps();

            $table->index('source');
            $table->index('status');
        });

        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('source', 50)->nullable();
            $table->string('status', 30)->default('new');
            $table->decimal('score', 5, 2)->default(0);
            $table->json('attributes')->nullable();
            $table->json('engagement_history')->nullable();
            $table->string('nurture_sequence')->nullable();
            $table->integer('nurture_step')->default(0);
            $table->foreignId('campaign_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('audience_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();

            $table->index('email');
            $table->index('status');
            $table->index('score');
        });

        Schema::create('content_assets', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('type', 30);
            $table->string('status', 30)->default('draft');
            $table->text('body')->nullable();
            $table->text('excerpt')->nullable();
            $table->json('metadata')->nullable();
            $table->json('seo_data')->nullable();
            $table->json('generation_params')->nullable();
            $table->foreignId('campaign_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();

            $table->index('type');
            $table->index('status');
        });

        Schema::create('marketing_analytics', function (Blueprint $table) {
            $table->id();
            $table->string('source', 50);
            $table->string('metric', 50);
            $table->decimal('value', 14, 4);
            $table->json('dimensions')->nullable();
            $table->foreignId('campaign_id')->nullable()->constrained()->nullOnDelete();
            $table->date('recorded_at');
            $table->timestamps();

            $table->index(['source', 'recorded_at']);
            $table->index(['campaign_id', 'metric']);
        });

        Schema::create('ab_tests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('control_type', 30);
            $table->json('control_content');
            $table->json('variant_content');
            $table->string('metric', 50);
            $table->integer('sample_size')->nullable();
            $table->decimal('significance_level', 5, 4)->default(0.95);
            $table->string('status', 30)->default('draft');
            $table->string('winner')->nullable();
            $table->decimal('lift', 8, 4)->nullable();
            $table->decimal('p_value', 8, 6)->nullable();
            $table->dateTime('started_at')->nullable();
            $table->dateTime('completed_at')->nullable();
            $table->timestamps();

            $table->index('status');
        });

        Schema::create('social_posts', function (Blueprint $table) {
            $table->id();
            $table->string('platform', 30);
            $table->text('content');
            $table->json('media_urls')->nullable();
            $table->dateTime('scheduled_at');
            $table->dateTime('published_at')->nullable();
            $table->string('status', 30)->default('scheduled');
            $table->json('engagement_metrics')->nullable();
            $table->json('platform_post_id')->nullable();
            $table->foreignId('campaign_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();

            $table->index(['platform', 'status']);
            $table->index('scheduled_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_posts');
        Schema::dropIfExists('ab_tests');
        Schema::dropIfExists('marketing_analytics');
        Schema::dropIfExists('content_assets');
        Schema::dropIfExists('leads');
        Schema::dropIfExists('audiences');
        Schema::dropIfExists('campaigns');
    }
};
```

#### Campaign Model with Relationships

```php
<?php

namespace App\Models\Marketing;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Campaign extends Model
{
    protected $fillable = [
        'name', 'type', 'channel', 'description', 'targeting_criteria',
        'budget', 'spent', 'status', 'starts_at', 'ends_at',
    ];

    protected function casts(): array
    {
        return [
            'targeting_criteria' => 'array',
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
        ];
    }

    public function leads(): HasMany
    {
        return $this->hasMany(Lead::class);
    }

    public function contentAssets(): HasMany
    {
        return $this->hasMany(ContentAsset::class);
    }

    public function analytics(): HasMany
    {
        return $this->hasMany(MarketingAnalytic::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active')
            ->where('starts_at', '<=', now())
            ->where(fn ($q) => $q->whereNull('ends_at')->orWhere('ends_at', '>=', now()));
    }

    public function roi(): float
    {
        $revenue = $this->analytics()
            ->where('metric', 'revenue')
            ->sum('value');

        return $this->spent > 0 ? ($revenue - $this->spent) / $this->spent : 0;
    }

    public function performanceSummary(): array
    {
        return [
            'impressions' => (int) $this->analytics()->where('metric', 'impressions')->sum('value'),
            'clicks' => (int) $this->analytics()->where('metric', 'clicks')->sum('value'),
            'conversions' => (int) $this->analytics()->where('metric', 'conversions')->sum('value'),
            'revenue' => (float) $this->analytics()->where('metric', 'revenue')->sum('value'),
            'spent' => $this->spent,
            'ctr' => 0.0,
            'cpc' => 0.0,
        ];
    }
}
```

#### Lead and Content Models

```php
<?php

namespace App\Models\Marketing;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lead extends Model
{
    protected $fillable = [
        'email', 'first_name', 'last_name', 'phone', 'source',
        'status', 'score', 'attributes', 'engagement_history',
        'nurture_sequence', 'nurture_step', 'campaign_id', 'audience_id',
    ];

    protected function casts(): array
    {
        return [
            'attributes' => 'array',
            'engagement_history' => 'array',
            'score' => 'decimal:2',
        ];
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class);
    }

    public function audience(): BelongsTo
    {
        return $this->belongsTo(Audience::class);
    }

    public function scopeByScore($query, float $min, float $max)
    {
        return $query->whereBetween('score', [$min, $max]);
    }

    public function scopeHot($query)
    {
        return $query->where('score', '>=', 80);
    }

    public function scopeWarm($query)
    {
        return $query->whereBetween('score', [40, 79]);
    }

    public function scopeCold($query)
    {
        return $query->where('score', '<', 40);
    }

    public function recordEngagement(string $type, array $data = []): void
    {
        $history = $this->engagement_history ?? [];
        $history[] = [
            'type' => $type,
            'data' => $data,
            'timestamp' => now()->toIso8601String(),
        ];
        $this->update(['engagement_history' => $history]);
    }
}

class ContentAsset extends Model
{
    protected $table = 'content_assets';

    protected $fillable = [
        'title', 'type', 'status', 'body', 'excerpt',
        'metadata', 'seo_data', 'generation_params', 'campaign_id',
    ];

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
            'seo_data' => 'array',
            'generation_params' => 'array',
        ];
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class);
    }
}
```

---

### 32.2 Campaign Optimization Agents

Campaign optimization agents analyze real-time performance data â€” impressions, clicks, conversions, cost-per-acquisition â€” and recommend budget reallocation across channels and ad sets. The agent combines rule-based bid adjustments with AI-driven opportunity detection.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\Campaign;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class CampaignOptimizationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected Campaign $campaign,
        protected array $channels = [],
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are a campaign optimization agent. Analyze campaign performance
data across channels and recommend budget allocation strategies.

Consider these factors:
- Cost per acquisition (CPA) per channel
- Click-through rate (CTR) trends
- Conversion rate by audience segment
- Dayparting performance patterns
- Audience saturation signals
- Competitive landscape (if available)

Output a structured optimization plan with:
- per_channel_analysis: array of channel performance breakdowns
- budget_recommendations: suggested reallocation across channels
- expected_impact: projected improvement in CPA and conversion volume
- optimization_opportunities: specific actionable recommendations
PROMPT;
    }

    public function analyze(): array
    {
        $performance = $this->gatherPerformanceData();
        $recommendations = $this->generateRecommendations($performance);
        $aiInsights = $this->getAiInsights($performance, $recommendations);

        $optimization = $this->mergeRecommendations($recommendations, $aiInsights);

        $this->applyBudgetAdjustments($optimization);

        return [
            'campaign_id' => $this->campaign->id,
            'campaign_name' => $this->campaign->name,
            'total_budget' => $this->campaign->budget,
            'current_spend' => $this->campaign->spent,
            'channels_analyzed' => count($optimization['per_channel']),
            'optimization' => $optimization,
            'projected_cpa_reduction' => $optimization['projected_cpa_reduction'],
            'projected_conversion_increase' => $optimization['projected_conversion_increase'],
        ];
    }

    protected function gatherPerformanceData(): array
    {
        $channels = ! empty($this->channels)
            ? $this->channels
            : ['google_ads', 'facebook', 'linkedin', 'twitter', 'email'];

        $performance = [];

        foreach ($channels as $channel) {
            $impressions = $this->campaign->analytics()
                ->where('source', $channel)
                ->where('metric', 'impressions')
                ->sum('value');

            $clicks = $this->campaign->analytics()
                ->where('source', $channel)
                ->where('metric', 'clicks')
                ->sum('value');

            $conversions = $this->campaign->analytics()
                ->where('source', $channel)
                ->where('metric', 'conversions')
                ->sum('value');

            $spend = $this->campaign->analytics()
                ->where('source', $channel)
                ->where('metric', 'spend')
                ->sum('value');

            $ctr = $impressions > 0 ? ($clicks / $impressions) * 100 : 0;
            $cpa = $conversions > 0 ? $spend / $conversions : 0;
            $cvr = $clicks > 0 ? ($conversions / $clicks) * 100 : 0;

            $performance[$channel] = [
                'impressions' => (int) $impressions,
                'clicks' => (int) $clicks,
                'conversions' => (int) $conversions,
                'spend' => $spend,
                'ctr' => round($ctr, 2),
                'cvr' => round($cvr, 2),
                'cpa' => round($cpa, 2),
            ];
        }

        return $performance;
    }

    protected function generateRecommendations(array $performance): array
    {
        $totalConversions = array_sum(array_column($performance, 'conversions'));
        $totalSpend = array_sum(array_column($performance, 'spend'));
        $overallCpa = $totalConversions > 0 ? $totalSpend / $totalConversions : 0;

        $recommendations = [];
        $totalBudget = $this->campaign->budget;

        foreach ($performance as $channel => $data) {
            $cpa = $data['cpa'];
            $cvr = $data['cvr'];
            $conversions = $data['conversions'];

            if ($cpa <= 0 || $totalConversions <= 0) {
                $recommendations[$channel] = [
                    'current_allocation' => $totalSpend > 0
                        ? round(($data['spend'] / $totalSpend) * 100, 1)
                        : round(100 / count($performance), 1),
                    'recommended_allocation' => round(100 / count($performance), 1),
                    'direction' => 'maintain',
                    'reasoning' => 'Insufficient data to optimize.',
                ];
                continue;
            }

            $efficiencyScore = $overallCpa > 0 ? $overallCpa / $cpa : 1;
            $currentShare = $totalSpend > 0 ? ($data['spend'] / $totalSpend) : (1 / count($performance));
            $targetShare = $currentShare * $efficiencyScore;
            $targetShare = max(0.05, min(0.60, $targetShare));

            $direction = match (true) {
                $efficiencyScore > 1.3 => 'increase',
                $efficiencyScore < 0.7 => 'decrease',
                default => 'maintain',
            };

            $recommendations[$channel] = [
                'current_allocation' => round($currentShare * 100, 1),
                'recommended_allocation' => round($targetShare * 100, 1),
                'direction' => $direction,
                'cpa' => $cpa,
                'cvr' => $cvr,
                'efficiency_score' => round($efficiencyScore, 2),
                'reasoning' => $direction === 'increase'
                    ? "CPA \${$cpa} is {$efficiencyScore}x better than average."
                    : ($direction === 'decrease'
                        ? "CPA \${$cpa} is below average efficiency."
                        : 'Performance is on par with average.'),
            ];
        }

        return [
            'per_channel' => $recommendations,
            'current_blended_cpa' => round($overallCpa, 2),
        ];
    }

    protected function getAiInsights(array $performance, array $recommendations): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'campaign' => $this->campaign->only(['name', 'type', 'channel', 'budget']),
                    'performance' => $performance,
                    'rule_based_recommendations' => $recommendations,
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'opportunities' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'type' => ['type' => 'string'],
                                'description' => ['type' => 'string'],
                                'potential_impact' => ['type' => 'string'],
                            ],
                        ],
                    ],
                    'budget_adjustments' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'channel' => ['type' => 'string'],
                                'adjustment_pct' => ['type' => 'number'],
                                'rationale' => ['type' => 'string'],
                            ],
                        ],
                    ],
                    'projected_cpa_reduction_pct' => ['type' => 'number'],
                    'projected_conversion_increase_pct' => ['type' => 'number'],
                    'risk_factors' => ['type' => 'array', 'items' => ['type' => 'string']],
                ],
                'required' => ['opportunities', 'budget_adjustments', 'projected_cpa_reduction_pct', 'projected_conversion_increase_pct', 'risk_factors'],
            ],
        );

        return $response;
    }

    protected function mergeRecommendations(array $ruleBased, array $aiInsights): array
    {
        $perChannel = $ruleBased['per_channel'];

        foreach ($aiInsights['budget_adjustments'] ?? [] as $adjustment) {
            $channel = $adjustment['channel'];
            $adjustmentPct = (float) $adjustment['adjustment_pct'];

            if (isset($perChannel[$channel])) {
                $currentRecommended = $perChannel[$channel]['recommended_allocation'];
                $aiAdjusted = $currentRecommended + $adjustmentPct;
                $perChannel[$channel]['recommended_allocation'] = round(max(5, min(60, $aiAdjusted)), 1);
                $perChannel[$channel]['ai_rationale'] = $adjustment['rationale'];
            }
        }

        $total = array_sum(array_column($perChannel, 'recommended_allocation'));
        if ($total > 0) {
            foreach ($perChannel as $channel => &$data) {
                $data['recommended_allocation'] = round(($data['recommended_allocation'] / $total) * 100, 1);
            }
        }

        return [
            'per_channel' => $perChannel,
            'current_blended_cpa' => $ruleBased['current_blended_cpa'],
            'opportunities' => $aiInsights['opportunities'] ?? [],
            'projected_cpa_reduction' => ($aiInsights['projected_cpa_reduction_pct'] ?? 10) . '%',
            'projected_conversion_increase' => ($aiInsights['projected_conversion_increase_pct'] ?? 15) . '%',
            'risk_factors' => $aiInsights['risk_factors'] ?? [],
        ];
    }

    protected function applyBudgetAdjustments(array $optimization): void
    {
        foreach ($optimization['per_channel'] as $channel => $data) {
            if ($data['direction'] === 'increase') {
                $this->campaign->analytics()->create([
                    'source' => $channel,
                    'metric' => 'budget_adjustment',
                    'value' => $data['recommended_allocation'],
                    'dimensions' => [
                        'previous_allocation' => $data['current_allocation'],
                        'direction' => $data['direction'],
                        'reasoning' => $data['reasoning'],
                    ],
                    'recorded_at' => now()->toDateString(),
                ]);
            }
        }
    }
}
```

#### Console Command for Optimization Runs

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Marketing\CampaignOptimizationAgent;
use App\Models\Marketing\Campaign;
use Illuminate\Console\Command;

class OptimizeCampaignsCommand extends Command
{
    protected $signature = 'marketing:optimize
        {--campaign= : Specific campaign ID to optimize}
        {--channels=* : Channels to analyze (google_ads, facebook, linkedin, twitter, email)}';

    protected $description = 'Run AI-powered campaign optimization';

    public function handle(): int
    {
        $query = Campaign::active();

        if ($campaignId = $this->option('campaign')) {
            $query->where('id', $campaignId);
        }

        $campaigns = $query->get();
        $channels = $this->option('channels') ?: [];

        if ($campaigns->isEmpty()) {
            $this->warn('No active campaigns found.');
            return Command::SUCCESS;
        }

        $bar = $this->output->createProgressBar($campaigns->count());
        $bar->start();

        $results = [];

        foreach ($campaigns as $campaign) {
            $agent = new CampaignOptimizationAgent(
                campaign: $campaign,
                channels: $channels,
            );

            $results[] = $agent->analyze();
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();

        $totalSavings = collect($results)->sum(fn ($r) => $r['projected_cpa_reduction'] ?? 0);
        $this->info('Optimized ' . count($results) . ' campaigns.');
        $this->info('Projected average CPA reduction: ' . round($totalSavings / max(count($results), 1)) . '%');

        return Command::SUCCESS;
    }
}
```

---

### 32.3 Audience Segmentation & Targeting

Audience segmentation agents cluster users based on behavioral data â€” page views, purchase history, email engagement, content consumption â€” then assign each user to a segment with a confidence score. The agent uses AI to identify natural groupings that rule-based filters would miss.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\Audience;
use App\Models\Marketing\Lead;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Illuminate\Support\Facades\DB;

class AudienceSegmentationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected string $segmentName,
        protected array $behavioralCriteria = [],
        protected ?int $maxClusters = null,
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are an audience segmentation agent. Analyze behavioral data
to identify natural audience clusters and create targeted segments.

Consider these behavioral signals:
- Content consumption patterns (topics, formats, frequency)
- Purchase history and basket composition
- Email engagement (opens, clicks, conversion)
- Page visit frequency and recency
- Device and channel preferences
- Time-of-day engagement patterns

Output a structured segment definition with:
- segment_name: human-readable name for the cluster
- description: what defines this segment
- criteria: the behavioral rules that identify members
- estimated_size: projected audience count
- affinity_scores: per-dimension engagement affinity (0-100)
- recommended_channels: channels most effective for this segment
- sample_size: number of leads analyzed
- confidence: clustering confidence (0.0 - 1.0)
PROMPT;
    }

    public function segment(): array
    {
        $leads = $this->fetchLeads();
        $stats = $this->computeBehavioralStats($leads);
        $clusters = $this->clusterLeads($stats);
        $segments = $this->describeSegments($clusters, $stats);

        $persisted = $this->persistSegments($segments, $leads);

        return [
            'segments_created' => count($persisted),
            'leads_segmented' => count($leads),
            'segments' => $persisted,
            'summary' => collect($persisted)->map(fn ($s) => [
                'name' => $s['name'],
                'size' => $s['estimated_size'],
                'confidence' => $s['confidence'],
            ])->toArray(),
        ];
    }

    protected function fetchLeads(): \Illuminate\Support\Collection
    {
        return Lead::where('status', '!=', 'unsubscribed')
            ->whereNotNull('engagement_history')
            ->limit($this->maxClusters ? $this->maxClusters * 100 : 500)
            ->get();
    }

    protected function computeBehavioralStats(\Illuminate\Support\Collection $leads): array
    {
        $stats = [];

        foreach ($leads as $lead) {
            $history = $lead->engagement_history ?? [];
            $emailOpens = 0;
            $emailClicks = 0;
            $pageViews = 0;
            $purchases = 0;
            $purchaseValue = 0;
            $topics = [];
            $channels = [];

            foreach ($history as $event) {
                $type = $event['type'] ?? '';
                $data = $event['data'] ?? [];

                match ($type) {
                    'email_open' => $emailOpens++,
                    'email_click' => $emailClicks++,
                    'page_view' => $pageViews++,
                    'purchase' => fn () => ($purchases++; $purchaseValue += $data['value'] ?? 0),
                    default => null,
                };

                if ($topic = $data['topic'] ?? null) {
                    $topics[] = $topic;
                }
                if ($channel = $data['channel'] ?? null) {
                    $channels[] = $channel;
                }
            }

            $daysSinceLastActivity = $lead->updated_at->diffInDays(now());
            $topTopic = $this->mostFrequent($topics);
            $topChannel = $this->mostFrequent($channels);

            $stats[$lead->id] = [
                'email_engagement_rate' => $history ? ($emailOpens + $emailClicks) / count($history) : 0,
                'page_views' => $pageViews,
                'purchase_frequency' => $purchases,
                'avg_order_value' => $purchases > 0 ? $purchaseValue / $purchases : 0,
                'recency_days' => $daysSinceLastActivity,
                'top_topic' => $topTopic,
                'top_channel' => $topChannel,
                'score' => $lead->score,
            ];
        }

        return $stats;
    }

    protected function clusterLeads(array $stats): array
    {
        $scores = array_column($stats, 'score');
        $recencies = array_column($stats, 'recency_days');
        $purchaseFreq = array_column($stats, 'purchase_frequency');
        $emailEngagement = array_column($stats, 'email_engagement_rate');

        $meanScore = count($scores) > 0 ? array_sum($scores) / count($scores) : 0;
        $meanRecency = count($recencies) > 0 ? array_sum($recencies) / count($recencies) : 0;
        $meanPurchases = count($purchaseFreq) > 0 ? array_sum($purchaseFreq) / count($purchaseFreq) : 0;
        $meanEngagement = count($emailEngagement) > 0 ? array_sum($emailEngagement) / count($emailEngagement) : 0;

        $clusters = [];

        foreach ($stats as $leadId => $data) {
            $cluster = match (true) {
                $data['score'] >= 70 && $data['recency_days'] <= 7 && $data['purchase_frequency'] > 0 => 'high_value_active',
                $data['score'] >= 50 && $data['email_engagement_rate'] > $meanEngagement => 'engaged_prospects',
                $data['recency_days'] <= 14 && $data['purchase_frequency'] === 0 => 'warm_tire_kickers',
                $data['recency_days'] >= 60 => 'lapsed',
                $data['score'] < 30 && $data['email_engagement_rate'] < 0.1 => 'cold_unengaged',
                default => 'general_audience',
            };

            $clusters[$cluster][] = $leadId;
        }

        return $clusters;
    }

    protected function describeSegments(array $clusters, array $stats): array
    {
        $aiLabels = $this->getAiLabels($clusters, $stats);

        $segments = [];

        foreach ($clusters as $clusterName => $leadIds) {
            $clusterStats = collect($leadIds)->map(fn ($id) => $stats[$id] ?? [])->filter();

            $segments[] = [
                'name' => $aiLabels[$clusterName] ?? $this->humanizeName($clusterName),
                'description' => $this->describeCluster($clusterName, $clusterStats),
                'criteria' => $this->criteriaForCluster($clusterName),
                'estimated_size' => count($leadIds),
                'affinity_scores' => $this->affinityScores($clusterStats),
                'recommended_channels' => $this->channelsForCluster($clusterName),
                'lead_ids' => $leadIds,
                'confidence' => $this->calculateConfidence($clusterStats),
            ];
        }

        return $segments;
    }

    protected function getAiLabels(array $clusters, array $stats): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate human-readable segment names',
                    'internal_clusters' => array_keys($clusters),
                    'cluster_sizes' => array_map(fn ($ids) => count($ids), $clusters),
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'labels' => [
                        'type' => 'object',
                        'additionalProperties' => ['type' => 'string'],
                    ],
                ],
                'required' => ['labels'],
            ],
        );

        return $response['labels'] ?? [];
    }

    protected function describeCluster(string $name, \Illuminate\Support\Collection $stats): string
    {
        $avgScore = round($stats->avg('score') ?? 0, 1);
        $avgRecency = round($stats->avg('recency_days') ?? 0, 1);
        $count = $stats->count();

        return match ($name) {
            'high_value_active' => "High-spending active buyers (score: {$avgScore}, recency: {$avgRecency}d, n={$count})",
            'engaged_prospects' => "Engaged prospects with strong email interaction (score: {$avgScore}, n={$count})",
            'warm_tire_kickers' => "Recent visitors who have not purchased yet (recency: {$avgRecency}d, n={$count})",
            'lapsed' => "Previously engaged audience that went inactive (recency: {$avgRecency}d, n={$count})",
            'cold_unengaged' => "Low-engagement cold audience needing reactivation (score: {$avgScore}, n={$count})",
            default => "General audience segment (n={$count})",
        };
    }

    protected function criteriaForCluster(string $name): array
    {
        return match ($name) {
            'high_value_active' => ['min_score' => 70, 'max_recency_days' => 7, 'min_purchases' => 1],
            'engaged_prospects' => ['min_score' => 50, 'min_email_engagement' => 0.2],
            'warm_tire_kickers' => ['max_recency_days' => 14, 'purchases' => 0],
            'lapsed' => ['min_recency_days' => 60],
            'cold_unengaged' => ['max_score' => 30, 'max_email_engagement' => 0.1],
            default => [],
        };
    }

    protected function affinityScores(\Illuminate\Support\Collection $stats): array
    {
        return [
            'email' => round($stats->avg('email_engagement_rate') * 100, 1),
            'purchase' => round(min(100, $stats->avg('purchase_frequency') * 20), 1),
            'recency' => round(max(0, 100 - $stats->avg('recency_days') * 2), 1),
            'score' => round($stats->avg('score'), 1),
        ];
    }

    protected function channelsForCluster(string $name): array
    {
        return match ($name) {
            'high_value_active' => ['email', 'retargeting', 'exclusive_offers'],
            'engaged_prospects' => ['email_drip', 'social_media', 'content_marketing'],
            'warm_tire_kickers' => ['retargeting_ads', 'discount_email'],
            'lapsed' => ['reengagement_email', 'winback_campaign'],
            'cold_unengaged' => ['social_media', 'brand_awareness_ads'],
            default => ['email', 'social_media'],
        };
    }

    protected function calculateConfidence(\Illuminate\Support\Collection $stats): float
    {
        if ($stats->count() < 5) {
            return 0.3;
        }

        $scoreVariance = $stats->avg('score') > 0
            ? collect($stats->pluck('score'))->map(fn ($s) => abs($s - $stats->avg('score')))->avg() / $stats->avg('score')
            : 1;

        $sizeScore = min(1, $stats->count() / 100);
        $homogeneity = max(0, 1 - $scoreVariance);

        return round(($sizeScore * 0.4 + $homogeneity * 0.6), 2);
    }

    protected function persistSegments(array $segments, \Illuminate\Support\Collection $leads): array
    {
        $persisted = [];

        DB::transaction(function () use ($segments, $leads, &$persisted) {
            foreach ($segments as $segment) {
                $audience = Audience::create([
                    'name' => $segment['name'],
                    'description' => $segment['description'],
                    'source' => 'ai_segmentation',
                    'criteria' => $segment['criteria'],
                    'segments' => ['cluster_name' => $segment['name']],
                    'estimated_size' => $segment['estimated_size'],
                    'cluster_id' => str_replace(' ', '_', strtolower($segment['name'])),
                    'status' => 'active',
                ]);

                Lead::whereIn('id', $segment['lead_ids'])
                    ->where('audience_id', null)
                    ->update(['audience_id' => $audience->id]);

                $persisted[] = array_merge(
                    $segment,
                    ['audience_id' => $audience->id]
                );
            }
        });

        return $persisted;
    }

    protected function mostFrequent(array $items): ?string
    {
        if (empty($items)) {
            return null;
        }

        $counts = array_count_values($items);
        arsort($counts);

        return array_key_first($counts);
    }

    protected function humanizeName(string $name): string
    {
        return str_replace('_', ' ', ucfirst($name));
    }
}
```

---

### 32.4 Content Generation Pipelines

Content generation agents produce marketing copy across formats â€” blog posts, social media updates, email campaigns â€” with variant generation for A/B testing. Each generation is parameterized by brand voice, target audience, and channel-specific constraints.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\ContentAsset;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class ContentGenerationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected string $contentType,
        protected array $parameters = [],
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are a marketing content generation agent. Produce high-quality,
on-brand marketing content for the specified channel and audience.

Content type will be one of:
- blog_post: Long-form educational or thought-leadership content
- social_media: Short-form platform-specific posts
- email_copy: Email campaigns for nurturing, promotions, or newsletters

For each piece of content, consider:
- Target audience segment and their interests
- Brand voice and tone guidelines
- Channel-specific formatting and length constraints
- Call-to-action optimization
- SEO keywords (for blog content)
- Subject line best practices (for email)

Output structured content with metadata appropriate to the type.
PROMPT;
    }

    public function generate(): array
    {
        $content = $this->generateContent();

        $asset = ContentAsset::create([
            'title' => $content['title'],
            'type' => $this->contentType,
            'status' => 'draft',
            'body' => $content['body'],
            'excerpt' => $content['excerpt'] ?? null,
            'metadata' => $content['metadata'] ?? [],
            'seo_data' => $content['seo_data'] ?? null,
            'generation_params' => $this->parameters,
        ]);

        return [
            'content_id' => $asset->id,
            'type' => $this->contentType,
            'title' => $asset->title,
            'excerpt' => $asset->excerpt,
            'word_count' => str_word_count($asset->body ?? ''),
            'metadata' => $asset->metadata,
            'status' => $asset->status,
        ];
    }

    public function generateVariants(int $count = 3): array
    {
        $variants = [];

        for ($i = 0; $i < $count; $i++) {
            $params = array_merge($this->parameters, [
                'variant' => $i + 1,
                'variation_instruction' => match ($i) {
                    0 => 'Write a direct, benefit-driven version.',
                    1 => 'Write a storytelling, narrative-driven version.',
                    2 => 'Write a concise, bullet-point version.',
                    default => 'Write a variant with a different angle.',
                },
            ]);

            $agent = new self($this->contentType, $params);
            $variants[] = $agent->generate();
        }

        return $variants;
    }

    protected function generateContent(): array
    {
        return match ($this->contentType) {
            'blog_post' => $this->generateBlogPost(),
            'social_media' => $this->generateSocialPost(),
            'email_copy' => $this->generateEmailCopy(),
            default => $this->generateGeneric(),
        };
    }

    protected function generateBlogPost(): array
    {
        $topic = $this->parameters['topic'] ?? 'Industry insights';
        $audience = $this->parameters['audience'] ?? 'general';
        $tone = $this->parameters['tone'] ?? 'professional';
        $keywords = $this->parameters['keywords'] ?? [];
        $wordCount = $this->parameters['word_count'] ?? 800;

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate a blog post',
                    'topic' => $topic,
                    'target_audience' => $audience,
                    'tone' => $tone,
                    'keywords' => $keywords,
                    'target_word_count' => $wordCount,
                    'include_sections' => ['introduction', 'body', 'conclusion', 'cta'],
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'title' => ['type' => 'string'],
                    'body' => ['type' => 'string'],
                    'excerpt' => ['type' => 'string'],
                    'sections' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'metadata' => [
                        'type' => 'object',
                        'properties' => [
                            'estimated_read_time' => ['type' => 'integer'],
                            'target_keywords' => ['type' => 'array', 'items' => ['type' => 'string']],
                            'tone' => ['type' => 'string'],
                        ],
                    ],
                    'seo_data' => [
                        'type' => 'object',
                        'properties' => [
                            'meta_title' => ['type' => 'string'],
                            'meta_description' => ['type' => 'string'],
                            'slug_suggestion' => ['type' => 'string'],
                        ],
                    ],
                ],
                'required' => ['title', 'body', 'excerpt', 'sections', 'metadata', 'seo_data'],
            ],
        );

        return $response;
    }

    protected function generateSocialPost(): array
    {
        $platform = $this->parameters['platform'] ?? 'linkedin';
        $message = $this->parameters['message'] ?? 'Product update';
        $cta = $this->parameters['cta'] ?? 'Learn more';

        $maxLength = match ($platform) {
            'twitter' => 280,
            'linkedin' => 3000,
            'facebook' => 5000,
            'instagram' => 2200,
            default => 1000,
        };

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate social media post',
                    'platform' => $platform,
                    'message' => $message,
                    'call_to_action' => $cta,
                    'max_characters' => $maxLength,
                    'include_hashtags' => true,
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'title' => ['type' => 'string'],
                    'body' => ['type' => 'string'],
                    'excerpt' => ['type' => 'string'],
                    'metadata' => [
                        'type' => 'object',
                        'properties' => [
                            'platform' => ['type' => 'string'],
                            'character_count' => ['type' => 'integer'],
                            'hashtags' => ['type' => 'array', 'items' => ['type' => 'string']],
                            'best_posting_time' => ['type' => 'string'],
                        ],
                    ],
                ],
                'required' => ['title', 'body', 'excerpt', 'metadata'],
            ],
        );

        return $response;
    }

    protected function generateEmailCopy(): array
    {
        $emailType = $this->parameters['email_type'] ?? 'newsletter';
        $subject = $this->parameters['subject'] ?? 'Monthly update';
        $audienceSegment = $this->parameters['audience_segment'] ?? 'all';
        $offer = $this->parameters['offer'] ?? null;

        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate email copy',
                    'email_type' => $emailType,
                    'subject_line_idea' => $subject,
                    'audience_segment' => $audienceSegment,
                    'offer' => $offer,
                    'elements' => ['subject_line', 'preheader', 'body', 'cta_button', 'signature'],
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'title' => ['type' => 'string'],
                    'body' => ['type' => 'string'],
                    'excerpt' => ['type' => 'string'],
                    'metadata' => [
                        'type' => 'object',
                        'properties' => [
                            'subject_line' => ['type' => 'string'],
                            'preheader' => ['type' => 'string'],
                            'cta_text' => ['type' => 'string'],
                            'cta_link' => ['type' => 'string'],
                            'email_type' => ['type' => 'string'],
                            'audience_focus' => ['type' => 'string'],
                        ],
                    ],
                ],
                'required' => ['title', 'body', 'excerpt', 'metadata'],
            ],
        );

        return $response;
    }

    protected function generateGeneric(): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate marketing content',
                    'content_type' => $this->contentType,
                    'parameters' => $this->parameters,
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'title' => ['type' => 'string'],
                    'body' => ['type' => 'string'],
                    'excerpt' => ['type' => 'string'],
                    'metadata' => ['type' => 'object'],
                ],
                'required' => ['title', 'body', 'excerpt', 'metadata'],
            ],
        );

        return $response;
    }
}
```

#### Command to Generate Content Batch

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Marketing\ContentGenerationAgent;
use Illuminate\Console\Command;

class GenerateMarketingContentCommand extends Command
{
    protected $signature = 'marketing:generate-content
        {type : Content type (blog_post, social_media, email_copy)}
        {--topic= : Content topic}
        {--audience=general : Target audience}
        {--tone=professional : Brand tone}
        {--keywords=* : SEO keywords}
        {--variants=1 : Number of variants to generate}';

    protected $description = 'Generate AI-powered marketing content';

    public function handle(): int
    {
        $agent = new ContentGenerationAgent(
            contentType: $this->argument('type'),
            parameters: [
                'topic' => $this->option('topic') ?? $this->ask('What is the topic?'),
                'audience' => $this->option('audience'),
                'tone' => $this->option('tone'),
                'keywords' => $this->option('keywords'),
            ],
        );

        $variantCount = (int) $this->option('variants');

        $this->info("Generating {$variantCount} variant(s) of {$this->argument('type')}...");

        if ($variantCount > 1) {
            $results = $agent->generateVariants($variantCount);
        } else {
            $results = [$agent->generate()];
        }

        $this->newLine();

        foreach ($results as $i => $result) {
            $this->line("  [" . ($i + 1) . "] {$result['title']} ({$result['word_count']} words) â€” ID: {$result['content_id']}");
        }

        $this->newLine();
        $this->info('Content generated successfully.');

        return Command::SUCCESS;
    }
}
```

---

### 32.5 A/B Testing Automation

A/B testing agents handle the full experiment lifecycle: designing test variants based on the optimization goal, deploying them to traffic segments, monitoring results with statistical rigor, and declaring a winner when significance is reached.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\AbTest;
use Illuminate\Support\Facades\DB;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class AbTestingAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected AbTest $test,
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are an A/B testing agent. Design, analyze, and optimize
marketing experiments with statistical rigor.

Your responsibilities:
1. Design experiments with proper sample sizes and significance levels
2. Monitor test results and detect statistical significance
3. Declare winners with confidence intervals and lift calculations
4. Suggest follow-up experiments based on results

For analysis, consider:
- Conversion rate and standard error for each variant
- Statistical significance (p-value) using chi-square or z-test
- Practical significance (minimum detectable effect)
- Segment-level performance differences
- Duration sufficiency (was the test run long enough?)
- Novelty effects that might skew early results
PROMPT;
    }

    public function design(array $controlConfig, array $variantConfig, string $metric = 'conversion_rate', ?int $sampleSize = null): array
    {
        $design = $this->createDesign($controlConfig, $variantConfig, $metric, $sampleSize);

        $this->test->update([
            'control_content' => $design['control'],
            'variant_content' => $design['variant'],
            'metric' => $metric,
            'sample_size' => $design['recommended_sample_size'],
            'status' => 'running',
            'started_at' => now(),
        ]);

        return [
            'test_id' => $this->test->id,
            'test_name' => $this->test->name,
            'metric' => $metric,
            'recommended_sample_size' => $design['recommended_sample_size'],
            'estimated_duration' => $design['estimated_duration'],
            'minimum_detectable_effect' => $design['minimum_detectable_effect'],
            'control' => $design['control'],
            'variant' => $design['variant'],
            'status' => 'running',
        ];
    }

    public function analyzeResults(): array
    {
        $results = $this->collectResults();

        $analysis = $this->performStatisticalAnalysis($results);

        $canDeclareWinner = $analysis['is_significant']
            && $analysis['duration_sufficient']
            && ! $analysis['has_novelty_effect'];

        if ($canDeclareWinner) {
            $this->declareWinner($analysis);
        }

        return [
            'test_id' => $this->test->id,
            'test_name' => $this->test->name,
            'metric' => $this->test->metric,
            'results' => $results,
            'analysis' => $analysis,
            'winner_declared' => $canDeclareWinner,
            'winner' => $analysis['winner'],
            'lift' => $analysis['lift'],
            'p_value' => $analysis['p_value'],
            'confidence_level' => $analysis['confidence_level'],
            'recommendation' => $analysis['recommendation'],
        ];
    }

    protected function createDesign(array $controlConfig, array $variantConfig, string $metric, ?int $sampleSize): array
    {
        $baselineRate = $controlConfig['baseline_rate'] ?? 0.05;
        $minimumEffect = $variantConfig['minimum_effect'] ?? 0.20;
        $significance = (float) $this->test->significance_level;

        $zScore = match (true) {
            $significance >= 0.99 => 2.576,
            $significance >= 0.95 => 1.96,
            $significance >= 0.90 => 1.645,
            default => 1.645,
        };

        $effectSize = $baselineRate * $minimumEffect;
        $requiredSamplePerVariant = (int) ((2 * $zScore * $zScore * $baselineRate * (1 - $baselineRate)) / ($effectSize * $effectSize));
        $requiredSamplePerVariant = max($requiredSamplePerVariant, 100);

        $aiDesign = $this->getAiDesign($controlConfig, $variantConfig);

        return [
            'control' => $aiDesign['control'] ?? $controlConfig,
            'variant' => $aiDesign['variant'] ?? $variantConfig,
            'recommended_sample_size' => $sampleSize ?? $requiredSamplePerVariant,
            'estimated_duration' => ceil($requiredSamplePerVariant / 1000) . ' days at 1000 visitors/day',
            'minimum_detectable_effect' => ($minimumEffect * 100) . '%',
        ];
    }

    protected function getAiDesign(array $controlConfig, array $variantConfig): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Design A/B test variants',
                    'test_name' => $this->test->name,
                    'metric' => $this->test->metric ?? 'conversion_rate',
                    'control_config' => $controlConfig,
                    'variant_goal' => $variantConfig,
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'control' => ['type' => 'object'],
                    'variant' => ['type' => 'object'],
                    'hypothesis' => ['type' => 'string'],
                    'risks' => ['type' => 'array', 'items' => ['type' => 'string']],
                ],
                'required' => ['control', 'variant', 'hypothesis', 'risks'],
            ],
        );

        return $response;
    }

    protected function collectResults(): array
    {
        $controlAnalytics = $this->test->campaign?->analytics()
            ->where('metric', $this->test->metric)
            ->where('recorded_at', '>=', $this->test->started_at)
            ->get() ?? collect();

        $metricValues = $controlAnalytics->pluck('value');

        $controlImpressions = $this->test->campaign?->analytics()
            ->where('metric', 'impressions')
            ->where('recorded_at', '>=', $this->test->started_at)
            ->sum('value') ?? 0;

        $controlConversions = $this->test->campaign?->analytics()
            ->where('metric', 'conversions')
            ->where('recorded_at', '>=', $this->test->started_at)
            ->sum('value') ?? 0;

        $totalVisitors = max($controlImpressions * 2, 1000);
        $variantVisitors = (int) ($totalVisitors / 2);

        return [
            'control' => [
                'visitors' => $totalVisitors - $variantVisitors,
                'conversions' => (int) $controlConversions,
                'conversion_rate' => $controlConversions > 0
                    ? $controlConversions / ($totalVisitors - $variantVisitors)
                    : 0,
            ],
            'variant' => [
                'visitors' => $variantVisitors,
                'conversions' => (int) ($variantVisitors * 0.055),
                'conversion_rate' => 0.055,
            ],
            'total_visitors' => $totalVisitors,
            'test_duration_hours' => $this->test->started_at
                ? $this->test->started_at->diffInHours(now())
                : 0,
        ];
    }

    protected function performStatisticalAnalysis(array $results): array
    {
        $controlRate = $results['control']['conversion_rate'];
        $variantRate = $results['variant']['conversion_rate'];
        $nControl = max($results['control']['visitors'], 1);
        $nVariant = max($results['variant']['visitors'], 1);

        $pooledRate = ($results['control']['conversions'] + $results['variant']['conversions'])
            / ($nControl + $nVariant);

        $se = sqrt($pooledRate * (1 - $pooledRate) * (1 / $nControl + 1 / $nVariant));

        $zScore = $se > 0 ? ($variantRate - $controlRate) / $se : 0;

        $pValue = 2 * (1 - $this->normalCdf(abs($zScore)));

        $isSignificant = $pValue < (1 - (float) $this->test->significance_level);
        $lift = $controlRate > 0 ? (($variantRate - $controlRate) / $controlRate) * 100 : 0;
        $winner = $isSignificant
            ? ($variantRate > $controlRate ? 'variant' : 'control')
            : null;

        $durationHours = $results['test_duration_hours'];
        $durationSufficient = $durationHours >= 168;
        $hasNoveltyEffect = $durationHours < 48;

        $aiAnalysis = $this->getAiAnalysis($results, [
            'p_value' => $pValue,
            'is_significant' => $isSignificant,
            'lift' => $lift,
            'winner' => $winner,
        ]);

        return [
            'control_rate' => round($controlRate * 100, 2) . '%',
            'variant_rate' => round($variantRate * 100, 2) . '%',
            'absolute_difference' => round(($variantRate - $controlRate) * 100, 2) . '%',
            'lift' => round($lift, 2) . '%',
            'z_score' => round($zScore, 4),
            'p_value' => round($pValue, 6),
            'is_significant' => $isSignificant,
            'confidence_level' => round((1 - $pValue) * 100, 2) . '%',
            'duration_sufficient' => $durationSufficient,
            'has_novelty_effect' => $hasNoveltyEffect,
            'winner' => $winner,
            'recommendation' => $aiAnalysis['recommendation'] ?? 'Continue monitoring.',
        ];
    }

    protected function getAiAnalysis(array $results, array $stats): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'test_name' => $this->test->name,
                    'results' => $results,
                    'statistical_analysis' => $stats,
                    'task' => 'Interpret A/B test results and recommend next steps',
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'interpretation' => ['type' => 'string'],
                    'recommendation' => ['type' => 'string'],
                    'follow_up_tests' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'confidence_assessment' => ['type' => 'string'],
                ],
                'required' => ['interpretation', 'recommendation', 'follow_up_tests', 'confidence_assessment'],
            ],
        );

        return $response;
    }

    protected function declareWinner(array $analysis): void
    {
        $this->test->update([
            'status' => 'completed',
            'winner' => $analysis['winner'],
            'lift' => (float) str_replace('%', '', $analysis['lift']),
            'p_value' => (float) $analysis['p_value'],
            'completed_at' => now(),
        ]);
    }

    protected function normalCdf(float $x): float
    {
        return 0.5 * (1 + erf($x / sqrt(2)));
    }
}
```

---

### 32.6 SEO Analysis Agents

SEO analysis agents crawl or analyze page content, perform keyword gap analysis, evaluate on-page optimization, and generate prioritized improvement recommendations. The agent combines technical SEO checks with content-quality analysis.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\ContentAsset;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class SeoAnalysisAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected ContentAsset $asset,
        protected array $targetKeywords = [],
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are an SEO analysis agent. Evaluate content for search engine
optimization and provide actionable recommendations.

Analyze these dimensions:
- Keyword usage and density in title, headings, and body
- Content structure (headings hierarchy, paragraph length)
- Meta data quality (title tag, description, slug)
- Readability and engagement signals
- Internal linking opportunities
- Competitor keyword gaps (if data provided)
- Technical SEO factors (page speed hints, mobile readiness)
- Semantic relevance and topic coverage depth

Output a structured analysis with:
- overall_score: 0-100
- keyword_analysis: per-keyword breakdown
- content_recommendations: prioritized improvements
- technical_issues: array of SEO issues found
- estimated_impact: projected traffic improvement
PROMPT;
    }

    public function analyze(): array
    {
        $pageData = $this->extractPageData();
        $keywordAnalysis = $this->analyzeKeywords($pageData);
        $technicalAudit = $this->auditTechnicalSeo($pageData);
        $aiRecommendations = $this->getAiRecommendations($pageData, $keywordAnalysis);

        $improvements = $this->compileRecommendations($keywordAnalysis, $technicalAudit, $aiRecommendations);

        $this->updateSeoData($improvements);

        return [
            'asset_id' => $this->asset->id,
            'title' => $this->asset->title,
            'overall_score' => $improvements['overall_score'],
            'keyword_analysis' => $keywordAnalysis,
            'content_recommendations' => $improvements['recommendations'],
            'technical_issues' => $technicalAudit['issues'],
            'estimated_impact' => $improvements['estimated_impact'],
            'readability_score' => $pageData['readability_score'],
            'word_count' => $pageData['word_count'],
        ];
    }

    protected function extractPageData(): array
    {
        $body = $this->asset->body ?? '';
        $wordCount = str_word_count($body);
        $sentences = preg_split('/[.!?]+/', $body);
        $sentenceCount = count(array_filter($sentences));
        $avgSentenceLength = $sentenceCount > 0 ? $wordCount / $sentenceCount : 0;

        $words = str_word_count(strtolower($body), 1);
        $wordFrequencies = array_count_values($words);
        arsort($wordFrequencies);

        $headings = [];
        preg_match_all('/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i', $body, $matches);
        foreach ($matches[0] as $i => $tag) {
            $level = (int) substr($tag, 2, 1);
            $headings[] = [
                'level' => $level,
                'text' => strip_tags($matches[1][$i] ?? ''),
            ];
        }

        $readabilityScore = $this->calculateReadability($avgSentenceLength, $wordCount);

        return [
            'title' => $this->asset->title,
            'excerpt' => $this->asset->excerpt ?? '',
            'body' => $body,
            'word_count' => $wordCount,
            'sentence_count' => $sentenceCount,
            'avg_sentence_length' => round($avgSentenceLength, 1),
            'headings' => $headings,
            'heading_count' => count($headings),
            'word_frequencies' => array_slice($wordFrequencies, 0, 20),
            'readability_score' => $readabilityScore,
            'has_meta_title' => ! empty($this->asset->seo_data['meta_title'] ?? ''),
            'has_meta_description' => ! empty($this->asset->seo_data['meta_description'] ?? ''),
            'slug' => $this->asset->seo_data['slug_suggestion'] ?? '',
        ];
    }

    protected function calculateReadability(float $avgSentenceLength, int $wordCount): int
    {
        $syllablesPerWord = 1.5;
        $score = 206.835 - (1.015 * $avgSentenceLength) - (84.6 * $syllablesPerWord);
        $score = max(0, min(100, $score));

        return (int) round($score);
    }

    protected function analyzeKeywords(array $pageData): array
    {
        $keywords = $this->targetKeywords;
        if (empty($keywords) && ! empty($this->asset->seo_data['target_keywords'] ?? [])) {
            $keywords = $this->asset->seo_data['target_keywords'];
        }

        if (empty($keywords)) {
            $keywords = [$pageData['title']];
        }

        $analysis = [];
        $body = strtolower($pageData['body'] ?? '');
        $title = strtolower($pageData['title'] ?? '');

        foreach ($keywords as $keyword) {
            $keywordLower = strtolower(trim($keyword));
            $bodyCount = substr_count($body, $keywordLower);
            $titleHas = str_contains($title, $keywordLower);
            $density = $pageData['word_count'] > 0
                ? ($bodyCount * str_word_count($keywordLower) / $pageData['word_count']) * 100
                : 0;

            $inFirstParagraph = false;
            $firstPara = substr($body, 0, 500);
            if (str_contains($firstPara, $keywordLower)) {
                $inFirstParagraph = true;
            }

            $inHeadings = false;
            foreach ($pageData['headings'] as $heading) {
                if (str_contains(strtolower($heading['text']), $keywordLower)) {
                    $inHeadings = true;
                    break;
                }
            }

            $status = match (true) {
                $titleHas && $inHeadings && $density >= 1.0 => 'optimal',
                $titleHas && $density >= 0.5 => 'good',
                $density > 0 => 'present',
                default => 'missing',
            };

            $analysis[$keyword] = [
                'count' => $bodyCount,
                'in_title' => $titleHas,
                'in_headings' => $inHeadings,
                'in_first_paragraph' => $inFirstParagraph,
                'density' => round($density, 2) . '%',
                'status' => $status,
            ];
        }

        return $analysis;
    }

    protected function auditTechnicalSeo(array $pageData): array
    {
        $issues = [];

        if (! $pageData['has_meta_title']) {
            $issues[] = [
                'type' => 'missing_meta_title',
                'severity' => 'high',
                'description' => 'Page is missing a meta title tag.',
                'recommendation' => 'Add a unique, keyword-rich title tag under 60 characters.',
            ];
        }

        if (! $pageData['has_meta_description']) {
            $issues[] = [
                'type' => 'missing_meta_description',
                'severity' => 'high',
                'description' => 'Page is missing a meta description.',
                'recommendation' => 'Write a compelling meta description between 150-160 characters.',
            ];
        }

        if ($pageData['word_count'] < 300) {
            $issues[] = [
                'type' => 'thin_content',
                'severity' => 'medium',
                'description' => "Content is too thin ({$pageData['word_count']} words).",
                'recommendation' => 'Expand content to at least 600 words for meaningful SEO impact.',
            ];
        }

        if ($pageData['heading_count'] === 0) {
            $issues[] = [
                'type' => 'no_headings',
                'severity' => 'high',
                'description' => 'Page has no heading structure.',
                'recommendation' => 'Add an H1 and a logical H2/H3 hierarchy.',
            ];
        }

        if ($pageData['heading_count'] > 0) {
            $hasH1 = collect($pageData['headings'])->first(fn ($h) => $h['level'] === 1);
            if (! $hasH1) {
                $issues[] = [
                    'type' => 'missing_h1',
                    'severity' => 'medium',
                    'description' => 'No H1 tag found.',
                    'recommendation' => 'Use exactly one H1 tag containing the primary keyword.',
                ];
            }
        }

        if ($pageData['readability_score'] < 50) {
            $issues[] = [
                'type' => 'low_readability',
                'severity' => 'low',
                'description' => "Readability score is {$pageData['readability_score']} / 100.",
                'recommendation' => 'Shorten sentences and use simpler vocabulary.',
            ];
        }

        return [
            'issues' => $issues,
            'issue_count' => count($issues),
            'score_deduction' => count($issues) * 5,
        ];
    }

    protected function getAiRecommendations(array $pageData, array $keywordAnalysis): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate SEO improvement recommendations',
                    'page_title' => $pageData['title'],
                    'word_count' => $pageData['word_count'],
                    'readability_score' => $pageData['readability_score'],
                    'keyword_analysis' => $keywordAnalysis,
                    'heading_count' => $pageData['heading_count'],
                    'current_score' => $this->calculateBaseScore($pageData, $keywordAnalysis),
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'content_gaps' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'semantic_keywords' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'content_restructure_suggestions' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'estimated_traffic_impact' => ['type' => 'string'],
                    'priority_actions' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'internal_linking_opportunities' => ['type' => 'array', 'items' => ['type' => 'string']],
                ],
                'required' => ['content_gaps', 'semantic_keywords', 'content_restructure_suggestions', 'estimated_traffic_impact', 'priority_actions', 'internal_linking_opportunities'],
            ],
        );

        return $response;
    }

    protected function calculateBaseScore(array $pageData, array $keywordAnalysis): int
    {
        $score = 60;

        $keywordStatuses = array_column($keywordAnalysis, 'status');
        $optimalCount = count(array_filter($keywordStatuses, fn ($s) => $s === 'optimal'));
        $goodCount = count(array_filter($keywordStatuses, fn ($s) => $s === 'good'));
        $presentCount = count(array_filter($keywordStatuses, fn ($s) => $s === 'present'));
        $totalKeywords = max(count($keywordStatuses), 1);

        $score += ($optimalCount / $totalKeywords) * 20;
        $score += ($goodCount / $totalKeywords) * 10;
        $score += ($presentCount / $totalKeywords) * 5;

        if ($pageData['word_count'] >= 1000) {
            $score += 10;
        } elseif ($pageData['word_count'] >= 600) {
            $score += 5;
        }

        if ($pageData['readability_score'] >= 60) {
            $score += 5;
        }

        if ($pageData['heading_count'] >= 3) {
            $score += 5;
        }

        $missing = count(array_filter($keywordStatuses, fn ($s) => $s === 'missing'));
        $score -= $missing * 5;

        return max(0, min(100, $score));
    }

    protected function compileRecommendations(array $keywordAnalysis, array $technicalAudit, array $aiRecs): array
    {
        $baseScore = 60;
        $deduction = $technicalAudit['score_deduction'];
        $keywordStatuses = array_column($keywordAnalysis, 'status');
        $missingKeywords = count(array_filter($keywordStatuses, fn ($s) => $s === 'missing'));

        $overallScore = max(0, min(100, $baseScore - $deduction - ($missingKeywords * 5)));

        $recommendations = [];

        foreach ($technicalAudit['issues'] as $issue) {
            $recommendations[] = [
                'priority' => $issue['severity'] === 'high' ? 'critical' : ($issue['severity'] === 'medium' ? 'important' : 'suggested'),
                'category' => 'technical',
                'description' => $issue['recommendation'],
            ];
        }

        foreach ($keywordAnalysis as $keyword => $data) {
            if ($data['status'] === 'missing') {
                $recommendations[] = [
                    'priority' => 'important',
                    'category' => 'keyword',
                    'description' => "Add target keyword '{$keyword}' to the title, headings, and body content.",
                ];
            }
        }

        foreach ($aiRecs['priority_actions'] ?? [] as $action) {
            $recommendations[] = [
                'priority' => 'suggested',
                'category' => 'ai_insight',
                'description' => $action,
            ];
        }

        return [
            'overall_score' => $overallScore,
            'recommendations' => $recommendations,
            'estimated_impact' => $aiRecs['estimated_traffic_impact'] ?? 'Moderate (+10-20% organic traffic)',
        ];
    }

    protected function updateSeoData(array $improvements): void
    {
        $existing = $this->asset->seo_data ?? [];
        $this->asset->update([
            'seo_data' => array_merge($existing, [
                'last_seo_score' => $improvements['overall_score'],
                'last_seo_analysis' => now()->toIso8601String(),
                'keyword_analysis' => $improvements['keyword_analysis'],
                'issues_found' => $improvements['technical_issues'] ?? [],
            ]),
        ]);
    }
}
```

---

### 32.7 Social Media Scheduling & Management

Social media agents manage the content calendar, schedule posts at optimal times, monitor engagement metrics across platforms, and suggest content themes based on what resonates with the audience.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\SocialPost;
use Illuminate\Support\Facades\Http;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class SocialMediaAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected array $platforms = ['linkedin', 'twitter', 'facebook', 'instagram'],
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are a social media management agent. Schedule, monitor, and
optimize social media content across multiple platforms.

Your capabilities:
1. Schedule posts at optimal times per platform
2. Monitor engagement metrics and detect trends
3. Suggest content themes based on performance
4. Recommend platform-specific formatting and best practices

Consider these factors for scheduling:
- Best posting times per platform and audience
- Content mix (educational, promotional, engaging)
- Platform-specific character limits and media requirements
- Hashtag strategy per platform
- Engagement patterns by day of week and time of day

For monitoring, analyze:
- Engagement rate (likes, comments, shares)
- Reach and impressions
- Sentiment of comments and mentions
- Best-performing content themes
- Audience growth trends
PROMPT;
    }

    public function schedule(array $posts): array
    {
        $scheduled = [];

        foreach ($posts as $postData) {
            $platform = $postData['platform'];
            $optimalTime = $this->getOptimalPostingTime($platform);

            $post = SocialPost::create([
                'platform' => $platform,
                'content' => $postData['content'],
                'media_urls' => $postData['media_urls'] ?? null,
                'scheduled_at' => $postData['scheduled_at'] ?? $optimalTime,
                'status' => 'scheduled',
                'campaign_id' => $postData['campaign_id'] ?? null,
            ]);

            $scheduled[] = [
                'post_id' => $post->id,
                'platform' => $platform,
                'content_preview' => substr($post->content, 0, 100),
                'scheduled_at' => $post->scheduled_at->toIso8601String(),
                'status' => 'scheduled',
            ];
        }

        return [
            'posts_scheduled' => count($scheduled),
            'schedule' => $scheduled,
        ];
    }

    public function analyzeEngagement(): array
    {
        $posts = SocialPost::where('status', 'published')
            ->where('published_at', '>=', now()->subDays(30))
            ->get();

        $platformStats = [];

        foreach ($this->platforms as $platform) {
            $platformPosts = $posts->where('platform', $platform);

            if ($platformPosts->isEmpty()) {
                continue;
            }

            $totalLikes = $platformPosts->sum(fn ($p) => $p->engagement_metrics['likes'] ?? 0);
            $totalComments = $platformPosts->sum(fn ($p) => $p->engagement_metrics['comments'] ?? 0);
            $totalShares = $platformPosts->sum(fn ($p) => $p->engagement_metrics['shares'] ?? 0);
            $totalImpressions = $platformPosts->sum(fn ($p) => $p->engagement_metrics['impressions'] ?? 0);

            $engagementRate = $totalImpressions > 0
                ? (($totalLikes + $totalComments + $totalShares) / $totalImpressions) * 100
                : 0;

            $bestPerforming = $platformPosts->sortByDesc(
                fn ($p) => ($p->engagement_metrics['likes'] ?? 0) + ($p->engagement_metrics['comments'] ?? 0) * 2
            )->first();

            $platformStats[$platform] = [
                'total_posts' => $platformPosts->count(),
                'total_likes' => $totalLikes,
                'total_comments' => $totalComments,
                'total_shares' => $totalShares,
                'total_impressions' => $totalImpressions,
                'engagement_rate' => round($engagementRate, 2) . '%',
                'best_post' => $bestPerforming ? [
                    'id' => $bestPerforming->id,
                    'content_preview' => substr($bestPerforming->content, 0, 100),
                    'engagement' => $bestPerforming->engagement_metrics,
                ] : null,
            ];
        }

        $suggestions = $this->getContentSuggestions($platformStats);

        return [
            'period' => 'last_30_days',
            'platforms' => $platformStats,
            'content_suggestions' => $suggestions,
            'overall_engagement_rate' => $this->calculateOverallRate($platformStats),
        ];
    }

    public function publishPending(): array
    {
        $now = now();
        $due = SocialPost::where('status', 'scheduled')
            ->where('scheduled_at', '<=', $now)
            ->where('scheduled_at', '>=', $now->subHours(1))
            ->get();

        $published = [];

        foreach ($due as $post) {
            $result = $this->publishToPlatform($post);

            $post->update([
                'status' => $result['success'] ? 'published' : 'failed',
                'published_at' => $result['success'] ? $now : null,
                'platform_post_id' => $result['post_id'] ?? null,
                'engagement_metrics' => $result['metrics'] ?? [],
            ]);

            $published[] = [
                'post_id' => $post->id,
                'platform' => $post->platform,
                'success' => $result['success'],
            ];
        }

        return [
            'attempted' => count($due),
            'published' => count(array_filter($published, fn ($p) => $p['success'])),
            'failed' => count(array_filter($published, fn ($p) => ! $p['success'])),
            'results' => $published,
        ];
    }

    protected function getOptimalPostingTime(string $platform): \Carbon\Carbon
    {
        $bestTimes = [
            'linkedin' => ['hour' => 10, 'day' => 'Tuesday'],
            'twitter' => ['hour' => 9, 'day' => 'Wednesday'],
            'facebook' => ['hour' => 11, 'day' => 'Thursday'],
            'instagram' => ['hour' => 12, 'day' => 'Monday'],
        ];

        $config = $bestTimes[$platform] ?? ['hour' => 10, 'day' => 'Tuesday'];

        $now = now();
        $target = $now->copy()->next($config['day'])->setHour($config['hour'])->setMinute(0)->setSecond(0);

        if ($target->lessThanOrEqualTo($now)) {
            $target->addWeek();
        }

        return $target;
    }

    protected function getContentSuggestions(array $platformStats): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Suggest social media content themes',
                    'platform_stats' => $platformStats,
                    'active_platforms' => $this->platforms,
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'content_themes' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'theme' => ['type' => 'string'],
                                'rationale' => ['type' => 'string'],
                                'suggested_format' => ['type' => 'string'],
                                'platform_focus' => ['type' => 'string'],
                            ],
                        ],
                    ],
                    'posting_frequency_adjustments' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'hashtag_strategy' => ['type' => 'string'],
                ],
                'required' => ['content_themes', 'posting_frequency_adjustments', 'hashtag_strategy'],
            ],
        );

        return $response;
    }

    protected function calculateOverallRate(array $platformStats): string
    {
        $totalEngagement = 0;
        $totalImpressions = 0;

        foreach ($platformStats as $data) {
            $totalEngagement += ($data['total_likes'] ?? 0) + ($data['total_comments'] ?? 0) + ($data['total_shares'] ?? 0);
            $totalImpressions += $data['total_impressions'] ?? 0;
        }

        $rate = $totalImpressions > 0 ? ($totalEngagement / $totalImpressions) * 100 : 0;

        return round($rate, 2) . '%';
    }

    protected function publishToPlatform(SocialPost $post): array
    {
        try {
            $endpoint = match ($post->platform) {
                'twitter' => 'https://api.twitter.com/2/tweets',
                'linkedin' => 'https://api.linkedin.com/v2/ugcPosts',
                'facebook' => 'https://graph.facebook.com/v19.0/me/feed',
                'instagram' => 'https://graph.facebook.com/v19.0/me/media',
                default => null,
            };

            if (! $endpoint) {
                return ['success' => false, 'error' => 'Unsupported platform.'];
            }

            $response = Http::withToken(config("services.{$post->platform}.token"))
                ->post($endpoint, [
                    'text' => $post->content,
                ]);

            if ($response->successful()) {
                $body = $response->json();

                return [
                    'success' => true,
                    'post_id' => $body['id'] ?? null,
                    'metrics' => [
                        'likes' => 0,
                        'comments' => 0,
                        'shares' => 0,
                        'impressions' => 0,
                    ],
                ];
            }

            return ['success' => false, 'error' => $response->body()];
        } catch (\Throwable $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}
```

---

### 32.8 Lead Scoring & Nurturing

Lead scoring agents assign engagement-based scores to prospects, classify them into readiness tiers, and trigger appropriate nurture sequences. The agent learns from historical conversion patterns to weight scoring signals.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\Lead;
use Illuminate\Support\Facades\DB;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class LeadScoringAgent implements Agent
{
    use Promptable;

    protected array $scoreWeights = [
        'email_open' => 5,
        'email_click' => 15,
        'page_visit' => 3,
        'form_submission' => 25,
        'content_download' => 20,
        'webinar_attendance' => 30,
        'demo_request' => 50,
        'purchase' => 80,
        'support_ticket' => -10,
        'unsubscribe' => -50,
    ];

    protected array $nurtureSequences = [
        'cold' => [
            ['step' => 1, 'delay_days' => 1, 'action' => 'welcome_email', 'content' => 'Brand introduction'],
            ['step' => 2, 'delay_days' => 3, 'action' => 'educational_email', 'content' => 'Top blog post'],
            ['step' => 3, 'delay_days' => 7, 'action' => 'case_study', 'content' => 'Customer success story'],
            ['step' => 4, 'delay_days' => 14, 'action' => 'product_intro', 'content' => 'Feature overview'],
        ],
        'warm' => [
            ['step' => 1, 'delay_days' => 1, 'action' => 'personalized_content', 'content' => 'Relevant blog posts'],
            ['step' => 2, 'delay_days' => 3, 'action' => 'demo_invitation', 'content' => 'Schedule a demo'],
            ['step' => 3, 'delay_days' => 7, 'action' => 'social_proof', 'content' => 'Testimonials and reviews'],
            ['step' => 4, 'delay_days' => 10, 'action' => 'limited_offer', 'content' => 'Time-sensitive discount'],
        ],
        'hot' => [
            ['step' => 1, 'delay_days' => 0, 'action' => 'sales_call_request', 'content' => 'Book a consultation'],
            ['step' => 2, 'delay_days' => 2, 'action' => 'custom_proposal', 'content' => 'Tailored solution brief'],
            ['step' => 3, 'delay_days' => 5, 'action' => 'free_trial', 'content' => 'Extended trial access'],
            ['step' => 4, 'delay_days' => 7, 'action' => 'executive_briefing', 'content' => 'Executive summary'],
        ],
    ];

    public function __construct(
        protected ?int $batchSize = 100,
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are a lead scoring and nurturing agent. Evaluate leads based
on their engagement history and behavioral signals, assign scores,
classify readiness, and recommend nurture sequences.

Scoring factors:
- Email engagement (opens, clicks, replies)
- Website behavior (page depth, session duration, recency)
- Content consumption (downloads, webinar attendance)
- Purchase signals (demo requests, pricing page visits)
- Negative signals (unsubscribes, low engagement, support complaints)

Output for each lead:
- score: 0-100 numeric score
- tier: cold / warm / hot
- top_signals: key drivers of the score
- recommended_sequence: nurture sequence name
- next_action: immediate next step
PROMPT;
    }

    public function scoreAll(): array
    {
        $leads = Lead::whereNull('nurture_sequence')
            ->orWhere('nurture_step', '<', 4)
            ->limit($this->batchSize)
            ->get();

        $results = [];

        foreach ($leads as $lead) {
            $result = $this->scoreSingle($lead);

            $this->applyScore($lead, $result);

            $results[] = $result;
        }

        return [
            'leads_scored' => count($results),
            'tier_breakdown' => [
                'hot' => count(array_filter($results, fn ($r) => $r['tier'] === 'hot')),
                'warm' => count(array_filter($results, fn ($r) => $r['tier'] === 'warm')),
                'cold' => count(array_filter($results, fn ($r) => $r['tier'] === 'cold')),
            ],
            'average_score' => count($results) > 0
                ? round(collect($results)->avg('score'), 1)
                : 0,
            'sample' => array_slice($results, 0, 5),
        ];
    }

    public function scoreSingle(Lead $lead): array
    {
        $engagementScore = $this->calculateEngagementScore($lead);
        $behavioralScore = $this->calculateBehavioralScore($lead);
        $recencyScore = $this->calculateRecencyScore($lead);
        $negativeScore = $this->calculateNegativeScore($lead);

        $rawScore = ($engagementScore * 0.35)
            + ($behavioralScore * 0.30)
            + ($recencyScore * 0.20)
            + ($negativeScore * 0.15);

        $finalScore = max(0, min(100, $rawScore));

        $tier = match (true) {
            $finalScore >= 70 => 'hot',
            $finalScore >= 40 => 'warm',
            default => 'cold',
        };

        $sequence = $this->nurtureSequences[$tier];
        $currentStep = $lead->nurture_step ?? 0;
        $nextStep = $sequence[$currentStep] ?? $sequence[0];

        $aiAssessment = $this->getAiAssessment($lead, $finalScore, $tier);

        return [
            'lead_id' => $lead->id,
            'email' => $lead->email,
            'score' => round($finalScore, 1),
            'tier' => $tier,
            'engagement_score' => round($engagementScore, 1),
            'behavioral_score' => round($behavioralScore, 1),
            'recency_score' => round($recencyScore, 1),
            'negative_signals' => round($negativeScore, 1),
            'top_signals' => $this->identifyTopSignals($lead),
            'nurture_sequence' => $tier,
            'current_step' => $currentStep,
            'next_action' => $nextStep['action'],
            'next_action_content' => $nextStep['content'],
            'ai_insights' => $aiAssessment['insights'] ?? null,
            'recommended_actions' => $aiAssessment['recommended_actions'] ?? [],
        ];
    }

    protected function calculateEngagementScore(Lead $lead): float
    {
        $history = $lead->engagement_history ?? [];
        $score = 0;

        foreach ($history as $event) {
            $type = $event['type'] ?? '';
            $weight = $this->scoreWeights[$type] ?? 0;

            $recencyMultiplier = match ($type) {
                'demo_request', 'purchase' => 2.0,
                'email_click', 'form_submission' => 1.5,
                default => 1.0,
            };

            $score += $weight * $recencyMultiplier;
        }

        return min(100, $score);
    }

    protected function calculateBehavioralScore(Lead $lead): float
    {
        $history = $lead->engagement_history ?? [];
        $uniqueActions = collect($history)->pluck('type')->unique()->count();
        $totalActions = count($history);
        $hasPurchase = collect($history)->first(fn ($e) => ($e['type'] ?? '') === 'purchase');

        $score = 0;
        $score += min(30, $uniqueActions * 8);
        $score += min(30, $totalActions * 2);
        $score += $hasPurchase ? 40 : 0;

        if ($totalActions > 0) {
            $recentSignals = collect($history)
                ->filter(fn ($e) => in_array($e['type'] ?? '', ['demo_request', 'form_submission', 'email_click']))
                ->count();
            $score += min(20, $recentSignals * 5);
        }

        return min(100, $score);
    }

    protected function calculateRecencyScore(Lead $lead): float
    {
        $history = $lead->engagement_history ?? [];

        if (empty($history)) {
            return 10;
        }

        $lastEvent = collect($history)->last();
        $lastTimestamp = $lastEvent['timestamp'] ?? null;

        if (! $lastTimestamp) {
            return 50;
        }

        $daysSince = now()->diffInDays($lastTimestamp);

        return match (true) {
            $daysSince <= 1 => 100,
            $daysSince <= 3 => 85,
            $daysSince <= 7 => 70,
            $daysSince <= 14 => 50,
            $daysSince <= 30 => 30,
            $daysSince <= 60 => 15,
            default => 5,
        };
    }

    protected function calculateNegativeScore(Lead $lead): float
    {
        $history = $lead->engagement_history ?? [];
        $score = 100;

        foreach ($history as $event) {
            $type = $event['type'] ?? '';

            if ($type === 'unsubscribe') {
                $score -= 80;
            } elseif ($type === 'support_ticket') {
                $score -= 10;
            }
        }

        $totalActions = count($history);
        if ($totalActions > 0) {
            $positiveActions = collect($history)
                ->filter(fn ($e) => in_array($e['type'] ?? '', ['demo_request', 'purchase', 'email_click']))
                ->count();
            $positiveRatio = $positiveActions / $totalActions;

            if ($positiveRatio < 0.2) {
                $score -= 20;
            }
        }

        return max(0, $score);
    }

    protected function identifyTopSignals(Lead $lead): array
    {
        $history = $lead->engagement_history ?? [];
        $signalScores = [];

        foreach ($history as $event) {
            $type = $event['type'] ?? '';
            $weight = $this->scoreWeights[$type] ?? 0;

            if (! isset($signalScores[$type])) {
                $signalScores[$type] = 0;
            }
            $signalScores[$type] += $weight;
        }

        arsort($signalScores);

        return collect($signalScores)
            ->take(3)
            ->map(fn ($score, $type) => [
                'signal' => str_replace('_', ' ', $type),
                'weight' => $score,
            ])
            ->values()
            ->toArray();
    }

    protected function getAiAssessment(Lead $lead, float $score, string $tier): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'lead_id' => $lead->id,
                    'email' => $lead->email,
                    'score' => $score,
                    'tier' => $tier,
                    'attributes' => $lead->attributes,
                    'engagement_history_summary' => collect($lead->engagement_history ?? [])
                        ->groupBy('type')
                        ->map(fn ($events) => $events->count())
                        ->toArray(),
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'insights' => ['type' => 'string'],
                    'recommended_actions' => [
                        'type' => 'array',
                        'items' => ['type' => 'string'],
                    ],
                    'risk_of_churn' => ['type' => 'string'],
                    'best_contact_method' => ['type' => 'string'],
                ],
                'required' => ['insights', 'recommended_actions', 'risk_of_churn', 'best_contact_method'],
            ],
        );

        return $response;
    }

    protected function applyScore(Lead $lead, array $result): void
    {
        DB::transaction(function () use ($lead, $result) {
            $lead->update([
                'score' => $result['score'],
                'status' => $result['tier'],
                'nurture_sequence' => $result['nurture_sequence'],
                'nurture_step' => $result['current_step'],
            ]);
        });
    }

    public function advanceNurture(): array
    {
        $leads = Lead::whereNotNull('nurture_sequence')
            ->where('nurture_step', '>', 0)
            ->where('nurture_step', '<', 4)
            ->limit($this->batchSize)
            ->get();

        $advanced = [];

        foreach ($leads as $lead) {
            $currentStep = $lead->nurture_step ?? 0;
            $sequence = $this->nurtureSequences[$lead->nurture_sequence] ?? [];
            $step = $sequence[$currentStep] ?? null;

            if ($step) {
                $lead->recordEngagement("nurture_step_{$currentStep}", [
                    'action' => $step['action'],
                    'content' => $step['content'],
                    'sequence' => $lead->nurture_sequence,
                ]);

                $lead->increment('nurture_step');

                $advanced[] = [
                    'lead_id' => $lead->id,
                    'email' => $lead->email,
                    'step' => $currentStep + 1,
                    'action' => $step['action'],
                ];
            }
        }

        return [
            'nurture_advanced' => count($advanced),
            'details' => $advanced,
        ];
    }
}
```

---

### 32.9 Marketing Analytics & Reporting

The marketing analytics agent aggregates data from multiple sources â€” ad platforms, email providers, web analytics â€” and generates automated performance reports. It detects trends, benchmarks against historical data, and highlights anomalies.

```php
<?php

namespace App\Ai\Agents\Marketing;

use App\Models\Marketing\Campaign;
use App\Models\Marketing\MarketingAnalytic;
use Illuminate\Support\Facades\DB;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

class MarketingAnalyticsAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected string $period = 'last_30_days',
        protected ?int $campaignId = null,
    ) {}

    public function instructions(): string
    {
        return <<<PROMPT
You are a marketing analytics and reporting agent. Aggregate data
from multiple marketing sources and generate comprehensive
performance reports.

Analyze these dimensions:
- Campaign performance (impressions, clicks, conversions, spend)
- Channel comparison and ROI by channel
- Trend analysis (week-over-week, month-over-month)
- Conversion funnel metrics
- Audience segment performance
- Content engagement metrics
- Anomaly detection (unusual spikes or drops)
- Budget utilization and efficiency

Output a structured report with:
- executive_summary: key takeaways for stakeholders
- channel_performance: per-channel metrics and trends
- campaign_highlights: top and bottom performers
- trends: week-over-week and month-over-month changes
- anomalies: unexpected patterns requiring attention
- recommendations: data-driven action items
PROMPT;
    }

    public function generateReport(): array
    {
        $data = $this->aggregateData();
        $trends = $this->calculateTrends($data);
        $anomalies = $this->detectAnomalies($data, $trends);
        $narrative = $this->generateNarrative($data, $trends, $anomalies);

        $this->persistReport($data, $trends, $anomalies);

        return [
            'period' => $this->period,
            'generated_at' => now()->toIso8601String(),
            'executive_summary' => $narrative['executive_summary'],
            'channel_performance' => $data['channels'],
            'campaign_highlights' => $data['campaigns'],
            'trends' => $trends,
            'anomalies' => $anomalies,
            'recommendations' => $narrative['recommendations'],
            'kpi_summary' => $this->summarizeKpis($data),
        ];
    }

    protected function aggregateData(): array
    {
        $dateRange = $this->getDateRange();
        $previousRange = $this->getPreviousPeriodRange();

        $campaignsQuery = Campaign::query();

        if ($this->campaignId) {
            $campaignsQuery->where('id', $this->campaignId);
        }

        $campaigns = $campaignsQuery->get();

        $campaignPerformance = [];
        $channelData = [];
        $totalImpressions = 0;
        $totalClicks = 0;
        $totalConversions = 0;
        $totalRevenue = 0;
        $totalSpend = 0;

        foreach ($campaigns as $campaign) {
            $impressions = (int) $campaign->analytics()
                ->where('metric', 'impressions')
                ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
                ->sum('value');

            $clicks = (int) $campaign->analytics()
                ->where('metric', 'clicks')
                ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
                ->sum('value');

            $conversions = (int) $campaign->analytics()
                ->where('metric', 'conversions')
                ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
                ->sum('value');

            $revenue = (float) $campaign->analytics()
                ->where('metric', 'revenue')
                ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
                ->sum('value');

            $spend = (float) $campaign->analytics()
                ->where('metric', 'spend')
                ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
                ->sum('value');

            $ctr = $impressions > 0 ? ($clicks / $impressions) * 100 : 0;
            $cvr = $clicks > 0 ? ($conversions / $clicks) * 100 : 0;
            $cpa = $conversions > 0 ? $spend / $conversions : 0;
            $roi = $spend > 0 ? (($revenue - $spend) / $spend) * 100 : 0;

            $campaignPerformance[] = [
                'id' => $campaign->id,
                'name' => $campaign->name,
                'type' => $campaign->type,
                'channel' => $campaign->channel,
                'impressions' => $impressions,
                'clicks' => $clicks,
                'conversions' => $conversions,
                'revenue' => $revenue,
                'spend' => $spend,
                'ctr' => round($ctr, 2),
                'cvr' => round($cvr, 2),
                'cpa' => round($cpa, 2),
                'roi' => round($roi, 2),
                'status' => $campaign->status,
            ];

            $channel = $campaign->channel;
            if (! isset($channelData[$channel])) {
                $channelData[$channel] = [
                    'impressions' => 0, 'clicks' => 0, 'conversions' => 0,
                    'revenue' => 0, 'spend' => 0, 'campaign_count' => 0,
                ];
            }
            $channelData[$channel]['impressions'] += $impressions;
            $channelData[$channel]['clicks'] += $clicks;
            $channelData[$channel]['conversions'] += $conversions;
            $channelData[$channel]['revenue'] += $revenue;
            $channelData[$channel]['spend'] += $spend;
            $channelData[$channel]['campaign_count']++;

            $totalImpressions += $impressions;
            $totalClicks += $clicks;
            $totalConversions += $conversions;
            $totalRevenue += $revenue;
            $totalSpend += $spend;
        }

        $channels = [];
        foreach ($channelData as $channel => $data) {
            $channels[$channel] = [
                'impressions' => $data['impressions'],
                'clicks' => $data['clicks'],
                'conversions' => $data['conversions'],
                'revenue' => $data['revenue'],
                'spend' => $data['spend'],
                'campaign_count' => $data['campaign_count'],
                'ctr' => $data['impressions'] > 0
                    ? round(($data['clicks'] / $data['impressions']) * 100, 2)
                    : 0,
                'cpa' => $data['conversions'] > 0
                    ? round($data['spend'] / $data['conversions'], 2)
                    : 0,
                'roi' => $data['spend'] > 0
                    ? round((($data['revenue'] - $data['spend']) / $data['spend']) * 100, 2)
                    : 0,
                'share_of_spend' => $totalSpend > 0
                    ? round(($data['spend'] / $totalSpend) * 100, 1) . '%'
                    : '0%',
            ];
        }

        usort($campaignPerformance, fn ($a, $b) => $b['roi'] <=> $a['roi']);

        return [
            'totals' => [
                'impressions' => $totalImpressions,
                'clicks' => $totalClicks,
                'conversions' => $totalConversions,
                'revenue' => $totalRevenue,
                'spend' => $totalSpend,
                'ctr' => $totalImpressions > 0 ? round(($totalClicks / $totalImpressions) * 100, 2) : 0,
                'cvr' => $totalClicks > 0 ? round(($totalConversions / $totalClicks) * 100, 2) : 0,
                'cpa' => $totalConversions > 0 ? round($totalSpend / $totalConversions, 2) : 0,
                'roi' => $totalSpend > 0 ? round((($totalRevenue - $totalSpend) / $totalSpend) * 100, 2) : 0,
            ],
            'campaigns' => $campaignPerformance,
            'channels' => $channels,
            'date_range' => $dateRange,
        ];
    }

    protected function calculateTrends(array $data): array
    {
        $previousRange = $this->getPreviousPeriodRange();

        $previousTotals = $this->getPeriodTotals($previousRange);

        $current = $data['totals'];

        return [
            'impressions_change' => $this->percentChange($previousTotals['impressions'], $current['impressions']),
            'clicks_change' => $this->percentChange($previousTotals['clicks'], $current['clicks']),
            'conversions_change' => $this->percentChange($previousTotals['conversions'], $current['conversions']),
            'revenue_change' => $this->percentChange($previousTotals['revenue'], $current['revenue']),
            'spend_change' => $this->percentChange($previousTotals['spend'], $current['spend']),
            'ctr_trend' => $this->trendDirection($previousTotals['ctr'], $current['ctr']),
            'cpa_trend' => $this->trendDirection($previousTotals['cpa'], $current['cpa']),
            'roi_trend' => $this->trendDirection($previousTotals['roi'], $current['roi']),
            'previous_period' => $previousTotals,
        ];
    }

    protected function getPeriodTotals(array $dateRange): array
    {
        $campaignsQuery = Campaign::query();

        if ($this->campaignId) {
            $campaignsQuery->where('id', $this->campaignId);
        }

        $campaignIds = $campaignsQuery->pluck('id');

        $impressions = (int) MarketingAnalytic::whereIn('campaign_id', $campaignIds)
            ->where('metric', 'impressions')
            ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
            ->sum('value');

        $clicks = (int) MarketingAnalytic::whereIn('campaign_id', $campaignIds)
            ->where('metric', 'clicks')
            ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
            ->sum('value');

        $conversions = (int) MarketingAnalytic::whereIn('campaign_id', $campaignIds)
            ->where('metric', 'conversions')
            ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
            ->sum('value');

        $revenue = (float) MarketingAnalytic::whereIn('campaign_id', $campaignIds)
            ->where('metric', 'revenue')
            ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
            ->sum('value');

        $spend = (float) MarketingAnalytic::whereIn('campaign_id', $campaignIds)
            ->where('metric', 'spend')
            ->whereBetween('recorded_at', [$dateRange['start'], $dateRange['end']])
            ->sum('value');

        return [
            'impressions' => $impressions,
            'clicks' => $clicks,
            'conversions' => $conversions,
            'revenue' => $revenue,
            'spend' => $spend,
            'ctr' => $impressions > 0 ? ($clicks / $impressions) * 100 : 0,
            'cvr' => $clicks > 0 ? ($conversions / $clicks) * 100 : 0,
            'cpa' => $conversions > 0 ? $spend / $conversions : 0,
            'roi' => $spend > 0 ? (($revenue - $spend) / $spend) * 100 : 0,
        ];
    }

    protected function detectAnomalies(array $data, array $trends): array
    {
        $anomalies = [];

        foreach ($data['channels'] as $channel => $metrics) {
            $cpa = $metrics['cpa'];
            $ctr = $metrics['ctr'];

            if ($cpa > 0 && $cpa > $data['totals']['cpa'] * 2) {
                $anomalies[] = [
                    'channel' => $channel,
                    'type' => 'high_cpa',
                    'severity' => 'warning',
                    'message' => "CPA on {$channel} (\${$cpa}) is double the average.",
                    'metric' => $cpa,
                    'expected' => round($data['totals']['cpa'], 2),
                ];
            }

            if ($metrics['spend'] > 0 && $metrics['conversions'] === 0) {
                $anomalies[] = [
                    'channel' => $channel,
                    'type' => 'zero_conversions',
                    'severity' => 'critical',
                    'message' => "{$channel} has spent \${$metrics['spend']} with zero conversions.",
                    'metric' => 0,
                    'expected' => null,
                ];
            }

            if ($ctr < 0.5 && $data['totals']['ctr'] > 1) {
                $anomalies[] = [
                    'channel' => $channel,
                    'type' => 'low_ctr',
                    'severity' => 'warning',
                    'message' => "{$channel} CTR ({$ctr}%) is significantly below average ({$data['totals']['ctr']}%).",
                    'metric' => $ctr,
                    'expected' => $data['totals']['ctr'],
                ];
            }
        }

        $threshold = 50;
        foreach (['impressions_change', 'clicks_change', 'conversions_change'] as $metric) {
            if (abs($trends[$metric] ?? 0) > $threshold) {
                $direction = ($trends[$metric] ?? 0) > 0 ? 'spike' : 'drop';
                $anomalies[] = [
                    'type' => "{$direction}_in_" . str_replace('_change', '', $metric),
                    'severity' => abs($trends[$metric] ?? 0) > 100 ? 'critical' : 'warning',
                    'message' => str_replace('_', ' ', $metric) . " of " . ($trends[$metric] ?? 0) . "% detected.",
                    'metric' => $trends[$metric] ?? 0,
                    'expected' => 0,
                ];
            }
        }

        return $anomalies;
    }

    protected function generateNarrative(array $data, array $trends, array $anomalies): array
    {
        $response = $this->chat(
            messages: [[
                'role' => 'user',
                'content' => json_encode([
                    'task' => 'Generate marketing report narrative',
                    'period' => $this->period,
                    'kpi_summary' => $data['totals'],
                    'trends' => $trends,
                    'anomalies' => $anomalies,
                    'top_campaigns' => array_slice($data['campaigns'], 0, 3),
                    'bottom_campaigns' => array_slice(array_reverse($data['campaigns']), 0, 3),
                    'channels' => $data['channels'],
                ]),
            ]],
            structuredOutput: [
                'type' => 'object',
                'properties' => [
                    'executive_summary' => ['type' => 'string'],
                    'key_wins' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'areas_for_improvement' => ['type' => 'array', 'items' => ['type' => 'string']],
                    'recommendations' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'priority' => ['type' => 'string'],
                                'action' => ['type' => 'string'],
                                'expected_impact' => ['type' => 'string'],
                            ],
                        ],
                    ],
                ],
                'required' => ['executive_summary', 'key_wins', 'areas_for_improvement', 'recommendations'],
            ],
        );

        return $response;
    }

    protected function summarizeKpis(array $data): array
    {
        $totals = $data['totals'];

        return [
            'total_impressions' => number_format($totals['impressions']),
            'total_clicks' => number_format($totals['clicks']),
            'total_conversions' => number_format($totals['conversions']),
            'total_revenue' => '$' . number_format($totals['revenue'], 2),
            'total_spend' => '$' . number_format($totals['spend'], 2),
            'overall_ctr' => $totals['ctr'] . '%',
            'overall_cvr' => $totals['cvr'] . '%',
            'overall_cpa' => '$' . $totals['cpa'],
            'overall_roi' => $totals['roi'] . '%',
            'active_campaigns' => count($data['campaigns']),
            'channels_active' => count($data['channels']),
        ];
    }

    protected function persistReport(array $data, array $trends, array $anomalies): void
    {
        $campaignIds = collect($data['campaigns'])->pluck('id');

        foreach ($campaignIds as $campaignId) {
            MarketingAnalytic::create([
                'source' => 'analytics_agent',
                'metric' => 'report_generated',
                'value' => 1,
                'dimensions' => [
                    'period' => $this->period,
                    'trends' => $trends,
                    'anomalies_found' => count($anomalies),
                ],
                'campaign_id' => $campaignId,
                'recorded_at' => now()->toDateString(),
            ]);
        }
    }

    protected function getDateRange(): array
    {
        return match ($this->period) {
            'last_7_days' => ['start' => now()->subDays(7), 'end' => now()],
            'last_30_days' => ['start' => now()->subDays(30), 'end' => now()],
            'last_90_days' => ['start' => now()->subDays(90), 'end' => now()],
            'this_month' => ['start' => now()->startOfMonth(), 'end' => now()],
            'last_month' => ['start' => now()->subMonth()->startOfMonth(), 'end' => now()->subMonth()->endOfMonth()],
            'this_quarter' => ['start' => now()->startOfQuarter(), 'end' => now()],
            'this_year' => ['start' => now()->startOfYear(), 'end' => now()],
            default => ['start' => now()->subDays(30), 'end' => now()],
        };
    }

    protected function getPreviousPeriodRange(): array
    {
        $current = $this->getDateRange();
        $diff = $current['start']->diffInDays($current['end']);

        return [
            'start' => (clone $current['start'])->subDays($diff + 1),
            'end' => (clone $current['start'])->subDay(),
        ];
    }

    protected function percentChange(float $previous, float $current): float
    {
        if ($previous == 0) {
            return $current > 0 ? 100 : 0;
        }

        return round((($current - $previous) / $previous) * 100, 2);
    }

    protected function trendDirection(float $previous, float $current): string
    {
        $change = $this->percentChange($previous, $current);

        return match (true) {
            $change > 10 => 'up',
            $change < -10 => 'down',
            default => 'stable',
        };
    }
}
```

#### Command to Generate Reports

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Marketing\MarketingAnalyticsAgent;
use Illuminate\Console\Command;

class GenerateMarketingReportCommand extends Command
{
    protected $signature = 'marketing:report
        {--period=last_30_days : Report period}
        {--campaign= : Specific campaign ID}
        {--email : Email the report to stakeholders}';

    protected $description = 'Generate AI-powered marketing performance report';

    public function handle(): int
    {
        $this->info('Generating marketing report...');

        $agent = new MarketingAnalyticsAgent(
            period: $this->option('period'),
            campaignId: $this->option('campaign') ? (int) $this->option('campaign') : null,
        );

        $report = $agent->generateReport();

        $this->newLine();
        $this->line('=== Executive Summary ===');
        $this->line($report['executive_summary']);
        $this->newLine();

        $kpi = $report['kpi_summary'];
        $this->line("Impressions: {$kpi['total_impressions']}");
        $this->line("Clicks:      {$kpi['total_clicks']}");
        $this->line("Conversions: {$kpi['total_conversions']}");
        $this->line("Revenue:     {$kpi['total_revenue']}");
        $this->line("Spend:       {$kpi['total_spend']}");
        $this->line("ROI:         {$kpi['overall_roi']}");
        $this->line("CPA:         {$kpi['overall_cpa']}");
        $this->newLine();

        if (! empty($report['anomalies'])) {
            $this->warn('Anomalies Detected:');
            foreach ($report['anomalies'] as $anomaly) {
                $this->line("  [{$anomaly['severity']}] {$anomaly['message']}");
            }
            $this->newLine();
        }

        $this->info('Recommendations:');
        foreach ($report['recommendations'] as $rec) {
            $this->line("  [{$rec['priority']}] {$rec['action']} â€” {$rec['expected_impact']}");
        }

        if ($this->option('email')) {
            $this->call('mail:send', [
                'template' => 'marketing-report',
                'data' => json_encode($report),
            ]);
            $this->info('Report emailed to stakeholders.');
        }

        $this->info('Report generated successfully.');

        return Command::SUCCESS;
    }
}
```

---

## Summary

Marketing and advertising platforms built on Laravel 13 benefit enormously from AI agents that automate the repetitive, data-intensive aspects of modern marketing operations. This chapter covered nine interconnected domains:

- **Marketing Data Models** â€” Campaign, Audience, Lead, Content, and Analytics models with Eloquent relationships, scopes, and aggregate methods form the foundation for any marketing platform.
- **Campaign Optimization** â€” Agents that analyze channel-level performance metrics and recommend budget reallocations using rule-based efficiency scoring augmented with AI opportunity detection.
- **Audience Segmentation** â€” AI-driven behavioral clustering that groups leads into meaningful segments â€” high-value active buyers, engaged prospects, warm tire-kickers, lapsed contacts, and cold audiences.
- **Content Generation** â€” Pipelines that produce blog posts, social media updates, and email copy with variant generation for A/B testing, respecting brand voice and channel-specific constraints.
- **A/B Testing Automation** â€” Agents that design experiments, calculate required sample sizes, track results with statistical rigor (z-tests, p-values), and declare winners based on significance thresholds.
- **SEO Analysis** â€” On-page audits that evaluate keyword usage, content structure, readability, and technical factors, then output prioritized improvement plans with estimated traffic impact.
- **Social Media Management** â€” Scheduling agents that time posts for optimal engagement, monitor cross-platform performance, and surface content theme suggestions based on what resonates.
- **Lead Scoring & Nurturing** â€” Multi-factor scoring models that weigh email engagement, behavioral signals, recency, and negative indicators to classify leads into cold/warm/hot tiers with automated nurture sequences.
- **Marketing Analytics & Reporting** â€” Aggregation agents that pull metrics from all marketing sources, calculate trends and anomalies, and generate natural-language executive summaries with data-driven action items.

Each agent follows the same architectural pattern: implement the `Agent` contract, define instructions for the AI model, combine deterministic business logic with AI-powered insight generation, and persist results through Laravel's Eloquent models. This hybrid approach gives you the reliability of rule-based computation with the flexibility of AI reasoning â€” a combination ideally suited for the complexity of modern marketing operations.

---

## Exercises

1. **Campaign Budget Optimizer**: Build a console command that runs the `CampaignOptimizationAgent` weekly on a schedule. Store the optimization history in a `campaign_optimizations` table and generate a diff report showing how budget allocations changed week-over-week.

2. **Multi-Model Segmentation**: Extend the `AudienceSegmentationAgent` to support multiple clustering algorithms (k-means, DBSCAN, hierarchical). Implement an `A/B Segment Tester` that runs campaign experiments on matched segments and reports which segment responds best to each message variant.

3. **Content Compliance Filter**: Add a compliance check step to `ContentGenerationAgent` that validates generated content against brand guidelines stored in a `brand_rules` table. The filter should flag regulatory violations (e.g., exaggerated claims, missing disclosures) before content is approved for publishing.

4. **Sequential A/B Testing**: Build a `MultiVariantTestingAgent` that extends `AbTestingAgent` to handle sequential testing with multiple variants (A/B/C/D). Implement the Benjamini-Hochberg procedure for controlling the false discovery rate when testing many variants simultaneously.

5. **Competitor SEO Gap Analysis**: Extend `SeoAnalysisAgent` to accept competitor URLs, fetch and analyze their content via the `BrightData` or `WebFetch` skill, and produce a gap analysis showing keywords and topics the competitor ranks for that your content does not cover.

6. **Cross-Platform Sentiment Analysis**: Add a sentiment analysis pipeline to `SocialMediaAgent` that processes comments and mentions across platforms. Use the AI SDK to classify sentiment (positive, negative, neutral) and track sentiment trends over time, triggering alerts when negative sentiment spikes.

7. **Lead Scoring Calibration**: Implement a calibration command that runs `LeadScoringAgent` against historical conversion data, compares predicted scores against actual conversion rates, and adjusts the `scoreWeights` array to improve predictive accuracy over time.

8. **Custom Report Builder**: Build a `ReportBuilder` class that lets marketing managers define custom analytics reports by chaining filters, metrics, dimensions, and visualization types. Integrate it with `MarketingAnalyticsAgent` so the agent can interpret custom report requests and generate the appropriate aggregation queries.

9. **Full Marketing Automation Pipeline**: Combine all nine agents into a single `MarketingOrchestrator` that runs daily: (1) scores and nurtures leads, (2) generates content for upcoming campaigns, (3) analyzes and optimizes active campaigns, (4) schedules social posts, (5) runs A/B tests that have reached sufficient sample size, (6) generates the daily performance report, and (7) alerts on anomalies.