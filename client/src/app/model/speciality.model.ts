import { FacultyModel } from "./faculty.model";
import { FormOfEducation } from "./form-of-education.model";
import { LanguageLearning } from "./language-learning.model";
import { LevelOfEducation } from "./level-of-education.model";
import { Direction } from "./direction.model";
import {EducationInstitutionModel} from "./education-institution.model";
/**
 * Created by dionp on 26.03.2017.
 */
export class SpecialityModel {

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
   * Учреждение
   */
  education: EducationInstitutionModel;

  /**
   * Формы обучения
   */
  formsOfEducation: FormOfEducation[];

  /**
   * Языки обучения
   */
  languagesLearning: LanguageLearning[];

  /**
   * Уровни образования
   */
  levelsOfEducation: LevelOfEducation[];

  /**
   * Направления
   */
  directions: Direction[];

  constructor() {
    this.formsOfEducation = [];
    this.languagesLearning = [];
    this.levelsOfEducation = [];
    this.directions = [];
    this.education = new EducationInstitutionModel;
  }

  setProperties(item: SpecialityModel): void {
      this.id = item.id;
      this.name = item.name;
      this.code = item.code;
      this.duration = item.duration;
      this.directions = item.directions;
      this.education = item.education;
      this.languagesLearning = item.languagesLearning;
      this.levelsOfEducation = item.levelsOfEducation;
      this.price = item.price;
      this.formsOfEducation = item.formsOfEducation;
      this.freeEducation = item.freeEducation;
  }
}
