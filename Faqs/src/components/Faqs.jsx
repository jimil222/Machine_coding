import React, { useEffect, useState } from 'react'
import data from '../data.json'
import Accordian from './Accordian'

const Faqs = () => {

    const [ans,setans] = useState([])
    const allfaqs = data.faqs.map((item,index)=>{
        return {...item,open:false}
    })

    const onToggle=(index)=>{
        const updated = ans.map((item,i)=>({
            ...item,
            open:index===i?!item.open:false
        }))
        setans(updated)
    }

    useEffect(() => {
      setans(allfaqs)
      
    }, [])
  return (
    <div>
        {
            ans.map((item,index)=>{
                return <Accordian key={index} 
                qna={item}
                onToggle={()=>onToggle(index)}/>
            })
        }
    </div>
  )
}

export default Faqs