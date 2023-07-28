import htmlLogo from "../assets/images/htmlLogo.svg";
import cssLogo from "../assets/images/cssLogo.svg";
import javascriptLogo from "../assets/images/javascriptLogo.svg";
import reactLogo from "../assets/images/reactLogo.svg";
import mongodbLogo from "../assets/images/mongodbLogo.svg";
import gitLogo from "../assets/images/gitLogo.svg";

export default function About() {
  return (
    // basic paragraphs and image importing

    <div className="about--container">
      <p className="about--intro">
        Hello there! My name is Girish. I&#39;m a web developer with a passion
        for front-end technologies.
        <br />I specialize in building responsive websites and web applications
        using HTML, CSS, and JavaScript. I have experience working with modern
        front-end frameworks such as React. I always look for new challenges,
        opportunities to learn and grow as a developer. I love to travel and
        explore new places.
      </p>
      <hr className="about--hr" />
      <p className="skills--title">
        My skills: HTML, CSS, Javascript, React, Git, MongoDB; MERN stack
      </p>
      <div className="skill--list">
        <img src={htmlLogo} className="skill--item" alt=""></img>
        <img src={cssLogo} className="skill--item" alt=""></img>
        <img src={javascriptLogo} className="skill--item" alt=""></img>
        <img src={reactLogo} className="skill--item" alt=""></img>
        <img src={gitLogo} className="skill--item" alt=""></img>
        <img src={mongodbLogo} className="skill--item" alt=""></img>
      </div>
    </div>
  );
}
