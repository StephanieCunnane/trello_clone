import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import cards from "./cards";
const rootReducer = combineReducers({ boards, lists });

export default rootReducer;
