import React from "react";
import { Link } from "react-router-dom";

function Working() {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
      Working !
    </div>
  );
}

export default Working;
