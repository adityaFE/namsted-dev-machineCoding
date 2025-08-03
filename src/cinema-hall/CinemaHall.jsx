import { useState } from "react";
import "./styles.css";

const ROW = 10,
  COL = 10;

export default function CinemaHall() {
  const [selectSeats, setSelectSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSelectSeat = (rowIdx, colIdx) => {
    const isBooked = bookedSeats.some(([r, c]) => r === rowIdx && c === colIdx);
    if (isBooked) return;

    setSelectSeats((prev) => {
      const isSelected = prev.some(([r, c]) => r === rowIdx && c === colIdx);
      if (isSelected) {
        return prev.filter(([r, c]) => !(r === rowIdx && c === colIdx));
      } else {
        return [...prev, [rowIdx, colIdx]];
      }
    });
  };

  const bookSeats = () => {
    if (!selectSeats.length) {
      alert("Please select at least one seat");
      return;
    }
    setBookedSeats((prev) => [...prev, ...selectSeats]);
    setSelectSeats([]);
  };

  console.log(bookedSeats);

  const handleClear = () => {
    if (selectSeats) {
      setSelectSeats([]);
    }
  };

  const handleReset = () => {
    setBookedSeats([]);
    setSelectSeats([]);
  };

  return (
    <div className="main-container">
      <h1>Cinema Hall</h1>
      <div className="button-section">
        <button data-testid="book-button" onClick={bookSeats}>
          Book Seats
        </button>
        <button data-testid="clear-button" onClick={handleClear}>
          Clear
        </button>
        <button data-testid="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="cinema-hall" data-testid="cinema-hall">
        {Array.from({ length: ROW }, (_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {Array.from({ length: COL }, (_, colIdx) => {
              const isSelected = selectSeats.some(
                ([r, c]) => r === rowIdx && c === colIdx
              );
              const isBooked = bookedSeats.some(
                ([r, c]) => r === rowIdx && c === colIdx
              );
              return (
                <div
                  className={`col ${
                    isSelected
                      ? "selected-seat"
                      : isBooked
                      ? "disabled-seat"
                      : "seat"
                  } `}
                  key={colIdx}
                  data-testid={`seat-${
                    String.fromCharCode(rowIdx + 65) + colIdx
                  }`}
                  onClick={() => handleSelectSeat(rowIdx, colIdx)}
                >
                  {String.fromCharCode(rowIdx + 65) + colIdx}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
