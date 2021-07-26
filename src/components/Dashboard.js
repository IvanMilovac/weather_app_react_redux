import React from "react";
import "./Dashboard.css";
import InputField from "./InputField";
import DashboardTableLocationInfo from "./DashboardTableLocationInfo";
import DashboardWeatherTable from "./DashboardWeatherTable";

export default function Dashboard({ location, current }) {
  return (
    <div className="container mt-5">
      <label>Unesite ime grad:</label>
      <InputField />
      <div className="row">
        <div className="col-sm">
          <DashboardTableLocationInfo location={location} current={current} />
        </div>
        <div className="col-sm">
          <DashboardWeatherTable current={current} />
        </div>
      </div>
    </div>
  );
}
