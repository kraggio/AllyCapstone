import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul id="navbar">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/volunteer">Volunteer Hours</Link>
          </li> */}
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
