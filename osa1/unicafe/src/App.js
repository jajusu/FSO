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
      <tbody><StatisticLine text="No feedback given"/></tbody>
    )
  }
  else{
    return (    
      <tbody>
        <StatisticLine text="good" value ={props.good}/>
        <StatisticLine text="neutral" value ={props.neutral}/>
        <StatisticLine text="bad" value ={props.bad}/>
        <StatisticLine text="all" value ={all}/>
        <StatisticLine text="average" value ={average}/>
        <StatisticLine text="positive" value ={positive} mark="%"/>
      </tbody>
    )
  }
}

const StatisticLine = (props) =>{
  return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.mark}</td> 
      </tr>
  )
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
      <table>
          <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
    </div>
  )
}

export default App