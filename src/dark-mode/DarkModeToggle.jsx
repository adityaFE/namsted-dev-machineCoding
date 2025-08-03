import React, { useState } from "react";
import "./styles.css";

function DarkModeToggle() {
  const [currentMode, setCurrentMode] = useState("light");

  const toggleTheme = () => {
    if (currentMode === "light") {
      setCurrentMode("dark");
    } else {
      setCurrentMode("light");
    }
    console.log("theme toggled");
  };

  return (
    <div
      className={`container ${
        currentMode === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {currentMode === "light" ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
