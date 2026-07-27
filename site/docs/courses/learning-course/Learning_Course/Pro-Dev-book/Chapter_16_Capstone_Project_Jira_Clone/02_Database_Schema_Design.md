---
slug: /learning-course/Learning_Course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design
title: "🗄️ MySQL Database Schema Design"
sidebar_label: "🗄️ MySQL Database Schema Design"
sidebar_position: 2
---
# 🗄️ MySQL Database Schema Design

### 🗺️ Mapping The Data Layer

The database is the absolute source of truth. If the schema is designed flawlessly, the backend controllers become incredibly thin and simple. Since we are designing this strictly for **single-use**, our database schema will be elegantly streamlined, completely avoiding the complexity of multi-tenancy (`workspaces`, `teams`, `roles`, or `assignee_id`).

Here is the exact Entity-Relationship (ER) design for our Personal Project Management tool.

---

### 1. The Access Layer

**`users` Table**
*   `id` (PK)
*   `name`, `email`, `password_hash`
*   `created_at`, `updated_at`
*(Note: Even in a strictly single-user app, you must have a users table to handle secure authentication and session management.)*

---

### 2. The Project Planning Layer

**`projects` Table**
*   `id` (PK)
*   `user_id` (FK -> users.id) - *Associates the project with your account.*
*   `name` (VARCHAR) - e.g., "SaaS Architecture Book"
*   `description` (TEXT)
*   `created_at`, `updated_at`

**`requirements` (Epics) Table**
*   `id` (PK)
*   `project_id` (FK -> projects.id)
*   `title` (VARCHAR) - e.g., "Chapter 16 Content"
*   `status` (ENUM: 'draft', 'active', 'completed')
*   `created_at`, `updated_at`

---

### 3. The Execution Engine (Tickets/Issues)

This is the most critical table. It powers the Kanban board.

**`tasks` Table (The Ticket)**
*   `id` (PK)
*   `project_id` (FK -> projects.id)
*   `requirement_id` (FK -> requirements.id) - *Optional (Nullable) if it belongs to a larger Epic.*
*   `type` (ENUM: 'task', 'bug', 'story') 
*   `title` (VARCHAR)
*   `description` (TEXT)
*   `status` (ENUM: 'todo', 'in_progress', 'review', 'done') - *Controls which Kanban column it appears in.*
*   `priority` (ENUM: 'low', 'medium', 'high', 'critical')
*   `position` (INT) - *Crucial for jQuery drag-and-drop. Stores the specific vertical order of the card in the column.*
*   `created_at`, `updated_at`

---

### 4. Tracking & Logging

**`task_notes` Table** (Replaces complex multi-user comments)
*   `id` (PK)
*   `task_id` (FK -> tasks.id)
*   `body` (TEXT) - *Your personal logs and debugging breadcrumbs.*
*   `created_at`, `updated_at`

---

### 🛡️ Why This Single-Use Schema Is "Pro"

1.  **Eliminating Overhead:** By removing `workspaces`, `assignee_ids`, and `roles`, your Eloquent models and database joins are significantly faster. You are building exactly what you need for yourself (The YAGNI principle).
2.  **The `position` Column:** Without an integer column to track the exact index (1, 2, 3) of a task, when you refresh the page, the Kanban board would randomly scramble the order of the cards in the "To Do" column. This allows precise drag-and-drop memory.
3.  **ENUMs for Strict Validation:** We use `ENUM` for Status and Priority at the database level. Even if the frontend UI breaks, the database will violently reject a task status of `super_done`. 

**Next Step:** With the data layer securely mapped mathematically, we can confidently move out of the database and design the physical User Interface that the browser will render.
