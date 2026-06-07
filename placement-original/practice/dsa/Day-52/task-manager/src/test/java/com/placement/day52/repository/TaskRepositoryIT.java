package com.placement.day52.repository;

import com.placement.day52.model.Task;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import javax.sql.DataSource;
import org.postgresql.ds.PGSimpleDataSource;

import java.sql.SQLException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@Testcontainers
public class TaskRepositoryIT {

    @Container
    public PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    private TaskRepositoryJdbc repo;

    @BeforeEach
    public void setup() throws SQLException {
        PGSimpleDataSource ds = new PGSimpleDataSource();
        ds.setUrl(postgres.getJdbcUrl());
        ds.setUser(postgres.getUsername());
        ds.setPassword(postgres.getPassword());
        repo = new TaskRepositoryJdbc(ds);
        repo.initSchema();
    }

    @Test
    public void testSaveAndFind() {
        Task t = new Task(200L, "IT Task", "desc", 7L);
        repo.save(t);
        Optional<Task> got = repo.findById(200L);
        assertTrue(got.isPresent());
        assertEquals("IT Task", got.get().getTitle());
    }
}
