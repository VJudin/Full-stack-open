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

const Content = (props) => {
  return (
    <div>
      <Part content={props.content1} exercises={props.ex1}/>
      <Part content={props.content2} exercises={props.ex2}/>
      <Part content={props.content3} exercises={props.ex3}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content1={part1} ex1={exercises1} content2={part2} ex2={exercises2} content3={part3} ex3={exercises3}/>
      <Total amount={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App