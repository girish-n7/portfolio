// import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/projectsData";

export default function ProjectInfo() {
  const reqId = useParams().id;
  let projectIndividual = data[reqId - 1];
  const projectImgStyle = {
    backgroundImage: `url("${projectIndividual.liveSnapshot}")`,
  };

  return (
    <div className="project--individual__container">
      <div className="project--boundary">
        <div className="project--img__individual" style={projectImgStyle}>
          <div className="project--content">
            <div className="project--head__individual">
              <p className="project--title">{projectIndividual.name}</p>
              <button
                className="btnHover button--individual"
                title="Go to GitHub"
                onClick={() => {
                  window.location.href = projectIndividual.gitHubLink;
                }}
              >
                GitHub
              </button>
              <button
                className="btnHover button--individual"
                title="Go to project link"
                onClick={() => {
                  window.location.href = projectIndividual.liveLink;
                }}
              >
                Live Link
              </button>
            </div>
            <p className="project--desc__individual">
              {projectIndividual.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
