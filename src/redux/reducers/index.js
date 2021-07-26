import { combineReducers } from "redux";
import weather from "./weatherReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({
  weather,
  modal,
});

export default rootReducer;
