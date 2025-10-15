import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'

function App() {

  return (
    <div className="bg-slate-100 min-h-screen p-6 flex flex-col items-center">
      <NoteInput/>
      <NoteList/>
    </div>
  )
}

export default App
