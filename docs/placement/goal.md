# 90-Day Placement Plan

<span class="ascii-rule"></span>

## Strategy

```
Days 1–30   → Foundation (DSA + Language Mastery)
Days 31–60  → Core CS + Web Dev + Projects
Days 61–90  → Advanced Topics + Interview Prep + Applications
```

## Daily Routine

```
Morning   (1h)  → DSA problem (LeetCode medium)
Session 1 (2h)  → New concept + theory + notes
Session 2 (2h)  → Hands-on coding + project work
Evening   (0.5h) → Review + plan next day
```

## Phase Breakdown

### Days 1–10: Arrays, Strings, Big O

| Day | Topic | Problems | Status |
|-----|-------|----------|--------|
| 1 | Arrays basics + Two Pointer | 3 Easy | ⏳ |
| 2 | Sliding Window | 3 Medium | ⏳ |
| 3 | Strings + Pattern Matching | 3 | ⏳ |
| 4 | Big O Analysis + Practice | 3 | ⏳ |
| 5 | Revision + Mock | 5 | ⏳ |
| 6–10 | Arrays/Strings deep dive | 15 | ⏳ |

### Days 11–20: Linked Lists, Stacks, Queues

| Day | Topic | Problems | Status |
|-----|-------|----------|--------|
| 11–12 | Linked Lists (singly, doubly, cycle) | 5 | ⏳ |
| 13–14 | Stacks (monotonic, min, valid parens) | 5 | ⏳ |
| 15–16 | Queues + Deques | 5 | ⏳ |
| 17–20 | Revision + Mock | 10 | ⏳ |

### Days 21–30: Trees & Graphs

| Day | Topic | Problems | Status |
|-----|-------|----------|--------|
| 21–23 | BST, Traversals, LCA | 8 | ⏳ |
| 24–26 | BFS, DFS, Graph problems | 8 | ⏳ |
| 27–30 | Revision + first full mock | 10 | ⏳ |

### Days 31–45: Core CS Theory

| Week | Subject | Topics |
|------|---------|--------|
| 5 | OS | Processes, Scheduling, Memory |
| 6 | DBMS | SQL, Normalization, Transactions |
| 7 | Networks | TCP/IP, HTTP, Security |
| 8 | Computer Org | Architecture, Memory Hierarchy |

### Days 46–60: Web Dev + Projects

| Week | Focus | Output |
|------|-------|--------|
| 9 | Backend (Laravel/Node.js) | Build REST API |
| 10 | Frontend (React/Vue) | Build UI |
| 11 | Full Stack Project | E-commerce / Blog |
| 12 | AI/ML Basics | Mini ML project |

### Days 61–75: Advanced Topics

| Week | Focus | Output |
|------|-------|--------|
| 13 | System Design | 2 case studies |
| 14 | DevOps | Docker + CI/CD |
| 15 | Advanced DSA | DP, Graphs |
| 16 | OOD + Design Patterns | 5 patterns |

### Days 76–90: Interview Prep

| Week | Focus | Output |
|------|-------|--------|
| 17 | DSA Revision | 50 problems |
| 18 | System Design Prep | 3 designs |
| 19 | Behavioral + Mock | 5 mocks |
| 20 | Company Apps + Offers | Apply to 20+ |

---

## Tracking

Refer to the original Placement folder for detailed daily breakdowns:

- `original/Main-Course/Placement-01/90-Day-Plan/` — detailed daily breakdowns
- `original/Study-Plans/Plan/DAILY_PROGRESS_TRACKER.md` — progress log
- `original/Study-Plans/Plan/DAILY_PLANS_MASTER_INDEX.md` — master index

## Success Mantras

1. **Dhiraj** — Patience. Rome nahi bana ek din mein.
2. **Suj Bhujh** — Awareness. Jaano kya padhna hai, kyu padhna hai.
3. **Duddhi** — Milkcake? No — sheer hard work. Koi shortcut nahi.
4. **Prakaram** — Bravery. Darna mat. Fail hoge to seekhoge.

---

## Progress Tracker

<div id="plan-highlight" data-start="2026-06-01">
  <p>Today is <strong>Day <span id="plan-day-num">?</span></strong> of 90</p>
  <div class="progress-bar" style="max-width:400px;margin:8px 0"><div class="progress-bar-fill" id="plan-bar" style="width:0%"></div></div>
  <label style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;display:flex;align-items:center;gap:8px;margin-top:8px;cursor:pointer">
    Start date:
    <input type="date" id="plan-start-picker" style="font-family:inherit;padding:4px 8px;border:1px solid var(--rule-soft);background:var(--bg);color:var(--ink)">
  </label>
</div>

<script>
(function() {
  var el = document.getElementById('plan-highlight');
  var picker = document.getElementById('plan-start-picker');
  var dayNum = document.getElementById('plan-day-num');
  var bar = document.getElementById('plan-bar');
  var stored = localStorage.getItem('aej:plan:start') || '2026-06-01';
  picker.value = stored;
  function update() {
    var start = new Date(picker.value);
    var now = new Date();
    var elapsed = Math.floor((now - start) / (1000*60*60*24)) + 1;
    if (elapsed < 1) elapsed = 1;
    if (elapsed > 90) elapsed = 90;
    dayNum.textContent = elapsed;
    bar.style.width = Math.round(elapsed/90*100) + '%';
    // highlight matching table row
    var tables = document.querySelectorAll('.md-typeset table');
    for (var t = 0; t < tables.length; t++) {
      var rows = tables[t].querySelectorAll('tbody tr');
      for (var r = 0; r < rows.length; r++) {
        var firstTd = rows[r].querySelector('td');
        if (!firstTd) continue;
        var match = firstTd.textContent.trim().match(/Day\s*(\d+)/i);
        if (match) {
          var d = parseInt(match[1], 10);
          if (d === elapsed) { rows[r].className = 'today-highlight'; }
        }
      }
    }
  }
  update();
  picker.addEventListener('change', function() {
    localStorage.setItem('aej:plan:start', this.value);
    update();
  });
  // re-run after page fully loads for highlight
  setTimeout(update, 500);
})();
</script>

## Notes

<div id="page-notes"></div>
