import React from "react";
import { Header, Button,Back } from "@cred/neopop-web/lib/components";


import { useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const navigate = useNavigate();

  const buttonColorConfig = {
    backgroundColor: "#0d0d0d",
    borderColor: "#E5FE40",
    color: "#ffffff",
  };

  return (
    <div style={styles.headerWrapper}>
      
      <Header heading="Spendify" description="Manage your payments and rewards" />
      <div style={styles.buttonWrapper}>
        <Button
          colorConfig={buttonColorConfig}
          kind="elevated"
          size="big"
          variant="secondary"
          onClick={() => navigate("/signin")}
        >
          Login
        </Button>
        <Button
          colorConfig={buttonColorConfig}
          kind="elevated"
          size="big"
          variant="secondary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

const styles = {
  headerWrapper: {
    position: "relative",
    backgroundColor: "#000000",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    position: "absolute",
    right: "1rem",
    display: "flex",
    gap: "0.5rem",
  },
};

export default HeaderComp;