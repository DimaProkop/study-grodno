import {EducationInstitutionModel} from "./education-institution.model";
import {Direction} from "./direction.model";
/**
 * Created by DENIS on 17.04.2017.
 */

export class PersonInfoModel {

  /**
   * ИД
   */
  id: number;

  /**
   * Имя
   */
  firstName: string;

  /**
   * Фамилия
   */
  lastName: string;

  /**
   * Отчество
   */
  middleName: string;

  /**
   * Пол
   */
  gender: string;

  /**
   * Дата рождения
   */
  dateOfBirth: string;

  /**
   * Мотивационное письмо
   */
  motivationLetter: string;

  /**
   * Гражданство
   */
  citizenship: string;

  /**
   * Уровень имеющегося образования
   */
  currentLevelOfEducation: string;

  /**
   * Родной язык
   */
  nativeLanguage: string;

  /**
   * Уровень русского языка
   */
  russianLanguageLevel: string;

  /**
   * Сертификат по русскому языку
   */
  certificateInRussian: string;

  /**
   * Уровень английского языка
   */
  englishLanguageLevel: string;

  /**
   * Сертификат по английскому языку
   */
  certificateInEnglish: string;

  /**
   * Владение другими языками
   */
  otherLanguages: string;

  /**
   * Год окончания
   */
  yearOfEnding: number;

  /**
   * Название закончего учебного заведения
   */
  nameCompletedInstitution: string;

  /**
   * Уровень образования, которое хочу получить
   */
  levelOfEducationDesired: string;

  /**
   * Планируемый год поступления
   */
  yearOfReceipt: string;

  /**
   * Выбранное направление
   */
  selectedDirection: Direction;

  /**
   * Выбранные университеты
   */
  selectedEducationInstitution: EducationInstitutionModel[];
}
