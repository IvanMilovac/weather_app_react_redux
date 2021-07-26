import React from "react";
import "./Modal.css";

const Modal = ({ setShowModal, modalDetails }) => {
  const showModal = (e) => {
    setShowModal(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-header">Detalji</div>
      <div className="modal-body">
        <p>Vrijeme: {modalDetails.time}</p>
        <table className="table table-striped w-100">
          <thead>
            <tr>
              <th>Veličina</th>
              <th>Iznos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Temperatura</td>
              <td>{`${modalDetails.temp_c} °C`}</td>
            </tr>
            <tr>
              <td>Temperatura osjećaj</td>
              <td>{`${modalDetails.feelslike_c} °C`}</td>
            </tr>
            <tr>
              <td>Vjetar</td>
              <td>{`${modalDetails.wind_kph} km/h (smjer: ${modalDetails.wind_dir} )`}</td>
            </tr>
            <tr>
              <td>Tlak</td>
              <td>{`${modalDetails.pressure_mb} hPa`}</td>
            </tr>
            <tr>
              <td>Vlažnost</td>
              <td>{`${modalDetails.humidity} %`}</td>
            </tr>
            <tr>
              <td>Prekrivenost oblacima</td>
              <td>{`${modalDetails.cloud} %`}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <button className="btn btn-outline-secondary" onClick={showModal}>
          Zatvori
        </button>
      </div>
    </div>
  );
};

export default Modal;
