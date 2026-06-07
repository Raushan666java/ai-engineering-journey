package com.placement.day52.repository;

import com.placement.day52.model.Project;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryProjectRepository implements ProjectRepository {
    private final Map<Long, Project> projects = new ConcurrentHashMap<>();
    private final AtomicLong idGen = new AtomicLong(1);

    public Project create(String name, String description, long ownerId) {
        long id = idGen.getAndIncrement();
        Project p = new Project(id, name, description, ownerId);
        projects.put(id, p);
        return p;
    }

    @Override
    public Project save(Project project) {
        projects.put(project.getId(), project);
        return project;
    }

    @Override
    public Optional<Project> findById(long id) { return Optional.ofNullable(projects.get(id)); }

    @Override
    public List<Project> findByOwner(long ownerId) { return projects.values().stream().filter(p -> p.getOwnerId() == ownerId).collect(Collectors.toList()); }

    @Override
    public List<Project> findAll() { return new ArrayList<>(projects.values()); }

    @Override
    public void deleteById(long id) { projects.remove(id); }
}
