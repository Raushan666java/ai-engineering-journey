package com.placement.day52.cache;

import com.placement.day52.model.Task;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.wait.strategy.Wait;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.*;

@Testcontainers
public class RedisCacheIT {

    @Container
    public GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine").withExposedPorts(6379).waitingFor(Wait.forListeningPort());

    @Test
    public void testRedisPutGet() {
        String host = redis.getHost();
        int port = redis.getMappedPort(6379);

        RedisTaskCache cache = new RedisTaskCache(host, port);
        Task t = new Task(300L, "Cached Task", "d", 1L);
        t.setAssignedTo(99L);
        cache.putTask(t);

        Task got = cache.getTask(300L);
        assertNotNull(got);
        assertEquals("Cached Task", got.getTitle());
        assertEquals(99L, got.getAssignedTo());
    }
}
