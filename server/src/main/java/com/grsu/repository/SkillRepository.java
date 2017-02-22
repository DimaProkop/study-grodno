package com.grsu.repository;

import com.grsu.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by DENIS on 22.02.2017.
 */
public interface SkillRepository extends JpaRepository<Skill, Long> {
}
