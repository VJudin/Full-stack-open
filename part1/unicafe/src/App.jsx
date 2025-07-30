import { useState } from 'react'


// Decreases the amount of repetition in the return value of App
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // Save the buttons to their own states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // These funtions help with possible debugging
  const setGoodToVal = (newValue) =>  {
    console.log('Amount of Good ratings:', newValue)
    setGood(newValue)
  }

  const setNeutralToVal = (newValue) => {
    console.log('Amount of Neutral ratings:', newValue)
    setNeutral(newValue)
  }

  const setBadToVal = (newValue) => {
    console.log('Amount of Bad ratings:', newValue)
    setBad(newValue)
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
    </div>
  )
}

export default App