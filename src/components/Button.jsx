/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.route}>
      <button className="btnHover button home--option">{props.content}</button>
    </Link>
  );
}
