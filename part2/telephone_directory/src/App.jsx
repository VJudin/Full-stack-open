import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import peopleService from './services/people'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect( () => {
    peopleService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    //Array of the already included names
    const names = persons.map(person => person.name)
    const newPerson = { 
      name: newName,
      number: newNumber 
    }
    //compare the newName to the current names, if it is already in the list, ask if the
    //user wishes to swap the phone number of this contact
    if (names.includes(newName)) {
      const person = persons.find(person => person.name === newName)
      const newPerson  = {...person, number: newNumber}
      if (confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
        peopleService
          .editPhoneNumber(person.id, newPerson)
          .then(response => {
            setPersons(persons.map(person =>  person.id !== newPerson.id ? person : response.data))
            setNotification(`Changed ${newPerson.name}'s phonenumber`)
            setTimeout(() => {
              setNotification(null)
            }, 2000)
          })
      }
      setNewName('')
      setNewNumber('')
      return
    }
    peopleService
      .addPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification(`Added ${newPerson.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(person => id === person.id)
    console.log(person)
    const choise = confirm(`Delete ${person.name}?`)
    console.log(choise)
    if (choise) {
      peopleService
              .deletePerson(id)
              .then(response => {
                setPersons(persons.filter(person => person.id !== id))
                console.log(response)
                setNotification(`Deleted ${person.name}`)
                setTimeout(() => {
                  setNotification(null)
                }, 2000)
              })
    }
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
      <Notification message={notification}/>
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
        <Persons persons={peopleToShow} deletePerson={deletePerson}/>
    </div>
  )

}

export default App