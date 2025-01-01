import React, { useState } from 'react'

const CalculatorApp = () => {
    const[value,setValue]=useState('')
    const arr=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','C','.']

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleClick=(e)=>{
        const id=e.target.id

        if(id==='C'){
            setValue("")
        }else if(id==='='){
            handleSubmit()
        }else{
            setValue((value)=>value+id)
        }
    }


    const handleSubmit=(e)=>{
        e?.preventDefault()
        try {
            const ans=eval(value)
            setValue(ans)
        } catch (error) {
            alert("Invalid Inputs")
        }

    }
  return (
    <div className='app'>
        <h1>Calculator</h1>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value} className='calculator__input' type="text" />
        </form>

        <div className="calculator__container" onClick={handleClick} >
            {
                arr.map((item,i)=>(
                    <button id={item} key={i} className='cell'>{item}</button>
                ))
            }
        </div>
    </div>
  )
}

export default CalculatorApp