/* eslint-disable react/prop-types */

import chatbot from "../assets/live_snapshot/chatbot_live.png";
import portfolio from "../assets/live_snapshot/portfolio_live.png";
import summarizer from "../assets/live_snapshot/summarizer_live.png";

export default function ProjectSmall({
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
