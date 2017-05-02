package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Университет
 */
@Entity
@Table(name = "education_institution")
public class EducationInstitution implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    /**
     * Название
     */
    @Column
    private String name;

    /**
     * Основная почта
     */
    @Column(name = "email")
    private String primaryMail;

    @Column(name = "type_education_institution")
    @Enumerated(EnumType.STRING)
    private TypeEducationInstitution typeEducationInstitution;

    /**
     * Почта для обратной связи
     */
    @Column(name = "feedback")
    private String mailFeedback;

    /**
     * Сайт университета
     */
    @Column
    private String site;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "logo_url")
    private String logoUrl;

    /**
     * Адрес
     */
    @Column
    private String address;

    /**
     * Город
     */
    @Column
    private String city;

    /**
     * Рейтинг в РБ
     */
    @Column(name = "local_rating")
    private Integer localRating;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * Факультеты
     */
    @OneToMany(mappedBy = "educationInstitution")
    private List<Faculty> faculties = new ArrayList<>();

    public EducationInstitution() {
    }

    public TypeEducationInstitution getTypeEducationInstitution() {
        return typeEducationInstitution;
    }

    public void setTypeEducationInstitution(TypeEducationInstitution typeEducationInstitution) {
        this.typeEducationInstitution = typeEducationInstitution;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrimaryMail() {
        return primaryMail;
    }

    public void setPrimaryMail(String primaryMail) {
        this.primaryMail = primaryMail;
    }

    public String getMailFeedback() {
        return mailFeedback;
    }

    public void setMailFeedback(String mailFeedback) {
        this.mailFeedback = mailFeedback;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getLocalRating() {
        return localRating;
    }

    public void setLocalRating(Integer localRating) {
        this.localRating = localRating;
    }

    public List<Faculty> getFaculties() {
        return faculties;
    }

    public void setFaculties(List<Faculty> faculties) {
        this.faculties = faculties;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
