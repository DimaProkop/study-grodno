package com.grsu.service;

import com.grsu.entity.EducationInstitution;

import java.util.List;

/**
 * Created by DENIS on 09.04.2017.
 */
public interface EducationInstitutionService {

    void adjustSave(EducationInstitution educationInstitution);

    List<EducationInstitution> getInstitutionByDirectionId(Long id);

    List<EducationInstitution> getAll();
}
