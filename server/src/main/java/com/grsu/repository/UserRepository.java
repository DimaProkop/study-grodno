package com.grsu.repository;

import com.grsu.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by DENIS on 22.02.2017.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findOneUserByLoginAndPassword(String login, String password);
    User findOneUserByLogin(String login);
}
