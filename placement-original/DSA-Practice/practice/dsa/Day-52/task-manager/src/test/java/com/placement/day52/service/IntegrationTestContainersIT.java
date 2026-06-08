package com.placement.day52.service;

import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
public class IntegrationTestContainersIT {

    @Container
    public PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    @Test
    public void testPostgresContainerStarts() {
        // Basic smoke test to ensure Testcontainers can start a Postgres instance
        System.out.println("Postgres started at: " + postgres.getJdbcUrl());
        assert(postgres.isRunning());
    }
}
