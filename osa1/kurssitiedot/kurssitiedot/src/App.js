import React from 'react'

// kurssin nimen rekisteröinti
const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// kurssin osat ja tehtävämäärät
const Content = ({courseParts}) => {
  return (
      <>
      { courseParts.map(part => {
        return (
          <Part part={part} />
        )
      }
      )}
      </>
  )
}

// tehtävien yhteismäärä
const Total = ({courseParts}) => {
  console.log(courseParts)
  const total = courseParts.map(part => part.exercises).reduce((a, b) => a + b, 0)
  return (
      <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const courseParts = [{name: 'Fundamentals of React', exercises: 10}, {name: 'Using props to pass data', exercises: 7}, {name: 'State of component', exercises: 14}]

  return (
    <div>
      <Header course={course} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App
