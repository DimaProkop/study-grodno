package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Dima Prokopovich 30.04.2017.
 */
@Entity
@Table(name = "bookmark")
public class Bookmark implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "content_id")
    private Long contentId;

    @OneToOne
    @JoinColumn(name = "choice_id")
    private Choice choice;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Bookmark() {
    }

    public Bookmark(Long contentId, Choice choice, User user) {
        this.contentId = contentId;
        this.choice = choice;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getContentId() {
        return contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
    }

    public Choice getChoice() {
        return choice;
    }

    public void setChoice(Choice choice) {
        this.choice = choice;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
