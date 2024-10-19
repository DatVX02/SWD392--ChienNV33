package com.SWD.TicketResell.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @Column(name = "title", length = 50, nullable = false)
    String title;

    @Column(name = "description", length = 50, nullable = false)
    String description;

    @Column(name = "price", length = 50, nullable = false)
    Double price;

    @Column(name = "image", length = 50, nullable = false)
    String img;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    Category category;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    User user;

    @OneToMany(mappedBy = "ticket", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Purschase> purchases; // Một Ticket có thể có nhiều Purchase

    @OneToMany(mappedBy = "ticket", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<PurchaseHistory> purchaseHistories; // Một Ticket có thể có nhiều PurchaseHistory
}
