import React from 'react'

const Header = (props) => {
  return (
    <div>
        {props.courseName}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {/* {props.part} {props.exercise} */}
      <p><Part part={props.parts[0].name} exercise={props.parts[0].exercises}/></p>
      <p><Part part={props.parts[1].name} exercise={props.parts[1].exercises}/></p>
      <p><Part part={props.parts[2].name} exercise={props.parts[2].exercises}/></p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1><Header courseName={course.name}/></h1>
      <p>
        <Content parts={course.parts}/>
      </p>
      <p>
        <Total parts={course.parts}/>
      </p>
    </div>
  )
}

export default App