package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Факультет
 */
@Entity
@Table(name = "faculty")
public class Faculty implements Serializable {

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
     * Адрес
     */
    @Column
    private String address;

    /**
     * Университет
     */
    @ManyToOne
    @JoinColumn(name = "education_institution_id")
    private EducationInstitution educationInstitution;

    /**
     * Специальности
     */
    @OneToMany(mappedBy = "faculty")
    private List<Speciality> specialities;

    public Faculty() {
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public List<Speciality> getSpecialities() {
        return specialities;
    }

    public void setSpecialities(List<Speciality> specialities) {
        this.specialities = specialities;
    }

    public EducationInstitution getEducationInstitution() {
        return educationInstitution;
    }

    public void setEducationInstitution(EducationInstitution educationInstitution) {
        this.educationInstitution = educationInstitution;
    }
}
