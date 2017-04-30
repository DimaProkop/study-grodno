package com.grsu.service;

import com.grsu.entity.Speciality;

import java.util.List;

/**
 * Created by DENIS on 28.04.2017.
 */
public interface SearchService {

    List<Speciality> findSpecialityByParams(String direction, String level, String form, Integer duration);
}
