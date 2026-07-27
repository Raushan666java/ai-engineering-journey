---
slug: /learning-course/Learning_Course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features
title: "🏗️ System Architecture & Features (Single-User Jira Clone)"
sidebar_label: "🏗️ System Architecture & Features (Single-User Jira Clone)"
sidebar_position: 1
---
# 🏗️ System Architecture & Features (Single-User Jira Clone)

### 🎯 The Capstone Project: "ProManage"

To put all the principles of the **Pro Developer Master Guide** into practice, we are going to design a complete, production-ready project management application from scratch. 

The goal is to build a Personal Project Management Tool (similar to a single-user Jira or Trello board) using a classic, robust tech stack: **HTML, CSS, JavaScript (jQuery for DOM manipulation), PHP (or Laravel), and MySQL.**

By designing this strictly for **single-use (one solo developer or user)**, we eliminate the immense overhead of multi-tenancy (workspaces), complex role-based access control, and team management, allowing us to focus purely on the fast, efficient core mechanics of task execution.

---

### 🧱 The Tech Stack (The "Boring" Stack)

We are intentionally choosing stable, mature technologies. No experimental frameworks.
*   **Frontend:** HTML5, Vanilla CSS (or Tailwind CSS), Vanilla JS + jQuery (for drag-and-drop Kanban functionality and fast AJAX requests).
*   **Backend:** PHP (using the Laravel framework or a raw MVC architecture) to handle authentication, business logic, and database routing.
*   **Database:** MySQL (Relational database perfectly suited for highly structured project data).

---

### 🚀 Core Features (Solo Edition)

To build a highly efficient personal tool, the MVP (Minimum Viable Product) must contain the following Domains:

#### 1. Identity & Access Management (IAM)
*   **Single User Authentication:** A secure login system. Only you own and access the data.
*   **Data Isolation:** Since it's single-user, we do not need complex workspace models or role checking. 

#### 2. Project Planning & Requirements
*   **Projects:** Grouping mechanisms for tasks (e.g., "Mobile App Rewrite", "Website Redesign").
*   **Requirements / Epics:** Large, high-level business goals that contain multiple smaller tasks.

#### 3. The Execution Engine (Tasks, Bugs & Issues)
*   **The Ticket:** The core entity. A Ticket can be a "Bug", "Feature", or "Task".
*   **Ticket Attributes:** Priority (Low, Medium, High, Blocker), Status (To Do, In Progress, Review, Done), Estimate (Points/Hours).
*   **Notes/Log:** A space to log personal updates or debugging traces directly on the ticket, replacing multi-user "comments."

#### 4. The UI / UX Layer
*   **The Interactive Kanban Board:** The heart of the application. Using jQuery UI's Sortable/Draggable, you click and drag a ticket from "To Do" to "In Progress". This triggers an asynchronous AJAX request to the server to instantly update your database without refreshing the page.

---

### 🧠 The Pro Developer Approach

If a Junior Developer received these requirements, they would immediately open `index.html` and start typing out a navigation bar.

As a Pro Developer, we will not touch HTML yet. We will design the Data Layer (The MySQL Schema) to prove mathematically that these features can exist and relate to one another securely.
