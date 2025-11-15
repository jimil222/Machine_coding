import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './components/Progress'

function App() {
  const [show, setshow] = useState(false)

  return (
    <>
    {
      show?<Progress/>:""
    }
    <button onClick={()=>setshow(!show)}>Show</button>
    </>

  )
}

export default App
