package com.placement.day52.repository;

import com.placement.day52.model.Task;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class InMemoryTaskRepository implements TaskRepository {
    private final Map<Long, Task> tasks = new ConcurrentHashMap<>();
    private final AtomicLong idGen = new AtomicLong(1);

    public Task create(String title, String description, long projectId) {
        long id = idGen.getAndIncrement();
        Task t = new Task(id, title, description, projectId);
        tasks.put(id, t);
        return t;
    }

    @Override
    public Task save(Task task) {
        tasks.put(task.getId(), task);
        return task;
    }

    @Override
    public Optional<Task> findById(long id) { return Optional.ofNullable(tasks.get(id)); }

    @Override
    public List<Task> findByProjectId(long projectId) {
        return tasks.values().stream().filter(t -> t.getProjectId() == projectId).collect(Collectors.toList());
    }

    @Override
    public List<Task> search(Predicate<Task> predicate) {
        return tasks.values().stream().filter(predicate).collect(Collectors.toList());
    }

    @Override
    public List<Task> findAll() { return new ArrayList<>(tasks.values()); }

    @Override
    public void deleteById(long id) { tasks.remove(id); }
}
