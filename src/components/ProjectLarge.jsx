/* eslint-disable react/prop-types */

export default function ProjectLarge({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  //file path for project live images
  const selectImg = `./src/assets/live_snapshot/${liveSnapshot}.png`;

  const projectImgStyle = {
    backgroundImage: `url(${selectImg})`,
  };
  return (
    // dynamically generate the project cards for larger screens
    // use window.location.href to redirect the user to respective web address using onClick event (can also use <Link />)

    <div className="project--boundary">
      <div className="project--img__large" style={projectImgStyle}>
        <div className="project--content">
          <p className="project--title">{name}</p>
          <p className="project--desc__large">{description}</p>
          <div className="project--buttons">
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
        </div>
      </div>
    </div>
  );
}
