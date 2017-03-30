package com.grsu.repository;

import com.grsu.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by dionp on 27.03.2017.
 */
public interface UniversityRepository extends JpaRepository<University, Long> {
}
