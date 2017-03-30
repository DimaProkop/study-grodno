import {FacultyModel} from "./faculty.model";
/**
 * Created by dionp on 27.03.2017.
 */
export class UniversityModel {

  constructor() {}

  id: number;
  name: string;
  email: string;
  site: string;
  departments: FacultyModel[];
}
