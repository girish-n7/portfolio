// import React from "react"
import ProjectCard from "./Project";
import { data } from "../data/projectsData";

export default function ProjectsPage() {
  const projectMap = data.map((data) => {
    return (
      <ProjectCard
        key={data._id}
        id={data._id}
        name={data.name}
        description={data.description}
        liveSnapshot={data.liveSnapshot}
        liveLink={data.liveLink}
        gitHubLink={data.gitHubLink}
      />
    );
  });

  return <div className="project--container">{projectMap}</div>;
}
