import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import storeConfiguration from "./redux/storeConfiguration";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
const store = storeConfiguration();

ReactDOM.render(
  <div className="container-fluid">
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </div>,
  document.getElementById("root")
);
