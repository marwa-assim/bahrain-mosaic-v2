import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">🇧🇭 Bahrain Mosaic</span>
      </div>
      <div className="nav-right">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("landmarks")}>Landmarks</button>
        <button onClick={() => setPage("contact")}>Contact Us</button>
        <button onClick={toggleTheme}>🌙 Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
