import React from "react";
import "./hobby.css";

function HobbyCard({ name, description, image }) {
  return (
    <div className="hobby-card">
      <img src={image} alt={name} className="hobby-image" />
      <div className="hobby-content">
        <h3 className="hobby-name">{name}</h3>
        <p className="hobby-desc">{description}</p>
      </div>
    </div>
  );
}

export default HobbyCard;
