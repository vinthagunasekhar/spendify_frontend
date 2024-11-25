import React from "react";
import { Button } from "@cred/neopop-web/lib/components";
const SignIn = () => {
  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <Button type="submit" >Sign In</Button>
      </form>
    </div>
  );
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
  
};

export default SignIn;
