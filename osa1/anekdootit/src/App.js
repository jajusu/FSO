import './App.css';
import { useState } from 'react'

const randomizer = (len) =>  {
  let value= Math.floor(Math.random() * len);
  console.log("arvonta ",value);
  return value;
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);
  const [selected, setSelected] = useState(0)

  const vote = () =>{
    const copy = [...votes]
    copy[selected] += 1  
    console.log("valittu ",copy[selected])
    setVotes(copy)
  }

  const Mostvotes = () =>{
    const max = Math.max.apply(null, votes);
    const index = votes.indexOf(max);
    console.log("eniten",index); // 👉️ 3
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[index]}<br></br>
        has votes: {votes[index]} 
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has votes: {votes[selected]} <br></br>
      <Button handleClick={vote} text="vote"/>
      <Button handleClick={() => setSelected(randomizer(anecdotes.length))} text="next anecdote"/>
      <Mostvotes />
    </div>
  )
}

export default App
