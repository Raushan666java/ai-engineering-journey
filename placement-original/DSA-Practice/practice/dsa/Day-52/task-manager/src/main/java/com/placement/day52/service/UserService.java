package com.placement.day52.service;

import com.placement.day52.model.User;
import com.placement.day52.repository.UserRepository;
import java.util.Optional;

public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) { this.userRepo = userRepo; }

    public User register(String username, String email, String passwordHash, String role) {
        if (userRepo.findByUsername(username).isPresent()) throw new IllegalArgumentException("username exists");
        if (userRepo.findByEmail(email).isPresent()) throw new IllegalArgumentException("email exists");
        return userRepo.save(new User(0, username, email, passwordHash, role));
    }

    public Optional<User> findByUsername(String username) { return userRepo.findByUsername(username); }
}
