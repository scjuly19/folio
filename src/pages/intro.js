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
      <h1 className="sub-title">Technologies</h1>
      <div className="skill-grid">
        <h1 className="skill">JavaScript</h1>
        <h1 className="skill">React</h1>
        <h1 className="skill">React Native</h1>
        <h1 className="skill">Redux</h1>
        <h1 className="skill">ReduxSaga</h1>
        <h1 className="skill">Bootstrap</h1>
        <h1 className="skill">D3.js</h1>
        <h1 className="skill">CSS</h1>
        <h1 className="skill">HTML</h1>
      </div>
    </div>
  );
};

export default Intro;
