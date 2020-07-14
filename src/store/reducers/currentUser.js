import { bindActionCreators } from "redux";

import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
