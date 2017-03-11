package com.grsu.controller;

import com.grsu.config.TokenProperties;
import com.grsu.dto.LoginDTO;
import com.grsu.entity.User;
import com.grsu.util.SecurityUtils;
import com.grsu.util.TokenUsernamePasswordAuthToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by dionp on 11.03.2017.
 */
@RestController
@RequestMapping("/api")
public class AuthenticateController {

    private final TokenProperties tokenProperties;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticateController(TokenProperties tokenProperties, AuthenticationManager authenticationManager) {
        this.tokenProperties = tokenProperties;
        this.authenticationManager = authenticationManager;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public DeferredResult login(@RequestBody LoginDTO loginDTO, HttpServletRequest request) {

        DeferredResult deferredResult = new DeferredResult();

        TokenUsernamePasswordAuthToken authenticationToken =
                new TokenUsernamePasswordAuthToken(loginDTO.getEmail(), loginDTO.getPassword(), request);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        request.getSession().setMaxInactiveInterval(tokenProperties.getRememberMeSessionTimeout()); //2592000 = 30 days;

        User user = SecurityUtils.getCurrentUser();
        if (user != null) {
            deferredResult.setResult(new ResponseEntity(user, HttpStatus.OK));
        }else{
            deferredResult.setResult(new ResponseEntity(HttpStatus.UNAUTHORIZED));
        }

        return deferredResult;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.GET)
    public ResponseEntity logout(HttpServletRequest request) {

        request.getSession().invalidate();

        return new ResponseEntity(HttpStatus.OK);
    }
}