package com.placement.day52.service;

import com.placement.day52.model.Project;
import com.placement.day52.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProjectServiceTest {

    @Mock
    ProjectRepository projectRepo;

    @InjectMocks
    ProjectService projectService;

    @Test
    public void testCreateProject_callsSave() {
        Project p = new Project(1L, "P1", "desc", 2L);
        when(projectRepo.save(any())).thenReturn(p);

        Project created = projectService.createProject("P1", "desc", 2L);
        assertNotNull(created);
        verify(projectRepo, times(1)).save(any());
    }

    @Test
    public void testListByOwner_returnsList() {
        when(projectRepo.findByOwner(2L)).thenReturn(List.of(new Project(1L, "P1", "d",2L)));
        var list = projectService.listByOwner(2L);
        assertEquals(1, list.size());
    }

    @Test
    public void testDelete_invokesRepo() {
        doNothing().when(projectRepo).deleteById(1L);
        projectService.delete(1L);
        verify(projectRepo, times(1)).deleteById(1L);
    }
}
