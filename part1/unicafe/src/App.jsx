import { useState } from 'react'


// Component decreases the amount of repetition in the return value of App
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

// Component that counts the average and percentage of positive feedback
const Statistics = (props) => {
  const good = props.g
  const bad = props.b
  const valBad = bad * (-1)
  const neutral = props.n 
  const all = props.a
  const avg = (good + valBad) / all
  const pp = good / all * 100
  if (all === 0) {
    return (
      <p>No feedback given.</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all}  />
        <StatisticLine text="Average" value={avg} />
        <StatisticLine text="Positive" value={pp} />
      </tbody>
    </table>
  )
}

const App = () => {
  // Save the buttons to their own states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // These funtions help with possible debugging
  const setGoodToVal = (newValue) =>  {
    console.log('Amount of Good ratings:', newValue)
    setGood(newValue)
    setAll(all + 1)
  }

  const setNeutralToVal = (newValue) => {
    console.log('Amount of Neutral ratings:', newValue)
    setNeutral(newValue)
    setAll(all + 1)
  }

  const setBadToVal = (newValue) => {
    console.log('Amount of Bad ratings:', newValue)
    setBad(newValue)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={ () => setGoodToVal(good + 1)} text='good'/>
      <Button onClick={ () => setNeutralToVal(neutral + 1)} text='neutral'/>
      <Button onClick={ () => setBadToVal(bad + 1)} text='bad'/>
      <h2>Statistics:</h2>
      <Statistics g={good} n={neutral} b={bad} a={all}/>
    </div>
  )
}

export default App