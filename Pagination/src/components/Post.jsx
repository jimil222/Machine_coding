import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios'

const Post = () => {
  const [data, setdata] = useState([])
  const [page, setpage] = useState(5);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((res) => setdata(res.data)).catch((err) => console.log(err))
      .finally(() => setloading(false));

  }, [page])

  return (
    <div className='container'>
      {
        loading ? (
          <p>Loading...</p>
        ): (
            <div className = "post-container">
        {
          data.map((item,index)=>{
            return <img key={index} src={item.download_url} alt="" />
          })
        }
    </div>
  )
}

<Pagination page={page} setpage={setpage} />
    </div >
  )
}

export default Post