package com.placement.day52.cache;

import com.placement.day52.model.Task;
import redis.clients.jedis.Jedis;

public class RedisTaskCache {
    private final String host;
    private final int port;

    public RedisTaskCache(String host, int port) {
        this.host = host;
        this.port = port;
    }

    public void putTask(Task task) {
        try (Jedis jedis = new Jedis(host, port)) {
            String key = "task:" + task.getId();
            jedis.hset(key, "title", task.getTitle());
            if (task.getAssignedTo() != null) jedis.hset(key, "assignedTo", String.valueOf(task.getAssignedTo()));
        }
    }

    public Task getTask(long id) {
        try (Jedis jedis = new Jedis(host, port)) {
            String key = "task:" + id;
            if (!jedis.exists(key)) return null;
            Task t = new Task(id, jedis.hget(key, "title"), "", 0L);
            String at = jedis.hget(key, "assignedTo");
            if (at != null) t.setAssignedTo(Long.parseLong(at));
            return t;
        }
    }
}
