import React, { useState } from 'react'

const Accordian = ({qna}) => {
    const [show,setshow] = useState(false);
  return (
    <div className='accordian'>
        <h3 className='chid'>{qna.question}
        <span onClick={()=>setshow(!show)}>{show?"-":"+"}</span>
        {show?<p>{qna.answer}</p>:" "}
        </h3>
    </div>
  )
}

export default Accordian