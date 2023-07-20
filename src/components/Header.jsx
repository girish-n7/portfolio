// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--title">
        <img src={logo} height="45px" alt="logo"></img>
        <p>Girish N</p>
      </div>

      <div className="navbar">
        <div className="header--home">
          <Link to="/" className="nav--item">
            <i className="fa fa-home fa-lg" aria-hidden="true" alt="home"></i>
          </Link>
          <p>Back to Home</p>
        </div>
      </div>
    </div>
  );
}
