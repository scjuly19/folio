import React from "react";
import "../styles/work.css";
import '../styles/common.css';
const data = require("../mock/data.json");

const Work = () => {
  return (
    <div id="work" className="work-main">
      <h1 className="sub-title">Work History</h1>
      <div className="card-container">
        {data.map((item, index) => {
          return (
            <WorkCard
              title={item.title}
              company={item.company}
              description={item.description}
              duration={item.duration}
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
          <h1 className="title-work">{props.title}</h1>
          <h1 style={{fontSize:16}}>{props.company}</h1>
        </div>

        <button className="work-btn btn">{props.duration}</button>
      </div>

      <p>{props.description}</p>
    </div>
  );
};

export default Work;
