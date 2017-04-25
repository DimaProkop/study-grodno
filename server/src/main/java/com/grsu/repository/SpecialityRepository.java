package com.grsu.repository;

import com.grsu.entity.Direction;
import com.grsu.entity.FormOfEducation;
import com.grsu.entity.LevelOfEducation;
import com.grsu.entity.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by DENIS on 22.02.2017.
 */
public interface SpecialityRepository extends JpaRepository<Speciality, Long> {



    @Query("select s from Speciality s where" +
            " s.levelsOfEducation = :level and s.directions = :direction" +
            " and s.formsOfEducation = :form and s.duration = :duration")
    List<Speciality> findByParams(@Param("level") LevelOfEducation level,
                                  @Param("direction") Direction direction,
                                  @Param("form") FormOfEducation form,
                                  @Param("duration") Integer duration);
}
