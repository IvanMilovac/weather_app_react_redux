import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forecast" component={Forecast} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
