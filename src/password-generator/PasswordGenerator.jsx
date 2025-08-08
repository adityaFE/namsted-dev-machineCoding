import { useState } from "react";
import "./styles.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [error, setError] = useState("");
  const [checkboxes, setCheckBoxes] = useState({
    lowerCase: true,
    upperCase: false,
    numbers: false,
    symbols: false,
  });

  const handleChangeInput = (e) => {
    setError("");
    let newlength = parseInt(e.target.value);
    if (newlength > 20) {
      setError("Max length is 20");
      setPassword("");
      newlength = 20;
    }
    setPasswordLength(newlength);
  };

  const handleGenerate = () => {
    setError("");

    if (!passwordLength || passwordLength === 0) {
      setError("Length cannot be Empty or 0");
    }

    let chars = "";

    if (checkboxes.lowerCase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkboxes.upperCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (checkboxes.numbers) {
      chars += "1234567890";
    }

    if (checkboxes.symbols) {
      chars += "!@#$%^&*();:";
    }

    if (chars.length === 0) {
      setError("Select at least one option");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const random = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[random];
    }
    setPassword(generatedPassword);
  };

  console.log(password);

  const handleClick = (e) => {
    const { name, checked } = e.target;
    setCheckBoxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>

      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          Password Length
          <input
            type="number"
            id="passwordLength"
            data-testid="length-input"
            min="1"
            max="20"
            value={passwordLength}
            onChange={handleChangeInput}
          />
        </label>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="lowerCase"
              data-testid="lowercase-checkbox"
              checked={checkboxes.lowerCase}
              onChange={handleClick}
            />
            Include LowerCase
          </label>

          <label>
            <input
              type="checkbox"
              name="upperCase"
              data-testid="uppercase-checkbox"
              checked={checkboxes.upperCase}
              onChange={handleClick}
            />
            Include UpperCase
          </label>

          <label>
            <input
              type="checkbox"
              name="numbers"
              data-testid="number-checkbox"
              checked={checkboxes.numbers}
              onChange={handleClick}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              name="symbols"
              data-testid="symbols-checkbox"
              checked={checkboxes.symbols}
              onChange={handleClick}
            />
            Include Symbols
          </label>
        </div>

        <button
          className="generate-btn"
          data-testid="generate-button"
          onClick={handleGenerate}
        >
          Generate
        </button>
        {error && (
          <p className="error" data-testid="error-message">
            {error}
          </p>
        )}
      </div>
      <div className="result">
        {password && (
          <input type="text" value={password} data-testid="result" readOnly />
        )}
      </div>
    </div>
  );
}
export default PasswordGenerator;
