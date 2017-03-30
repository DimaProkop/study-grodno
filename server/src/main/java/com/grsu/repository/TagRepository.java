package com.grsu.repository;

import com.grsu.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by dionp on 26.03.2017.
 */
public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findByName(String name);
}
