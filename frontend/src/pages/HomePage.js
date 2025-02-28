import React from "react";
import { Link } from "react-router-dom";
import "./.styles/HomePage.css"; // Import the CSS file for styling

// HomePage component - serves as the landing page of the app
function HomePage() {
  return (
    <div className="home-container">
      <h2>Welcome to NBA Stats Predictor App 🏀</h2> {/* Main heading */}
      
      {/* Navigation links to login and signup pages */}
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default HomePage; // Exporting component for use in routingc