import React, { useState } from "react";
import { connect } from "react-redux";
import { saveCity, saveCurrentWeather } from "../redux/actions/weatherActions";

const InputField = ({ saveCity, saveCurrentWeather }) => {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("city", city);
    saveCity(city);
    saveCurrentWeather();
  };
  const onChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ height: "45px", display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={city}
          placeholder="Grad"
          style={{ width: "40vw", display: "inline-block" }}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Pogledaj vrijeme"
        />
      </form>
    </>
  );
};

const mapDispatchToProps = {
  saveCity,
  saveCurrentWeather,
};

export default connect(null, mapDispatchToProps)(InputField);
