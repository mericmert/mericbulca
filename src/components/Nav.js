import React, { useState } from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <input type="checkbox" />
      <div className="hamburger-icon">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="#">RESUME</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
