import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";

const Ratings = ({ starValue = 5 }) => {
  const [starCount, setstarCount] = useState(0)
  const [hoverCount, sethoverCount] = useState(0)
  return (
    <div className='container'>
      {
        new Array(starValue).fill(0).map((_, index) => (
          <span
            key={index}
            className={index < (hoverCount || starCount) ? 'gold' : ''}
            onClick={() => setstarCount(index + 1)}
            onMouseEnter={() => sethoverCount(index + 1)}
            onMouseLeave={() => sethoverCount(0)}
          ><FaRegStar /></span>
        ))
      }
    </div>
  )
}

export default Ratings