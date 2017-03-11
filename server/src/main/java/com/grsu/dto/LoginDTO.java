package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Created by dionp on 11.03.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginDTO implements Serializable {

    private String login;

    private String password;

    public LoginDTO(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
