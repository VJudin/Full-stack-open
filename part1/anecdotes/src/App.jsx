import { useState } from 'react'

const GenerateRandomNumber = (amount) => (
  Math.floor(Math.random()*amount)
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const addToVotes = (index) => {
    const copy = [...votes]
    copy[index] += 1
    console.log("Old votes:", votes[index])
    console.log("New votes:", copy[index])
    setVotes(copy)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes.</p>
      <button onClick={()=>addToVotes(selected)}>vote</button>
      <button onClick={()=> setSelected(GenerateRandomNumber(anecdotes.length))}>next anecdote</button>
    </div>
  )
}

export default App