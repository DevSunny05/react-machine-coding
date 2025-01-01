import React, { useEffect, useRef, useState } from "react";

const OtpApp = () => {
  const emptyArr = ["", "", "", ""];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing,setMissing]=useState(emptyArr)
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const val = e.target.value;

    if (!Number(val)) {
      return;
    }
    
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);

    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
};

  console.log(inputs);

  const handleOnKeyDown=(e,i)=>{
    console.log(e.keyCode,i)
    if(e.keyCode===8){
      const copyInputs=[...inputs]
      copyInputs[i]=""
      setInputs(copyInputs)

      if(i>0){
        refs[i-1].current.focus()
      }
    }
  }

  const handlePaste=(e)=>{
    const data=e.clipboardData.getData("text")
    console.log(data)

    if(!Number(data) || data.length !==inputs.length){
      return ;
    }
    const pasteCode=data.split('')
    setInputs(pasteCode)

    refs[inputs.length-1].current.focus()
  }

  const handleSubmit=()=>{
    const missed=inputs.map((item,i)=>{
      if(item===""){
        return i;
      }
    }).filter((item)=>(item || item ===0))

    setMissing(missed)
  }

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <div className="app">
      <h1>Two-factor code input</h1>
      <div className="code__input">
        {emptyArr.map((item, i) => (
          <input
            onChange={(e) => handleChange(e, i)}
            value={inputs[i]}
            ref={refs[i]}
            key={i}
            type="text"
            maxLength={1}
            onKeyDown={(e)=>handleOnKeyDown(e,i)}
            onPaste={handlePaste}
            className={missing.includes(i)?'error':''}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OtpApp;
