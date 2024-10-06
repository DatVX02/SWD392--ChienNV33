package com.SWD.TicketResell.service;

import com.SWD.TicketResell.entity.Role;
import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.entity.VerificationToken;
import com.SWD.TicketResell.enums.RoleEnum;
import com.SWD.TicketResell.exception.AppException;
import com.SWD.TicketResell.exception.ErrorCode;
import com.SWD.TicketResell.mapper.UserMapper;
import com.SWD.TicketResell.repository.RoleRepository;
import com.SWD.TicketResell.repository.UserRepository;
import com.SWD.TicketResell.repository.VerificationTokenRepository;
import com.SWD.TicketResell.request.UserCreationRequest;
import jakarta.transaction.Transactional;

import com.SWD.TicketResell.response.UserResponse;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.UUID;

public class UserService {
    UserRepository userRepository;
    RoleRepository roleRepository;
    UserMapper userMapper;
    PasswordEncoder passwordEncoder;
    VerificationTokenRepository verificationTokenRepository;

    @Transactional
    public UserResponse createUser(UserCreationRequest request) {
        User user1 = userRepository.findByUsername(request.getUsername())
                .orElse(null);
        if (user1 != null) {
            if (!user1.isEnabled()) {
                verificationTokenRepository.deleteByUser(user1);
                userRepository.delete(user1);
            } else
                throw new AppException(ErrorCode.USER_EXISTED);
        }

        User user = userMapper.toUser(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnabled(false);

        var roles = new HashSet<Role>();
        roles.add(roleRepository.findByName(RoleEnum.USER.name()).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXISTED)));

        user.setRoles(roles);
        userRepository.save(user);

        // Generate verification token
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = VerificationToken.builder()
                .token(token)
                .user(user)
                .expiryDate(LocalDateTime.now().plusMinutes(15)) // Token expiry time
                .build();
        verificationTokenRepository.save(verificationToken);


        return userMapper.toUserResponse(userRepository.save(user));
    }

}
