import React, { useEffect, useState } from "react";

const FaqBox = ({faq,index}) => {
    const [isShown,setIsShown]=useState(false)

    const handleClick=()=>{
        setIsShown((isShown)=>!isShown)
    }

    useEffect(()=>{
        if(index==0){handleClick
            setIsShown(true)
        }
    },[])
  return (
    <div className="faq_container">
      <div className="ques__container" onClick={handleClick}>
        <button className={isShown ?'arrow':''} >ᐳ</button>
        <p className="ques">{faq.ques}</p>
      </div>
      {isShown && <p className="ans">{faq.ans}</p>}
    </div>
  );
};

export default FaqBox;
