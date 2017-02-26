package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "role")
public class Role implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String name;

    @OneToMany
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name = "role_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private Set<User> userRoles;

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
