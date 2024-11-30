import React from "react";
import { Header, Button } from "@cred/neopop-web/lib/components";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderComp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonColorConfig = {
    backgroundColor: "#0d0d0d",
    borderColor: "#E5FE40",
    color: "#ffffff",
  };

  const handleSignOut = () => {
    // Clear any user-related data if needed
    navigate("/signin"); // Redirect to the sign-in page
  };

  return (
    <div style={styles.headerWrapper}>
      <Header heading="Spendify" description="Manage your payments and rewards" />
      <div style={styles.buttonWrapper}>
        {location.pathname === "/Dashboard" ? (
          <Button
            colorConfig={buttonColorConfig}
            kind="elevated"
            size="big"
            variant="secondary"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        ) : (
          <>
            <Button
              colorConfig={buttonColorConfig}
              kind="elevated"
              size="big"
              variant="secondary"
              onClick={() => navigate("/signin")}
            >
              Sign In
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
          </>
        )}
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
