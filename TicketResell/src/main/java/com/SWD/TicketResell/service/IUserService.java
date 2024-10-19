package com.SWD.TicketResell.service;

import com.SWD.TicketResell.dto.LoginDto;
import com.SWD.TicketResell.dto.RegisterDto;
import com.SWD.TicketResell.entity.User;

public interface IUserService {
    User register(RegisterDto registerDto);
    String login(LoginDto loginDto);
    void logout(String token);
}
