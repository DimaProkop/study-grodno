package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by dionp on 22.02.2017.
 */
@Entity
@Table(name = "personal_info")
public class PersonalInfo implements Serializable {


    /**
     * ИД
     */
    @Id
    @GeneratedValue
    @Column
    private Long id;

    /**
     *  Имя
     */
    @Column
    private String firstName;

    /**
     *  Фамилия
     */
    @Column
    private String lastName;

    /**
     *  Отчество
     */
    @Column
    private String middleName;

    /**
     *  Дата рождения
     */
    @Column
    private LocalDate dateOfBirth;

    /**
     *  Мотавационное письмо
     */
    @Column
    private String motivationLetter;

    /**
     *  Гражданство
     */
    @Column
    private String citizenship;

    /**
     *  Текущий уровень образования
     */
    @Column(name = "current_level_of_education")
    private String currentLevelOfEducation;

    /**
     * Родной язык
     */
    @Column(name = "native_language")
    private String nativeLanguage;

    /**
     * Уровень русского языка
     */
    @Column(name = "russian_language_level")
    private String russianLanguageLevel;

    /**
     * Сертификат по русскому языку
     */
    @Column(name = "certificate_in_russian")
    private String certificateInRussian;

    /**
     * Уровень английского языка
     */
    @Column(name = "english_language_level")
    private String englishLanguageLevel;

    /**
     * Сертификат по английскому языку
     */
    @Column(name = "certificate_in_english")
    private String certificateInEnglish;

    /**
     * Владение другими языками
     */
    @Column(name = "other_languages")
    private String otherLanguages;

    /**
     * Год окончания
     */
    @Column(name = "year_of_ending")
    private Integer yearOfEnding;

    /**
     * Название закончего учебного заведения
     */
    @Column(name = "name_completed_institution")
    private String nameCompletedInstitution;

    /**
     * Уровень образования, которое хочу получить
     */
    @ManyToOne
    @JoinColumn(name = "level_education_desired_id")
    private LevelOfEducation levelOfEducationDesired;

    /**
     * Планируемый год поступления
     */
    @Column(name = "year_of_receipt")
    private Integer yearOfReceipt;

    /**
     * Выбранное направление
     */
    @ManyToOne
    @JoinColumn(name = "selected_direction_id")
    private Direction selectedDirection;

    /**
     * Выбранные университеты
     */
    @ManyToMany
    @JoinTable(name = "personal_info_education_institution",
            joinColumns = @JoinColumn(name = "personal_info_id"),
            inverseJoinColumns = @JoinColumn(name = "education_institution_id"))
    private List<EducationInstitution> selectedEducationInstitution;

    public PersonalInfo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getMotivationLetter() {
        return motivationLetter;
    }

    public void setMotivationLetter(String motivationLetter) {
        this.motivationLetter = motivationLetter;
    }

    public String getLevelOfEducation() {
        return currentLevelOfEducation;
    }

    public void setLevelOfEducation(String currentLevelOfEducation) {
        this.currentLevelOfEducation = currentLevelOfEducation;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    public String getNativeLanguage() {
        return nativeLanguage;
    }

    public void setNativeLanguage(String nativeLanguage) {
        this.nativeLanguage = nativeLanguage;
    }

    public String getRussianLanguageLevel() {
        return russianLanguageLevel;
    }

    public void setRussianLanguageLevel(String russianLanguageLevel) {
        this.russianLanguageLevel = russianLanguageLevel;
    }

    public String getCertificateInRussian() {
        return certificateInRussian;
    }

    public void setCertificateInRussian(String certificateInRussian) {
        this.certificateInRussian = certificateInRussian;
    }

    public String getEnglishLanguageLevel() {
        return englishLanguageLevel;
    }

    public void setEnglishLanguageLevel(String englishLanguageLevel) {
        this.englishLanguageLevel = englishLanguageLevel;
    }

    public String getCertificateInEnglish() {
        return certificateInEnglish;
    }

    public void setCertificateInEnglish(String certificateInEnglish) {
        this.certificateInEnglish = certificateInEnglish;
    }

    public String getOtherLanguages() {
        return otherLanguages;
    }

    public void setOtherLanguages(String otherLanguages) {
        this.otherLanguages = otherLanguages;
    }

    public Integer getYearOfEnding() {
        return yearOfEnding;
    }

    public void setYearOfEnding(Integer yearOfEnding) {
        this.yearOfEnding = yearOfEnding;
    }

    public String getNameCompletedInstitution() {
        return nameCompletedInstitution;
    }

    public void setNameCompletedInstitution(String nameCompletedInstitution) {
        this.nameCompletedInstitution = nameCompletedInstitution;
    }

    public LevelOfEducation getLevelOfEducationDesired() {
        return levelOfEducationDesired;
    }

    public void setLevelOfEducationDesired(LevelOfEducation levelOfEducationDesired) {
        this.levelOfEducationDesired = levelOfEducationDesired;
    }

    public Integer getYearOfReceipt() {
        return yearOfReceipt;
    }

    public void setYearOfReceipt(Integer yearOfReceipt) {
        this.yearOfReceipt = yearOfReceipt;
    }

    public Direction getSelectedDirection() {
        return selectedDirection;
    }

    public void setSelectedDirection(Direction selectedDirection) {
        this.selectedDirection = selectedDirection;
    }

    public List<EducationInstitution> getSelectedEducationInstitution() {
        return selectedEducationInstitution;
    }

    public void setSelectedEducationInstitution(List<EducationInstitution> selectedEducationInstitution) {
        this.selectedEducationInstitution = selectedEducationInstitution;
    }
}
