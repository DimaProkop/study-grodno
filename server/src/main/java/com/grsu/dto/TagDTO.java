package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Created by dionp on 26.03.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TagDTO implements Serializable {

    private String name;

    public TagDTO() {
    }

    public TagDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
