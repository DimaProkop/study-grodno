package com.grsu.service;




import com.grsu.dto.UserDTO;
import com.grsu.entity.User;

import java.util.Optional;

public interface UserService extends org.springframework.security.core.userdetails.UserDetailsService {

    User update(User user, UserDTO params);
    Optional<User> findUser(Long id);
    User createUser(UserDTO userDTO);

}