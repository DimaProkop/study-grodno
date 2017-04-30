package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Dima Prokopovich 30.04.2017.
 */
@Entity
@Table(name = "choice")
public class Choice implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String name;

    public Choice() {
    }

    public Choice(String name) {
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
