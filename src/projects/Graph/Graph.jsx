import React, { useEffect, useState } from 'react'

const Graph = () => {

    const [frequency,setFrequency]=useState(undefined)
    const [yAxis,setYAxis]=useState([])

    const fetchData=async()=>{
        const res=await fetch("https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new")
        let data=await res.text()
        data= data.split("\n").filter(Boolean)
        const mapData={}

        data?.forEach((item)=>{
            if(mapData[item]){
                mapData[item]=mapData[item]+1
            }else{
                mapData[item]=1
            }
        })
        setFrequency(mapData)
    }

    console.log(yAxis)

    useEffect(()=>{
        if(frequency){
            const max=Math.max(...Object.values(frequency))
            const maxVal=Math.ceil(max/10)*10;
            let arr=[]

            for(let i=(maxVal/10); i>=0; i--){
                arr.push(i*10)
            }
            setYAxis(arr)
        }
    },[frequency])

    useEffect(()=>{
        fetchData()

    },[])
  return (
    <div className='App'>
        <div className="container">
            <div className="box">
                <div style={{height:`${yAxis&& yAxis[0]}%`}} className="box-y-axis">
                    {
                        yAxis.map((val,idx)=>(
                            <div key={idx}>
                                <span>{val}</span>
                            </div>
                        ))
                    }
                </div>
                {
                    frequency &&
                    Object.entries(frequency).map(([key,val])=>(
                        <div className='box-x-axis'>
                            <div style={{height:`${val}%`}} className='graph'>

                            </div>
                            <div className='index'>
                                {key}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Graph