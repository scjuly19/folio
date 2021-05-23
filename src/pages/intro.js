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
            <strong className="text">Sakshi</strong>
          </h1>
          <h1 id="subtitle">Front-End Developer | React-Native | ReactJs</h1>
          <button className="purple-btn btn">Hire Me</button>
        </div>

        <img src={require("../images/me.svg")} className="my-img" alt="" />
      </div>
      <h2 className="sub-title">Technologies</h2>
      <div className="skill-grid">
        <h2 className="skill">JavaScript</h2>
        <h2 className="skill">React</h2>
        <h2 className="skill">React Native</h2>
        <h2 className="skill">Redux</h2>
        <h2 className="skill">ReduxSaga</h2>
        <h2 className="skill">Bootstrap</h2>
        <h2 className="skill">D3.js</h2>
        <h2 className="skill">CSS</h2>
        <h2 className="skill">HTML</h2>
      </div>
    </div>
  );
};

export default Intro;
