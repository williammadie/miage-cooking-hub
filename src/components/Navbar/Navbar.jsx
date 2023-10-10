import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/meals">
            Meals
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/cocktails">
            Cocktails
          </Link>
        </li>
      </ul>
    </nav>
  );
}
