import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} <Route path="/about">
              <About />
            </Route>`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./logo.jpg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <link className="nav-link active" aria-current="page" to="/">
                  Home
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="/about">
                  {props.aboutText}
                </link>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm me-2"
            >
              SignUp
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              Login
            </button>

            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Mode
              </label>
            </div>
            <div
              className={`mx-2 text-${
                props.mode === "light" ? "yellow" : "black"
              }`}
            >
              <button
                type="button"
                className="btn bg-warning rounded btn-lg"
                onClick={props.paletteMode}
              ></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.protoType = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
