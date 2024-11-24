import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComp from "./components/Header";
import DescriptionSection from "./components/Description";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
