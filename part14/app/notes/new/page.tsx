import { createNote } from "../../actions/notes"
// Server action is passed as the action prop to the <form>
// When form is submitted, browser sends form data to server as POST request,
// Server Action executes, and page is updated

const NewNote = () => {
  return (
    <div>
      <h2>Create a new note</h2>
      <form action={createNote}>
        <div>
          <label>
            Content
            <input type="text" name="content" required />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="important" />
            Important
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewNote