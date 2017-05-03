/**
 * Created by dionp on 01.05.2017.
 */
export class Bookmark {

  choiceId: number;
  contentId: number;
  constructor(choiceId: number,
              contentId: number) {
    this.choiceId = choiceId;
    this.contentId = contentId;
  }
}
