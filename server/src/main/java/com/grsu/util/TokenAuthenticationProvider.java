package com.grsu.util;

import com.grsu.entity.User;
import com.grsu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
/**
 * Created by dionp on 11.03.2017.
 */
@Component
public class TokenAuthenticationProvider implements AuthenticationProvider {

    private final UserRepository userRepository;

    @Autowired
    public TokenAuthenticationProvider(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        try {
            User user = userRepository.findOneUserByEmailAndPassword(username, password);

            if (authentication.getCredentials() == null || user == null) {
                throw new BadCredentialsException("No pre-authenticated credentials found in request.");
            }

            ((TokenUsernamePasswordAuthToken) authentication).setDetails(user);

            List<GrantedAuthority> grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));

            return new UsernamePasswordAuthenticationToken(username, password, grantedAuthorities);
        } catch (Exception e) {
            throw new BadCredentialsException("Login is incorrect", e);
        }
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return TokenUsernamePasswordAuthToken.class.isAssignableFrom(aClass);
    }
}