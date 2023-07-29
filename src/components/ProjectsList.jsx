import React from "react";
import ProjectsCard from "./ProjectsCard";
import pro1 from "./cont/coding.png";

function ProjectsList() {
  const data = [
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
    {
      id: 1,
      header: "project 1",
      img: pro1,
      link: "#",
      desc: "Hello im rambo",
    },
  ];

  return (
    <div className="projectlist">
      {data.map((e) => (
        <ProjectsCard
          header={e.header}
          img={e.img}
          desc={e.desc}
          link={e.link}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
