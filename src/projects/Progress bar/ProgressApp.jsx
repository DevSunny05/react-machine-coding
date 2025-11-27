import React, { useEffect } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgressApp = () => {
  const [value, setValue] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>Preogress Bar</span>

      <ProgressBar value={value} onComplete={() => setSuccess(true)} />

      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
};

export default ProgressApp;
