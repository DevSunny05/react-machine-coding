import React, { useEffect, useState } from 'react'

const Emi = () => {
  const [principle,setPrinciple]=useState()
  const [intrest,setIntrest]=useState()
  const [year,setYear]=useState()

  const [emi,setEmi]=useState(0)



  const handleChange=(e)=>{
    console.log(e.target.id,e.target.value)
    const id=e.target.id;
    const value=parseInt(e.target.value)

    if(id==="principle"){
      setPrinciple(value)
    }else if(id=="intrest"){
      setIntrest(value)
    }else{
      setYear(value)
    }
  }

  const calculateEMI=()=>{
    let r=intrest/12/100
    if(principle && r && year){
      const power=Math.pow(1+r,year*12)

    const amount=principle*((r*power)/(power-1))

    setEmi(amount)
    }

  }

  useEffect(()=>{
    calculateEMI()
  },[principle,intrest,year])
  return (
    <div className='app'>
      <div className='emi__container'>
        <h1>EMI Calculator</h1>

        <div className='input__container'>
            <p>Principle:</p>
            <input onChange={handleChange} id='principle' />

            <p>Intrest:</p>
            <input onChange={handleChange} id='intrest' />

            <p>Years:</p>
            <input onChange={handleChange} id='years' />
        </div>

        <div className='out'>
            Your EMI is : {Math.round(emi)}
        </div>
    </div>
    </div>
  )
}

export default Emi