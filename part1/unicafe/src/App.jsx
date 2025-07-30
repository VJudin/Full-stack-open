import { useState } from 'react'


// Component decreases the amount of repetition in the return value of App
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

// Component that counts the average and percentage of positive feedback
const Statistics = (props) => {
  const valG = props.g
  const valB = props.b * (-1)
  const all = props.a
  const avg = (valG + valB) / all
  const pp = valG / all * 100
  return (
    <div>
      <p>Average: {avg}</p>
      <p>Positive: {pp}%</p>
    </div>
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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <Statistics g={good} b={bad} a={all}/>
    </div>
  )
}

export default App