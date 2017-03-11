package com.grsu.controller;

import com.grsu.dto.SignUpDTO;
import com.grsu.entity.User;
import com.grsu.repository.UserRepository;
import com.grsu.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;
/**
 * Created by dionp on 11.03.2017.
 */
@RestController
@RequestMapping("api/signUp")
public class SignUpController {

    private final UserRepository userRepository;

    @Autowired
    public SignUpController(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public DeferredResult signUp(@RequestBody SignUpDTO signUpDTO) {

        DeferredResult deferredResult = new DeferredResult();
        User user = new User();
        user.setEmail(signUpDTO.getEmail());
        user.setPassword(signUpDTO.getPassword());
        userRepository.save(user);

        deferredResult.setResult(new ResponseEntity(user, HttpStatus.OK));

        return deferredResult;
    }
}