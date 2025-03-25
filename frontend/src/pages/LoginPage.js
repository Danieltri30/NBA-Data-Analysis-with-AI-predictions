import React from "react";
import "./.styles/LoginPage.css"; 

// LoginPage component - handles user login input
function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login Page</h2> {/* Page title */}
      <form>
        <input type="email" placeholder="Email" /> {/* Email input */}
        <input type="password" placeholder="Password" /> {/* Password input */}
        <button>Login</button> {/* Login button */}
      </form>
    </div>
  );
}

export default LoginPage;