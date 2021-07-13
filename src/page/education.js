import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./../component/card";
import "./education.css";

import ur from "../image/ur.jpg";
import ncut from "../image/ncut.jpg";

function Education() {
  return (
    <div className="education-container">
      <MediaCard
        image={ur}
        title="University of Rochester"
        time="2018-2020"
        content="Electrical and Computer Engineering"
        stacts="Master's degree"
      />

      <MediaCard
        image={ncut}
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
