import {FacultyModel} from "./faculty.model";
import {FormOfEducation} from "./form-of-education.model";
import {LanguageLearning} from "./language-learning.model";
import {LevelOfEducation} from "./level-of-education.model";
import {Direction} from "./direction.model";
/**
 * Created by dionp on 26.03.2017.
 */
export class SpecialityModel {

  constructor() {
  }

  /**
   * ИД
   */
  id: number;

  /**
   * Название
   */
  name: string;

  /**
   * Код специальности
   */
  code: number;

  /**
   * Цена специальности
   */
  price: number;

  /**
   * Возможность бесплатного обучения
   */
  freeEducation: boolean;

  /**
   * Продолжительность обучения
   */
  duration: number;

  /**
   * Факультет
   */
  faculty: FacultyModel;

  /**
   * Формы обучения
   */
  formsOfEducation: FormOfEducation [];

  /**
   * Языки обучения
   */
  languagesLearning: LanguageLearning [];

  /**
   * Уровни образования
   */
  levelsOfEducation: LevelOfEducation [];

  /**
   * Направления
   */
  directions: Direction [];
}
