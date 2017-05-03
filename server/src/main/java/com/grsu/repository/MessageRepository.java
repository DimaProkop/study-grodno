package com.grsu.repository;

import com.grsu.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Dima Prokopovich 02.05.2017.
 */
public interface MessageRepository extends JpaRepository<Message, Long> {
}
