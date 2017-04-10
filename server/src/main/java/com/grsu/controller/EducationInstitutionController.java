package com.grsu.controller;

import com.grsu.entity.EducationInstitution;
import com.grsu.repository.EducationInstitutionRepository;
import com.grsu.service.EducationInstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by dionp on 27.03.2017.
 */
@RestController
@RequestMapping("/education-institution")
public class EducationInstitutionController {

    @Autowired
    EducationInstitutionService educationInstitutionService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody EducationInstitution requestBody){

        EducationInstitution university = requestBody;

        educationInstitutionService.adjustSave(university);

        return ResponseEntity.ok(university);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<EducationInstitution> response = educationInstitutionService.getAll();

        return ResponseEntity.ok(response);
    }
}
