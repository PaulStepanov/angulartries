import {LoginAction,LOGIN_ACTION} from "../actions/LoginAction";
import {LogoutAction,LOGOUT_ACTION} from "../actions/LogoutAction";


export const loginReducer = (state:boolean = false,action):boolean=>{
  switch (action.type){
    case LOGIN_ACTION: {
      return true
    }
    case LOGOUT_ACTION: {
      return false
    }
    default:
      return state
  }
};
