import React from "react";
import { useHistory } from "react-router-dom";
import "./homepage.css";

import board from "../image/board.png";
import blockQuestionMark from "../image/block-questionmark.gif";
import block from "../image/block.png";

function HomePage() {
  const history = useHistory();

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

  const navWork = () => {
    jump();
    setTimeout(function () {
      history.push("/working");
    }, 1200);
  };
  const navProject = () => {
    jump();
    setTimeout(function () {
      history.push("/project");
    }, 1200);
  };
  const navEducation = () => {
    jump();
    setTimeout(function () {
      history.push("/education");
    }, 1200);
  };

  return (
    <div className="container">
      <img className="board" src={board} alt="board"></img>

      <div id="character"></div>

      <div className="block-container">
        <img
          className="block"
          src={blockQuestionMark}
          onClick={navWork}
          alt="block-question-mark"
        ></img>
        <img className="block" src={block} alt="block"></img>
        <img
          className="block"
          src={blockQuestionMark}
          onClick={navProject}
          alt="block-question-mark"
        ></img>
        <img className="block" src={block} alt="block"></img>
        <img
          className="block"
          src={blockQuestionMark}
          onClick={navEducation}
          alt="block-question-mark"
        ></img>
      </div>
    </div>
  );
}

export default HomePage;
