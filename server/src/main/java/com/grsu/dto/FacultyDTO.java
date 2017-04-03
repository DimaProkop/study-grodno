package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.grsu.entity.Speciality;
import com.grsu.entity.University;

import java.io.Serializable;
import java.util.List;

/**
 * Created by DENIS on 02.04.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FacultyDTO implements Serializable {

    private Long id;

    private String name;

    private String address;

    private University university;

    private List<Speciality> specialities;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public List<Speciality> getSpecialities() {
        return specialities;
    }

    public void setSpecialities(List<Speciality> specialities) {
        this.specialities = specialities;
    }
}
