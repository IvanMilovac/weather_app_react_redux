import React from "react";

const DashboardTableLocationInfo = ({location, current}) => {
    return (
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">
              <strong>Grad:</strong>
            </th>
            <td>{location?.name}</td>
          </tr>
          <tr>
            <th scope="row">
              <strong>Regija:</strong>
            </th>
            <td>{location?.region}</td>
          </tr>
          <tr>
            <th scope="row">
              <strong>Država:</strong>
            </th>
            <td>{location?.country}</td>
          </tr>
          <tr>
            <th scope="row">
              <strong>Zadnje izmjene:</strong>
            </th>
            <td>{current?.last_updated}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default DashboardTableLocationInfo;