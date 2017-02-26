package com.grsu.controller;

import com.grsu.config.security.JwtTokenHandler;
import com.grsu.dto.UserDTO;
import com.grsu.repository.UserRepository;
import com.grsu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by dionp on 26.02.2017.
 */
@RestController
@RequestMapping(path = "/api")
public class LoginController {

    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtTokenHandler jwtTokenHandler;

    @Autowired
    public LoginController(UserRepository userRepository, UserService userService, JwtTokenHandler jwtTokenHandler) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.jwtTokenHandler = jwtTokenHandler;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity create(@Valid @RequestBody UserDTO params) {
        userService.createUser(params);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity(headers, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.GET, path = "/login")
    public ResponseEntity get() {
        return new ResponseEntity("hey", HttpStatus.OK);
    }

}
