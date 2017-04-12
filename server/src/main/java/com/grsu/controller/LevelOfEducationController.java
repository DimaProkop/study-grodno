package com.grsu.controller;

import com.grsu.entity.LevelOfEducation;
import com.grsu.repository.LevelOfEducationRepository;
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
@RequestMapping("/level")
public class LevelOfEducationController {

    private LevelOfEducationRepository levelOfEducationRepository;

    @Autowired
    public LevelOfEducationController(LevelOfEducationRepository levelOfEducationRepository) {
        this.levelOfEducationRepository = levelOfEducationRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<LevelOfEducation> response = levelOfEducationRepository.findAll();

        return ResponseEntity.ok(response);
    }
}
