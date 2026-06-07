package com.placement.day52.repository;

import com.placement.day52.model.Task;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

public interface TaskRepository {
    Task save(Task task);
    Optional<Task> findById(long id);
    List<Task> findByProjectId(long projectId);
    List<Task> search(Predicate<Task> predicate);
    List<Task> findAll();
    void deleteById(long id);
}
