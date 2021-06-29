import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Persons = ({ persons, filterText, removePerson }) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase())).map(person =>
        <Person key={person.id} person={person} removePerson={removePerson} />
      )}
    </ul>
  )
}

const Person = ({ person, removePerson }) => {
  return (
    <li key={person.id}>{person.name} {person.number} <Button text="delete" handleClick={() => removePerson(person)} /></li>
  )
}


export default Persons
