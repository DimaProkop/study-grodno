package com.grsu.dto;

import com.grsu.entity.Department;

import java.io.Serializable;
import java.util.List;

/**
 * Created by DENIS on 02.04.2017.
 */
public class UniversityDTO implements Serializable {

    private Long id;

    private String name;

    private String email;

    private String site;

    private List<Department> departments;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

}
