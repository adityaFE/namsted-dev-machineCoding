import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Greeting() {
  function getCurrentTime() {
    const date = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const [hours] = date.split(":").map(Number);

    if (hours >= 5 && hours <= 12) {
      return { time: date, greeting: "Good Morning! ☀️" };
    } else if (hours > 12 && hours <= 17) {
      return { time: date, greeting: "Good Afternoon! 🌤️" };
    } else if (hours > 17 && hours <= 21) {
      return { time: date, greeting: "Good Evening! 🌆" };
    } else {
      return { time: date, greeting: "Good Night! 🌙✨" };
    }
  }

  const { time: initialTime, greeting: initialGreeting } = getCurrentTime();
  const [time, setTime] = useState(initialTime);
  const [text, setText] = useState(initialGreeting);

  useEffect(() => {
    const interval = setInterval(() => {
      const { time, greeting } = getCurrentTime();
      setTime(time);
      setText(greeting);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="modal-content">
      <h2 data-testid="greeting">{text}</h2>
      <p data-testid="time" className="timer-content">
        {time}
      </p>
    </div>
  );
}
