/* eslint-disable react/prop-types */

import chatbot from "../assets/live_snapshot/chatbot_live.png";
import portfolio from "../assets/live_snapshot/portfolio_live.png";
import summarizer from "../assets/live_snapshot/summarizer_live.png";

export default function ProjectLarge({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  //select image based on projectData input
  let selectImg =
    liveSnapshot === "portfolio"
      ? portfolio
      : liveSnapshot === "summarizer"
      ? summarizer
      : liveSnapshot === "chatbot"
      ? chatbot
      : null;

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
