import React, { useEffect, useRef, useState } from 'react'

const React_Otp = ({otplength}) => {
  const [otpfields,setotpfields] = useState(new Array(otplength).fill(""));
  const getref = useRef([])

  useEffect(() => {

    getref.current[0].focus()
    
  }, [])
  

  const handlekeydown=(e,index)=>{
    const key = e.key;
    if(key==="ArrowLeft"){
        if(index-1>=0){
        getref.current[index-1].focus()
        return
        }
    }
    else if(key==="ArrowRight"){
        if(index+1<otpfields.length){
            getref.current[index+1].focus()
            return
        }
    }
    const copyOtp = [...otpfields]
    if(key==="Backspace"){
        console.log("cliced");
        copyOtp[index] = ""
        setotpfields(copyOtp)
        if(index-1>=0){
            getref.current[index-1].focus()
        }
    }
    if(isNaN(key)){
        return;
    }
    copyOtp[index] = key;
    setotpfields(copyOtp)
    if(index+1<otpfields.length){
        getref.current[index+1].focus()
    }
  }

  return (
    <div className='container'>
        {
            otpfields.map((item,index)=>{
                return <input type="text" 
                key={index}
                value={item}
                onChange={()=>{}}
                ref={(currentInput)=>getref.current[index]=currentInput}
                onKeyDown={(e)=>handlekeydown(e,index)}
                />
            })
        }
    </div>
  )
}
export default React_Otp