import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"; 
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";

// Main app layout with routes
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;