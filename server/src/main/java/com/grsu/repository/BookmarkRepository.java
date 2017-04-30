package com.grsu.repository;

import com.grsu.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Dima Prokopovich 30.04.2017.
 */
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
}
