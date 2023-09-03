import ProjectSmall from "./ProjectSmall";
import ProjectLarge from "./ProjectLarge";
import ProjectBackend from "./ProjectBackend";
import { fullStackProjects, backendProjects } from "../data/projectsData";

export default function ProjectsPage() {
  // map the data array imported to the ProjectCard component to dynamically generate cards
  const projectSmallMap = fullStackProjects.map((data) => {
    return (
      <ProjectSmall
        key={data._id}
        name={data.name}
        description={data.description}
        liveSnapshot={data.liveSnapshot}
        liveLink={data.liveLink}
        gitHubLink={data.gitHubLink}
      />
    );
  });

  // same process for large screens
  const projectLargeMap = fullStackProjects.map((data) => {
    return (
      <ProjectLarge
        key={data._id}
        name={data.name}
        description={data.description}
        liveSnapshot={data.liveSnapshot}
        liveLink={data.liveLink}
        gitHubLink={data.gitHubLink}
      />
    );
  });

  //for backend projects
  const projectBackendMap = backendProjects.map((data) => {
    return (
      <ProjectBackend
        key={data._id}
        name={data.name}
        description={data.description}
      />
    );
  });

  return (
    <div className="project--main page--transition">
      <div className="project--container">{projectSmallMap}</div>
      <div className="project--container__large">{projectLargeMap}</div>
      <div className="project--backend__container">{projectBackendMap}</div>
    </div>
  );
}
