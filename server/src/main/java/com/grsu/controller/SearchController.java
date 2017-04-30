package com.grsu.controller;

import com.grsu.entity.Speciality;
import com.grsu.repository.DirectionRepository;
import com.grsu.repository.FormOfEducationRepository;
import com.grsu.repository.LevelOfEducationRepository;
import com.grsu.repository.SpecialityRepository;
import com.grsu.service.EducationInstitutionService;
import com.grsu.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private SearchService searchService;


    @Autowired
    public SearchController(DirectionRepository directionRepository, LevelOfEducationRepository levelOfEducationRepository,
                            SpecialityRepository specialityRepository, FormOfEducationRepository formOfEducationRepository,
                            SearchService searchService, EducationInstitutionService institutionService) {
        this.directionRepository = directionRepository;
        this.levelOfEducationRepository = levelOfEducationRepository;
        this.specialityRepository = specialityRepository;
        this.formOfEducationRepository = formOfEducationRepository;
        this.searchService = searchService;
    }

    @RequestMapping(value = "directions", method = RequestMethod.GET)
    public ResponseEntity getDirections() {
        return ResponseEntity.ok(directionRepository.findAll());
    }

    @RequestMapping(value = "levels", method = RequestMethod.GET)
    public ResponseEntity getLevels() {
        return ResponseEntity.ok(levelOfEducationRepository.findAll());
    }

    @RequestMapping(value = "forms", method = RequestMethod.GET)
    public ResponseEntity getForms() {
        return ResponseEntity.ok(formOfEducationRepository.findAll());
    }

    @RequestMapping(value = "/params={direction}&{level}&{form}&{duration}", method = RequestMethod.GET)
    public ResponseEntity findSpecialityByParams(@PathVariable String direction, @PathVariable String level,
                                       @PathVariable String form, @PathVariable Integer duration) {

        return ResponseEntity.ok(searchService.findSpecialityByParams(direction, level,form, duration == -1 ? null : duration));
    }

    @RequestMapping(value = "/institution-by-speciality/{id}")
    public ResponseEntity findEducationBySpeciality(@PathVariable Long id) {

        Speciality speciality = specialityRepository.findOne(id);
        return ResponseEntity.ok(speciality.getFaculty().getEducationInstitution());
    }

}
