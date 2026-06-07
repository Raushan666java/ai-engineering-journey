# How to Solve Any Problem — Practical Guide 🛠️

A short, practical playbook for diagnosing and fixing problems reliably. Use this when you face bugs, outages, performance issues, design decisions, or productivity blockers.

---

## 1. First Response (First 10 minutes) ⏱️

- Triage severity: P0 (outage), P1 (critical), P2 (major), P3 (minor).
- Notify stakeholders (Slack/Teams channel) with minimal context.
- If P0/P1: Create an incident channel, assign an incident owner, and start collecting logs & metrics.

Quick message template:

```
[P0] Incident: API 500 errors on /v1/orders
Owner: @alice
Start: 2026-01-23 10:12 UTC
Impact: All checkout requests failing (~100% error rate)
Action: Investigating — collecting logs and metrics now
```

---

## 2. Reproduce & Gather Evidence (10–30 minutes) 🔍

- Reproduce locally or in staging with same inputs & headers.
- Collect:
    - Application logs (filtered by timestamp and request id)
    - Metrics (CPU, memory, RPS, error rates)
    - Exception traces and stack traces
    - Recent deploy/change list (git commits, infra changes)
    - Relevant database slow queries
- Record exact steps to reproduce.

Commands:

```bash
# Find recent errors in logs (example)
journalctl -u php-fpm -n 200 | grep "ERROR" | tail -n 100

# Search for recent deploys
git log --since="24 hours" --pretty=format:"%h %s" origin/main

# Check slow queries in MySQL
mysql -e "SELECT * FROM slow_log ORDER BY start_time DESC LIMIT 50;"
```

---

## 3. Narrow the Scope (30–60 minutes) 🎯

- Ask: Is it one service, one endpoint, one region, one user?
- Use binary checks: rollback last deploy, toggle feature flag, hit a canary instance.
- Isolate components by curl-ing upstream services or disabling a dependency.

Isolation checklist:

- Reproduce on a single service instance
- Test DB connection separately
- Check cache (Redis) for stale keys
- Run the failing request with --verbose and record HTTP headers

---

## 4. Hypothesize & Validate (60–120 minutes) 🧪

- List possible causes (network, code bug, config, external API, load spike).
- Prioritize quick wins (config, rate-limits, disk full, env var missing).
- Implement one change at a time and test.
- Use A/B, canary or feature flag rollouts for risky fixes.

Experiment log template:

```
Hypothesis: Database connection pool exhausted due to long-running queries
Test: Increase pool size from 50 → 100 on canary, monitor
Result: Error rate dropped 60% on canary → move to rest of cluster
```

---

## 5. Fix & Verify (120–240 minutes) ✅

- Apply fix to canary or non-prod first.
- Monitor metrics and error rates for 15–30 minutes.
- Reproduce original failing scenario and confirm success.
- If stable, roll out progressively (blue/green or rolling update).

Verification checklist:

- Error rate back to baseline
- SLO/uptime checks green
- Automated smoke tests pass
- No regression in other endpoints

---

## 6. Root Cause Analysis (RCA) — write within 24 hours 📝

- Use 5 Whys and evidence-based findings.
- Include: Timeline, root cause, contributing factors, what we did to fix, and permanent remediation.

RCA template (short):

```
Summary: Checkout API returned 500 errors due to DB connection pool exhaustion during spike in payment provider latency.
Timeline:
 - 10:12 UTC: Error rate rises
 - 10:20 UTC: Owner assigned
 - 11:05 UTC: Pool increased on canary
 - 11:40 UTC: Error rates reduced
Root Cause: Long-running payment confirmations holding DB connections
Contributing Factors: No query timeout; pool size small for burst traffic
Immediate Fix: Increased pool size; added query timeout
Permanent Fix: Move payment confirmations to background job; add monitoring and circuit breaker for payment provider
Action Items: [#123] add job, [#124] add monitoring, [#125] add tests
```

---

## 7. Prevent recurrence — long-term actions 🔧

- Add automated tests (unit/integration/e2e) covering the scenario.
- Add observability (SLO, alerts, dashboards, runbooks).
- Add throttling, timeouts, or queueing where appropriate.
- Update runbook with steps to triage and mitigation.

Runbook quick additions:

- How to check health: /health, /metrics
- How to rollback: git commands, deployment steps
- Who to call: on-call list and escalation path

---

## 8. Communication & Postmortem 🗣️

- Communicate status updates during the incident (every 15–30 mins for long incidents).
- After resolution, publish an internal postmortem summarizing RCA and actions.
- Keep postmortems blameless and focused on systemic improvements.

Postmortem checklist:

- What happened
- Impact and duration
- Root cause
- Remediation & follow-up tasks
- Lessons learned

---

## Quick Templates & Tips

Bug report template (for tickets):

```
Title: Short, descriptive
Environment: production/staging
Severity: P0/P1/P2
Steps to reproduce: 1) ... 2) ...
Expected result: ...
Actual result: ...
Logs/trace: [paste relevant logs]
Attachments: HAR, screenshots, request IDs
```

When to escalate:

- System-wide outage (P0)
- Security incident (data leak)
- Production data loss or corruption
- Repeating incident within 24 hours

Quick debugging tools:

- Logs: journalctl, tail -f storage/logs/laravel.log
- Traces: Sentry, Honeycomb
- Metrics: Grafana, Prometheus
- Live profiling: Blackfire, New Relic

---

## Short Decision Checklist (1-minute)

- Is it impacting customers? → PRIORITIZE
- Can I reproduce? → YES: proceed, NO: collect more data
- Can I mitigate quickly? → Apply mitigation first
- Is it safe to change in prod? → Prefer canary or rollback
- Document everything as you go

---

**Keep this file as your daily playbook: fast triage, reproduce, isolate, fix, verify, and document.** 🚀
