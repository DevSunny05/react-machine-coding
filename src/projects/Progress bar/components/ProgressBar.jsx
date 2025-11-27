import { useState, useEffect } from "react";

const ProgressBar = ({ value = 25, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));

    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div
      style={{
        width: "500px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        position: "relative",
        backgroundColor: "lightgray",
      }}
    >
      <span
        style={{
          width: "100%",
          position: "absolute",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: percent > 50 ? "white" : "black",
          fontWeight: "bold",
          zIndex: 10,
        }}
      >
        {percent}%
      </span>
      <div
        style={{
          height: "100%",
          backgroundColor: "lightgreen",
          width: `${percent}%`,
          borderRadius: "10px",
          transition: "width 0.1s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
