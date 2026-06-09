# Phase 1 — Python

**Duration:** June 8 → July 7, 2026 (4 Weeks)
**Goal:** Python production-ready

---

## Why Python First?

```
Tu Laravel developer hai.
AI ka 95% ecosystem Python mein hai.
Python seekhe bina AI engineer nahi ban sakta.

Good news:
→ Tu already developer hai
→ Logic samajhta hai
→ Python syntax 1 week mein comfortable hoga
→ Week 2 se real kaam shuru
```

---

## PHP → Python Mental Map

| PHP/Laravel | Python/FastAPI | Notes |
|-------------|----------------|-------|
| `<?php` | nothing | Python directly starts |
| `$variable` | `variable` | No dollar sign |
| `array()` / `[]` | `list` / `[]` | Same syntax |
| `['key' => 'val']` | `{'key': 'val'}` | Dict not assoc array |
| `function foo()` | `def foo():` | def keyword |
| `$this->name` | `self.name` | self not $this |
| `__construct()` | `__init__()` | init not construct |
| `echo` | `print()` | function not statement |
| `try/catch` | `try/except` | except not catch |
| `composer require` | `pip install` | pip not composer |
| `.env` | `.env` (python-dotenv) | Same concept |
| `Route::get()` | `@app.get()` | decorator syntax |
| `Request $request` | `request: Request` | type hints |
| Eloquent Model | SQLAlchemy Model | ORM same concept |
| Form Request | Pydantic Model | Validation same |
| Middleware | Dependency Injection | Different syntax |
| `dd()` | `print()` / `breakpoint()` | debugging |

---

## Week Overview

| Week | Topic | Key Skills | Project |
|------|-------|------------|---------|
| 01 | Syntax & Basics | Variables, loops, functions, OOP | CLI Tool |
| 02 | OOP & Modules | Classes, async, decorators | Task Manager |
| 03 | FastAPI | REST API, Pydantic, SQLAlchemy | Notes API |
| 04 | Advanced + DSA Start | Docker, Redis, LangChain intro | WhatsApp Analyzer |

---

## Setup (Do This First)

```bash
# Python install karo
# Windows: python.org se download karo
# Mac: brew install python3
# Linux: sudo apt install python3 python3-pip

# Version check
python3 --version  # 3.11+ chahiye

# VS Code install karo
# Extension: Python (Microsoft)
# Extension: Pylance

# First project setup
mkdir my-python-journey
cd my-python-journey
python3 -m venv venv          # virtual environment
source venv/bin/activate       # Mac/Linux
# venv\Scripts\activate        # Windows

# First install
pip install fastapi uvicorn python-dotenv
```

---

## Phase 1 Completion Criteria

- [ ] Python syntax comfortable hai (no googling basics)
- [ ] OOP — classes, inheritance, decorators likh sakta hoon
- [ ] Async/await samajh aata hai
- [ ] FastAPI se CRUD API bana sakta hoon
- [ ] SQLAlchemy se database connect kar sakta hoon
- [ ] Docker mein FastAPI run kar sakta hoon
- [ ] LangChain se first LLM call kar sakta hoon
- [ ] **WhatsApp Analyzer project GitHub pe live hai**

---

## Weeks

- [Week 1 — Syntax & Basics](week-01/index.md)
- [Week 2 — OOP & Modules](week-02/index.md)
- [Week 3 — FastAPI](week-03/index.md)
- [Week 4 — Advanced + Docker](week-04/index.md)
- [Project — WhatsApp Analyzer](projects/whatsapp-analyzer.md)
