// Define componenet that logs to console and then returns html div element with hello world paragraph

const Header = (props) => {
	return (
		<h1>{props.course.name}</h1>
	)
}

const Content = (props) => {
	console.log(props)
	let parts = props.parts.map(value => <p key={value.name}> {value.name} {value.exercises}</p>)
	return (
		<>
			{parts}
		</>
	)
}

const Total = (props) => {
	let totals = props.parts.reduce(
		(sum, value) => sum + value.exercises, 0
	)
	return (
		<>
			<p>Number of exercises {totals}</p>
		</>
	)
}

// const App = () => {

//   let parts = [
// 	{name: 'Fundamentals of React', exercises: 10},
// 	{name: 'Using props to pass data', exercises: 7},
// 	{name: 'State of a component', exercises: 14},
//   ]
//   const course = {
// 	name: 'Half Stack application development',
// 	parts: parts
//   }

  
//   return (
// 	<div>
// 		<Header course={course}></Header>
// 		<Content parts={course.parts}></Content>
// 		<Total parts={course.parts}></Total>
//     </div>
//   )
// }

// Destructuring to pass variables directly rather than props
// const Hello = ({ name, age }) => {
// 	// Destructuring to easily extract variables
// 	// const { name, age } = props

// 	const bornYear = () => new Date().getFullYear() - age
// 	return (
// 		<div>
// 			<p> Hello {name}, you are {age} years old</p>
// 			<p>So you were probably born in {bornYear()}</p>
// 		</div>
// 	)
// }

// const App = () => {

//   const name = 'Rohan'
//   const age = 10

  
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// Page Re-rendering
// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// The proper way to pass state into components 
import { useState } from 'react'

const App = () => {
	const [ count, setCount ] = useState(0)

	setTimeout(
		() => setCount(count+1),
		1000
	)

	return (
    	<div>{count}</div>
  	)
}
export default App