package com.grsu.controller;

import com.grsu.entity.EducationInstitution;
import com.grsu.entity.Speciality;
import com.grsu.repository.EducationInstitutionRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("faculty")
public class FacultyController {

    private SpecialityRepository specialityRepository;
    private EducationInstitutionRepository educationInstitutionRepository;

    @Autowired
    public FacultyController(SpecialityRepository specialityRepository, EducationInstitutionRepository educationInstitutionRepository) {
        this.specialityRepository = specialityRepository;
        this.educationInstitutionRepository = educationInstitutionRepository;
    }

    @RequestMapping(value = "/faculty-by-speciality/{id}")
    public ResponseEntity findFacultyBySpeciality(@PathVariable Long id) {

        Speciality speciality = specialityRepository.findOne(id);
        return ResponseEntity.ok(speciality.getFaculty());
    }

    @RequestMapping(value = "/institution={id}")
    public ResponseEntity getFacultiesByInstitution(@PathVariable Long id) {

        EducationInstitution institution = educationInstitutionRepository.findOne(id);
        return ResponseEntity.ok(institution.getFaculties());
    }
}
