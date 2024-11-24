import React from "react";

const DescriptionSection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Spendify</h1>
      <p style={styles.description}>
        Spendify is your all-in-one solution for managing your payments and rewards.
        Use your credit card to pay securely and earn exclusive rewards with every
        transaction. Designed to make your financial life simple and rewarding.
      </p>
      <div style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Secure Payments</h3>
          <p>Make payments safely with encrypted transactions.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Exclusive Rewards</h3>
          <p>Earn cashback and exclusive rewards for every purchase.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Easy to Use</h3>
          <p>A user-friendly interface designed for simplicity.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#0d0d0d",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto 2rem auto",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  featureCard: {
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
  },
};

export default DescriptionSection;
