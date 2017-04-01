package com.grsu.controller;

import com.grsu.entity.Department;
import com.grsu.entity.University;
import com.grsu.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("/univ")
public class UniversityController {

    private UniversityRepository universityRepository;
    private DepartmentRepository departmentRepository;

    @Autowired
    public UniversityController(UniversityRepository universityRepository, DepartmentRepository departmentRepository) {
        this.universityRepository = universityRepository;
        this.departmentRepository = departmentRepository;
    }

    @RequestMapping
    public ResponseEntity findById(@RequestParam(name = "id") Long id) {
        Department department = departmentRepository.findOne(id);
        University university = universityRepository.findOne(department.getUniversity().getId());
        return new ResponseEntity(university, HttpStatus.OK);
    }
}
