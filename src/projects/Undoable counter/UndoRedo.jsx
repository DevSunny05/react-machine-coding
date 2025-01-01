import React, { useState } from 'react'

const UndoRedo = () => {
    const [value,setValue]=useState(0)
    const [history,setHistory]=useState([])
    const [undoCount,setUndoCount]=useState(0)
    const [redo,setRedo]=useState([])

    const maintainHistory=(key,prev,curr)=>{
        const obj={
            action:key,
            prev,
            curr
        }

        const copyHistory=[...history]
        copyHistory.unshift(obj)
        setHistory(copyHistory)
    }

    const handleCount=(key)=>{
        const val=parseInt(key)
        maintainHistory(key,value,value+val)
        setValue((existingValue)=>existingValue+val)
    }

    const handleUndo=()=>{
       if(history.length>0){

        if(undoCount+1>5){
            "you cant undo beyond limit 5"
            return
        }
        const copyHistory=[...history]
        const firstVal=copyHistory.shift()
        setHistory(copyHistory)
        setValue(firstVal.prev)

        const copyRedo=[...redo]
        copyRedo.push(firstVal)
        setRedo(copyRedo)
       }

    }


    const handleRedo=()=>{
        if(redo.length){
            const copyRedo=[...redo]
        const lastValue=copyRedo.pop()
        const{action,prev,curr}=lastValue
        setValue(curr)
        maintainHistory(action,prev,curr)
        }
    }

  return (
    <div className='app'>
        <h1>Undoable counter</h1>

        <div className="action__buttons">
            <button onClick={handleUndo} className='app__button'>Undo</button>
            <button onClick={handleRedo} className='app__button'>Redo</button>
        </div>

        <div className="counter__buttons">
            {
                [-100,-10,-1].map((btn)=>{
                    return (
                        <button onClick={()=>handleCount(btn)} className='app__button'>{btn}</button>
                    )
                })
            }

            <div className='counterValue'>{value}</div>


            {
                ['+1','+10','+100'].map((btn)=>{
                    return (
                        <button onClick={()=>handleCount(btn)} className='app__button'>{btn}</button>
                    )
                })
            }
        </div>

        <div className='history__box'>
            {
                history.map((item)=>( 
                        <div className='row' >
                            <div>{item.action}</div>
                            <div>
                                {
                                    `[${item.prev} -->${item.curr}]`
                                }
                            </div>
                        </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default UndoRedo