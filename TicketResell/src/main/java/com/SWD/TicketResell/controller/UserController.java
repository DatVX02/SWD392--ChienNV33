package com.SWD.TicketResell.controller;

import com.SWD.TicketResell.dto.LoginDto;
import com.SWD.TicketResell.dto.RegisterDto;
import com.SWD.TicketResell.dto.UserDto;
import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.response.AuthResponse;
import com.SWD.TicketResell.response.JwtResponse;
import com.SWD.TicketResell.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping("/register")
    public ResponseEntity<JwtResponse> registerUser(@RequestBody UserDto userDto) {
        JwtResponse response = userService.registerUser(userDto);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> loginUser(@RequestBody LoginDto loginDto) {
        JwtResponse response = userService.loginUser(loginDto);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(@RequestHeader("Authorization") String token) {
        userService.logoutUser(token);
        return ResponseEntity.ok("User logged out successfully");
    }
}