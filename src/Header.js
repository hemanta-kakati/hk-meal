import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-small.png";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="The meal db" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a> */}

                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
