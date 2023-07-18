// import React from "react";
import Button from "./Button";
import { Transitions } from "./Transitions";

export default function Home() {
  return (
    <Transitions>
      <div className="home--container">
        <p className="home--question">What do you want to do?</p>
        <div className="home--options">
          <Button content="View my projects" route="/projects" />
          <Button content="Know more about me" route="/about" />
          <Button content="Contact me" route="/contact" />
        </div>
      </div>
    </Transitions>
  );
}
