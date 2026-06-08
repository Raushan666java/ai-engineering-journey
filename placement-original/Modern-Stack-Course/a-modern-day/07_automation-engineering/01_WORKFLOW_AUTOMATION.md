# ⚡ STAGE 7A — Workflow Automation & n8n

> **Level:** Intermediate | **Duration:** 1 Week

---

## 1. Automation Concepts

```
Manual Process:
User → Clicks → Waits → Clicks → Waits → Done

Automated Process:
Trigger → Step 1 → Step 2 → Step 3 → Done (no human needed)
```

### What Can Be Automated?
- Lead capture → CRM update → Email → Slack notification
- New order → Invoice → Email → Analytics update
- Content scraped → AI analysis → Report → Email
- User signup → Welcome email → Onboarding → Follow-up

---

## 2. n8n (Self-Hosted Automation Platform)

### Install with Docker
```bash
docker run -d --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n
```

### n8n + Laravel Integration

**Webhook trigger in n8n → calls your Laravel API:**
```
n8n Workflow:
1. Webhook Trigger (receives data)
2. HTTP Request → Laravel API (process)
3. IF condition → success/failure
4. Email notification
5. Slack message
```

**Laravel fires webhook to n8n:**
```php
// Trigger n8n workflow from Laravel
Http::post('http://n8n:5678/webhook/scrape-complete', [
    'request_id' => $scrapeRequest->id,
    'url' => $scrapeRequest->url,
    'result' => $result,
]);
```

---

## 3. Event-Driven Automation with Laravel

```php
// EventServiceProvider.php
protected $listen = [
    OrderPlaced::class => [
        SendInvoice::class,
        UpdateInventory::class,
        NotifyAdmin::class,
        TrackAnalytics::class,
        TriggerAIRecommendation::class,
    ],
    UserRegistered::class => [
        SendWelcomeEmail::class,
        CreateDefaultWorkspace::class,
        StartOnboardingSequence::class,
    ],
    ScrapeCompleted::class => [
        StoreResults::class,
        GenerateReport::class,
        NotifyUser::class,
    ],
];
```

---

## 4. Webhooks

### Sending Webhooks
```php
class WebhookService
{
    public function send(string $url, array $data, string $secret): void
    {
        $payload = json_encode($data);
        $signature = hash_hmac('sha256', $payload, $secret);

        Http::withHeaders([
            'X-Webhook-Signature' => $signature,
            'Content-Type' => 'application/json',
        ])->post($url, $data);
    }
}
```

### Receiving Webhooks
```php
Route::post('/webhooks/stripe', function (Request $request) {
    $payload = $request->getContent();
    $signature = $request->header('Stripe-Signature');

    try {
        $event = Webhook::constructEvent($payload, $signature, config('services.stripe.webhook_secret'));
    } catch (\Exception $e) {
        return response('Invalid signature', 400);
    }

    match ($event->type) {
        'payment_intent.succeeded' => HandlePaymentSuccess::dispatch($event->data),
        'customer.subscription.deleted' => HandleSubscriptionCancelled::dispatch($event->data),
        default => null,
    };

    return response('OK', 200);
});
```

---

## 5. Background Workers

```php
// Dedicated workers for different queues
// Supervisor config
[program:high-priority]
command=php artisan queue:work --queue=high --tries=3 --timeout=30
numprocs=4

[program:ai-processing]
command=php artisan queue:work --queue=ai --tries=2 --timeout=300
numprocs=2

[program:notifications]
command=php artisan queue:work --queue=notifications --tries=5 --timeout=30
numprocs=2
```

---

## 🎯 Practice Tasks
- [ ] Set up n8n with Docker
- [ ] Create automation workflow with webhooks
- [ ] Build event-driven pipeline in Laravel
- [ ] Implement webhook sending and receiving
- [ ] Configure Supervisor for multiple queues

---

*Next: [Event-Driven Architecture →](./02_EVENT_DRIVEN.md)*
