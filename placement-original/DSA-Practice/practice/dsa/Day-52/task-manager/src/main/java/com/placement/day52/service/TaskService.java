package com.placement.day52.service;

import com.placement.day52.model.Task;
import com.placement.day52.repository.TaskRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Predicate;

public class TaskService {
    private final TaskRepository taskRepo;

    public TaskService(TaskRepository taskRepo) { this.taskRepo = taskRepo; }

    public Task createTask(String title, String description, long projectId) {
        return taskRepo.save(new Task(0, title, description, projectId));
    }

    public void assignTask(long taskId, long userId) {
        Task t = taskRepo.findById(taskId).orElseThrow(() -> new NoSuchElementException("Task not found"));
        t.setAssignedTo(userId);
        taskRepo.save(t);
    }

    public void updateStatus(long taskId, String status) {
        Task t = taskRepo.findById(taskId).orElseThrow(() -> new NoSuchElementException("Task not found"));
        t.setStatus(status);
        taskRepo.save(t);
    }

    public List<Task> listByProject(long projectId) { return taskRepo.findByProjectId(projectId); }

    public List<Task> searchTasks(Predicate<Task> predicate) { return taskRepo.search(predicate); }

    public List<Task> getOverdueTasks(long projectId) {
        return taskRepo.findByProjectId(projectId).stream()
                .filter(t -> t.getDueDate() != null && t.getDueDate().isBefore(LocalDateTime.now()) && !"COMPLETED".equals(t.getStatus()))
                .toList();
    }
}
