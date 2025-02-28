import React from "react";
import "./.styles/SignupPage.css"; // Import styles for the signup page

// SignupPage component - handles user registration input
function SignupPage() {
  return (
    <div>
      <h2>Signup Page</h2> {/* Page title */}

      {/* Signup form with name, email, and password inputs */}
      <form>
        <input type="text" placeholder="Name" required /> {/* Name input field */}
        <input type="email" placeholder="Email" required /> {/* Email input field */}
        <input type="password" placeholder="Password" required /> {/* Password input field */}
        <button type="submit">Sign Up</button> {/* Signup button */}
      </form>
    </div>
  );
}

export default SignupPage; // Export component for use in routing