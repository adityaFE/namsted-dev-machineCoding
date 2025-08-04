// Questionk link: https://www.greatfrontend.com/questions/user-interface/grid-lights?language=js&tab=coding

// Build a 3x3 grid of light cells (omitting the center cell) where you can click on the cells to activate them,
// turning them green. When all the cells have been activated, they will be deactivated one by one in the
// reverse order they were activated with a 300ms interval in between.

import { useState, useEffect } from "react";
import "./styles.css";

export default function GridLights() {
  const [orderOfClickingCell, setOrderOfClickingCell] = useState([]);

  const gridItems = [];

  const handleClick = (i) => {
    if (orderOfClickingCell.length < 8 && !orderOfClickingCell.includes(i)) {
      setOrderOfClickingCell((prev) => [...prev, i]);
    }
  };

  useEffect(() => {
    if (orderOfClickingCell.length === 8) {
      const interval = setInterval(() => {
        setOrderOfClickingCell((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 300);
    }
  }, [orderOfClickingCell.length]);

  for (let i = 0; i < 9; i++) {
    if (i === 4) {
      gridItems.push(<span key={i}></span>);
      continue;
    }
    const isClicked = orderOfClickingCell.includes(i);
    gridItems.push(
      <button
        className={`grid-item ${isClicked ? "clicked" : ""}`}
        key={i}
        onClick={() => handleClick(i)}
      ></button>
    );
  }

  return (
    <div>
      <div className="grid-container">{gridItems}</div>
      <div className="order-array">
        order array:
        {orderOfClickingCell.map((value, idx) =>
          idx === 0 ? value : `, ${value}`
        )}
      </div>
    </div>
  );
}
