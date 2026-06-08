package com.placement.day52.service;

import com.placement.day52.model.Task;
import com.placement.day52.repository.InMemoryTaskRepository;
import com.placement.day52.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TaskServiceTest {
    TaskRepository taskRepo;
    TaskService taskService;

    @BeforeEach
    public void setup() {
        taskRepo = new InMemoryTaskRepository();
        taskService = new TaskService(taskRepo);
    }

    @Test
    public void testCreateAndAssignAndStatusUpdate() {
        Task t = taskRepo.create("T1", "desc", 1L);
        taskService.assignTask(t.getId(), 42L);
        assertEquals(42L, taskRepo.findById(t.getId()).get().getAssignedTo());

        taskService.updateStatus(t.getId(), "IN_PROGRESS");
        assertEquals("IN_PROGRESS", taskRepo.findById(t.getId()).get().getStatus());
    }

    @Test
    public void testOverdueDetection() {
        Task t = taskRepo.create("Old", "overdue", 2L);
        t.setDueDate(LocalDateTime.now().minusDays(2));
        taskRepo.save(t);
        List<Task> overdue = taskService.getOverdueTasks(2L);
        assertTrue(overdue.size() >= 1);
    }

    @Test
    public void testAssignNonExistentThrows() {
        assertThrows(RuntimeException.class, () -> taskService.assignTask(9999L, 1L));
    }
}
