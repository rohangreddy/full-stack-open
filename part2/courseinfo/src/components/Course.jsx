const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
      <p>{part.name} {part.exercises}</p>

  )
}

const Total = ({ parts }) => {

  return (
    <p>Redux {parts.reduce((total, part) => total + part.exercises, 0)}</p>
  )
}

const Content = ({ parts }) => {
  return (
      <div>
        {
          parts.map(part => <Part key={part.id} part={part} />)
        }
        <Total parts={parts} />
      </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Courses = ({ courses }) => {
  return (
    <div>
      {
        courses.map(course => <Course key={course.id} course={course}/>)
      }
    </div>
  )
}

export default Courses