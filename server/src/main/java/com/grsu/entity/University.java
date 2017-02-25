package com.grsu.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "university")
public class University {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String site;

    @OneToMany
    private List<Department> departments;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "university_learning_option",
            joinColumns = {@JoinColumn(name = "learning_option_id")},
            inverseJoinColumns = {@JoinColumn(name = "university_id")})
    private List<LearningOption> learningOptions;

    public University() {
    }

    public University(String name, String email, String site) {
        this.name = name;
        this.email = email;
        this.site = site;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }

    public List<LearningOption> getLearningOptions() {
        return learningOptions;
    }

    public void setLearningOptions(List<LearningOption> learningOptions) {
        this.learningOptions = learningOptions;
    }
}
