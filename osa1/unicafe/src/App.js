import './App.css';
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  let all=props.good+props.neutral+props.bad;
  let average=(props.good*1+props.neutral*0+props.bad*-1)/all;
  let positive=props.good/all*100
  if (all===0){
    return(
      <div>No feedback given</div>
    )
  }
  else{
    return (    
      <div>
        good {props.good}<br></br>
        neutral {props.neutral}<br></br>
        bad {props.bad} <br></br>
        all {all}<br></br>
        average {average}<br></br>
        positive {positive} %
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
