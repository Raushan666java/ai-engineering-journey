package com.placement.day52.service;

import com.placement.day52.model.Task;
import com.placement.day52.repository.TaskRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TaskServiceMockitoTest {

    @Mock
    TaskRepository taskRepo;

    @InjectMocks
    TaskService taskService;

    @Test
    public void testAssignTask_saves() {
        Task t = new Task(1L, "T1", "d", 1L);
        when(taskRepo.findById(1L)).thenReturn(Optional.of(t));
        when(taskRepo.save(any())).thenReturn(t);

        taskService.assignTask(1L, 5L);
        verify(taskRepo, times(1)).save(t);
        assertEquals(5L, t.getAssignedTo());
    }

    @Test
    public void testAssignTask_notFound_throws() {
        when(taskRepo.findById(999L)).thenReturn(Optional.empty());
        assertThrows(RuntimeException.class, () -> taskService.assignTask(999L, 1L));
    }

    @Test
    public void testUpdateStatus_saves() {
        Task t = new Task(2L, "T2", "d2", 1L);
        when(taskRepo.findById(2L)).thenReturn(Optional.of(t));
        when(taskRepo.save(any())).thenReturn(t);

        taskService.updateStatus(2L, "COMPLETED");
        verify(taskRepo, times(1)).save(t);
        assertEquals("COMPLETED", t.getStatus());
    }
}
