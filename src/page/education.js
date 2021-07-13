import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./../component/card";
import "./education.css";

import proj1 from "../image/proj1.jpg";

function Education() {
  return (
    <div className="education-container">
      <MediaCard
        image={proj1}
        title="University of Rochester"
        time="2018-2020"
        content="Electrical and Computer Engineering"
        stacts="Master's degree"
      />

      <MediaCard
        image={proj1}
        title="North China University of Technology"
        time="2014-2018"
        content="Electrical Engineering"
        stacts="Bachelor's degree"
      />

      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Education;
