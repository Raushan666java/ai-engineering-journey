---
slug: /learning-course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management
title: "🎨 Designing With Project Management"
sidebar_label: "🎨 Designing With Project Management"
sidebar_position: 6
---
# 🎨 Designing With Project Management

### 🖼️ Design is NOT a Coding Task

One of the most destructive habits of a solo developer or small team is treating "Design" as something you do *while* you are writing the code. 

If you open your IDE, create a `Dashboard.jsx` file, and start randomly typing Tailwind classes to figure out what the dashboard should look like, you have abandoned project management. You are combining two incredibly high-cognitive-load tasks—Architectural Logic and Visual Aesthetics—into a single blurry mess.

Design must be treated as a distinct, managed phase of the project that occurs *before* a single line of frontend code is written.

---

### 🧱 The "Design First, Code Second" Workflow

To manage a project efficiently, you must separate the UI/UX design from the engineering.

#### 1. The Wireframing Phase (Low Fidelity)
Before creating a beautiful, colorful UI, you must figure out the structural layout of the application. 
*   **The Tool:** Excalidraw, Balsamiq, or a physical piece of paper.
*   **The Goal:** Draw boxes. Where does the sidebar go? Where is the "Submit" button? What 3 columns of data surround the user? 
*   **Kanban Status:** Create a distinct ticket on your board: *"Wireframe User Dashboard Layout"*. Move it to Done before touching anything else.

#### 2. The Mockup Phase (High Fidelity)
Once the functional structure is approved, you build the actual aesthetic look of the page.
*   **The Tool:** Figma or Penpot.
*   **The Goal:** Choose your exact font (e.g., Inter), exact colors (e.g., Tailwind Slate-900), and button roundedness. Build the exact screen the user will see.
*   **Kanban Status:** Create a ticket: *"Design High-Fidelity Dashboard in Figma"*. 

#### 3. The Coding Phase (The Execution)
Only when the Figma design is 100% frozen do you open your IDE. 
*   **The Goal:** You are no longer "designing." You are simply a bricklayer, translating the exact pixels from Figma into Tailwind/CSS code. You don't have to think about "Does this blue look good?" because that decision was already made in the Design Phase.

---

### ⏳ Time-Boxing the Design Phase

Developers who have an eye for design often fall into the trap of "Pixel Pushing"—spending 6 hours tweaking the drop-shadow on a modal window while the backend authentication system remains fundamentally broken.

Design is an infinite process; it is never truly "finished." Therefore, you must aggressively manage the design phase using **Time-Boxing**.

*   **The Rule:** Allocate a strict time limit for the MVP design (e.g., *"I have 4 hours to design the Core Application structure in Figma"*). 
*   When the 4-hour alarm rings, you must stop designing. The design is now frozen. You build whatever is on the canvas. You can add a new ticket to the backlog for *"Polish UI Shadows in Phase 2"*, but the current design phase is over.

---

### 🧩 Using Component Libraries to Cheat

If you are acting as a solo developer and lack deep UI/UX skills, do not waste 3 weeks trying to invent a new design system from scratch. 

Project Management is about resource allocation. Use your resources efficiently.
*   **Adopt an existing system:** Use robust UI kits like **Tailwind UI**, **shadcn/ui** (for React), or **Flowbite**.
*   These libraries have already made the thousands of micro-decisions regarding padding, font-weight, and color harmony. 
*   By adopting a UI kit, you effectively bypass the High-Fidelity Design phase and jump straight into assembling the logic, saving you hundreds of hours.

**Summary:** Never design in the browser while writing logic. Separate the tasks on your Kanban board. Sketch the layout first, design the aesthetic in Figma second, and strictly translate it into code last. If you are strapped for time, adopt a premade UI library and focus heavily on the backend architecture.
