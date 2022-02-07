import React from 'react'

const Header = (props) => {
  return (
    <div>
        {props.course}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {/* {props.part} {props.exercise} */}
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
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
        Number of exercises {props.e1 + props.e2 + props.e3}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course={course}/></h1>
      <p>
        <Content part1={part1} exercise1={exercises1}/>
      </p>
      <p>
        <Content part2={part2} exercise2={exercises2}/>
      </p>
      <p>
        <Content part3={part3} exercise3={exercises3}/>
      </p>
      <p>
        <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
      </p>
    </div>
  )
}

export default App
