import React from "react";
import { useHistory } from "react-router-dom";
import "./homepage.css";

import board from "../image/board.png";
import blockQuestionMark from "../image/block-questionmark.gif";
import block from "../image/block.png";
import mushroom from "../image/mushroom.png";
import mushroom2 from "../image/mushroom2.png";
import flower from "../image/flower.png";

function HomePage() {
  const history = useHistory();

  function jump(imgId) {
    var character = document.getElementById(imgId);
    if (character.classList === "jump-animate") {
      return;
    }
    character.classList.add("jump-animate");
    setTimeout(function () {
      character.classList.remove("jump-animate");
    }, 2000);
  }

  const navWork = () => {
    jump("mushroom");
    setTimeout(function () {
      history.push("/working");
    }, 1700);
  };
  const navProject = () => {
    jump("mushroom2");
    setTimeout(function () {
      history.push("/project");
    }, 1700);
  };
  const navEducation = () => {
    jump("flower");
    setTimeout(function () {
      history.push("/education");
    }, 1700);
  };

  return (
    <div className="container">
      <img className="board" src={board} alt="board"></img>
      <div className="bottom-content">
        <div className="block-popup-container">
          <img id="mushroom" src={mushroom} alt="mushroom"></img>
          <img id="mushroom2" src={mushroom2} alt="mushroom2"></img>
          <img id="flower" src={flower} alt="flower"></img>
        </div>

        <div className="block-container">
          <img
            className="block-clickable"
            src={blockQuestionMark}
            onClick={navWork}
            alt="block-question-mark"
          ></img>
          <img className="block" src={block} alt="block"></img>
          <img
            className="block-clickable"
            src={blockQuestionMark}
            onClick={navProject}
            alt="block-question-mark"
          ></img>
          <img className="block" src={block} alt="block"></img>
          <img
            className="block-clickable"
            src={blockQuestionMark}
            onClick={navEducation}
            alt="block-question-mark"
          ></img>
        </div>
        <div className="block-name-container">
          <span className="block-name" onClick={navWork}>career</span>
          <span className="block-name" onClick={navProject}>project</span>
          <span className="block-name-right" onClick={navEducation}>education</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
