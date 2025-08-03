import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  const [colorInput, setColorInput] = useState("");
  const [name, setName] = useState("");
  const [hexCode, setHexCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleSearch = () => {
    const newHexCode = colorNameToHex(colorInput.trim().toLowerCase());
    if (!newHexCode) {
      setErrorMsg("Sorry, I couldn't recognize that color.");
      return;
    }
    setErrorMsg("");
    setHexCode(newHexCode);
    setName(colorInput.trim().toLowerCase());
    console.log(hexCode);
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={colorInput}
          onChange={handleChange}
        />
        <button data-testid="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      {errorMsg ? (
        <p className="error" data-testid="error-msg">
          {errorMsg}
        </p>
      ) : (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: `${hexCode}` }}
          ></div>
          <p data-testid="color-name">
            <strong>Name: {name}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {hexCode}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
