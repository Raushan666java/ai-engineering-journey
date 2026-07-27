---
slug: /learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools
title: "🗺️ Requirements & Architecture Tools"
sidebar_label: "🗺️ Requirements & Architecture Tools"
sidebar_position: 1
---
# 🗺️ Requirements & Architecture Tools

### 🏗️ Getting the Ideas Out of Your Head

The primary mission of the planning phase is to translate abstract business requirements (e.g., "I need a booking system") into concrete, actionable technical artifacts (e.g., "I need a `bookings` database table with a polymorphic relation to `services`").

You cannot do this in an IDE. You need a specific stack of tools designed to capture, organize, and visualize requirements.

---

### 1. The "Source of Truth" (Notion / Obsidian)

Every project must have a single "Source of Truth" document. If a requirement is not written in this document, it does not exist.

*   **Notion:** The industry standard for project documentation. It is exceptional because it handles text, tables, and Kanban boards seamlessly. You can create a master "Project Wiki" that holds:
    *   The MVP Feature List.
    *   API Credentials (Stripe keys, AWS keys).
    *   Server IP addresses and deployment scripts. 
*   **Obsidian:** A fantastic offline, Markdown-based alternative if you prefer your documentation to live locally and be heavily interlinked.

**How to use it:** When a client sends an email asking for a feature, you copy that email, paste it into the Notion workspace, and tag it as "Draft." Do not leave requirements stranded in email threads or Slack messages.

---

### 2. The Visual Architect (Excalidraw / Whimsical)

You cannot build a complex database or a robust user flow without drawing it first. Text is too linear; architecture is multidimensional.

*   **Excalidraw:** A free, open-source virtual whiteboard. It looks like hand-drawn sketches, which prevents you from over-focusing on perfect "design" and keeps your focus purely on "logic."
*   **Whimsical:** A slightly more structured tool brilliant for fast flowcharts and wireframes.

**How to use it:** 
*   *Database Schemas:* Draw every table as a box. Draw arrows between the boxes to represent `hasOne`, `belongsToMany`, or polymorphic relationships. Seeing it visually instantly reveals fatal flaws (like circular dependencies).
*   *User Flows:* Draw the exact journey: `Landing Page` $\rightarrow$ `Login Form` $\rightarrow$ `Redirect Context` $\rightarrow$ `Dashboard`.

---

### 3. The Task Engine (Trello / GitHub Projects)

Once the architecture is drawn and the MVP features are listed in Notion, they must be converted into physical tasks.

*   **GitHub Projects:** If your code lives in GitHub, this is the best option. You can link a Kanban task directly to a Pull Request. When the PR merges, the task automatically moves to "Done."
*   **Trello / Linear:** Trello is the simplest Kanban board of all time. Linear is a beautiful, hyper-fast issue tracker favored by modern startups.

**How to use it:** Take one feature from Notion (e.g., "User Authentication"). Break it into 3 micro-tasks in GitHub Projects. Place them in the `Backlog`. Move exactly *one* task into `In Progress`.

**Summary:** Do not use sticky notes on your desk. Use Notion for the unchangeable rules, Excalidraw for visualizing the database, and GitHub Projects to govern the exact micro-tasks you must execute today.
