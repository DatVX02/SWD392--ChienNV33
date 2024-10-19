package com.SWD.TicketResell.service;

import com.SWD.TicketResell.dto.LoginDto;
import com.SWD.TicketResell.dto.RegisterDto;
import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserRepository userRepository;


    @Override
    public User register(RegisterDto registerDto) {

        return null;
    }

    @Override
    public String login(LoginDto loginDto) {
        return null;
    }


    @Override
    public void logout(String token) {

    }
}
