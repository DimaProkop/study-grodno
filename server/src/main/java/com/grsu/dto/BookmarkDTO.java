package com.grsu.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * Dima Prokopovich 01.05.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BookmarkDTO implements Serializable{
    private Integer contentId;
    private Integer choiceId;

    public BookmarkDTO() {
    }

    public BookmarkDTO(Integer contentId, Integer choiceId) {
        this.contentId = contentId;
        this.choiceId = choiceId;
    }

    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

    public Integer getChoiceId() {
        return choiceId;
    }

    public void setChoiceId(Integer choiceId) {
        this.choiceId = choiceId;
    }
}
