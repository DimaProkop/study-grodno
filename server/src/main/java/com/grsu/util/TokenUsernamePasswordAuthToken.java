package com.grsu.util;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import javax.servlet.http.HttpServletRequest;
/**
 * Created by dionp on 11.03.2017.
 */
public class TokenUsernamePasswordAuthToken extends UsernamePasswordAuthenticationToken {

    private HttpServletRequest httpServletRequest;

    public TokenUsernamePasswordAuthToken(Object principal, Object credentials, HttpServletRequest httpServletRequest) {
        super(principal, credentials);
        this.httpServletRequest = httpServletRequest;
    }

    public TokenUsernamePasswordAuthToken(Object principal, Object credentials) {
        super(principal, credentials);
    }

    public HttpServletRequest getHttpServletRequest() {
        return httpServletRequest;
    }
}