import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/homepage";
import Working from "./components/working";
import Project from "./components/project";
import Education from "./components/education";

import floor from "./image/hill&floor.png";
import point from "./image/points-at-top.gif";

function App() {
  return (
    <div className="App">
      <img className="point" src={point} alt="point"></img>

      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/working" component={Working} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
      </Router>

      <img className="floor" src={floor} alt="floor"></img>
    </div>
  );
}

export default App;
