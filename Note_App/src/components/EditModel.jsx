import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

const EditModel = ({note}) => {
    const {editnote,setOpen} = useContext(NoteContext)
    const [editedNote,seteditedNote] = useState(note)

    const handlechange=(e)=>{
        const {name,value} = e.target
        seteditedNote(prev=>{
            return {...prev,[name]:value}
        })
    }

    const handlesubmit =(e)=>{
        e.preventDefault()
        editnote(editedNote)
        setOpen(false)
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Note</h2>

                <form onSubmit={handlesubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder="Enter note title"
                            value={editedNote.title}
                            onChange={handlechange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea
                            value={editedNote.content}
                            rows="5"
                            name='content'
                            onChange={handlechange}
                            placeholder="Enter note content"
                            className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={()=>setOpen(false)}
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditModel