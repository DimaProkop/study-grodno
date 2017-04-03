package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.grsu.entity.Department;
import com.grsu.entity.FormOfEducation;
import com.grsu.entity.LanguageLearning;

import java.io.Serializable;
import java.util.List;

/**
 * Created by DENIS on 27.03.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SpecialityDTO implements Serializable {

    private Long id;

    private String name;

    private String code;

    private Double price;

    private Boolean freeEducation;

    private Department department;

    private List<LanguageLearning> languagesLearning;

    private List<FormOfEducation> formsOfEducation;

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

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public List<LanguageLearning> getLanguagesLearning() {
        return languagesLearning;
    }

    public void setLanguagesLearning(List<LanguageLearning> languagesLearning) {
        this.languagesLearning = languagesLearning;
    }

    public List<FormOfEducation> getFormsOfEducation() {
        return formsOfEducation;
    }

    public void setFormsOfEducation(List<FormOfEducation> formsOfEducation) {
        this.formsOfEducation = formsOfEducation;
    }
}
