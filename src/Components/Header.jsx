import React from "react";
import "./Header.css";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

function Header() {
  return (
    <header className="main-header">
      {/* --- Top bar --- */}
      <div className="top-header">
        {/* Left small icon/logo */}
        <div className="left-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            alt="small logo"
          />
        </div>

        {/* Center title logo */}
        <div className="center-logo">LOGO</div>

        {/* Right icons */}
        <div className="right-icons">
          <Search size={18} />
          <Heart size={18} />
          <ShoppingBag size={18} />
          <User size={18} />
          <span className="lang">ENG ▼</span>
        </div>
      </div>

      {/* --- Bottom navigation bar --- */}
      <nav className="bottom-nav">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}

export default Header;
