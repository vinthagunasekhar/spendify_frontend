import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComp from "./components/Header";
import DescriptionSection from "./components/Description";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <HeaderComp />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<DescriptionSection />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
