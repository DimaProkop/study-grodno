import {EducationInstitutionModel} from "./education-institution.model";
import {Direction} from "./direction.model";
import {LevelOfEducation} from "./level-of-education.model";
import {LocalDate} from "localdate";
/**
 * Created by DENIS on 17.04.2017.
 */

export class PersonInfoModel {

  /**
   * ИД
   */
  public id: number;

  /**
   * Имя
   */
  public firstName: string;

  /**
   * Фамилия
   */
  public lastName: string;

  /**
   * Отчество
   */
  public middleName: string;

  /**
   * Пол
   */
  public gender: string;

  /**
   * Дата рождения
   */
  public dateOfBirth: LocalDate;

  /**
   * Мотивационное письмо
   */
  public motivationLetter: string;

  /**
   * Гражданство
   */
  public citizenship: string;

  /**
   * Уровень имеющегося образования
   */
  public currentLevelOfEducation: string;

  /**
   * Родной язык
   */
  public nativeLanguage: string;

  /**
   * Уровень русского языка
   */
  public russianLanguageLevel: string;

  /**
   * Сертификат по русскому языку
   */
  public certificateInRussian: string;

  /**
   * Уровень английского языка
   */
  public englishLanguageLevel: string;

  /**
   * Сертификат по английскому языку
   */
  public certificateInEnglish: string;

  /**
   * Владение другими языками
   */
  public otherLanguages: string;

  /**
   * Год окончания
   */
  public yearOfEnding: number;

  /**
   * Название закончего учебного заведения
   */
  public nameCompletedInstitution: string;

  /**
   * Уровень образования, которое хочу получить
   */
  public levelOfEducationDesired: LevelOfEducation;

  /**
   * Планируемый год поступления
   */
  public yearOfReceipt: string;

  /**
   * Выбранное направление
   */
  public selectedDirection: Direction;

  /**
   * Выбранные университеты
   */
  public selectedEducationInstitution: EducationInstitutionModel[];

  /**
   * Страна, где закончено учебное заведение
   */
  countryEducation: string;

  constructor() {
    this.selectedDirection = new Direction();
    this.levelOfEducationDesired = new LevelOfEducation();
  }
}
