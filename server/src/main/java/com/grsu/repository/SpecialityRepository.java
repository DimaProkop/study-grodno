package com.grsu.repository;

import com.grsu.entity.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by DENIS on 22.02.2017.
 */
public interface SpecialityRepository extends JpaRepository<Speciality, Long> {
}
