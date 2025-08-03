import React, { useState } from "react";
import "./styles.css";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab

  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>
      <div className="tab-buttons">
        {tabs.map((item) => (
          <button
            key={item.id}
            data-testid={`tab-button-${item.id}`}
            onClick={() => handleTabClick(item.id)}
            className={activeTab === item.id ? "active" : ""}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="tab-content" data-testid="tab-content">
        {tabs.map((item) =>
          activeTab === item.id ? <p key={item.id}>{item.content}</p> : null
        )}
      </div>
    </div>
  );
}
