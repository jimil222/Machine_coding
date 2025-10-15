import React, { createContext, useState } from 'react'

export const NoteContext = createContext()

const ContextProvider = (props) => {

    const [notes, setnotes] = useState([])
    const [open , setOpen] = useState(false)

    const addnote = (note) => {
        if (!note) return
        else {
            const newNote = {
                id: Date.now(),
                title: note.title,
                content: note.content
            }
            setnotes(prev => [...prev, newNote])
        }
    }

    const deletenote = (note) => {
        if (!note) return
        else {
            setnotes(notes.filter((prev => note.id != prev.id)))
        }
    }

    const editnote = (updatednote) => {
        if (!updatednote) return
        else {
            setnotes(prev =>
                prev.map(note =>
                    note.id === updatednote.id ? updatednote : note
                )
            )
            setOpen(false)
        }

    }

    const value = {
        notes,
        setnotes,
        addnote,
        deletenote,
        open,
        setOpen,
        editnote
    }



    return (
        <NoteContext.Provider value={value}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default ContextProvider