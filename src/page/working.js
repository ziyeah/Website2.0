import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./../component/card";
import "./working.css";

function Working() {
  return (
    <div className="working-container">
      <MediaCard
        title="Silicon Valley Bank"
        time="2021-present"
        content="Developed the financial application for Silicon Valley Bank. 
          Contributed to the UI development and unit testing of multiple sections 
          including rewards management, cards management"
        stacts="React, HTML, SCSS, Typescript, Jest, Enzyme, React-testing-library"
      />

      <MediaCard
        title="PaiEr Automatic Control"
        time="2020-2021"
        content="Developed and designed the official web application of China Offshore 
          Wind Association. Developed a component-based application. Managed database 
          with mongoose API."
        stacts="React, JavaScript, HTML, CSS, Bootstrap, MongoDB"
      />

      <MediaCard
        title="PaiEr Automatic Control"
        time="2016-2018"
        content="Designed and Developed the equipment display platform. Built reusable 
          components.like card, form, button, input, toggle button, multi-level dropdown, etc."
        stacts="React, JavaScript, HTML, CSS, Bootstrap, Node, Express"
      />

      <MediaCard
        title="Beijing ZhongFang JingYe Electrical Equipment co., Ltd"
        time="2016 intern"
        content="Developed the management application which is used to monitor and storage 
          the spinning equipment’s data."
        stacts="React, JavaScript, HTML, CSS, D3.js"
      />

      <div className="nav">
        <Link to="/" className="navbar-brand">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Working;
