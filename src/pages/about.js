import React from "react";
import "../styles/about.css";
import "../styles/common.css";
import resume from "../files/sakshi.pdf";

const About = () => {
  return (
    <div id="about" className="main-about">
      <img
        src={require("../images/about.svg")}
        className="icon-sitting"
        alt=""
      />

      <div className="about-info">
        <h2 className="sub-title">
          <strong>About Myself</strong>
        </h2>
        <p>
          I am a FrontEnd Developer proficient in React Native, React and
          JavaScript. I have been working for around 4.5 years and built pixel
          perfect buttery smooth UI for clients. I love creating
          clean,beautiful, interactive and user friendly UI. I have developed
          ios apps using React Native and websites using ReactJs.
        </p>
        <div>
          <a download href={resume} rel="noopener noreferrer">
            <button className="btn purple-btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
