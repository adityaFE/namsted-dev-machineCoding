import React, { useState, useRef } from "react";
import "./styles.css";

function EvenOrOddChecker() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const inputValidator = (val) => {
    return val !== "" && /^\d+$/.test(val);
  };

  const handleCheck = () => {
    const val = inputRef.current?.value || "";
    const trimmedVal = val.trim();
    const isValid = inputValidator(trimmedVal);
    if (!isValid) {
      setResult("Please enter a valid number");
      return;
    }
    const parsedNumber = parseInt(trimmedVal, 10);
    setLoading(true);
    setResult("");
    setTimeout(() => {
      if (parsedNumber % 2 === 0) {
        setResult(`The number ${parsedNumber} is even.`);
      } else {
        setResult(`The number ${parsedNumber} is odd.`);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        ref={inputRef}
        className="number-input"
        type="text"
        placeholder="Enter a number"
        data-testid="number-input"
      />

      <button
        className="check-button"
        data-testid="check-button"
        onClick={handleCheck}
      >
        Check
      </button>
      {loading && (
        <div data-testid="loading" className="loading">
          Checking...
        </div>
      )}
      <div className="result-area">
        <div className="result" data-testid="result">
          {result}
        </div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
