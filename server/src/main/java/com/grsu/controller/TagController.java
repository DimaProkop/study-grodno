package com.grsu.controller;

import com.grsu.dto.TagDTO;
import com.grsu.entity.Speciality;
import com.grsu.entity.Tag;
import com.grsu.repository.SpecialityRepository;
import com.grsu.repository.TagRepository;
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
 * Created by dionp on 26.03.2017.
 */
@RestController
@RequestMapping("/search/")
public class TagController {

    private TagRepository tagRepository;
    private SpecialityRepository specialityRepository;

    @Autowired
    public TagController(TagRepository tagRepository, SpecialityRepository specialityRepository) {
        this.tagRepository = tagRepository;
        this.specialityRepository = specialityRepository;
    }


    @RequestMapping(path = "/find", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody List<TagDTO> tags) {
        List<Speciality> specialities = new ArrayList<>();
        tags.forEach(x -> {
            Tag tag = tagRepository.findByName(x.getName());
            specialities.addAll(tag.getSpecialities());
        });
        return new ResponseEntity(specialities, HttpStatus.OK);
    }
    @RequestMapping(path = "/get", method = RequestMethod.GET)
    public ResponseEntity getTags() {
        return new ResponseEntity(tagRepository.findAll(), HttpStatus.OK);
    }
}
