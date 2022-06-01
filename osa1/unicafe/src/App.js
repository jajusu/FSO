import './App.css';

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good+ 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral+ 1)
  }

  const clickBad = () => {
    setBad(bad+ 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>
      <h1>statistics</h1>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad}
    </div>
  )
}

export default App
