import React from "react";
import "./.styles/SignupPage.css"; 

// SignupPage component - handles user registration input
function SignupPage() {
  return (
    <div className="signup-container">
      <h2>Signup Page</h2> {/* Page title */}
      <form>
        <input type="text" placeholder="Name" required /> {/* Name input */}
        <input type="email" placeholder="Email" required /> {/* Email input */}
        <input type="password" placeholder="Password" required /> {/* Password input */}
        <button type="submit">Sign Up</button> {/* Signup button */}
      </form>
    </div>
  );
}

export default SignupPage;