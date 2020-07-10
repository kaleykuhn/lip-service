import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import lipstick from "./reducers/lipstick";

export default combineReducers({
   currentUser,
   lipstick,
});
