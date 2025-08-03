import React, { useState } from "react";
import "./styles.css";

function AgeCalculator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const today = new Date();
  const yyyy = String(today.getFullYear());
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayDate = yyyy + "-" + mm + "-" + dd;

  const isInFuture = (date) => {
    if (date > todayDate) {
      return true;
    }
    return false;
  };

  const getDateDifference = (selectedDate, todayDate) => {
    console.log(selectedDate);
    console.log(todayDate);
    const start = new Date(selectedDate);
    const end = new Date(todayDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      // Go to previous month
      months -= 1;

      // Days in the previous month
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }
    setResult(
      String(years) +
        " years, " +
        String(months) +
        " months, " +
        String(days) +
        " days "
    );
  };

  const handleClick = () => {
    if (!selectedDate) {
      setResult("");
      setError("Please select a date");
      return;
    }
    if (isInFuture(selectedDate)) {
      setResult("");
      setError("Birthdate cannot be in the future");
      return;
    }
    setError("");
    getDateDifference(selectedDate, todayDate);
  };

  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label" data-testid="label-birthdate">
        Enter/Select a birthdate:
      </label>
      <input
        data-testid="input-birthdate"
        type="date"
        className="input-date"
        value={selectedDate}
        onChange={handleChange}
      />
      <button
        className="btn-calc"
        data-testid="btn-calculate"
        onClick={handleClick}
      >
        Calculate Age
      </button>
      {error && (
        <p className="error-msg" data-testid="error-msg">
          {error}
        </p>
      )}
      <p className="age-result" data-testid="age-result">
        {result}
      </p>
    </div>
  );
}

export default AgeCalculator;
