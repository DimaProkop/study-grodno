package com.grsu.entity;

import javax.persistence.*;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "form_of_education")
public class FormOfEducation {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String name;

    public FormOfEducation() {

    }

    public FormOfEducation(String name) {
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
