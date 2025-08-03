import React, { useState } from "react";
import "./styles.css";

function GuessTheNumber() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [tries, setTries] = useState(0);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleGuess = () => {
    const guess = parseInt(input, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setText("Please enter a number between 1 and 100.");
      return;
    }

    const newTries = tries + 1;
    setTries(newTries);

    if (guess === randomNumber) {
      setText(
        `Congratulations! You guessed the number in ${newTries} attempts.`
      );
    } else if (guess > randomNumber) {
      setText("Too high! Try again.");
    } else {
      setText("Too low! Try again.");
    }
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setInput("");
    setTries(0);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        onChange={handleChange}
        type="number"
        value={input}
      />
      <div>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default GuessTheNumber;
