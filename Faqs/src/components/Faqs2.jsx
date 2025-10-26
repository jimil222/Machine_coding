import React, { useEffect, useState } from 'react'
import data from '../data.json'
import Accordian from './Accordian'
import Accordian2 from './Accordian2'

const Faqs2 = () => {

    const [showopen,setshowopen] = useState(-1)

    const handleshow=(index)=>{
        setshowopen((prevstate)=>{
            if(prevstate===index){
                return -1
            }
            else{
                return index
            }
        })
    }
    
  return (
    <div>
        {
            data.faqs.map((item,index)=>{
                return <Accordian2 key={index} 
                qna={item}
                isopen={showopen===index}
                handleshow={()=>handleshow(index)}
                onToggle={()=>onToggle(index)}/>
            })
        }
    </div>
  )
}

export default Faqs2