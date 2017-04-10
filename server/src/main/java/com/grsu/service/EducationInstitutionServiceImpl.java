package com.grsu.service;

import com.grsu.entity.EducationInstitution;
import com.grsu.repository.EducationInstitutionRepository;
import com.grsu.repository.FacultyRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by DENIS on 09.04.2017.
 */
@Service
public class EducationInstitutionServiceImpl implements EducationInstitutionService {

    @Autowired
    private EducationInstitutionRepository educationInstitutionRepository;
    @Autowired
    private FacultyRepository facultyRepository;
    @Autowired
    private SpecialityRepository specialityRepository;

    public void adjustSave(EducationInstitution entity) {
        educationInstitutionRepository.save(entity);

        entity.getFaculties().stream().forEach(faculty -> {

            faculty.setEducationInstitution(entity);

            facultyRepository.save(faculty);

            faculty.getSpecialities().stream().forEach(speciality -> {

                speciality.setFaculty(faculty);

                specialityRepository.save(speciality);
            });
        });

    }

    @Override
    public List<EducationInstitution> getAll() {
        return educationInstitutionRepository.findAll();
    }
}
