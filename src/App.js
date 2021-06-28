import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import HomePage from "./components/homepage";
import Working from "./components/working";
import Project from "./components/project";
import Education from "./components/education";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="mainImage"></div>

        <Route path="/" exact component={HomePage} />
        <Route path="/working" component={Working} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
      </Router>
    </div>
  );
}

export default App;
