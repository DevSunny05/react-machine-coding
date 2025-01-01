import React from 'react'

const ShowTimer = (props) => {
    const {pause,hour,minute,second,handleResume,handlePause,handleReset}=props
  return (
    <div className="timer_container">
    <div className="timer_box">
      <div>{hour < 10 ? `0${hour}` : hour}</div>
      <span>:</span>
      <div>{minute < 10 ? `0${minute}` : minute}</div>
      <span>:</span>
      <div>{second < 10 ? `0${second}` : second}</div>
    </div>
    {pause && (
      <button onClick={handleResume} className="timer_button">
        Resume
      </button>
    )}

    {!pause && (
      <button onClick={handlePause} className="timer_button">
        Pause
      </button>
    )}
    <button onClick={handleReset} className="timer_button">
      Reset
    </button>
  </div>
  )
}

export default ShowTimer