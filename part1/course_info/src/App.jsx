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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content content1={part1.name} ex1={part1.exercises} content2={part2.name} ex2={part2.exercises} content3={part3.name} ex3={part3.exercises}/>
      <Total amount={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App