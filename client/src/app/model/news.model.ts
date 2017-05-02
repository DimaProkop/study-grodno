import {EducationInstitutionModel} from "./education-institution.model";
/**
 * Created by DENIS on 01.05.2017.
 */
export class NewsModel {

  id: number;
  title: string;
  description: string;
  createDate: Date;
  educationInstitution: EducationInstitutionModel;

  constructor() {
    this.educationInstitution = new EducationInstitutionModel();
  }
}
