import React from "react";

const DashboardWeatherTable = ({ current }) => {
  return (
    <table className="table table-borderless">
      <tbody>
        <tr
          style={{
            maxHeight: "64px",
          }}
        >
          <th
            scope="row"
            style={{ padding: "0 0 0 8px", verticalAlign: "middle" }}
          >
            <strong>{current?.condition?.text}</strong>
          </th>
          <td>
            <img
              src={current?.condition?.icon}
              className="current-image"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <strong>Temperatura:</strong>
          </th>
          <td>{`${current?.temp_c} °C`}</td>
        </tr>
        <tr>
          <th scope="row">
            <strong>Stvarni osjećaj temperature:</strong>
          </th>
          <td>{`${current?.feelslike_c} °C`}</td>
        </tr>
        <tr>
          <th scope="row">
            <strong>Vlažnost:</strong>
          </th>
          <td>{`${current?.humidity} %`}</td>
        </tr>
        <tr>
          <th scope="row">
            <strong>Tlak zraka:</strong>
          </th>
          <td>{`${current?.pressure_mb} hPa`}</td>
        </tr>
        <tr>
          <th scope="row">
            <strong>Vjetar:</strong>
          </th>
          <td>{`${current?.wind_kph} km/h (Smjer ${current?.wind_dir})`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DashboardWeatherTable;
