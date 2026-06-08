package com.placement.day52.model;

import java.time.LocalDateTime;

public class Project {
    private final long id;
    private String name;
    private String description;
    private long ownerId;
    private LocalDateTime createdAt;

    public Project(long id, String name, String description, long ownerId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ownerId = ownerId;
        this.createdAt = LocalDateTime.now();
    }

    public long getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public long getOwnerId() { return ownerId; }
    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
}
