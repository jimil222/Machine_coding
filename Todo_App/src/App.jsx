import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"))||[]
    setTodos(savedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  const addTodo = (todo) => {
    if (!todo) return
    else {
      const newtodo = {
        id: Date.now(),
        text: todo,
        completed: false
      }
      setTodos(prev => [...prev, newtodo])
    }
  }

  const deleteTodo = (todo) => {
    if (!todo) return
    else {
      setTodos(todos.filter(prev => prev.id != todo.id))
    }
  }

  const Markcomplete = (todo) => {
    if (!todo) return
    else {
      const newone = todos.map((item, idx) => {
        if (item.id == todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
      setTodos(newone)
    }
  }

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full text-center max-w-md bg-white shadow-lg rounded-xl p-8 mt-20 my-20">
        <h1 className="font-bold text-2xl font-serif mb-6 text-pink-500">Your Todo App</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} Markcomplete={Markcomplete} />
      </div>
    </div>


  )

}

export default App
