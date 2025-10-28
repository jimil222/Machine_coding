import React, { useEffect, useState } from 'react'
import Post from './Post';
const InfiniteScroll = () => {
    const [data, setdata] = useState([])
    const [page, setpage] = useState(1);

    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
            const info = await res.json()
            setdata((prev) => [...prev, ...info])

        }
        fetchdata()
        console.log(data);

    }, [page])
    return (
        <Post data={data} setpage={setpage} />
    )
}

export default InfiniteScroll