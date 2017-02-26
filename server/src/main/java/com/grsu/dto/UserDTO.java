package com.grsu.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.grsu.entity.Role;
import com.grsu.entity.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Collections;
import java.util.Optional;


public final class UserDTO {

    private static final String ROLE_USER = "ROLE_USER";

    private final String email;
    @Size(min = 8, max = 100)
    private final String password;

    public UserDTO(@JsonProperty("email") String email,
                   @JsonProperty("password") String password) {
        this.email = email;
        this.password = password;
    }

    public Optional<String> getEmail() {
        return Optional.ofNullable(email);
    }

    public Optional<String> getEncodedPassword() {
        return Optional.ofNullable(password).map(p -> new BCryptPasswordEncoder().encode(p));
    }

    public User toUser() {
        User user = new User();
        user.setUsername(email);
        user.setRole(new Role());
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        return user;
    }

    public UsernamePasswordAuthenticationToken toAuthenticationToken() {
        return new UsernamePasswordAuthenticationToken(email, password, getAuthorities());
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(() -> ROLE_USER);
    }

}