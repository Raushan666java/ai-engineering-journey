package com.placement.day52.service;

import com.placement.day52.model.Project;
import com.placement.day52.repository.ProjectRepository;

import java.util.List;
import java.util.Optional;

public class ProjectService {
    private final ProjectRepository projectRepo;

    public ProjectService(ProjectRepository projectRepo) { this.projectRepo = projectRepo; }

    public Project createProject(String name, String description, long ownerId) {
        if (projectRepo instanceof com.placement.day52.repository.InMemoryProjectRepository) {
            return ((com.placement.day52.repository.InMemoryProjectRepository) projectRepo).create(name, description, ownerId);
        }
        long id = System.currentTimeMillis();
        Project p = new Project(id, name, description, ownerId);
        return projectRepo.save(p);
    }

    public Optional<Project> get(long id) { return projectRepo.findById(id); }

    public List<Project> listByOwner(long ownerId) { return projectRepo.findByOwner(ownerId); }

    public void delete(long id) { projectRepo.deleteById(id); }
}
