package com.grsu.controller;

import com.grsu.dto.SearchDTO;
import com.grsu.entity.Speciality;
import com.grsu.repository.DirectionRepository;
import com.grsu.repository.FormOfEducationRepository;
import com.grsu.repository.LevelOfEducationRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Dima Prokopovich 11.04.2017.
 */
@RestController
@RequestMapping("/search")
public class SearchController {

    private DirectionRepository directionRepository;
    private LevelOfEducationRepository levelOfEducationRepository;
    private SpecialityRepository specialityRepository;
    private FormOfEducationRepository formOfEducationRepository;


    @Autowired
    public SearchController(DirectionRepository directionRepository, LevelOfEducationRepository levelOfEducationRepository, SpecialityRepository specialityRepository, FormOfEducationRepository formOfEducationRepository) {
        this.directionRepository = directionRepository;
        this.levelOfEducationRepository = levelOfEducationRepository;
        this.specialityRepository = specialityRepository;
        this.formOfEducationRepository = formOfEducationRepository;
    }

    @RequestMapping(value = "getDirections", method = RequestMethod.GET)
    public ResponseEntity getDirections(){
        return ResponseEntity.ok(directionRepository.findAll());
    }

    @RequestMapping(value = "getLevels", method = RequestMethod.GET)
    public ResponseEntity getLevels(){
        return ResponseEntity.ok(levelOfEducationRepository.findAll());
    }

    @RequestMapping(value = "getForms", method = RequestMethod.GET)
    public ResponseEntity getForms(){
        return ResponseEntity.ok(formOfEducationRepository.findAll());
    }

    @RequestMapping(value = "/findByParams", method = RequestMethod.POST)
    public ResponseEntity findByParams(@RequestBody SearchDTO searchDTO) {
        List<Speciality> specialities = specialityRepository.findAll();
        return new ResponseEntity(specialities, HttpStatus.OK);
    }

}
