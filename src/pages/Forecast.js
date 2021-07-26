import React, { useEffect } from "react";
import { saveCurrentWeather } from "../redux/actions/weatherActions";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import { setModal, saveModalDetails } from "../redux/actions/modalActions";
import ForecastTable from "../components/ForecastTable";
import "./Forecast.css";
import ForecastTableHourly from "../components/ForecastTableHourly";

const Forecast = ({
  forecastWeather,
  saveCurrentWeather,
  modalShow,
  setModal,
  saveModalDetails,
  modalDetails,
}) => {
  useEffect(() => {
    saveCurrentWeather();
  }, [saveCurrentWeather]);

  const handleClick = (h) => {
    setModal(true);
    saveModalDetails(h);
  };

  return (
    <div className="forecast-wrapper">
      {modalShow && (
        <Modal setShowModal={setModal} modalDetails={modalDetails} />
      )}
      <div>
        <ForecastTable forecastWeather={forecastWeather} />
        <h5 className="mt-5">Vrijeme po satima:</h5>
        <ForecastTableHourly
          forecastWeather={forecastWeather}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    forecastWeather: state.weather.forecast || {},
    modalShow: state.modal.setModal || false,
    modalDetails: state.modal.modalDetails || {},
  };
};

const mapDispatchToProps = {
  saveCurrentWeather,
  setModal,
  saveModalDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
