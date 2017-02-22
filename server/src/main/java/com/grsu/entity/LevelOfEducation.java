package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "level_of_education")
public class LevelOfEducation implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String currentEducation;

    @Column
    private String country;

    @Column
    private String nameEducationInstitution;

    @Column
    private Integer yearOfEnding;

    public LevelOfEducation(String currentEducation, String country, String nameEducationInstitution, Integer yearOfEnding) {
        this.currentEducation = currentEducation;
        this.country = country;
        this.nameEducationInstitution = nameEducationInstitution;
        this.yearOfEnding = yearOfEnding;
    }

    public LevelOfEducation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCurrentEducation() {
        return currentEducation;
    }

    public void setCurrentEducation(String currentEducation) {
        this.currentEducation = currentEducation;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getNameEducationInstitution() {
        return nameEducationInstitution;
    }

    public void setNameEducationInstitution(String nameEducationInstitution) {
        this.nameEducationInstitution = nameEducationInstitution;
    }

    public Integer getYearOfEnding() {
        return yearOfEnding;
    }

    public void setYearOfEnding(Integer yearOfEnding) {
        this.yearOfEnding = yearOfEnding;
    }
}
