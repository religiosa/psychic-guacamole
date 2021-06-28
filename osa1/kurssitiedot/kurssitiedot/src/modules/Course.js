import React from 'react' 

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

const Content = ({course}) => {
  return (
      <>
      { course.parts.map(part => {
        return (
          <Part key={part.id} part={part} />
        )
      }
      )}
      </>
  )
}

const Total = ({course}) => {
  const total = course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
  return (
      <p>Number of exercises {total}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
