package com.grsu.controller;

import com.grsu.entity.Department;
import com.grsu.entity.Speciality;
import com.grsu.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("/faculty")
public class FacultyController {

    private final DepartmentRepository departmentRepository;
    private final SpecialityRepository specialityRepository;

    @Autowired
    public FacultyController(DepartmentRepository departmentRepository, SpecialityRepository specialityRepository) {
        this.departmentRepository = departmentRepository;
        this.specialityRepository = specialityRepository;
    }

    @RequestMapping
    public ResponseEntity findById(@RequestParam(name = "id") Long id) {
        Speciality speciality = specialityRepository.findOne(id);
        Department department = departmentRepository.findOne(speciality.getDepartment().getId());
        return new ResponseEntity(department, HttpStatus.OK);
    }

    @RequestMapping(name = "get")
    public ResponseEntity getById(@RequestParam(name = "id") Long id) {
        Department department = departmentRepository.findOne(id);
        return new ResponseEntity(department.getSpecialities(), HttpStatus.OK);
    }
}
