import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Assuming CSS is saved in Navbar.css file
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("background-changed");
    } else {
      document.body.classList.remove("background-changed");
    }
  }, [navOpen]);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [isLightTheme]);

  return (
    <nav className={`navbar ${isLightTheme ? "light-theme" : ""}`}>
      <div className="logo">
       
          <span>TDAU </span><span>XIZMATLARI</span>
       
      </div>
      <div
        className={`hamburger ${navOpen ? "toggle" : ""}`}
        onClick={toggleNav}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${navOpen ? "open" : ""}`}>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/">Bosh saxifa</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/Oqtuvchilar">O'qtuvchilar</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/Hodimlar">Hodimlar</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/Talabalar">Talabalar</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <Link to="/Masofaviy">Masofaviy</Link>
        </li>
        <li className={navOpen ? "fade" : ""}>
          <button id="theme-toggle" onClick={toggleTheme}>
            <span id="theme-icon">{isLightTheme ? "🌙" : "☀️"}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
