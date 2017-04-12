package com.grsu.controller;

import com.grsu.entity.LanguageLearning;
import com.grsu.repository.LanguageLearningRepository;
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
@RequestMapping("/language")
public class LanguageLearningController {

    private LanguageLearningRepository languageLearningRepository;

    @Autowired
    public LanguageLearningController(LanguageLearningRepository languageLearningRepository) {
        this.languageLearningRepository = languageLearningRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll(){

        List<LanguageLearning> response = languageLearningRepository.findAll();

        return ResponseEntity.ok(response);
    }
}
