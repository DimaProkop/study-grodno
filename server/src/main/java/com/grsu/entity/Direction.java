package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Направление
 */
@Entity
@Table(name = "direction")
public class Direction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    /**
     * Название
     */
    @Column
    private String name;

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
