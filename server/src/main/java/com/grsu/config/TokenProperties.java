package com.grsu.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Created by dionp on 11.03.2017.
 */
@Component
@ConfigurationProperties(prefix = "token")
public class TokenProperties {

    private Integer sessionTimeout = 1800;

    private Integer rememberMeSessionTimeout = 2592000;

    public TokenProperties(Integer sessionTimeout, Integer rememberMeSessionTimeout) {
        this.sessionTimeout = sessionTimeout;
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }

    public TokenProperties() {
    }

    public Integer getSessionTimeout() {
        return sessionTimeout;
    }

    public void setSessionTimeout(Integer sessionTimeout) {
        this.sessionTimeout = sessionTimeout;
    }

    public Integer getRememberMeSessionTimeout() {
        return rememberMeSessionTimeout;
    }

    public void setRememberMeSessionTimeout(Integer rememberMeSessionTimeout) {
        this.rememberMeSessionTimeout = rememberMeSessionTimeout;
    }
}