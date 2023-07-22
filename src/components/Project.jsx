/* eslint-disable react/prop-types */

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
