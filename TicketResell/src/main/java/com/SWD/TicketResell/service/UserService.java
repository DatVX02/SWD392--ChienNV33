//package com.SWD.TicketResell.service;
//
//import com.SWD.TicketResell.entity.Role;
//import com.SWD.TicketResell.entity.RoleUser;
//import com.SWD.TicketResell.entity.User;
//import com.SWD.TicketResell.entity.VerificationToken;
//import com.SWD.TicketResell.enums.RoleEnum;
//import com.SWD.TicketResell.exception.AppException;
//import com.SWD.TicketResell.exception.ErrorCode;
//import com.SWD.TicketResell.mapper.UserMapper;
//import com.SWD.TicketResell.repository.RoleRepository;
//import com.SWD.TicketResell.repository.UserRepository;
//import com.SWD.TicketResell.repository.VerificationTokenRepository;
//import com.SWD.TicketResell.request.UserCreationRequest;
//import jakarta.transaction.Transactional;
//
//import com.SWD.TicketResell.response.UserResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.HashSet;
//import java.util.Optional;
//import java.util.Set;
//import java.util.UUID;
//
//@Service
//public class UserService {
//    private final UserRepository userRepository;
//    private final RoleRepository roleRepository;
//    private final UserMapper userMapper;
//    private final PasswordEncoder passwordEncoder;
//    private final VerificationTokenRepository verificationTokenRepository;
//
//    @Autowired
//    public UserService(UserRepository userRepository,
//                       RoleRepository roleRepository,
//                       UserMapper userMapper,
//                       PasswordEncoder passwordEncoder,
//                       VerificationTokenRepository verificationTokenRepository) {
//        this.userRepository = userRepository;
//        this.roleRepository = roleRepository;
//        this.userMapper = userMapper;
//        this.passwordEncoder = passwordEncoder;
//        this.verificationTokenRepository = verificationTokenRepository;
//    }
//
//    @Transactional
//    public UserResponse createUser(UserCreationRequest request) {
//        // Check if user already exists
//        Optional<User> existingUserOpt = userRepository.findByUsername(request.getUsername());
//
//        if (existingUserOpt.isPresent()) {
//            User existingUser = existingUserOpt.get();
//            if (!existingUser.isEnabled()) {
//                verificationTokenRepository.deleteByUser(existingUser);
//                userRepository.delete(existingUser);
//            } else {
//
//                throw new AppException(ErrorCode.USER_EXISTED);
//            }
//        }
//
//
//        User user = userMapper.toUser(request);
//        user.setPassword(passwordEncoder.encode(request.getPassword()));
//        user.setEnabled(false);
//
//
//        Role userRole = roleRepository.findByName(RoleEnum.USER.name())
//                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
//
//
//        RoleUser roleUser = new RoleUser();
//        roleUser.setUser(user);
//        roleUser.setRole(userRole);
//
//        if (user.getRoleUsers() == null) {
//            user.setRoleUsers(new HashSet<>());
//        }
//
//        user.getRoleUsers().add(roleUser);
//
//        user = userRepository.save(user);
//
//        String token = UUID.randomUUID().toString();
//        VerificationToken verificationToken = VerificationToken.builder()
//                .token(token)
//                .user(user)
//                .expiryDate(LocalDateTime.now().plusMinutes(15))
//                .build();
//        verificationTokenRepository.save(verificationToken);
//
//        return userMapper.toUserResponse(user);
//    }
//}
