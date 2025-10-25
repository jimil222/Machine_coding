import React from 'react'

const Pagination = ({ page, setpage }) => {
  const handlenext = () => {
    setpage(page + 1)
  }
  const handleprev = () => {
    setpage(page - 1)
  }

  const prevpg = Array.from({ length: 3 }, (_, index) => page - 1 - index).filter((prev) => prev > 0).reverse()
  const nextpg = Array.from({ length: 4 }, (_, index) => page + index)
  const totalpg = [...prevpg, ...nextpg]
  console.log(totalpg);
  return (
    <div className='pagination-container'>
      {
        page > 1 ? <div className="pg-btn" onClick={handleprev}>
          {"<"}
        </div> : ""
      }
      {
        totalpg.map((item, index) => {
          return <div onClick={()=>setpage(item)} key={index} className={item===page?`pg-btn active`:`pg-btn`}>
            {item}
          </div>
        })
      }
      <div className="pg-btn" onClick={handlenext}>
        {">"}
      </div>
    </div>
  )
}

export default Pagination