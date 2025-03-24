import React from "react";
import "./.styles/LoginPage.css"; // Import styles for the login page

// LoginPage component - handles user login input
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2> {/* Page title */}

      {/* Login form with email and password inputs */}
      <form>
        <input type="email" placeholder="Email" /> {/* Email input field */}
        <input type="password" placeholder="Password" /> {/* Password input field */}
        <button>Login</button> {/* Login button */}
      </form>
    </div>
  );
}

export default LoginPage; // Export component for use in routing