import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //Array of the already included names
    const names = persons.map(person => person.name)
    const newPerson = { 
      name: newName,
      number: newNumber 
    }
    //compare the newName to the current names, if it is already in the list, do not add it
    //and give an error message
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook.`)
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
            <input
              value={newName}
              onChange={handleNewName}
            />
        </div>
        <div>
          number:
            <input
              value={newNumber}
              onChange={handleNewNumber}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
    </div>
  )

}

export default App