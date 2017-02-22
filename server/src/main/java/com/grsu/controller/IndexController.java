package com.grsu.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by dionp on 22.02.2017.
 */
@RestController
@RequestMapping(path = "/msg")
public class IndexController {

    @RequestMapping(path = "/get", method = RequestMethod.GET)
    public ResponseEntity getMsg() {
        Message message = new Message("Good evening ;) ");
        return new ResponseEntity(message, HttpStatus.OK);
    }
}

class Message {
    private String message;

    public Message() {
    }

    public Message(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}