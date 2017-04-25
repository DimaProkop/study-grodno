package com.grsu.controller;

import com.grsu.entity.EducationInstitution;
import com.grsu.entity.PersonalInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by dionp on 25.03.2017.
 */
@RestController
@RequestMapping("/request")
public class RequestController {

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody PersonalInfo requestBody){

        PersonalInfo personalInfo = requestBody;

        return ResponseEntity.ok(personalInfo);
    }
}
