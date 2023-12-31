import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import homeLogo from "../assets/images/home.svg";

export default function Header() {
  //basic header component

  return (
    <div className="header--container">
      <div className="header--title">
        <img src={logo} height="45px" alt="logo"></img>
        <p>Girish N</p>
      </div>

      <div className="navbar">
        <div className="header--home">
          <Link to="/">
            <img src={homeLogo} className="home--logo" alt=""></img>
          </Link>
          <p>Back to Home</p>
        </div>
      </div>
    </div>
  );
}
