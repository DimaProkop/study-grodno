package com.grsu.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "specially")
public class Specially {

    @Id
    @GeneratedValue
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String code;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "form_of_education_specially",
            joinColumns = {@JoinColumn(name = "form_of_education_id")},
            inverseJoinColumns = {@JoinColumn(name = "specially_id")})
    private List<FormOfEducation> formOfEducations;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "specially_language_learning",
            joinColumns = {@JoinColumn(name = "specially_id")},
            inverseJoinColumns = {@JoinColumn(name = "language_learning_id")})
    private List<LanguageLearning> languageLearnings;


    public Specially() {
    }

    public Specially(String name, String code) {
        this.name = name;
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<FormOfEducation> getFormOfEducations() {
        return formOfEducations;
    }

    public void setFormOfEducations(List<FormOfEducation> formOfEducations) {
        this.formOfEducations = formOfEducations;
    }

    public List<LanguageLearning> getLanguageLearnings() {
        return languageLearnings;
    }

    public void setLanguageLearnings(List<LanguageLearning> languageLearnings) {
        this.languageLearnings = languageLearnings;
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
