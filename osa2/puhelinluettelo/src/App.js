import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import { SuccessMessage, ErrorMessage } from './components/Messages'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber ? newNumber : ''
    }

    if (persons.map(person => person.name).includes(newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        updatePerson(id, personObject)
      }
    } else {

      personService
        .create(personObject)
        .then(
          created => {
            setSuccessMessage(`Added ${created.name}`)
            setTimeout(() => { setSuccessMessage(null)}, 5000)
            setPersons(persons.concat(created))
            setNewName('')
            setNewNumber('')
        })
    }
  }

const removePerson = (person) => {
  if (window.confirm(`Delete ${person.name}?`)) {
    personService
      .remove(person.id)
      .then(
        deleted => {
          setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch(error => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => { setErrorMessage(null) }, 5000)
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }
}

const updatePerson = (id, newPerson) => {
  personService
    .update(id, newPerson)
    .then(
      updated => {
        setPersons(persons.map(p => p.id !== id ? p : updated))
    })
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      {successMessage &&
      <SuccessMessage message={successMessage} />
      }

      {errorMessage &&
      <ErrorMessage message={errorMessage} />
      }


      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filterText={filterText} removePerson={removePerson} />
    </div>
  )
}

export default App
