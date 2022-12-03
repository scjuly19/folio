import React from "react";
import "../styles/intro.css";
import "../styles/common.css";
import { skills } from "../mock/skills";

const Intro = () => {
  return (
    <div className="main-intro">
      <div id="home" className="inner-container">
        <div>
          <h1 className="title">
            Hello, I'm <br />
            <strong className="text">Sakshi</strong>
          </h1>
          <h1 id="subtitle">Front-End Developer | React-Native | ReactJs</h1>
          <button className="purple-btn btn">Hire Me</button>
        </div>

        <img src={require("../images/me.svg")} className="my-img" alt="" />
      </div>
      <h2 className="sub-title">Technologies</h2>
      <div className="skill-grid">
        {skills.map(item=><h2 className="skill">{item}</h2>)}
      </div>
    </div>
  );
};

export default Intro;
