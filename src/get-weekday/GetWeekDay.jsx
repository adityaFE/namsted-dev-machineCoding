import React, { useState } from "react";
import "./styles.css";

export default function GetWeekday() {
  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input type="date" data-testid="date-input" />
      <button data-testid="find-day-btn">Find Day</button>
    </div>
  );
}
