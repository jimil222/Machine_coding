import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo, Markcomplete }) => {
  return (
    <div className="max-w-md mx-auto mt-6 space-y-2">
      {todos.map((item,idx) => (
        <TodoItem
          key={idx}
          todo={item}
          deleteTodo={deleteTodo}
          Markcomplete={Markcomplete}
        />
      ))}
    </div>

  )
}

export default TodoList