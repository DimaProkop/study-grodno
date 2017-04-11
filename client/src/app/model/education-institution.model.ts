import { FacultyModel } from "./faculty.model";
import { TypeEducationInstitution } from "./type-education-institution.model";

/**
 * Created by dionp on 27.03.2017.
 */
export class EducationInstitutionModel {

  constructor() { }

  /**
   * ИД
   */
  id: number;

  /**
   * Название
   */
  name: string;

  /**
    * Тип учреждения образования
    */
  typeEducationInstitution: TypeEducationInstitution;

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
  localRating: number;

  /**
   * Факультеты
   */
  faculties: FacultyModel[];

  setProperties(item: EducationInstitutionModel): void {
      this.id = item.id;
      this.address = item.address;
      this.city = item.city;
      this.localRating = item.localRating;
      this.name = item.name;
      this.site = item.site;
      this.primaryMail = item.primaryMail;
      this.mailFeedback = item.mailFeedback;
      this.typeEducationInstitution = item.typeEducationInstitution;
  }
}
