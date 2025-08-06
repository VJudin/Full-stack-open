import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response  => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
      setNewName('')
      setNewNumber('')
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

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const peopleToShow = filter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter val={filter} changefunc={handleFilter} />
      <h2>Add a new person</h2>
      <PersonForm 
        onSub={addPerson} 
        name={newName} 
        onChangeName={handleNewName} 
        number={newNumber} 
        onChangeNumber={handleNewNumber} 
      />
      <h2>Numbers</h2>
        <Persons persons={peopleToShow} />
    </div>
  )

}

export default App