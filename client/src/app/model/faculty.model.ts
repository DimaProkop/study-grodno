import { SpecialityModel } from "./speciality.model";
import { EducationInstitutionModel } from "./education-institution.model";
/**
 * Created by dionp on 27.03.2017.
 */
export class FacultyModel {

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

  setProperties(item: FacultyModel): void {
      this.id = item.id;
      this.address = item.address;
      this.name = item.name;
  }
}
