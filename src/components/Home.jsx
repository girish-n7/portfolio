import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="home--main">
      <div className="home--hero">
        <div className="hero--img"></div>
        <p>Hi, I&#39;m Girish.</p>
        <TypeAnimation
          sequence={["I'm a Full stack Developer", 1000]}
          speed={5}
        />
      </div>
      <div className="home--container">
        <p className="home--question">What do you want to do?</p>
        <div className="home--options">
          <Button content="View my projects" route="/projects" />
          <Button content="Know more about me" route="/about" />
          <Button content="Contact me" route="/contact" />
        </div>
      </div>
    </div>
  );
}
