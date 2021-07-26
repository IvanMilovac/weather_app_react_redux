import * as types from "./actionTypes";

const API_KEY = "<YOUR_API_KEY_HERE>"; //https://www.weatherapi.com/docs/

export const saveCurrentWeatherSuccess = (currentWeather) => {
  return {
    type: types.SAVE_CURRENT_WEATHER_SUCCESS,
    currentWeather,
  };
};

export const saveCity = (choosenCity) => {
  return {
    type: types.SAVE_CITY,
    choosenCity,
  };
};

export const saveCurrentWeather = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    try {
      const result = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${state?.weather?.city || "Zagreb"}`
      );
      const resultJSON = await result.json();
      dispatch(saveCurrentWeatherSuccess(resultJSON));
    } catch (e) {
      throw new Error("Fetching current weather failed.", e);
    }
  };
};
