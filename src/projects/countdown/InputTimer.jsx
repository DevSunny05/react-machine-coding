import React from "react";

const InputTimer = ({ handleChange,handleStart }) => {
  return (
    <div className="input_Container">
      <div className="input_box">
        <input onChange={handleChange} id="hour" placeholder="HH" />
        <input onChange={handleChange} id="minute" placeholder="MM" />
        <input onChange={handleChange} id="second" placeholder="SS" />
      </div>
      <button onClick={handleStart} className="timer_button">
        Start
      </button>
    </div>
  );
};

export default InputTimer;
