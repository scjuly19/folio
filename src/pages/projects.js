import React from "react";
const projects = require("../mock/projects.json");

const ProjectDetails = ({item}) => {
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a
        className="links"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore
      </a>
      <a
        className="links"
        href={item.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </li>
  )
}
const ProjectSection=({title,data})=>{
  return(
    <section className="center-section">
    <h2>{title}</h2>
    <ul>
      {data.map(item => <ProjectDetails item={item}/>)}
    </ul>
    </section>
  )
}
export const Projects = () => {
  return (
    <div id="projects" className="alignContent">
      <h1>Projects</h1>
      <p>
        Here are some of the projects I have made so far. Many more to come
        <span role="img" aria-label="simley">
          😀
        </span>
      </p>
     <ProjectSection title="These were the projects I made in Neog Level 1" data={projects.levelOne}/>
     <ProjectSection title="These were some beginner level projects I made as part of Neog-Level 0" data={projects.levelZero}/>
    </div>
  )
}
