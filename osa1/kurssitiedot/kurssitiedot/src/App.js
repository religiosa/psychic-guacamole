import React from 'react'

// kurssin nimen rekisteröinti
const Header = ({course}) => {
  return (
      <h1>{course.name}</h1>
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
const Content = ({course}) => {
  return (
      <>
      { course.parts.map(part => {
        return (
          <Part part={part} />
        )
      }
      )}
      </>
  )
}

// tehtävien yhteismäärä
const Total = ({course}) => {
  const total = course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
  return (
      <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of component', 
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
