package com.SWD.TicketResell.repository;

import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TokenRepository extends JpaRepository<VerificationToken, Long> {
    List<VerificationToken> findByUser(User user);
    VerificationToken findByToken(String token);
    VerificationToken findByRefreshToken(String token);

}
