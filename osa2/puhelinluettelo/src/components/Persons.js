import React from 'react'

const Persons = ({ persons, filterText }) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase())).map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </ul>
  )
}

const Person = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

export default Persons
