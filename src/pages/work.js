import React from "react";
import "../styles/work.css";
import "../styles/common.css";
import { work } from "../mock/work";
const Work = () => {
  return (
    <div id="work" className="work-main">
      <h2 className="sub-title">Work History</h2>
      <div className="card-container">
        {work.map((item, index) => {
          return (
            <WorkCard
              title={item.title}
              company={item.company}
              description={item.description}
              duration={item.duration}
              logo={item.logo}
            />
          );
        })}
      </div>
    </div>
  );
};
const WorkCard = (props) => {
  return (
    <div className="card">
      <div className="row-container">
        <div>
          <h2 style={{ fontSize: 22 }}>{props.company}</h2>
          <img src={props.logo} alt="logo"/>
          <h2 style={{ fontSize: 16 }}>{props.title}</h2>
        </div>
        <button className="work-btn btn">{props.duration}</button>
      </div>

      <p>{props.description}</p>
    </div>
  );
};

export default Work;
