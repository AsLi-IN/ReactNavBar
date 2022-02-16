import React, { useState } from "react";
import "./navbar.css";
import { AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showmediacions, setmediaicons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>A</span>sLi
          </h2>
        </div>
        <div className={showmediacions ? "mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.github.com/aslicode" target="_blank">
                <AiFillGithub className="github" />
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <a href="#" onClick={() => setmediaicons(!showmediacions)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* <section className="hero-section">
        <p>Welcome to Test Site</p> <h1>AsLi</h1>
      </section> */}
    </>
  );
};

export default Navbar;
