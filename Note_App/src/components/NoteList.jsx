import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/NoteContext'
import NoteItem from './NoteItem'

const NoteList = () => {
  const { notes } = useContext(NoteContext)
  const [text,setText] = useState('')
  const [newlist,setnewlist] = useState([])

  const handlechange = (e) =>{
    setText(e.target.value)
  }

  const filteredlist = notes.filter((note)=>{    
    if(text==''){
      return note;
    }
    else if(note.title.toLowerCase().includes(text.toLowerCase())){
      return note
    }
  })

  useEffect(() => {
    setnewlist(filteredlist)
  }, [text,notes])
  

  return (
    <>
      {/* Search input always visible */}
      <div className="w-full px-4 mt-6 flex justify-center">
        <input
          name='search'
          value={text}
          type="search"
          placeholder="Search notes..."
          onChange={(e)=>handlechange(e)}
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
        />
      </div>

      {/* Notes grid or no notes message */}
      {notes.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          No notes added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4 items-start">
          {newlist.map((item) => (
            <NoteItem key={item.id} note={item} />
          ))}
        </div>
      )}
    </>

  )
}

export default NoteList
