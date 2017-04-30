package com.grsu.controller;

import com.grsu.dto.SpecialityDTO;
import com.grsu.entity.Speciality;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by DENIS on 12.03.2017.
 */
@RestController
@RequestMapping("speciality")
public class SpecialityController {

    private SpecialityRepository specialityRepository;

    @Autowired
    public SpecialityController(SpecialityRepository specialityRepository) {
        this.specialityRepository = specialityRepository;
    }

    @RequestMapping(value = "/{id}")
    public ResponseEntity getById(@PathVariable Long id) {
        return ResponseEntity.ok(specialityRepository.findOne(id));
    }
}
