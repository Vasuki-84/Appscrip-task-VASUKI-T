import React, { useState } from "react";
import "../styles/Header.css";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      {/* --- Top Header --- */}
      <div className="top-header">
        {/* Left: Hamburger / Logo icon */}
        <div className="header-left">
          
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
           <div className="header-left">
          <img
            src="https://i.pinimg.com/1200x/95/0f/31/950f31b8439fa0f68194154611f91238.jpg"   // 👈 put your logo file inside "public/images/"
            alt="Logo"
            className="logo-img"
          />
        </div>
        </div>

         
       

        {/* Center: Logo text */}
        <div className="header-center">LOGO</div>

        

        {/* Right: Icons */}
        <div className="header-right">
          <Search size={18} />
          <Heart size={18} />
          <ShoppingBag size={18} />
          <span className="lang"><User size={18} /></span>
          <span className="lang">ENG ▼</span>
        </div>
      </div>

      {/* --- Bottom Navigation --- */}
      <nav className={`bottom-nav ${menuOpen ? "active" : ""}`}>
        <a href="#">HOME</a>
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
