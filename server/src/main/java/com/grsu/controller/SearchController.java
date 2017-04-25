package com.grsu.controller;

import com.grsu.dto.SearchDTO;
import com.grsu.entity.Direction;
import com.grsu.entity.FormOfEducation;
import com.grsu.entity.LevelOfEducation;
import com.grsu.entity.Speciality;
import com.grsu.repository.DirectionRepository;
import com.grsu.repository.FormOfEducationRepository;
import com.grsu.repository.LevelOfEducationRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
        for (int i = 0; i < specialities.size(); i++) {
            if(specialities.get(i).getDuration().equals(searchDTO.getDuration())) {
                specialities.get(i).setLevelsOfEducation(specialities.get(i).getLevelsOfEducation().stream()
                        .filter(l -> l.equals(searchDTO.getLevel())).collect(Collectors.toList()));
                specialities.get(i).setDirections(specialities.get(i).getDirections().stream()
                        .filter(d -> d.equals(searchDTO.getDirection())).collect(Collectors.toList()));
                specialities.get(i).setFormsOfEducation(specialities.get(i).getFormsOfEducation().stream()
                        .filter(f -> f.equals(searchDTO.getForm())).collect(Collectors.toList()));
            }else {
                specialities.remove(i);
            }
        }
        return ResponseEntity.ok(specialities);
    }

    @RequestMapping(value = "/getEducationBySpeciality")
    public ResponseEntity findEducationBySpeciality(final @RequestParam(name = "id") Long id) {
        Speciality speciality = specialityRepository.findOne(id);
        return ResponseEntity.ok(speciality.getFaculty().getEducationInstitution());
    }

}
