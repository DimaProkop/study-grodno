package com.grsu.controller;

import com.grsu.dto.FacultyDTO;
import com.grsu.entity.Department;
import com.grsu.entity.Speciality;
import com.grsu.repository.DepartmentRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("api/faculty")
public class FacultyController {

    private DepartmentRepository departmentRepository;
    private SpecialityRepository specialityRepository;

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

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody FacultyDTO facultyDTO){

        Department department = new Department();
        department.setName(facultyDTO.getName());
        department.setAddress(facultyDTO.getAddress());
        department.setSpecialities(facultyDTO.getSpecialities());

        departmentRepository.save(department);
        return ResponseEntity.ok(department);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll() {

        List<Department> departments = this.departmentRepository.findAll();
        return ResponseEntity.ok(departments);
    }
}
