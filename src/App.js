import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./page/homepage";
import Working from "./page/working";
import Project from "./page/project";
import Education from "./page/education";

import floor from "./image/hill&floor.png";
import point from "./image/points-at-top.gif";

function App() {
  const pointImgBottom = 0;

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
