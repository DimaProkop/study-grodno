package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "skill")
public class Skill implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column
    private String nativeLanguage;

    @Column
    private String russianLanguage;

    @Column
    private String englishLanguage;

    public Skill(String nativeLanguage, String russianLanguage, String englishLanguage) {
        this.nativeLanguage = nativeLanguage;
        this.russianLanguage = russianLanguage;
        this.englishLanguage = englishLanguage;
    }

    public Skill() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNativeLanguage() {
        return nativeLanguage;
    }

    public void setNativeLanguage(String nativeLanguage) {
        this.nativeLanguage = nativeLanguage;
    }

    public String getRussianLanguage() {
        return russianLanguage;
    }

    public void setRussianLanguage(String russianLanguage) {
        this.russianLanguage = russianLanguage;
    }

    public String getEnglishLanguage() {
        return englishLanguage;
    }

    public void setEnglishLanguage(String englishLanguage) {
        this.englishLanguage = englishLanguage;
    }
}
