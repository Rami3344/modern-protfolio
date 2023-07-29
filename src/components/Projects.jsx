import React from "react";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div className="projects">
      <h1 className="header">Projects</h1>
      <hr />
      <div>
        <ProjectsList />
      </div>
      <div className="moreprojects">
        <h2>
          You can visit my <a href="www.github.com/Rami3344">Github Profile</a>{" "}
          for more...
        </h2>
      </div>
    </div>
  );
}

export default Projects;
