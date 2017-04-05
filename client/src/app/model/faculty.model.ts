import {SpecialityModel} from "./speciality.model";
import {UniversityModel} from "./university.model";
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
  university: UniversityModel;

  /**
   * Специальности
   */
  specialities: SpecialityModel[];
}
