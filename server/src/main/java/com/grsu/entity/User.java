package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "\"user\"")
public class User implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String login;

    @Column
    private String password;

    @Column
    private String role;

    public User() {
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
