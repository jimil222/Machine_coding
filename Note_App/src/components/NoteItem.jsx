import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../context/NoteContext'
import EditModel from './EditModel'

const NoteItem = ({ note }) => {
  const { deletenote } = useContext(NoteContext)
  const { open, setOpen } = useContext(NoteContext)
  return (
    <>
      {open ? (<EditModel note={note} />) :
        (<div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-sm p-4 rounded-lg shadow-xl/20 bg-white hover:shadow-xl transition-shadow">
          <div className='absolute flex gap-2 right-4 top-4'>
            <button onClick={() => deletenote(note)} className=" bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors shadow-sm">
              Delete
            </button>
            <button onClick={() => {setOpen(true);}} className=" bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors shadow-sm">
              Edit
            </button>
          </div>
          <div className="col-span-1 sm:col-span-3 p-3 bg-gray-50 rounded-md flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
            <p className="text-gray-600 text-sm whitespace-pre-line">{note.content}</p>
          </div>
        </div>)
      }
    </>

  )
}

export default NoteItem