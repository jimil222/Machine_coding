import React, { useEffect, useRef, useState } from 'react'

const TypingEffect = ({text,delay}) => {
    // this is the text which is accepted
    const [typeText,setTypedText] = useState(text);
    // this is the ref which keeps track of the endindex
    const velocityRef = useRef({speed:1,endIndex:0})

    useEffect(() => {
        // Core logic for implementing the typing effect
      const intervals = setInterval(()=>{
        // if forward typing is complete setting -1 for backward
        if(velocityRef.current.endIndex===text.length){
            velocityRef.current.speed=-1;
        }
        // creating a cycle for back and forward
        else if(velocityRef.current.endIndex===0){
            velocityRef.current.speed=1;
        }
        // Logic for forward typing 
        velocityRef.current.endIndex+=velocityRef.current.speed;
        setTypedText(text.slice(0,velocityRef.current.endIndex))
      },delay)
    
      // clearing the intervals after unmount
      return () => {
        clearInterval(intervals)
      }
    }, [text,delay])
    
  return (
    <div>
        <h2>{typeText} <span>|</span></h2>
    </div>
  )
}

export default TypingEffect