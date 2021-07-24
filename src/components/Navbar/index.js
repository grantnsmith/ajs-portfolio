import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <a href="/">AJS Interview Coaching</a>
        </li>
        <li className="item">
          <a href="/" className="button">
            Home
          </a>
        </li>
        <li className="item">
          <a href="/services" className="button">
            Services
          </a>
        </li>
        <li className="item">
          <a href="/contact" className="button">
            Contact
          </a>
        </li>
        <li class="toggle">
          <a href="#">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
