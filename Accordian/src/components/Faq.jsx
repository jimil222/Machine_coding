import React from 'react'
import Accordian from './Accordian'
import data from '../data.json'

const Faq = () => {
    console.log(data.faqs);
    return (

        <div>
            <h1>FAQ's</h1>
            {
                data.faqs.map((obj,index)=>{
                    return <Accordian key={index} qna={obj} />
                })
            }
        </div>
    )
}

export default Faq