/* eslint-disable react/prop-types */

export default function ProjectSmall({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  //select image based on projectData input
  const selectImg = `./src/assets/live_snapshot/${liveSnapshot}.png`;

  return (
    // dynamically generate project cards for small and medium screens
    <div className="project--card">
      <img className="project--img" src={selectImg} alt="" loading="lazy"></img>
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

// used window.location.href to redirect the user to respective web address using onClick event (can also use Link)
