// import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header--container">
      <p>Hi, my name is Girish N</p>
      <div className="navbar">
        <div className="header--home">
          <Link to="/" className="nav--item">
            <i className="fa fa-home fa-lg" aria-hidden="true"></i>
          </Link>
          <p>Back to Home</p>
        </div>
      </div>
    </div>
  );
}
