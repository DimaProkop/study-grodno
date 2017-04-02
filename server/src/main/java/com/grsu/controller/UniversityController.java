package com.grsu.controller;

import com.grsu.dto.FacultyDTO;
import com.grsu.dto.UniversityDTO;
import com.grsu.entity.Department;
import com.grsu.entity.University;
import com.grsu.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("api/university")
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

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody UniversityDTO universityDTO){

        University university = new University();
        university.setName(universityDTO.getName());
        university.setEmail(universityDTO.getEmail());
        university.setSite(universityDTO.getSite());

        universityRepository.save(university);
        return ResponseEntity.ok(university);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll() {

        List<University> universities = this.universityRepository.findAll();
        return ResponseEntity.ok(universities);
    }
}
