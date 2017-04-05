import {FacultyModel} from "./faculty.model";
/**
 * Created by dionp on 27.03.2017.
 */
export class UniversityModel {

  constructor() {}

  /**
   * ИД
   */
  id: number;

  /**
   * Название
   */
  name: string;

  /**
   * Основная почта
   */
  primaryMail: string;

  /**
   * Почта для обратной связи
   */
  mailFeedback: string;

  /**
   * Сайт университета
   */
  site: string;

  /**
   * Адрес
   */
  address: string;

  /**
   * Город
   */
  city: string;

  /**
   * Рейтинг в РБ
   */
  rating: number;

  /**
   * Факультеты
   */
  faculties: FacultyModel[];
}
