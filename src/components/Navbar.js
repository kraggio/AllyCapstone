import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <img src="imgs/transparent.png" alt="logo" />
        </div>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <li>
            <Link to="/volunteer">Track Your Hours</Link>
          </li> */}
          <li>
            <Link to="/partners">Partners</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
