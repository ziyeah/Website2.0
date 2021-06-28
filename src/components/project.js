import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
      Project !
    </div>
  );
}

export default Project;
