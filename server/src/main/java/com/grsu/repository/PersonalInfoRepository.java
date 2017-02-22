package com.grsu.repository;

import com.grsu.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by DENIS on 22.02.2017.
 */
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
}
