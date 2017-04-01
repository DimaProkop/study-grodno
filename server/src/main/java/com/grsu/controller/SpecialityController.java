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
@RequestMapping("api/speciality")
public class SpecialityController {

    private final SpecialityRepository speciallyRepository;

    @Autowired
    public SpecialityController(SpecialityRepository speciallyRepository) {

        this.speciallyRepository = speciallyRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody SpecialityDTO specialityDTO){

        Speciality speciality = new Speciality();
        speciality.setName(specialityDTO.getName());
        speciality.setCode(specialityDTO.getCode());
        speciality.setPrice(specialityDTO.getPrice());
        speciality.setFree(true);

        speciallyRepository.save(speciality);

        return ResponseEntity.ok(speciality);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Speciality>> getAll() {

        List<Speciality> specialities = this.speciallyRepository.findAll();

        return ResponseEntity.ok(specialities);
    }
}
