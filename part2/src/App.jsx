import Note from './components/Note'
import { useState } from 'react'

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

  const [notes, setNotes] = useState(props.notes)
  // Controlled components are a way to access data contained in the form's input element
  // In the first iteration where we set newNote to input value, React doesn't allow edits because we haven't defined what to do when the input changes
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(newNoteObj))
    setNewNote('')
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

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={handleShowAll}>Show {showAll ? 'All' : 'Important'}</button>
    </div>
  )
}


export default App