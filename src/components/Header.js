import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand text-black" to="/">
          Adrian Hadinata
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link linked active text-black"
                id="heroLink"
                to="#home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link linked about active text-black"
                to="#about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link linked projects text-black"
                to="#projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link linked projects text-black"
                to="#projects"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
