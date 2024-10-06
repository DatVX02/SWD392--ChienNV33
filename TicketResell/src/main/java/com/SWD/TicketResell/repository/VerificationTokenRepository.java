package com.SWD.TicketResell.repository;

import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    VerificationToken findByToken(String token);

    void deleteByUser(User user1);

    Optional<VerificationToken> findByUser(User user);
}