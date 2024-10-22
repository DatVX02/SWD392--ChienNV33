package com.SWD.TicketResell.service;

import com.SWD.TicketResell.dto.LoginDto;
import com.SWD.TicketResell.dto.RegisterDto;
import com.SWD.TicketResell.dto.UserDto;
import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.response.JwtResponse;

public interface IUserService {
    JwtResponse registerUser(UserDto userDto);
    JwtResponse loginUser(LoginDto loginDto);
    void logoutUser(String token);
}
