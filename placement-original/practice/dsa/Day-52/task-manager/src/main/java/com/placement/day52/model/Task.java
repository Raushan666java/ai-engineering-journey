package com.placement.day52.model;

import java.time.LocalDateTime;

public class Task {
    private final long id;
    private String title;
    private String description;
    private long projectId;
    private Long assignedTo;
    private String priority;
    private String status;
    private LocalDateTime dueDate;

    public Task(long id, String title, String description, long projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.projectId = projectId;
        this.status = "TODO";
    }

    public long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public long getProjectId() { return projectId; }
    public Long getAssignedTo() { return assignedTo; }
    public void setAssignedTo(Long assignedTo) { this.assignedTo = assignedTo; }
    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDateTime getDueDate() { return dueDate; }
    public void setDueDate(LocalDateTime dueDate) { this.dueDate = dueDate; }
}
