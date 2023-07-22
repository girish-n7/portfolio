import ProjectCard from "./Project";
import ProjectLarge from "./ProjectLarge";
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
  const projectLargeMap = data.map((data) => {
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

  return (
    <div className="project--main">
      <div className="project--container">{projectMap}</div>;
      <div className="project--container__large">{projectLargeMap}</div>
    </div>
  );
}
