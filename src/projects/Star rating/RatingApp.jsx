import React, { useState } from "react";

const RatingApp = () => {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)

    // console.log('rating',rating)
    // console.log('hover',hover)
    // console.log('((rating && hover) || hover)',((rating && hover) || hover))

  return (
    <div className="app">
      <h1>Star Rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
           onClick={()=>setRating(num)}
           onMouseOver={()=>setHover(num)}
           onMouseLeave={()=>setHover(rating)}
            className="star__button">
            <span className={`star ${num<=((rating && hover) || hover)?'on':'off'}`}>&#9733;</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingApp;
