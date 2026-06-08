package com.placement.day52.service;

import com.placement.day52.model.User;
import com.placement.day52.repository.InMemoryUserRepository;
import com.placement.day52.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {
    UserRepository userRepo;
    UserService userService;

    @BeforeEach
    public void setup() {
        userRepo = new InMemoryUserRepository();
        userService = new UserService(userRepo);
    }

    @Test
    public void testRegisterAndFind() {
        User created = userRepo.create("alice", "alice@test.com", "hash", "USER");
        Optional<User> found = userService.findByUsername("alice");
        assertTrue(found.isPresent());
        assertEquals(created.getEmail(), found.get().getEmail());
    }

    @Test
    public void testDuplicateUsernameThrows() {
        userRepo.create("bob", "bob@test.com", "h", "USER");
        assertThrows(IllegalArgumentException.class, () -> userService.register("bob", "bob2@test.com", "h2", "USER"));
    }
}
