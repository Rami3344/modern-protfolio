import React from "react";
function ProjectsCard(props) {
  return (
    <div className="projectcard">
      <h1>{props.header}</h1>
      <img src={props.img} alt="" />
      <p>{props.desc}</p>
      <a href={props.link}>Live Show</a>
    </div>
  );
}

export default ProjectsCard;
