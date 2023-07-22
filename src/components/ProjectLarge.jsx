/* eslint-disable react/prop-types */
// import React from "react";

export default function ProjectLarge({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  const projectImgStyle = {
    backgroundImage: `url(${liveSnapshot})`,
  };
  return (
    <div className="project--boundary">
      <div className="project--img__large" style={projectImgStyle}>
        <div className="project--content">
          <div className="project--head__large">
            <p className="project--title">{name}</p>
            <button
              className="btnHover button--individual"
              title="Go to GitHub"
              onClick={() => {
                window.location.href = gitHubLink;
              }}
            >
              GitHub
            </button>
            <button
              className="btnHover button--individual"
              title="Go to project link"
              onClick={() => {
                window.location.href = liveLink;
              }}
            >
              Live Link
            </button>
          </div>
          <p className="project--desc__large">{description}</p>
        </div>
      </div>
    </div>
  );
}
