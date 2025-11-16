import React, { useState } from 'react'

const Stepper = ({ data }) => {
    const [step,setstep] = useState(0)
    const handlecontinue =()=>{
        if(step<data.length-1){
            setstep(step+1)
        }
    }
    const handleback =()=>{
        if(step>0){
            setstep(step-1)
        }
    }
    return (
        <div className='stepper'>
            <div>
                {
                    data.map(({ label, content }, index) => {
                        return (
                            <div key={index} className='stepper-container'>
                                <div className={`step-number ${index<=step?"active":""}`}>
                                    {index + 1}
                                    {
                                        index<data.length-1&&<div className={`step-line ${index<step?"active":""}`}>
                                        </div>
                                    }
                                </div>
                                <div className="step-label">
                                    {label}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="stepper-content">{data[step].content}</div>
                <div className="stepper-controls">
                    <button onClick={handlecontinue}>
                        Continue
                    </button>
                    <button onClick={handleback}>
                        Back
                    </button>
                </div>
                <div className="stepper-info"></div>
        </div>
    )
}

export default Stepper