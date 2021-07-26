import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const weatherReducer = (state = initialState.weather, action) => {
  switch (action.type) {
    case types.SAVE_CURRENT_WEATHER_SUCCESS:
      return action.currentWeather;
    case types.SAVE_CITY:
      console.log("SAVE CITY");
      return { ...state, city: action.choosenCity };
    default:
      return state;
  }
};

export default weatherReducer;
