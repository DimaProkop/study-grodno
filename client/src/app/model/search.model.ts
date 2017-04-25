import {LevelOfEducation} from "./level-of-education.model";
import {Direction} from "./direction.model";
import {FormOfEducation} from "./form-of-education.model";
/**
 * Created by dionp on 11.04.2017.
 */
export interface SearchModel {
  level?: LevelOfEducation,
  direction?: Direction,
  form?: FormOfEducation,
  duration?: number
}
