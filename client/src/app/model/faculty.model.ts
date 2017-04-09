import { SpecialityModel } from "./speciality.model";
import { EducationInstitutionModel } from "./education-institution.model";
/**
 * Created by dionp on 27.03.2017.
 */
export class FacultyModel {

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
   * Адрес
   */
  address: string;

  /**
   * Университет
   */
  educationInstitution: EducationInstitutionModel;

  /**
   * Специальности
   */
  specialities: SpecialityModel[];
}
