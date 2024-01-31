import React from 'react'
// Delete icon imported from react-icons/md
import { MdDeleteForever } from 'react-icons/md' 

export default function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div id={id} className='note'>
        {/* This will hold our text */}
        <span>{text}</span>
        {/* Holds the date and delete icon */}
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever 
            className='delete-icon' 
            size='1.3em' 
            onClick={handleDeleteNote}
            />
        </div>
    </div>
  ) 
}

 