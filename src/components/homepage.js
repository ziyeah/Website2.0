import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

import board from "../image/board.png";

function HomePage() {
  function jump() {
    var character = document.getElementById("character");
    if (character.classList === "jump-animate") {
      return;
    }
    character.classList.add("jump-animate");
    setTimeout(function () {
      character.classList.remove("jump-animate");
    }, 1000);
  }

  return (
    <div className="container">
      <img className="board" src={board} alt="board"></img>

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

      <div id="character"></div>
      <button onClick={jump}>jump</button>
    </div>
  );
}

export default HomePage;
