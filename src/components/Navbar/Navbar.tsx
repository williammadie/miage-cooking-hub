import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SwitchDarkMode from "../SwitchDakMode/SwitchDarkMode";
import {DarkModeContext} from "../../context/DarkModeContext";

export default function Navbar() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <nav>
      <ul >
        <li>
          <Link className={`nav-link `}to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`nav-link `} to="/meals">
            Meals
          </Link>
        </li>
        <li>
          <Link className={`nav-link `} to="/cocktails">
            Cocktails
          </Link>
        </li>
        <li>
          <SwitchDarkMode></SwitchDarkMode>
        </li>
      </ul>
    </nav>
  );
}
