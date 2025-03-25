import React from "react";
import { Link } from "react-router-dom";
import "./.styles/NavBar.css";

// Renders the top navigation bar
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">NBA Stats Predictor</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;