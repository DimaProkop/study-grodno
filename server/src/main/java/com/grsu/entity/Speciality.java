package com.grsu.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Специальность
 */
@Entity
@Table(name = "speciality")
public class Speciality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    /**
     * Название
     */
    @Column
    private String name;

    /**
     * Код специальности
     */
    @Column
    private String code;

    /**
     * Цена специальности
     */
    @Column
    private Double price;

    /**
     * Возможность бесплатного обучения
     */
    @Column(name = "free_education")
    private Boolean freeEducation;

    /**
     * Факультет
     */
    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;

    /**
     * Продолжительность обучения
     */
    @Column
    private Integer duration;

    /**
     * Формы обучения
     */
    @ManyToMany
    @JoinTable(name = "speciality_form_of_education",
            joinColumns = @JoinColumn(name = "speciality_id"),
            inverseJoinColumns = @JoinColumn(name = "form_of_education_id"))
    private List<FormOfEducation> formsOfEducation;

    /**
     * Языки обучения
     */
    @ManyToMany
    @JoinTable(name = "speciality_language_learning",
            joinColumns = @JoinColumn(name = "speciality_id"),
            inverseJoinColumns = @JoinColumn(name = "language_learning_id"))
    private List<LanguageLearning> languagesLearning;

    /**
     * Уровени образования
     */
    @ManyToMany
    @JoinTable(name = "speciality_level_of_education",
            joinColumns = @JoinColumn(name = "speciality_id"),
            inverseJoinColumns = @JoinColumn(name = "level_of_education_id"))
    private List<LevelOfEducation> levelsOfEducation;

    /**
     * Направления
     */
    @ManyToMany
    @JoinTable(name = "speciality_direction",
            joinColumns = @JoinColumn(name = "speciality_id"),
            inverseJoinColumns = @JoinColumn(name = "direction_id"))
    private List<Direction> directions;

    public Speciality() {
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

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getFreeEducation() {
        return freeEducation;
    }

    public void setFreeEducation(Boolean freeEducation) {
        this.freeEducation = freeEducation;
    }

    public List<FormOfEducation> getFormsOfEducation() {
        return formsOfEducation;
    }

    public void setFormsOfEducation(List<FormOfEducation> formsOfEducation) {
        this.formsOfEducation = formsOfEducation;
    }

    public List<LanguageLearning> getLanguagesLearning() {
        return languagesLearning;
    }

    public void setLanguagesLearning(List<LanguageLearning> languagesLearning) {
        this.languagesLearning = languagesLearning;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public List<LevelOfEducation> getLevelsOfEducation() {
        return levelsOfEducation;
    }

    public void setLevelsOfEducation(List<LevelOfEducation> levelsOfEducation) {
        this.levelsOfEducation = levelsOfEducation;
    }

    public List<Direction> getDirections() {
        return directions;
    }

    public void setDirections(List<Direction> directions) {
        this.directions = directions;
    }
}
