package com.SWD.TicketResell.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Tham chiếu đến khóa chính trong bảng user
    private User user; // Mối quan hệ với User

    @Column(name = "details", length = 255, nullable = false)
    private String details;

    @Column(name = "date", length = 255, nullable = false)
    private Date date;

    @Column(name = "amount", length = 255, nullable = false)
    private Double amount;
}
