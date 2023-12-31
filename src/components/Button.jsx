/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    // dynamic button generation for home

    <Link to={props.route}>
      <button className="btnHover button home--option">{props.content}</button>
    </Link>
  );
}
