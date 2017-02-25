package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by dionp on 25.02.2017.
 */
@Entity
@Table(name = "learning_option")
public class LearningOption implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String name;

    public LearningOption(String name) {
        this.name = name;
    }

    public LearningOption() {
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
