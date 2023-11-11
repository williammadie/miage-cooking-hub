import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SwitchDarkMode from "../SwitchDakMode/SwitchDarkMode";

export default function Navbar() {
  return (
    <nav>
      <ul >
        <li className={`nav-link `}>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className={`nav-link `}>
          <Link  to="/meals">
            Meals
          </Link>
        </li>
        <li className={`nav-link `}>
          <Link to="/cocktails">
            Cocktails
          </Link>
        </li>
        <div className={'switch'}>
          <SwitchDarkMode ></SwitchDarkMode>
        </div>
      </ul>
    </nav>
  );
}
