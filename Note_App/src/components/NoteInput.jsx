import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

const NoteInput = () => {
  const { addnote } = useContext(NoteContext)
  const [note, setnote] = useState({ title: '', content: '' })

  const handlechange = (e) => {
    const { name, value } = e.target
    setnote((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddNote = () => {
    if (!note.title.trim() && !note.content.trim()) return
    addnote(note)
    setnote({ title: '', content: '' })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Note</h2>

      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handlechange}
        placeholder="Enter the title"
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />

      <textarea
        name="content"
        value={note.content}
        onChange={handlechange}
        rows="5"
        cols="40"
        placeholder="Enter your content..."
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
      />

      <button
        onClick={handleAddNote}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition font-semibold"
      >
        Add Note
      </button>
    </div>
  )
}

export default NoteInput
