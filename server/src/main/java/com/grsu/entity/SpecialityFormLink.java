package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by DENIS on 28.04.2017.
 */
@Entity
@Table(name = "speciality_form_of_education")
public class SpecialityFormLink  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "speciality_id")
    Speciality speciality;

    @ManyToOne
    @JoinColumn(name = "form_of_education_id")
    FormOfEducation formOfEducation;

    public SpecialityFormLink() {
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

    public FormOfEducation getFormOfEducation() {
        return formOfEducation;
    }

    public void setFormOfEducation(FormOfEducation formOfEducation) {
        this.formOfEducation = formOfEducation;
    }
}
