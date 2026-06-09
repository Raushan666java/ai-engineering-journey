# About AI Engineering from Scratch

[Home](index.md) · [Catalog](catalog.md) · [Roadmap](roadmap.md) · [Glossary](glossary.md) · [Contact](contact.md)

---

AI Engineering from Scratch is a free, open-source curriculum that builds every core AI algorithm by hand. 503 lessons across 20 phases, from linear algebra to autonomous agents, in Python, TypeScript, Rust, and Julia.

## Why It Exists

Most AI material teaches in scattered pieces. A paper here, a fine-tuning post there, a framework demo somewhere else. You can ship a chatbot without being able to explain its loss curve, or wire a tool to an agent without knowing what attention does inside the model calling it.

This curriculum is the spine. Every algorithm gets written from raw math first, then run through the production library so you can see what the library was doing. By the time PyTorch shows up, you already know what it computes. Each lesson ends with a reusable artifact you keep: a prompt, a skill, an agent, or an MCP server.

## How It Is Made

The lessons are authored with AI assistance and reviewed by a human against primary sources. Where a lesson states a fact, it cites the original: an RFC, a spec, or a research paper, not a secondary summary. Corrections are welcome and tracked in the open on GitHub.

The site itself is deliberately plain: hand-written HTML, CSS, and vanilla JavaScript, no framework. A single build script reads the lesson Markdown in the repository and generates the catalog, search index, sitemap, and `llms.txt` on every deploy, so the published numbers can never drift from the source. It is hosted on Vercel.

## Who Builds It

Maintained by [Rohit Ghumare](https://github.com/rohitg00) and contributors. MIT-licensed and free forever. No token, no course upsell, and no gated content.

## Get Involved

- Read the source: [github.com/rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)
- Found an error or have a lesson idea? [Open an issue](https://github.com/rohitg00/ai-engineering-from-scratch/issues/new/choose)
- Start learning: [browse the catalog](https://aiengineeringfromscratch.com/catalog.html)
