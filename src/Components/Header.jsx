import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">LOGO</div>

        <nav className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="nav-icons">
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
          <span className="lang">ENG ⌄</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
