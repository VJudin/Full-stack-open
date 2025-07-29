const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content}: {props.exercises}</p>
    </div>
  )
}

/* Function to render the list of parts */
const content = (parts) => {
  return (
    <div>
      <Part content={parts[0].name} exercises={parts[0].exercises}/>
      <Part content={parts[1].name} exercises={parts[1].exercises}/>
      <Part content={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.amount}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      {content(parts)}
      <Total amount={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App