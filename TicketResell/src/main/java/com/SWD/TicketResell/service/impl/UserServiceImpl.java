package com.SWD.TicketResell.service.impl;

import com.SWD.TicketResell.dto.LoginDto;
import com.SWD.TicketResell.dto.RegisterDto;
import com.SWD.TicketResell.dto.UserDto;
import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.repository.UserRepository;
import com.SWD.TicketResell.response.JwtResponse;
import com.SWD.TicketResell.service.IUserService;
import com.SWD.TicketResell.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;


    @Override
    public JwtResponse registerUser(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setEmail(userDto.getEmail());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEnabled(true); // Enable user after registration
        userRepository.save(user);

        String token = jwtUtils.generateToken(user.getUsername());
        return new JwtResponse(token, user.getUsername());
    }

    @Override
    public JwtResponse loginUser(LoginDto loginDto) {
        User user = userRepository.findByUsername(loginDto.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            String token = jwtUtils.generateToken(user.getUsername());
            return new JwtResponse(token, user.getUsername());
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    @Override
    public void logoutUser(String token) {
        jwtUtils.invalidateToken(token); // Implement token invalidation
    }
}
