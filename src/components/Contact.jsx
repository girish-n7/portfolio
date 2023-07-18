// import React from "react"
import { Transitions } from "./Transitions";

export default function Contact() {
  const gitHub = "https://github.com/girish-n7";
  const linkedIn = "https://www.linkedin.com/in/girish-n-7075ba1a4";
  const email = "mailto: ngirish1729@gmail.com";
  return (
    <Transitions>
      <div className="contact--container">
        <p className="contact--title">Contact me</p>
        <div className="contact--items">
          <button
            className="btnHover contact--button"
            onClick={() => {
              window.location.href = linkedIn;
            }}
          >
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            <br />
            LinkedIn
          </button>
          <button
            className="btnHover contact--button"
            onClick={() => {
              window.location.href = gitHub;
            }}
          >
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            <br />
            GitHub
          </button>
          <button
            className="btnHover contact--button"
            onClick={() => {
              window.open(email);
            }}
          >
            <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <br />
            e-mail
          </button>
        </div>
      </div>
    </Transitions>
  );
}
