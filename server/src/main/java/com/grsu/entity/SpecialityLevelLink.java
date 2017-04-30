package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by DENIS on 28.04.2017.
 */
@Entity
@Table(name = "speciality_level_of_education")
public class SpecialityLevelLink implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "speciality_id")
    Speciality speciality;

    @ManyToOne
    @JoinColumn(name = "level_of_education_id")
    LevelOfEducation levelOfEducation;

    public SpecialityLevelLink() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Speciality getSpeciality() {
        return speciality;
    }

    public void setSpeciality(Speciality speciality) {
        this.speciality = speciality;
    }

    public LevelOfEducation getLevelOfEducation() {
        return levelOfEducation;
    }

    public void setLevelOfEducation(LevelOfEducation levelOfEducation) {
        this.levelOfEducation = levelOfEducation;
    }
}
