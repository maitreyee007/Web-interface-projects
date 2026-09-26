import React from "react";
import HobbyCard from "./HobbyCard";
import photo from "./photo.svg";
import "./hobby.css";

function HobbyApp() {
  const hobbies = [
    { name: "Photography", description: "Capturing moments, landscapes and portraits.", image: photo },
    {
      name: "Painting",
      description: "Exploring colors and textures on canvas.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Gardening",
      description: "Growing plants and creating green spaces.",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Cooking",
      description: "Experimenting with recipes and flavors.",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Cycling",
      description: "Long rides for fitness and exploration.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Music",
      description: "Playing instruments and composing tunes.",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div>
      <header style={{ textAlign: "center", padding: "20px 0" }}>
        <h1>Student Hobbies</h1>
      </header>

      <div className="hobby-grid">
        {hobbies.slice(0, 6).map((hobby, idx) => (
          <HobbyCard key={idx} name={hobby.name} description={hobby.description} image={hobby.image} />
        ))}
      </div>
    </div>
  );
}

export default HobbyApp;
