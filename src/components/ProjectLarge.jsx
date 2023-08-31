/* eslint-disable react/prop-types */
import portfolioImg from "../assets/live_snapshot/portfolio_live.png";
import summarizerImg from "../assets/live_snapshot/summarizer_live.png";
import chatbotImg from "../assets/live_snapshot/chatbot_live.png";

export default function ProjectLarge({
  name,
  description,
  liveSnapshot,
  liveLink,
  gitHubLink,
}) {
  const selectImg =
    liveSnapshot === "portfolioImg"
      ? portfolioImg
      : liveSnapshot === "summarizerImg"
      ? summarizerImg
      : chatbotImg;
  const projectImgStyle = {
    backgroundImage: `url(${selectImg})`,
  };
  return (
    // dynamically generate the project cards for larger screens
    // used window.location.href to redirect the user to respective web address using onClick event (can also use Link)

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
