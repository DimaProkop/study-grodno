package com.grsu.repository;

import com.grsu.entity.Bookmark;
import com.grsu.entity.Choice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Dima Prokopovich 30.04.2017.
 */
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findAllByChoice(Choice choice);
}
