package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
/**
 * Created by dionp on 11.03.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SignUpDTO implements Serializable {

    private String login;

    private String password;

    private String repeatedPassword;

    public SignUpDTO() {
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

    public String getRepeatedPassword() {
        return repeatedPassword;
    }

    public void setRepeatedPassword(String repeatedPassword) {
        this.repeatedPassword = repeatedPassword;
    }
}
