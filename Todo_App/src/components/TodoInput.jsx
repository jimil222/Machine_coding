import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
    const [inputText, setinputText] = useState("")
    const handlechange = (e) => {
        setinputText(e.target.value)
    }
    return (
        <div className='flex items-center justify-center gap-x-3 mt-8'>
            <input
                type="text"
                name='inputText'
                value={inputText}
                onChange={handlechange}
                placeholder="Add a new task..."
                className='border border-gray-300 rounded-l-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400'
            />
            <button
                onClick={() => addTodo(inputText)}
                className='bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-r-md transition-colors'
            >
                Add Task
            </button>
        </div>

    )
}
export default TodoInput
