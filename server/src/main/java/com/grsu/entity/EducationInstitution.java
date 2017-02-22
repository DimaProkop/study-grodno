package com.grsu.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "education_institution")
public class EducationInstitution {

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

    @ManyToOne(fetch = FetchType.LAZY)
    private TypeEducationInstitution typeEducationInstitution;

    public EducationInstitution() {
    }

    public EducationInstitution(String name, String email, String site) {
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

    public List<Department> getDepartmens() {
        return departments;
    }

    public void setDepartmens(List<Department> departments) {
        this.departments = departments;
    }
}
