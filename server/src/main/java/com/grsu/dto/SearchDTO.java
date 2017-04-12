package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.grsu.entity.Direction;
import com.grsu.entity.FormOfEducation;
import com.grsu.entity.LevelOfEducation;

import java.io.Serializable;

/**
 * Dima Prokopovich 11.04.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SearchDTO implements Serializable {

    private LevelOfEducation level;
    private Direction direction;
    private FormOfEducation form;
    private Integer duration;

    public SearchDTO() {
    }

    public SearchDTO(LevelOfEducation level, Direction direction, FormOfEducation form, Integer duration) {
        this.level = level;
        this.direction = direction;
        this.form = form;
        this.duration = duration;
    }

    public LevelOfEducation getLevel() {
        return level;
    }

    public void setLevel(LevelOfEducation level) {
        this.level = level;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public FormOfEducation getForm() {
        return form;
    }

    public void setForm(FormOfEducation form) {
        this.form = form;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}
