import React, { useRef, useState } from 'react'

const ToastContainer = () => {

    const [toasts, settoasts] = useState([])
    const timersRef = useRef({})
    console.log(timersRef);
    

    const handleadd = (message, type) => {
        const id = new Date().getTime()
        const newToasts = [...toasts, { id, message, type }]
        settoasts(newToasts)
        timersRef.current[id] = setTimeout(() => handleclose(id), 5000)
    }

    const handleclose = (id) => {
        clearTimeout(timersRef.current[id])
        delete timersRef.current[id]
        settoasts((prev) => {
            const filteredToast = prev.filter((toast) => {
                return toast.id !== id
            })
            return filteredToast
        })
    }

    return (
        <div className="container">
            <div className="toast-container">
                {
                    toasts.map(({ id, message, type }) => {
                        return <div key={id} className={`toast ${type}`}>
                            {message} <span onClick={() => handleclose(id)}>x</span>
                        </div>
                    })
                }

            </div>
            <div className="btn-container">
                <button onClick={() => handleadd('Success', 'success')}>Success</button>
                <button onClick={() => handleadd('Info', 'info')}>Info</button>
                <button onClick={() => handleadd('Warning', 'warning')}>Warning</button>
                <button onClick={() => handleadd('Error', 'error')}>Error</button>
            </div>
        </div>
    )
}

export default ToastContainer