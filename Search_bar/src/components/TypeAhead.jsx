import React, { useEffect, useReducer, useRef, useState } from 'react'


const status = {
    success: 'success',
    error: 'error',
    loading: 'loading'
}

const TypeAhead = () => {
    const [query, setquery] = useState("");
    const [result, setresult] = useState([])
    const [currstatus, setcurrstatus] = useState(status.loading)
    const cache = useRef({})


    useEffect(() => {
        const abortcontroller = new AbortController();
        const { signal } = abortcontroller;
        const handleres = async () => {
            try {
                if (cache.current[query]) {
                    setresult(cache.current[query])
                    setcurrstatus(status.success)
                    return;
                }
                setcurrstatus(status.loading)
                console.log('Api called');
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`, { signal })
                const data = await res.json();
                setcurrstatus(status.success)
                cache.current[query] = data.products
                setresult(data.products);

            } catch (error) {   
                console.log(error);
                if (error.name !== 'AbortError') {
                    setcurrstatus(status.error)
                }
            }
        }
        const timerId = setTimeout(handleres, 1000)
        return () => {
            clearTimeout(timerId)
            abortcontroller.abort();
        }
    }, [query])



    return (
        <div>
            <input type="search" name="" id=""
                value={query}
                onChange={(e) => setquery(e.target.value)}
            />
            {currstatus === status.loading && <div>Loading...</div>}
            {currstatus === status.error && <div>Error...</div>}
            {currstatus === status.success &&
                <ul>
                    {
                        result.map((item, index) => {
                            return <li key={index}>{item.title}</li>
                        })

                    }
                </ul>
            }
        </div>
    )
}

export default TypeAhead