import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileExplorer from './components/FileExplorer'
import data from './data.json'

function App() {

  return (
    <FileExplorer data={data}/>
  )
}

export default App
