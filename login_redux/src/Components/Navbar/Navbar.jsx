import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        width: "800px",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
