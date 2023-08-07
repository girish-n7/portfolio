import Button from "./Button";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/GIRISH N_Resume_web_dev.pdf";

export default function Home() {
  return (
    // hero section of the homepage (floating left)

    <div className="home--main page--transition">
      <div className="home--hero">
        <div className="hero--img"></div>
        <p>Hi, I&#39;m Girish.</p>
        <TypeAnimation
          sequence={["I'm a Full stack Developer", 1000]}
          speed={5}
        />
      </div>

      {/* actual home section of the hompage (float right) */}

      <div className="home--container">
        <p className="home--question">What do you want to do?</p>
        <div className="home--options">
          <Button content="View my projects" route="/projects" />
          <a
            href={resume}
            download="GIRISH N_resume_web_dev.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btnHover button home--option">
              Download my Resume
            </button>
          </a>
          <Button content="Know more about me" route="/about" />
          <Button content="Contact me" route="/contact" />
        </div>
      </div>
    </div>
  );
}
