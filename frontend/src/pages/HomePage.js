import React from "react";
import { Link } from "react-router-dom";
import "./.styles/HomePage.css"; 
import TodaysGames from "../components/TodaysGames"; 

// HomePage component - displays welcome message and today's NBA games
function HomePage() {
  return (
    <div className="home-container">
      <h2>Welcome to NBA Stats Predictor App 🏀</h2>
      <p>
        This application predicts NBA stats using advanced AI models. You can{" "}
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link> to get started.
      </p>
      <TodaysGames /> {/* Display today's NBA games */}
    </div>
  );
}

export default HomePage;