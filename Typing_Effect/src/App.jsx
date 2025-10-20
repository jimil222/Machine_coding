import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypingEffect from './components/TypingEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Typing Effect</h1>
      <TypingEffect text="I am Frontend Developer" delay={100}/>
    </div>
  )
}

export default App
