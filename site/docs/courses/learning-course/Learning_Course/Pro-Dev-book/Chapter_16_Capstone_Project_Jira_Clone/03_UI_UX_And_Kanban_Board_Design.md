---
slug: /learning-course/Learning_Course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design
title: "🖱️ UI/UX & jQuery Kanban Architecture"
sidebar_label: "🖱️ UI/UX & jQuery Kanban Architecture"
sidebar_position: 3
---
# 🖱️ UI/UX & jQuery Kanban Architecture

### 🖌️ Designing The Interface

For a project management application, the primary interaction occurs on a single interface: **The Kanban Board**. 

Because we are building this personal tool without a heavy framework like React or Vue, we will use precise **HTML5 data attributes**, vanilla **CSS Grid/Flexbox**, and **jQuery AJAX** to create a lightning-fast, highly responsive single-page feel.

---

### 1. The HTML Structure (The Skeleton)

We will use semantic HTML and `data-*` attributes. The `data-id` attributes are critical; they act as the connective tissue between the frontend UI and the MySQL database IDs.

```html
<!-- The Kanban Board Container -->
<div class="kanban-board" data-project-id="9">

    <!-- Column: TO DO -->
    <div class="kanban-column" data-status="todo">
        <h3 class="column-header">To Do <span class="badge">2</span></h3>
        
        <!-- The Sortable List -->
        <ul class="task-list">
            <li class="task-card" data-task-id="105">
                <span class="tag-bug">Bug</span>
                <p>Fix MySQL connection timeout</p>
                <div class="card-footer">
                    <span class="priority-high">High</span>
                </div>
            </li>
            <!-- More tasks... -->
        </ul>
    </div>

    <!-- Column: IN PROGRESS -->
    <div class="kanban-column" data-status="in_progress">
        <!-- ... -->
    </div>

</div>
```

---

### 2. The CSS Architecture (Flexbox & Grid)

Do not use absolute positioning for a Kanban board. Let CSS Flexbox handle the responsive columns.

```css
.kanban-board {
    display: flex;
    overflow-x: auto;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 2rem;
}

.kanban-column {
    background-color: #f4f5f7; /* Signature light gray board color */
    border-radius: 8px;
    width: 320px;
    flex-shrink: 0; /* Prevents columns from shrinking on small screens */
    display: flex;
    flex-direction: column;
}

.task-list {
    min-height: 150px; /* Required so users can drag into an empty column */
    padding: 0.5rem;
}

.task-card {
    background-color: white;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    cursor: grab; /* Indicates dragging is possible */
    transition: transform 0.1s ease;
}

.task-card:active {
    cursor: grabbing;
    transform: scale(1.05); /* Micro-interaction on pickup */
}
```

---

### 3. The jQuery / AJAX Engine

This is where the magic happens. A Junior Developer forces themselves to drag the card, click "Save," and wait for the page to refresh.

A Pro Developer uses **jQuery UI Sortable** to allow dragging the card, and immediately fires a silent asynchronous `POST` request to update the personal database behind the scenes.

```javascript
$(function() {
    // 1. Initialize Drag and Drop across all task lists
    $(".task-list").sortable({
        connectWith: ".task-list",
        placeholder: "task-placeholder", // Renders a ghost box where the card will land
        
        // 2. The Stop Event (Fires when the user drops the card)
        update: function(event, ui) {
            // Check if the item was moved to a new list or just reordered
            if (this === ui.item.parent()[0]) {
                
                let taskId = ui.item.data('task-id');
                let newStatus = ui.item.closest('.kanban-column').data('status');
                
                // Get the new index order of all cards in this column
                let newOrderArray = $(this).sortable('toArray', {attribute: 'data-task-id'});

                // 3. Fire the hidden AJAX request to the server
                $.ajax({
                    url: '/api/tasks/update-status',
                    method: 'POST',
                    data: {
                        _token: $('meta[name="csrf-token"]').attr('content'),
                        task_id: taskId,
                        status: newStatus,
                        order: newOrderArray // We send the whole array to update `position` in DB
                    },
                    success: function(response) {
                        // Optional: Show a subtle green toast notification "Saved"
                        console.log("Database synced flawlessly.");
                    },
                    error: function() {
                        // Pessimistic Design: If the server crashes, reject the drop visually
                        alert("Network error. Could not move task.");
                        $(".task-list").sortable("cancel"); 
                    }
                });
            }
        }
    }).disableSelection();
});
```

### 🧠 The Pro Implementation Breakdown

Why is this "Seniors-Level" jQuery logic?
1.  **`connectWith`**: This allows cards to be passed freely between completely different `<ul>` lists (moving from "To Do" to "In Progress").
2.  **`newOrderArray`**: We don't just send the status; we send an array of ALL task IDs in that column. The PHP backend receives this and updates the `position` integer in the database for *every* card to ensure the vertical order matches perfectly on the next page refresh.
3.  **Pessimistic Reversion (`sortable("cancel")`)**: If you drop the card in "Done", but the local server crashes and the AJAX request fails, the code physically snaps the card back to its original column so the UI never falls out of sync with the Database. 

**Summary:** You do not need a bloated React application to build a complex personal dashboard. With semantic HTML data variables, Flexbox UI design, and 30 lines of precisely written jQuery asynchronous logic, you can build a lightning-fast, highly responsive project management suite.
