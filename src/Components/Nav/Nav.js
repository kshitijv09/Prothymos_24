import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../Assets/prothymos.jpg";
import { Link } from "react-router-dom";
const Navbar = ({ about, org }) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="prothymos-logo" src={Logo} alt="logo" />
      </div>
      <a className="toggle-button" onClick={() => setActive(!active)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`${active ? "active" : null} navbar-links`}>
        <ul className="ul">
          <li>
            <a href="/">Home</a>
          </li>
          {window.location.pathname === "/auction" ||
          window.location.pathname === "/schedule" ||
          window.location.pathname === "/prizes" ? null : (
            <li onClick={() => setActive(!active)}>
              {/* <a onClick={about}>Sports</a> */}
            </li>
          )}
          <li>
            <Link to="/sports">Sports </Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          {window.location.pathname === "/" ? (
            <>
              <li>
                <a href="#tech-team">Tech Team</a>
              </li>
              <li>
                <a href="#director-note">Director's Note</a>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
