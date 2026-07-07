import { useState, useEffect } from 'react'
import People from './components/Person'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'
import personService from './services/people'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const exists = people.find(person => person.name === newPerson.name)
    if (exists) {
      personService
      .setPerson(exists.id, newPerson)
      .then(
        updatedPerson => {
          setPeople(people.map(person => person.id === updatedPerson.id ? updatedPerson : person))
        }
      )
    }
    else {
      personService
      .createPerson(newPerson)
      .then(addedPerson => {
        setPeople(people.concat(newPerson))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    setNewFilter(event.target.value)
  }

  const handleClick = (id) => {
    personService
    .deletePerson(id)
    .then(deletedPerson => {
      const newPeople = people.filter(person => person.id != deletedPerson.id)
      setPeople(newPeople)
    })

  }

  const hook = () => {
    personService
      .getPeople()
      .then(people => {
        setPeople(people)
      })
  }

  useEffect(hook, [])

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
      <People people={people} filter={filter} handleClick={handleClick} />
    </div>
  )
}

export default App