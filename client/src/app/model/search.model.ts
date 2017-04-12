import {LevelOfEducation} from "./level-of-education.model";
import {Direction} from "./direction.model";
import {FormOfEducation} from "./form-of-education.model";
/**
 * Created by dionp on 11.04.2017.
 */
export class SearchModel {

  constructor(public level: LevelOfEducation,
              public direction: Direction,
              public form: FormOfEducation,
              public duration: number) { }
}
