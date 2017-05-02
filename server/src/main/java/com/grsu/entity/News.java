package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by DENIS on 01.05.2017.
 */
@Entity
@Table(name = "news")
public class News implements Serializable {

    /**
     * ИД
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    /**
     *  Заголовок
     */
    @Column
    private String title;

    /**
     *  Описание
     */
    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "education_institution_id")
    private EducationInstitution educationInstitution;

    /**
     * Дата добавления
     */
    @Column(name = "create_date")
    private Date createDate;

    public News() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public EducationInstitution getEducationInstitution() {
        return educationInstitution;
    }

    public void setEducationInstitution(EducationInstitution educationInstitution) {
        this.educationInstitution = educationInstitution;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
