  import React, { useEffect, useRef, useState } from 'react'
  import data from '../data.json'

  function ImageCarousel() {
    const [index, setindex] = useState(0)
    const ref = useRef(null)
    const handleprev = () => {
      setindex(prev => (prev === 0 ? data.length - 1 : prev - 1))
    }
    const handlenext = () => { setindex(prev => prev === data.length - 1 ? 0 : prev + 1); };


    useEffect(() => {
      ref.current = setInterval(handlenext, 1000)
      return () => {
        clearInterval(ref.current)
      }
    }, [])
    return (
      <div onMouseEnter={() => clearInterval(ref.current)} className='container'
        onMouseLeave={() => {
          ref.current = setInterval(handlenext, 1000);
        }}>
        <div className="prev" onClick={handleprev}>
          {"<"}
        </div>
        <img src={data[index].download_url} alt="" />
        <div className="next" onClick={handlenext}>
          {">"}
        </div>
      </div>
    )
  }

  export default ImageCarousel
