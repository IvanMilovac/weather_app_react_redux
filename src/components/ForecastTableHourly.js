import React from "react";

const ForecastTableHourly = ({ forecastWeather, handleClick }) => {
  return (
    <table className="table table-striped w-100">
      <thead>
        <tr>
          <th>Sat</th>
          <th>Vrijeme</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {forecastWeather?.forecastday?.[0]?.hour.map((h) => {
          return (
            <tr key={h?.time_epoch}>
              <td>{h?.time.slice(-5)}</td>
              <td>
                <img
                  src={h?.condition?.icon}
                  style={{ maxHeight: "32px", maxWidth: "32px" }}
                  alt=""
                />
              </td>
              <td>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleClick(h)}
                >
                  Više
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ForecastTableHourly;
