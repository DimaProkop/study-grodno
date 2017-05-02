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
@RequestMapping("/education")
public class EducationInstitutionController {

    @Autowired
    EducationInstitutionService educationInstitutionService;

    private EducationInstitutionRepository educationInstitutionRepository;

    @Autowired
    public EducationInstitutionController(EducationInstitutionRepository educationInstitutionRepository) {
        this.educationInstitutionRepository = educationInstitutionRepository;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity getById(@PathVariable Long id) {
        return ResponseEntity.ok(educationInstitutionRepository.findOne(id));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody EducationInstitution requestBody){

        EducationInstitution educationInstitution = requestBody;

        educationInstitutionService.adjustSave(educationInstitution);

        return ResponseEntity.ok(educationInstitution);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity update(@RequestBody EducationInstitution requestBody){

        EducationInstitution educationInstitution = requestBody;

        educationInstitutionService.adjustSave(educationInstitution);

        return ResponseEntity.ok(educationInstitution);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<EducationInstitution> response = educationInstitutionService.getAll();

        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/direction={id}", method = RequestMethod.GET)
    public ResponseEntity getInstitutionByDirectionId(@PathVariable Long id) {
        return ResponseEntity.ok(educationInstitutionService.getInstitutionByDirectionId(id));
    }
}
