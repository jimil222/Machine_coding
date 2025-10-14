import React, { useEffect } from 'react'

const TodoItem = ({ todo, deleteTodo, Markcomplete }) => {
  useEffect(() => {
    console.log(todo);
  }, [todo])
  
  return (
    
    <div className="flex items-center justify-between bg-white shadow-md p-3 rounded-md hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => Markcomplete(todo)}
          className="h-5 w-5 text-pink-500 rounded"
        />  
        <p className='text-black'>
          {todo.text} 
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
      >
        Delete
      </button>
    </div>

  )
}

export default TodoItem