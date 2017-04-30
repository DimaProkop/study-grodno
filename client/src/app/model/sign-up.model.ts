/**
 * Created by dionp on 29.04.2017.
 */
export class SignUpModel {

  private login: string;

  private password: string;

  private repeatedPassword: string;

  constructor(login: string, password: string, repeatedPassword: string){
    this.login = login;
    this.password = password;
    this.repeatedPassword = repeatedPassword;
  }

}
