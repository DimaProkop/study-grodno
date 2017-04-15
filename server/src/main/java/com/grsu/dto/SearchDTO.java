package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Dima Prokopovich 11.04.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SearchDTO implements Serializable {

    private Integer level;
    private Integer direction;
    private Integer form;
    private Integer duration;

    public SearchDTO() {
    }

    public SearchDTO(Integer level, Integer direction, Integer form, Integer duration) {
        this.level = level;
        this.direction = direction;
        this.form = form;
        this.duration = duration;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getDirection() {
        return direction;
    }

    public void setDirection(Integer direction) {
        this.direction = direction;
    }

    public Integer getForm() {
        return form;
    }

    public void setForm(Integer form) {
        this.form = form;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}
