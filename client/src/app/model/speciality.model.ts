import {FacultyModel} from "./faculty.model";
/**
 * Created by dionp on 26.03.2017.
 */
export class SpecialityModel {

  constructor() {
  }

  private id: number;
  private name: string;
  private code: number;
  private price: number;
  private free: boolean;
  private department: FacultyModel;
}
