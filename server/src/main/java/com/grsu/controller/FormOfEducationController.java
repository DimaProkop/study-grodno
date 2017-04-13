package com.grsu.controller;

import com.grsu.entity.FormOfEducation;
import com.grsu.repository.FormOfEducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by DENIS on 12.04.2017.
 */
@RestController
@RequestMapping("/form")
public class FormOfEducationController {

    private FormOfEducationRepository formOfEducationRepository;

    @Autowired
    public FormOfEducationController(FormOfEducationRepository formOfEducationRepository) {
        this.formOfEducationRepository = formOfEducationRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<FormOfEducation> response = formOfEducationRepository.findAll();

        return ResponseEntity.ok(response);
    }
}
