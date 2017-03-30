import {SpecialityModel} from "./speciality.model";
import {UniversityModel} from "./university.model";
/**
 * Created by dionp on 27.03.2017.
 */
export class FacultyModel {

  constructor() {
  }

  id: number;
  name: string;
  address: string;
  university: UniversityModel;
  specialities: SpecialityModel[];
}
