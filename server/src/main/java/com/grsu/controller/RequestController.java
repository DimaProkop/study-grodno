package com.grsu.controller;

import com.grsu.entity.EducationInstitution;
import com.grsu.entity.PersonalInfo;
import com.grsu.repository.PersonalInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by dionp on 25.03.2017.
 */
@RestController
@RequestMapping("/request")
public class RequestController {

    private PersonalInfoRepository personalInfoRepository;

    @Autowired
    public RequestController(PersonalInfoRepository personalInfoRepository) {
        this.personalInfoRepository = personalInfoRepository;
    }

    @RequestMapping(value = "/send={flag}", method = RequestMethod.PUT)
    public ResponseEntity send(@PathVariable boolean flag, @RequestBody PersonalInfo requestBody) {

        PersonalInfo answer = personalInfoRepository.save(requestBody);

        if(flag) {
            //Делаем отправку
        }

        return ResponseEntity.ok(answer);
    }
}
