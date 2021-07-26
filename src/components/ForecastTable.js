import React from "react";

const ForecastTable = ({ forecastWeather }) => {
  return (
    <table className="table table-striped w-100 mt-3">
      <tbody>
        <tr>
          <th scope="row" className="w-25">
            Grad
          </th>
          <td className="w-75">{localStorage.getItem("city")}</td>
        </tr>
        <tr>
          <th scope="row">Izlazak sunca</th>
          <td>{forecastWeather?.forecastday?.[0]?.astro?.sunrise}</td>
        </tr>
        <tr>
          <th scope="row">Zalazak sunca</th>
          <td>{forecastWeather?.forecastday?.[0]?.astro?.sunset}</td>
        </tr>
        <tr>
          <th scope="row">Minimalna temperatura</th>
          <td>{`${forecastWeather?.forecastday?.[0]?.day?.mintemp_c} °C`}</td>
        </tr>
        <tr>
          <th scope="row">Maksimalna temperatura</th>
          <td>{`${forecastWeather?.forecastday?.[0]?.day?.maxtemp_c} °C`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ForecastTable;
