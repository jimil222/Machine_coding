import React, { useState } from 'react'

const Accordian = ({qna,onToggle}) => {
  return (
    <div className='accordian'>
        <h3 className='chid'>{qna.question}
        <span onClick={onToggle}>{qna.open?"-":"+"}</span>
        {qna.open && <p>{qna.answer}</p>}
        </h3>
    </div>
  )
}

export default Accordian