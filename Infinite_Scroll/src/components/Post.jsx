import React, { useEffect } from 'react'

const Post = ({ data, setpage }) => {

    console.log(data);

    useEffect(() => {
        const observer = new IntersectionObserver((param) => {
            console.log(param);
            if (param[0].isIntersecting) {
                observer.unobserve(lastImage)
                setpage((page) => page + 1)
            }
        }, { threshold: 0.5 })
        const lastImage = document.querySelector(".imgpost:last-child")
        if (!lastImage) return;
        observer.observe(lastImage)

        return () => {
            if(lastImage){
                observer.unobserve(lastImage)
            }
            observer.disconnect();
        }
    }, [data])


    return (
        <div className='container'>
            {
                data.map((item) => {
                    return <img className='imgpost' key={item.id} src={item.download_url} alt="" />
                })
            }
        </div>
    )
}

export default Post