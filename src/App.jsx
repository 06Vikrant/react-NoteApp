import { useState } from 'react'
import { nanoid } from 'nanoid'
// import NotesList from './components/index'
import './App.css'
import NotesList from './components/NotesList/NotesList'
// import AddNote from './components/AddNote/AddNote'

export default function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),// is used when deleting notes
    text: 'This is a note',
    date: '31/01/2024',
    },
    {
    id: nanoid(),// is used when deleting notes
    text: 'This is my second note about this project react notes app',
    date: '1/02/2024',
    },
    {
    id: nanoid(),// is used when deleting notes
    text: "This is a note about how I'm going to complete this project react notes app",
    date: '02/01/2024',
    },
    {
    id: nanoid(),// is used when deleting notes
    text: "this is my new note",
    date: '03/01/2024',
    },
]);

// Add Note is building up a new note object and save the state
const addNote = (text) => {
  // date object
  const date = new Date();
  // new note object
  const newNote = {
    id: nanoid(),
    text: text, // whatever the user captures from the text input
    date: date.toLocaleDateString(), // which sets the date to our country format
  }

  // Delete the note
  // it'll accept the id of the note to be deleted
  const deleteNote = (id) => {
    // filter function returns a new array so we don't have to worry about creating a new array
    const deletedNotes = notes.filter((note) => note.id !==  id);
    setNotes(deletedNotes)
  }

  // create an array that has the existing notes and add new note to the end of the array
  // this lines creates new array instead of updating the old array 
  const newNotes = [...notes, newNote] //use spread operator to copy the current array of notes then add newNote to the end

  // so at this point when we call setNotes this causes the component to rerender and the list update with the new data
  setNotes(newNotes) //it'll update the state

}

  return (
    // make our notes app responsive
      <div className='container'>
        <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
        {/* <AddNote /> */}
      </div>
  )
}

