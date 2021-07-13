import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./../component/card";
import "./project.css";

import proj1 from "../image/proj1.jpg";

function Project() {
  return (
    <div className="project-container">
      <MediaCard
        image={proj1}
        title="Traveling Sharing platform"
        content="Built the media application that allows user to 
          share their travel experiences. User could post various 
          media including image, text, position, etc."
        stacts="React, JavaScript, HTML, CSS, Node, Express, MongoDB"
      />

      <MediaCard
        image={proj1}
        title="Graph signal processing based on network science"
        content="The project focuses on data classification via graph 
          convolutional network."
        stacts="Python, MATLAB, computer version"
      />

      <MediaCard
        image={proj1}
        title="Ultrasound Images Segmentation"
        content="This study proposes an algorithm to segment the carotid 
          artery wall from ultrasound images."
        stacts="Python, TensorFlow, GPU"
      />

      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
