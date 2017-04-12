package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Уровень образования
 */
@Entity
@Table(name = "level_of_education")
public class LevelOfEducation implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    /**
     * Название
     */
    @Column
    private String name;

    public LevelOfEducation() {
    }

    public LevelOfEducation(String name) {
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
