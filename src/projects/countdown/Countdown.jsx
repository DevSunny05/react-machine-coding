import React, { useEffect, useState } from "react";
import InputTimer from "./InputTimer";
import ShowTimer from "./ShowTimer";

const Countdown = () => {
  const [hour, setHour] = useState(0);
  const [pause, setPause] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hour") {
      setHour(value);
    } else if (id === "minute") {
      setMinute(value);
    } else {
      setSecond(value);
    }
  };
  

  const handleStart = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert("Invalid input");
      return;
    } else {
      setStart(true);
    }
  };

  const handleReset = () => {
    setStart(false);
    resetTimer()
  };

  const resetTimer=()=>{
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(timerId)
  }

  const handlePause = () => {
    setPause(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setPause(false);
    runTimer(second, minute, hour, timerId);
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec == 0 && min > 0) {
      setMinute((m) => m - 1);
      setSecond(59);
    } else {
      setHour((h) => h - 1);
      setMinute(59);
      setSecond(59);
    }

    if (sec == 0 && min == 0 && hr == 0) {
      resetTimer()
      alert("Timer is finish")
      clearInterval(tid)
      return
    }
  };

  useEffect(() => {
    let tid;
    if (start) {
      tid = setInterval(() => {
        runTimer(second, minute, hour, tid);
      }, 1000);
      
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [start, hour, minute, second]);
  return (
    <div className="app">
      <h1>Countdown Timer</h1>
      {!start && 
        <InputTimer handleChange={handleChange} handleStart={handleStart}/>
      }

      {start && (
       <ShowTimer pause={pause} hour={hour} minute={minute} second={second} handleResume={handleResume} handlePause={handlePause} handleReset={handleReset}  />
      )}
    </div>
  );
};

export default Countdown;
