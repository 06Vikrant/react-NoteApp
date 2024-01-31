import React from 'react'
import { useState } from 'react'

export default function AddNote({ handleAddNote }) {
    // need to know what user has typed?
    const [noteText, setNoteText] = useState('')
    // set the char count limit
    const characterLimit = 200;

    // handles the text being added in the textarea
    const handleChange = (e) => {

        if (characterLimit - e.target.value.length >= 0) {
            // set the note text to setNoteText state
            setNoteText(e.target.value)
        }
    }

    // Saves the note when the user has typed it and updates
    const handleSaveClick = () => {
        // trim removes white spaces from the the start
        // this code: check whether the user has typed something before updating the state or not
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('') // reset the note text field after updating the state
        }
    }
  return (
    // it adds the new created note component
    <div className='note new'>
        <textarea 
        cols="10" 
        rows="8"
        placeholder='Type to add a note...'
        value={noteText} //gives more control over the text area value is
        onChange={handleChange}
        ></textarea>
        {/* contains: 1. save button 2. char remains */}
        <div className='note-footer'>
            {/* holds the char count */}
            <small>{characterLimit - noteText.length} Remaining</small>
            {/* triggers the event which saves the note */}
            <button 
            className='save'
            onClick={handleSaveClick}
            >Save</button>
        </div>
    </div>
  )
}

