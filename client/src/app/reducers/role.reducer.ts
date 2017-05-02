/**
 * Created by dionp on 02.05.2017.
 */
import {Action} from "@ngrx/store";
import {UserModel} from "../model/user.model";

export interface RoleState {
  info: UserModel;
}

export const GET_USER = 'GET_USER';

export function roleUserReducer(user: UserModel, action: Action): UserModel {

  switch (action.type) {
    case GET_USER: {
      return action.payload;
    }

    default: {
      return user
    }
  }
}
