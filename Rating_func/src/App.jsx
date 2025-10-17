import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ratings from './components/ratings'

function App() {

  return (
    <div>
      <Ratings starValue = {5} />
    </div>
  )
}

export default App
