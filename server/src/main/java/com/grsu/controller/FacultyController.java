package com.grsu.controller;

import com.grsu.entity.Speciality;
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

    @Autowired
    public FacultyController(SpecialityRepository specialityRepository) {
        this.specialityRepository = specialityRepository;
    }

    @RequestMapping(value = "/faculty-by-speciality/{id}")
    public ResponseEntity findEducationBySpeciality(@PathVariable Long id) {

        Speciality speciality = specialityRepository.findOne(id);
        return ResponseEntity.ok(speciality.getFaculty());
    }
}
