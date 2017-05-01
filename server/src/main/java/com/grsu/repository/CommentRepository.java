package com.grsu.repository;

import com.grsu.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Dima Prokopovich 01.05.2017.
 */
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
