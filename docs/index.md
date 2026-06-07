{% set phases = [
  ("Phase 1", "Foundation", "Python, FastAPI, CLI", "in-progress"),
  ("Phase 2", "Data Structures & Algorithms", "Arrays, HashMap, Trees, 60 problems", "planned"),
  ("Phase 3", "LangChain & RAG", "LLM pipelines, Vector DB, Agents", "planned"),
  ("Phase 4", "Advanced RAG & Memory", "Hybrid search, Memory systems, ApexERP AI", "planned"),
  ("Phase 5", "Multi-Agent & Automation", "CrewAI, n8n, Purvanchal pipeline", "planned"),
  ("Phase 6", "System Design & Production", "Design, DevOps, Portfolio, Job hunt", "planned"),
] %}

<div class="hero-section">

<div class="hero-title">AI Engineering<br>Journey</div>

<p class="hero-tagline">3-month curriculum — Python to production AI systems. Every week builds on the last. Follow along as I learn in public.</p>

</div>

<div class="stat-grid">

<div class="stat-card">
  <span class="stat-number">6</span>
  <span class="stat-label">Phases</span>
</div>

<div class="stat-card">
  <span class="stat-number">24</span>
  <span class="stat-label">Weeks</span>
</div>

<div class="stat-card">
  <span class="stat-number">3</span>
  <span class="stat-label">Projects</span>
</div>

<div class="stat-card">
  <span class="stat-number">60+</span>
  <span class="stat-label">DSA Problems</span>
</div>

</div>

---

## The Curriculum

<div class="phase-grid">

{% for num, title, desc, status in phases %}
<a href="{{ 'phase-' ~ num.lower().replace(' ', '-') }}/" class="phase-card" style="text-decoration:none;color:inherit;">

  <div class="phase-card-num">{{ num }}</div>
  <div class="phase-card-title">{{ title }}</div>
  <div class="phase-card-desc">{{ desc }}</div>
  <div class="phase-card-status {{ status }}">{{ status.replace('-', ' ') }}</div>

</a>
{% endfor %}

</div>

---
## Quick Start

Clone the repo and start following along:

```bash
git clone https://github.com/Raushan666java/ai-engineering-journey.git
cd ai-engineering-journey

# Install dependencies
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin
pip install mkdocs-glightbox

# Serve locally
mkdocs serve
```

Open `http://localhost:8000` to view the site.

---

## About This Journey

I'm a Laravel developer with 3 years of experience building SaaS, CRM, and ERP systems. This is my structured path into AI Engineering.

**The approach:**
- Phase 1-2 → Foundation (Python + DSA)
- Phase 3-4 → AI Engineering (LangChain + RAG + Memory)
- Phase 5-6 → Production (Multi-Agent + System Design + Deployment)

**Daily commitment:** 5 hours every day, full weekends — 3 months total.

**3 live projects by the end:**
1. Business Document AI Assistant
2. ApexERP WhatsApp AI Module
3. Purvanchal Flow Studio (Automated Music Pipeline)

---

<a href="roadmap/" class="md-button md-button--primary">View Full Roadmap →</a>
<a href="https://github.com/Raushan666java/ai-engineering-journey" class="md-button">Follow on GitHub</a>
