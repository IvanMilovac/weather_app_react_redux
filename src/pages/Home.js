import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { saveCurrentWeather, saveCity } from "../redux/actions/weatherActions";

const Home = ({ location, currentWeather, saveCurrentWeather, saveCity }) => {
  useEffect(() => {
    saveCurrentWeather();
    saveCity(localStorage.getItem("city"));
  }, [saveCity, saveCurrentWeather]);
  return (
    <>
      <Dashboard location={location} current={currentWeather} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weather.current || {},
    location: state.weather.location || {},
  };
};

const mapDispatchToProps = {
  saveCurrentWeather,
  saveCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
