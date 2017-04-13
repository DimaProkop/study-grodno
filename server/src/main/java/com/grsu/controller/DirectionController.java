package com.grsu.controller;

import com.grsu.entity.Direction;
import com.grsu.repository.DirectionRepository;
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
@RequestMapping("/direction")
public class DirectionController {

    private DirectionRepository directionRepository;

    @Autowired
    public DirectionController(DirectionRepository directionRepository) {
        this.directionRepository = directionRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<Direction> response = directionRepository.findAll();

        return ResponseEntity.ok(response);
    }
}
