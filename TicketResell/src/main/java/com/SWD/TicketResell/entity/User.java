package com.SWD.TicketResell.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name ="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @Column(name = "username", unique = true, length = 50)
    String username;

    @Column(name = "password", length = 255, nullable = false)
    String password;

    @Column(name = "email", length = 200)
    private String email;

    @Column(name = "first_name", length = 50)
    String firstName;

    @Column(name = "last_name", length = 50)
    String lastName;

    @Column(name = "date_of_birth", length = 50)
    private Date dob;

    @Column(name = "enabled")
    boolean enabled;

    @Builder.Default
    @Column(name = "balance", length = 50, nullable = false)
    Double balance = 0.0;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<RoleUser> roleUsers; // Thêm mối quan hệ đến RoleUser

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Ticket> tickets; // Một User có thể sở hữu nhiều Ticket

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Purschase> purchases; // Một User có thể có nhiều Purchase

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<PurchaseHistory> purchaseHistories; // Một User có thể có nhiều PurchaseHistory

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Transaction> transactions; // Một User có thể có nhiều Transaction

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<VerificationToken> verificationTokens; // Mối quan hệ với VerificationToken

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<GroupUser> groupUsers; // Mối quan hệ với VerificationToken
}
