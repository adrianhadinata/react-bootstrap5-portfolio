import React from "react";

import { Link } from "react-router-dom";
import Img from "../elements/Img";

import "../assets/css/Header.scss";
import MyLogo from "../assets/img/my_logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand text-black" to="/">
          <Img
            imageAlt={"Adrian's Logo"}
            imageSrc={MyLogo}
            imageWidth={"200px"}
          ></Img>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
