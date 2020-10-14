import React from "react";
import "../styles/intro.css";
import "../styles/common.css";

const Intro = () => {
 
  return (
    <div className="main-intro">
      <div id="home" className="inner-container">
        <div>
          <h1 className="title">
            Hello, I'm <br />
            <strong className="red-text">Sakshi</strong>
          </h1>
          <h1 id="subtitle">Front-End Developer | React-Native | ReactJs</h1>
          <button className="red-btn btn animated-btn">Hire Me</button>
        </div>

        <img src={require("../images/me.jpg")} className="my-img" alt="" />
      </div>
      <h1 className="sub-title red-text">My Primary skills</h1>
      <div className="skill-grid">
        <h1 className="skill">JavaScript</h1>
        <h1 className="skill">React</h1>
        <h1 className="skill">React Native</h1>
        <h1 className="skill">Redux</h1>
        <h1 className="skill">CSS</h1>
        <h1 className="skill">HTML</h1>
      </div>
    </div>
  );
};

export default Intro;
