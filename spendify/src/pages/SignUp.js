import React, { useState } from "react";

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
        setErrorMessage(""); // Clear any previous error message
        setFormData({ username: "", email: "", password: "" }); // Clear fields
        setPasswordStrength(0); // Reset password strength
        console.log("Success:", result);
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
        console.error("Error:", error);
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.");
      console.error("Unexpected error:", error);
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
    <div style={styles.container}>
      <h2>Sign Up</h2>
      {message && <p style={styles.success}>{message}</p>}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <div style={styles.passwordContainer}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.passwordInput}
            required
          />
          <button
            type="button"
            style={styles.infoButton}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            i
          </button>
          {showTooltip && (
            <div style={styles.tooltip}>
              Password must be at least 8 characters long, contain at least one
              letter, and one number.
            </div>
          )}
        </div>
        <div style={styles.passwordStrength}>
          <div
            style={{
              ...styles.strengthBar,
              width: `${passwordStrength * 33.33}%`,
              backgroundColor: getBarColor(passwordStrength),
            }}
          />
          <p style={styles.strengthLabel}>{getStrengthLabel()}</p>
        </div>
        <button type="submit" style={styles.button}>
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

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "0.5rem 0",
    padding: "0.5rem",
    width: "80%",
    maxWidth: "300px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "300px",
    position: "relative",
    margin: "0.5rem 0",
  },
  passwordInput: {
    flex: "1",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  infoButton: {
    marginLeft: "0.5rem",
    padding: "0.2rem 0.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "0.8rem",
    height: "100%",
  },
  tooltip: {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0.5rem",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "0.8rem",
    zIndex: 1,
    width: "250px",
    textAlign: "center",
  },
  passwordStrength: {
    margin: "0.5rem 0",
    width: "80%",
    maxWidth: "300px",
    textAlign: "left",
  },
  strengthBar: {
    height: "10px",
    borderRadius: "4px",
    backgroundColor: "#ccc",
  },
  strengthLabel: {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  success: {
    color: "green",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  error: {
    color: "red",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
};

export default SignUp;
