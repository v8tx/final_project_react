import { combineReducers } from "redux";
import status from "./counter";
import profile from "./profileReducer";

export default combineReducers({
  status,
  profile,
});