import { useState } from 'react'
import People from './components/Person'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Rohan Reddy', number: '123456789'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const exists = people.some(person => person.name === newPerson.name)
    if (exists) {
      const message = `${newPerson.name} already exists`
      alert(message)
    }
    else {
      setPeople(people.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter filter={filter} handleFilterInput={handleFilterInput} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numbers</h2>
      <People people={people} filter={filter} />
    </div>
  )
}

export default App