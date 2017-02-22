package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "department")
public class Department implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String address;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "education_institution_id")
    private EducationInstitution educationInstitution;

    public Department() {
    }

    public Department(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public EducationInstitution getEducationInstitution() {
        return educationInstitution;
    }

    public void setEducationInstitution(EducationInstitution educationInstitution) {
        this.educationInstitution = educationInstitution;
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
