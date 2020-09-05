import React from "react";
import "./style.css";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="background"
    >
      <div style={{ color: "#fff", marginRight: "20%" }}>
        <h3>Launches</h3>
      </div>
      <div style={{ color: "#fff", marginRight: "20%", fontWeight: "bold" }}>
        <h1>Starlink Mission</h1>
      </div>
    </div>
  );
};

export default LandingPage;
