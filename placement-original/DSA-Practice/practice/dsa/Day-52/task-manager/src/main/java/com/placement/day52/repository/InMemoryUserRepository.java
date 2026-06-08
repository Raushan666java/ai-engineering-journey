package com.placement.day52.repository;

import com.placement.day52.model.User;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryUserRepository implements UserRepository {
    private final Map<Long, User> users = new ConcurrentHashMap<>();
    private final AtomicLong idGen = new AtomicLong(1);

    public User create(String username, String email, String passwordHash, String role) {
        long id = idGen.getAndIncrement();
        User u = new User(id, username, email, passwordHash, role);
        users.put(id, u);
        return u;
    }

    @Override
    public User save(User user) {
        users.put(user.getId(), user);
        return user;
    }

    @Override
    public Optional<User> findById(long id) {
        return Optional.ofNullable(users.get(id));
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return users.values().stream().filter(u -> u.getUsername().equals(username)).findFirst();
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return users.values().stream().filter(u -> u.getEmail().equals(email)).findFirst();
    }

    @Override
    public List<User> findAll() { return new ArrayList<>(users.values()); }

    @Override
    public void deleteById(long id) { users.remove(id); }
}
