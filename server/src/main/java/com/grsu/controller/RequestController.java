package com.grsu.controller;

import com.grsu.entity.PersonalInfo;
import com.grsu.entity.User;
import com.grsu.repository.PersonalInfoRepository;
import com.grsu.repository.UserRepository;
import com.grsu.util.SecurityUtils;
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
    private UserRepository userRepository;

    @Autowired
    public RequestController(PersonalInfoRepository personalInfoRepository, UserRepository userRepository) {
        this.personalInfoRepository = personalInfoRepository;
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/send={flag}", method = RequestMethod.PUT)
    public ResponseEntity send(@PathVariable boolean flag, @RequestBody PersonalInfo requestBody) {
        PersonalInfo info = personalInfoRepository.save(requestBody);
        User user = SecurityUtils.getCurrentUser();
        user.setInfo(info);
        userRepository.save(user);

        if(flag) {
            //Делаем отправку
        }

        return ResponseEntity.ok(info);
    }
}
