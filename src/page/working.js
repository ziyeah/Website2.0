import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./../component/card";

import testPicture from "../image/block.png";

function Working() {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
      <MediaCard
        title="Silicon Valley Bank"
        // image={testPicture}
        time="2020-2021"
        content="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
        stacts="React, HTML, CSS, SCSS, Typescript"
      />
    </div>
  );
}

export default Working;
