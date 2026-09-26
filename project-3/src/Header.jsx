import React from "react";
import "./Dashboard.css";

function Header({ collegeName }) {
  return (
    <header className="dashboard-header">
      <h1>{collegeName}</h1>
      <p>Student Dashboard - Unit 2 Project 1</p>
    </header>
  );
}

export default Header;
