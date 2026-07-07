import Note from './components/Note'
import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'

const App = (props) => {

  // return (
  //   <div>
  //     <h1>Notes</h1>
  //     <ul>
  //       <li>{notes[0].content}</li>
  //       <li>{notes[1].content}</li>
  //       <li>{notes[2].content}</li>
  //     </ul>
  //   </div>
  // )

  // JSX elements inside a map should have a key
  // Keys tell React which array item each component corresponds to, so that it can match them up later. 
  // This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. 
  // A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

  const [notes, setNotes] = useState([])
  // Controlled components are a way to access data contained in the form's input element
  // In the first iteration where we set newNote to input value, React doesn't allow edits because we haven't defined what to do when the input changes
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  // Effects let a component connect to and synchronize with external system
  // By default, effect is always run after the component has been rendered
  const hook = () => {
    console.log('effect')
    // Axios get method returns a promise
    // A promise is an object representing the eventual completion or failure of an asynchronous operation
    // A promise can generally have 3 states: pending, fulfilled, rejected
    // This block initiates fetching of data from the server and then registers an event handler
    // such that when the data arrives from the server, JS runtime calls the function registered as the event handler
    // and stores the notes received rom the server into the state using setNotes
    // Finally, a call to the state-updating function triggers re-rendering of the component
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  // first parameter is a function (effect)
  // second parameter specifies how often the effect should run (if [], effect is only run with the first render of the component)
  useEffect(hook, [])

  // allows patching the note object
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(note => note.id === id)
    const changedNote = { ...note, important: !note.important}
    noteService
    .update(id, changedNote)
    .then(updatedNote => {
      setNotes(notes.map(note => note.id === id ? updatedNote : note))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService
    .create(newNoteObj)
    .then(createdNote => {
      setNotes(notes.concat(createdNote))
      setNewNote('')
    })
    
  }
  

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  // Notice how every note gets it's own unique event handler since the id of every note is unique
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={handleShowAll}>Show {showAll ? 'Important' : 'All'}</button>
    </div>
  )
}


export default App