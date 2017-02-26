package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "personal_info")
public class PersonalInfo implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String middleName;

    @Column
    private LocalDate dateOfBirth;

    @Column
    private String phone;

    @Column
    private String motivationLetter;

    @ManyToOne(fetch = FetchType.LAZY)
    private Citizenship citizenship;

    @ManyToOne(fetch = FetchType.LAZY)
    private LevelOfEducation levelOfEducation;

    @ManyToOne(fetch = FetchType.LAZY)
    private Skill skill;

    public PersonalInfo(String firstName, String lastName, String middleName, LocalDate dateOfBirth, String phone, String motivationLetter) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.motivationLetter = motivationLetter;
        this.citizenship = null;
        this.levelOfEducation = null;
        this.skill = null;
    }

    public PersonalInfo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMotivationLetter() {
        return motivationLetter;
    }

    public void setMotivationLetter(String motivationLetter) {
        this.motivationLetter = motivationLetter;
    }

    public Citizenship getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(Citizenship citizenship) {
        this.citizenship = citizenship;
    }

    public LevelOfEducation getLevelOfEducation() {
        return levelOfEducation;
    }

    public void setLevelOfEducation(LevelOfEducation levelOfEducation) {
        this.levelOfEducation = levelOfEducation;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
