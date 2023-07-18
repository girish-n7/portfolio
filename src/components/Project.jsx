/* eslint-disable react/prop-types */
// import * as React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  return (
    <div className="project--card">
      <img
        className="project--img"
        src={liveSnapshot}
        alt=""
        loading="lazy"
      ></img>
      <div className="project--head">
        <p className="project--title">{name}</p>

        <Link to={"/project-info"}>
          <button
            className="btnHover project--info"
            title="Click here to view project information"
          >
            i
          </button>
        </Link>
      </div>
      <p className="project--desc">{description}</p>
      <div className="button--container">
        <button
          className="btnHover button gitHub--button"
          title="Go to GitHub"
          onClick={() => {
            window.location.href = gitHubLink;
          }}
        >
          GitHub
        </button>
        <button
          className="btnHover button liveLink--button"
          title="Go to project link"
          onClick={() => {
            window.location.href = liveLink;
          }}
        >
          Live Link
        </button>
      </div>
    </div>
  );
}
