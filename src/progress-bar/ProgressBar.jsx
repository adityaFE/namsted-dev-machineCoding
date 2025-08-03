import React, { useState } from "react";

function ProgressBar() {
  const [currentProgress, setCurrentProgress] = useState(0);

  const getBackground = (currentProgress) => {
    if (currentProgress >= 0 && currentProgress < 40) {
      return "red";
    }
    if (currentProgress >= 40 && currentProgress < 80) {
      return "orange";
    }
    if (currentProgress >= 80) {
      return "green";
    }
  };

  return (
    <div>
      <p>Progress Bar</p>
      <div
        style={{
          borderRadius: "8px",
          textAlign: "center",
          background: "rgb(221, 221, 221)",
          margin: "16px 0",
          height: "24px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        id="testBgColor"
      >
        <div
          style={{
            backgroundColor: getBackground(currentProgress),
            height: "100%",
            width: `${currentProgress}%`,
            transition: "width 0.3s ease-in-out",
            zIndex: "2",
          }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {currentProgress}%
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            currentProgress > 0 && setCurrentProgress(currentProgress - 10);
          }}
        >
          -10%
        </button>
        <button
          onClick={() => {
            currentProgress < 100 && setCurrentProgress(currentProgress + 10);
          }}
        >
          +10%
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
