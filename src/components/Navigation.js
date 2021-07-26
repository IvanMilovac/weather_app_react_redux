import React from "react";

export default function Navigation() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">
          WeatherApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link me-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="/forecast">
                Forecast
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
