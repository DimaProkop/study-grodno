package com.grsu.controller;

import com.grsu.repository.DirectionRepository;
import com.grsu.repository.LevelOfEducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Dima Prokopovich 11.04.2017.
 */
@RestController
@RequestMapping("/search")
public class SearchController {

    private DirectionRepository directionRepository;
    private LevelOfEducationRepository levelOfEducationRepository;


    @Autowired
    public SearchController(DirectionRepository directionRepository, LevelOfEducationRepository levelOfEducationRepository) {
        this.directionRepository = directionRepository;
        this.levelOfEducationRepository = levelOfEducationRepository;
    }

    @RequestMapping(value = "getDirections", method = RequestMethod.GET)
    public ResponseEntity getDirections(){
        return ResponseEntity.ok(directionRepository.findAll());
    }

    @RequestMapping(value = "getLevels", method = RequestMethod.GET)
    public ResponseEntity getLevels(){
        return ResponseEntity.ok(levelOfEducationRepository.findAll());
    }


}
