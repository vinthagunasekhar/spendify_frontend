import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import Dashboard from "./Dashboard";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      checkPasswordStrength(value);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1; // Length requirement
    if (/[A-Za-z]/.test(password)) strength += 1; // Contains at least one letter
    if (/\d/.test(password)) strength += 1; // Contains at least one number

    setPasswordStrength(strength);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("User registered successfully!");
        setErrorMessage("");
        setFormData({ username: "", email: "", password: "" });
        setPasswordStrength(0);

        // Redirect to dashboard after successful signup
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // Optional delay to show success message
      } else {
        const error = await response.json();
        if (error.detail) {
          if (typeof error.detail === "object" && error.detail.details) {
            const emailError = error.detail.details.email;
            setErrorMessage(emailError || error.detail.message);
          } else if (Array.isArray(error.detail)) {
            const msg = error.detail[0]?.msg || "An error occurred.";
            setErrorMessage(msg);
          } else {
            setErrorMessage(error.detail.message || "An error occurred.");
          }
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.");
    }
  };

  const getStrengthLabel = () => {
    switch (passwordStrength) {
      case 1:
        return "Weak";
      case 2:
        return "Medium";
      case 3:
        return "Strong";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {message && <p className="success">{message}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <div className="password-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="password-input"
            required
          />
          <button
            type="button"
            className="info-button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            i
          </button>
          {showTooltip && (
            <div className="tooltip">
              Password must be at least 8 characters long, contain at least one
              letter, and one number.
            </div>
          )}
        </div>
        <div className="password-strength">
          <div
            className="strength-bar"
            style={{
              width: `${passwordStrength * 33.33}%`,
              backgroundColor: getBarColor(passwordStrength),
            }}
          />
          <p className="strength-label">{getStrengthLabel()}</p>
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const getBarColor = (strength) => {
  switch (strength) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "green";
    default:
      return "#ccc";
  }
};

export default SignUp;
