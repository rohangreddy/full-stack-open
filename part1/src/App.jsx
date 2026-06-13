// Part 1ai
// Defines a React component with the name App
// Component is rendered as a div tag wrapping a p tag containing Hellow World text
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>{a} plus {b} is {a+b}</p>
//     </div>
//   )
// }

// Part1aiii: Multiple Components
// Define new component Hello
// Data can be passed to components using props
// const Hello = (props) => {
// 	return (
// 		<div>
// 			<p>Hello {props.name} you are {props.age} years old</p>
// 		</div>
// 	)
	
// }

// // Hello component can be used multiple times inside the app component
// const App = () => {
// 	const name = 'Rohan'
// 	const age = 33
//   return (
//     <div>
//       <h1>Whattup</h1>
//       <Hello name={name} age={age}/>
// 			<Hello name='a'/> 
//     </div>
//   )
// }

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
		
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part={props.part1} exercise={props.exercises1} />
			<Part part={props.part2} exercise={props.exercises2} />
			<Part part={props.part3} exercise={props.exercises3} />
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>{props.part} {props.exercise}</p>
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises {props.total}</p>
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
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
