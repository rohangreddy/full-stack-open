import Note from './components/Note'

const App = ({ notes }) => {

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
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}


export default App