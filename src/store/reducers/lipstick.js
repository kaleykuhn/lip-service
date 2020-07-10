// import { bindActionCreators } from "redux";

import actions from "../actions";
import store from "../store";

export default function lipstick(state = [], action) {
   //    // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.STORE_LIPSTICK:
         console.log("FIRED STORE_LIPSTICK");

         return action.payload;
      default:
         return state;
   }
}
