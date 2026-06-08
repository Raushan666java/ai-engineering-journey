# STUDY DASHBOARD

<span class="ascii-rule"></span>

> Placement ki taiyari ka command center. Progress track karo, timer lagao, aaj ka plan dekho.

<div class="daily-banner" id="daily-banner">
  <div class="banner-greeting">
    <span class="banner-wave" id="banner-wave">👋</span>
    <span class="banner-text" id="banner-greeting">Loading...</span>
  </div>
  <div class="banner-quote" id="banner-quote">“Padhne ka mann nahi? Ek baar soch — tere paas option hai time waste karna ya life change karna.”</div>
  <div class="banner-tip">
    <span class="tip-label">💡 TIP:</span>
    <span class="tip-text" id="daily-tip">Loading daily tip...</span>
  </div>
</div>

## Pomodoro Timer

<div class="timer-card" id="study-timer">
  <div class="timer-ring-wrap">
    <svg class="timer-ring" viewBox="0 0 120 120" id="timer-ring">
      <circle cx="60" cy="60" r="54" fill="none" stroke="var(--rule-soft)" stroke-width="6"/>
      <circle cx="60" cy="60" r="54" fill="none" stroke="var(--blueprint)" stroke-width="6"
        stroke-dasharray="339.292" stroke-dashoffset="339.292"
        style="stroke-dashoffset: calc(339.292 * (1 - var(--pct, 0) / 100)); transform: rotate(-90deg); transform-origin: 60px 60px; transition: stroke-dashoffset 0.5s ease;"/>
    </svg>
    <div class="timer-display">
      <span class="timer-mode" id="timer-mode">FOCUS</span>
      <span class="timer-time"><span id="timer-mins">25</span>:<span id="timer-secs">00</span></span>
    </div>
  </div>
  <div class="timer-controls">
    <button class="btn btn-blueprint" id="timer-start">START</button>
    <button class="btn" id="timer-reset">RESET</button>
  </div>
  <div class="timer-stats">
    <span>Sessions today: <strong id="timer-sessions">0</strong></span>
    <span class="timer-hint">25 min focus · 5 min break</span>
  </div>
</div>

## Today's Focus

<div class="today-header">
  <div class="today-plan-card">
    <span class="today-label">Today's Plan</span>
    <div id="today-plan" class="today-plan-body">
      <span class="plan-icon">◉</span>
      <span class="plan-area">Loading...</span>
      <span class="plan-tip"></span>
    </div>
  </div>
  <div class="streak-card">
    <div id="streak-display">
      <div class="streak-row"><span class="streak-count">—</span></div>
    </div>
  </div>
  <div class="stats-card">
    <span id="today-completed" class="stats-big">0 items done</span>
    <span class="stats-label">All time</span>
  </div>
</div>

<div class="grid-cards">
  <div class="grid-card">
    <h3>Step 1</h3>
    <p>Pick one subject from CS Core — DSA, OS, DBMS, ya CN</p>
    <div class="card-meta">→ Go to module</div>
  </div>
  <div class="grid-card">
    <h3>Step 2</h3>
    <p>Study 2-3 topics + solve 2 problems (1 easy, 1 medium)</p>
    <div class="card-meta">→ Use checklists</div>
  </div>
  <div class="grid-card">
    <h3>Step 3</h3>
    <p>Revise yesterday's notes for 15 min</p>
    <div class="card-meta">→ Spaced repetition</div>
  </div>
</div>

## Weekly Routine

| Day | Focus Area | Time |
|-----|-----------|------|
| Mon-Tue | DSA (Arrays, Strings, Linked Lists) | 2 hr |
| Wed-Thu | OS + DBMS | 2 hr |
| Fri | CN + COA | 1.5 hr |
| Sat | Programming + Project work | 3 hr |
| Sun | System Design + Revision | 2 hr |

## Module Progress

<div class="stat-row">
  <span class="stat-row-label">01 · Meta Skills</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../01-meta-skills/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">02 · CS Core</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../02-cs-core/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">03 · Programming</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../03-programming/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">04 · Web Development</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../04-web-dev/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">05 · AI & ML</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../05-ai-ml/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">06 · DevOps</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../06-devops/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">07 · Projects</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../07-projects/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">08 · Interview Prep</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../08-interview-prep/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">09 · Resources</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../09-resources/">Start →</a></span>
</div>
<div class="stat-row">
  <span class="stat-row-label">10 · System Design</span>
  <span class="stat-row-bar" data-bar-pct="0"></span>
  <span class="stat-row-value"><a href="../10-system-design/">Start →</a></span>
</div>

## Quick Links

- [Full Placement Overview](index.md)
- [90-Day Plan](goal.md)
- [Interview Questions](08-interview-prep/index.md)
- [DSA Practice](02-cs-core/index.md#dsa)
- [Checklist Tracker](02-cs-core/index.md#checklist)
- [DSA Problem Tracker](dsa-tracker.md)
- [Placement-Ori](https://github.com/Raushan666java/ai-engineering-journey/tree/main/placement-original)

<style>
#study-timer {
  background: var(--bg-surface);
  border: 2px solid var(--ink);
  box-shadow: var(--shadow-hard);
  padding: 32px;
  text-align: center;
  margin: 24px 0;
}
.timer-ring-wrap { position: relative; width: 160px; height: 160px; margin: 0 auto 20px; }
.timer-ring { width: 100%; height: 100%; }
.timer-display {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  text-align: center;
}
.timer-mode {
  font-family: 'JetBrains Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.12em; color: var(--ink-mute); text-transform: uppercase;
  display: block; margin-bottom: 4px;
}
.timer-time {
  font-family: 'VT323', monospace; font-size: 2.4rem; color: var(--ink);
  letter-spacing: 0.04em;
}
.timer-controls { margin: 20px 0; display: flex; gap: 12px; justify-content: center; }
.timer-stats {
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
  color: var(--ink-soft); letter-spacing: 0.04em;
}
.timer-stats span { display: block; margin: 4px 0; }
.checklist-tracker {
  display: flex; align-items: center; gap: 16px;
  padding: 12px 16px; margin-bottom: 20px;
  background: var(--bg-surface); border: 1px solid var(--rule-soft);
  font-family: 'JetBrains Mono', monospace; font-size: 0.78rem;
}
.checklist-tracker .checklist-counter { color: var(--ink-soft); white-space: nowrap; text-transform: uppercase; letter-spacing: 0.08em; }
.checklist-tracker .progress-bar { flex: 1; }

/* Today header grid */
.today-header {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 700px) { .today-header { grid-template-columns: 1fr; } }
.today-plan-card, .streak-card, .stats-card {
  background: var(--bg-surface); border: 2px solid var(--ink);
  box-shadow: var(--shadow-hard); padding: 20px;
}
.today-label {
  font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
  text-transform: uppercase; letter-spacing: 0.14em; color: var(--ink-mute);
  display: block; margin-bottom: 8px;
}
.today-plan-body { display: flex; flex-direction: column; gap: 4px; }
.plan-icon { font-size: 1.4rem; }
.plan-area { font-family: 'Source Serif 4', serif; font-size: 1rem; font-weight: 600; color: var(--ink); }
.plan-tip { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--ink-soft); }
.streak-count { font-family: 'VT323', monospace; font-size: 1.8rem; color: var(--blueprint); }
.streak-week { display: flex; gap: 6px; margin-top: 10px; }
.streak-day {
  font-family: 'JetBrains Mono', monospace; font-size: 0.6rem;
  width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--rule-soft); border-radius: 4px; color: var(--ink-mute);
}
.streak-day.done { background: var(--blueprint); color: #fff; border-color: var(--blueprint); }
.stats-big {
  font-family: 'VT323', monospace; font-size: 1.4rem; color: var(--blueprint); display: block;
}
.stats-label {
  font-family: 'JetBrains Mono', monospace; font-size: 0.6rem;
  text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink-mute);
}

.module-nav {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: 48px; padding-top: 24px; border-top: 2px solid var(--rule-soft);
}
.module-nav-link {
  font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
  padding: 10px 20px; border: 2px solid var(--ink);
  text-decoration: none !important; color: var(--ink) !important;
  transition: all 0.15s ease;
}
.module-nav-link:hover {
  background: var(--ink); color: var(--bg) !important;
}
.module-nav-link.prev { margin-right: auto; }
.module-nav-link.next { margin-left: auto; }

/* Streak celebration */
.streak-celebrate {
  font-family: 'Source Serif 4', serif;
  font-size: 0.82rem;
  color: var(--blueprint);
  padding: 6px 0;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--rule-soft);
}

/* Daily banner - motivational greeting */
.daily-banner {
  background: var(--bg-surface);
  border: 2px solid var(--ink);
  box-shadow: var(--shadow-hard);
  padding: 20px 24px;
  margin: 20px 0;
}
.banner-greeting {
  font-family: 'Source Serif 4', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.banner-wave { font-size: 1.4rem; }
.banner-quote {
  font-family: 'Source Serif 4', serif;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--blueprint);
  padding: 8px 0;
  line-height: 1.5;
}
.banner-tip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--ink-soft);
  margin-top: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--rule-soft);
  display: flex;
  gap: 6px;
}
.tip-label {
  color: var(--ink-mute);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.banner-tip .tip-text { color: var(--ink); }
</style>

