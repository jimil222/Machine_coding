import React, { useEffect, useState } from 'react'

const Progress = () => {
    const[bar,setbar] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Interval Running");
            setbar((prevbar)=>{
                if(prevbar>=100){
                    clearInterval(interval)
                    return prevbar
                }
                return prevbar+5
            })
        },150)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div className='container'>
        <div style={{transform:`translateX(${bar-100}%)`}} className="progress">
        </div>
    </div>
  )
}

export default Progress