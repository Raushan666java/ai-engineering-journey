package com.placement.day52.repository;

import com.placement.day52.model.Project;
import org.junit.jupiter.api.AfterEach;
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
public class ProjectRepositoryIT {

    @Container
    public PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    private ProjectRepositoryJdbc repo;

    @BeforeEach
    public void setup() throws SQLException {
        PGSimpleDataSource ds = new PGSimpleDataSource();
        ds.setUrl(postgres.getJdbcUrl());
        ds.setUser(postgres.getUsername());
        ds.setPassword(postgres.getPassword());
        repo = new ProjectRepositoryJdbc(ds);
        repo.initSchema();
    }

    @AfterEach
    public void teardown() {
        // container will be stopped by Testcontainers lifecycle
    }

    @Test
    public void testSaveAndFind() {
        Project p = new Project(100L, "Integration", "desc", 5L);
        repo.save(p);
        Optional<Project> got = repo.findById(100L);
        assertTrue(got.isPresent());
        assertEquals("Integration", got.get().getName());
    }
}
