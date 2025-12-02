import React, { useEffect, useState } from "react";

const getNums = () => {
  const list = [];
  for (let i = 1; i <= 8; i++) {
    list.push(i);
    list.push(i);
  }

  return list;
};

const MemeoryApp = () => {
  const [stage, setStage] = useState("init");
  const [nums, setNums] = useState(getNums());
  const [opened,setOpened]=useState([])
  const [solved,setSolved]=useState([])

  const randomNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setStage("start");
    setNums(randomNums());
    setSolved([])
  };

  const handleClick = (num, i) => {
    if(opened.length===2)
        return;
    setOpened((prev)=>[...prev,i])
  };

  console.log(solved);

  const getClassName=(num,index)=>{
    if(solved.includes(num)){
        return 'remove'
    }else if(opened.includes(index)){
        return 'show'
    }else{
        return 'hide'
    }
  }

  useEffect(()=>{
    if(opened.length==2){


        setTimeout(() => {
            const idx1=opened[0]
            const idx2=opened[1]

            if(nums[idx1]===nums[idx2]){
                setSolved((prev)=>[...prev,nums[idx1]])
            }
            setOpened([])
        }, 300);
    }
  },[opened])


  useEffect(()=>{
    if(solved.length===8){
        setStage('win')
    }
  },[solved])

  return (
    <div className="app">
      <h1>Card Game</h1>

      {stage === "init" && <button style={{width:'100px',height:'40px',background:'purple',color:'white',border:'none',fontSize:'16px'}} onClick={handleStart}>Play Game</button>}

      {stage === "start" && (
        <div className="game">
          <div className="cards">
            {nums.map((num, i) => (
              <div onClick={() => handleClick(num, i)} key={i} className={ `card ${getClassName(num,i)}`}>
                {num}
              </div>
            ))}
          </div>
        </div>
      )}

      {stage === "win" && (
        <div style={{display:'flex',flexDirection:'column',gap:'20px',margin:'20px',alignItems:'center'}}>
          <h1>You won the game</h1>
          <button style={{width:'100px',height:'40px',background:'purple',color:'white',border:'none'}} onClick={handleStart}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default MemeoryApp
