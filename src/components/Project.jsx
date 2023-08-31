/* eslint-disable react/prop-types */

import portfolioImg from "../assets/live_snapshot/portfolio_live.png";
import summarizerImg from "../assets/live_snapshot/summarizer_live.png";
import chatbotImg from "../assets/live_snapshot/chatbot_live.png";

export default function ProjectCard({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  //select image based on projectData input
  const selectImg =
    liveSnapshot === "portfolioImg"
      ? portfolioImg
      : liveSnapshot === "summarizerImg"
      ? summarizerImg
      : chatbotImg;

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
