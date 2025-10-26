import React, { useState } from 'react'

const Accordian2 = ({qna,isopen,handleshow}) => {
  return (
    <div className='accordian'>
        <h3 className='chid'>{qna.question}
        <span onClick={handleshow}>{isopen?"-":"+"}</span>
        {isopen && <p>{qna.answer}</p>}
        </h3>
    </div>
  )
}

export default Accordian2