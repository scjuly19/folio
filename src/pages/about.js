import React from "react";
import "../styles/about.css";
import "../styles/common.css";
const About = () => {
  return (
    <div id="about" className="main-about">
      <img
        src={require("../images/about.jpg")}
        className="icon-sitting"
        alt=""
      />

      <div className="about-info">
        <h1 className="sub-title">
          <strong>About Myself</strong>
        </h1>
        <p>
          I am a front end developer having sound knowledge of react native,
          react and JavaScript. I have been working for around 2 years and built
          pixel perfect buttery smooth UI for clients. I love creating
          clean,beautiful, interactive and user friendly UI. I have developed
          ios apps using react native and currently getting my hands on react
          js.
        </p>
        <div>
          <a download href={"/files/resume.pdf"} rel="noopener noreferrer">
            <button className="btn red-btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
