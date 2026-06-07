package com.placement.day52.repository;

import com.placement.day52.model.Project;
import java.util.List;
import java.util.Optional;

public interface ProjectRepository {
    Project save(Project project);
    Optional<Project> findById(long id);
    List<Project> findByOwner(long ownerId);
    List<Project> findAll();
    void deleteById(long id);
}
