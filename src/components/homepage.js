import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/working" className="nav-link">
          <button>Working</button>
        </Link>
        <Link to="/project" className="nav-link">
          <button>Project</button>
        </Link>
        <Link to="/education" className="nav-link">
          <button>Education</button>
        </Link>
      </div>
      <div className="game"></div>
    </div>
  );
}

export default HomePage;
