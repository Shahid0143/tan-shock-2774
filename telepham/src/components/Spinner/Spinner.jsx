import React from "react";
import "../Spinner/Spinner.css";
const LoadingSpinner = () => {
  return (
    <div id="main">
      <div id="container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                floodColor="#1c9f8d"
              />
            </filter>
          </defs>
          <circle
            id="spinner"
            style={{
              fill: "transparent",
              stroke: "#159e9a",
              strokeWidth: "7px",
              strokeLinecap: "round",
              filter: "url(#shadow)",
            }}
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
