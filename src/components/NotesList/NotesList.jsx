import React from 'react'
import Note from '../Note/Note'
import AddNote from '../AddNote/AddNote'
// import Note  from './components'


export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <div className='notes-list'>
            {/* This renders the note components responsively without writing it down like hard-coded values*/}
            {/* creating props for text, id and date so to remove our hard coded values */}
            {notes.map((note) => (
            <Note id={note.id} 
            text={note.text} 
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            />
            ))}
            <AddNote 
            handleAddNote={handleAddNote}
            />

            
            {/* <Note />
            <Note />
            <Note />
            <Note /> */}
        </div>
    )
}

