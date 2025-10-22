import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React_Otp from './components/React_Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <React_Otp otplength={6}/>
    </div>
  )
}

export default App
