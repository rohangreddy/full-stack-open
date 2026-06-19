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


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14 

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
//       <Total total={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }


// 1.3: Passing in objects as props
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//   	<div>
// 			<Header course={course} />
// 			<Content part1={part1} part2={part2} part3={part3} />
// 			<Total total = {part1.exercises + part2.exercises + part3.exercises} />
//     </div>
//   )
// }

// 1.4: Array

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
// 			<Content parts={parts} />
// 			<Total parts={parts} />
//     </div>
//   )
// }

// 1.5 single object

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course.name}</h1>
// 		</div>
		
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 			<p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
// 			<p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
// 			<p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
// 		</div>
// 	)
// }

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>{props.part.name} {props.part.exercises}</p>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	const total = props.course.parts.reduce((sum, current) => {
// 		return sum + current.exercises
// 	}, 0)
// 	return (
// 		<div>
// 			<p>Number of exercises {total}</p>
// 		</div>
// 	)
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course}/>
// 	  <Content course={course} />
// 	  <Total course={course} />
//     </div>
//   )
// }

// 1C: Component State, event handlers

// const Hello = (props) => {
// 	// Function is invoked when the component is rendered and the logic for guessing birth year is encapsulated within the function
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// Destructuring
// const Hello = (props) => {

//   const name = props.name
//   const age = props.age


//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const Hello = (props) => {
// 	const { name, age } = props
// 	const bornYear = () => new Date().getFullYear() - age

// 	return (
// 		<div>
// 			<p>Hello {name} you are {age} years old </p>
// 			<p>So you were probably born in {bornYear()}</p>
// 		</div>
// 	)
// }

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

import { useState } from 'react'

// State should commonly be passed down from ancestor to child components
const Display = ({ counter }) => {
	return (
		<div>{counter}</div>
	)
}

// Event handler passed to Button component through onClick prop
const Button = ({ onClick, text}) => {
	return (
		<button onClick={onClick}>{text}</button>
	)
}

// const App = () => {
// 	// Adds state to the component and initializes with value 0
// 	// variable and function are assigned using destructuring
// 	// Counter: assigned initial value of state`
// 	// setCounter assigned a function that will modify state

// 	// When state modifying function setCounter() is called,  React re-renders the component
// 	// meaning the function body of the component function gets re-executed
//   const [ counter, setCounter ] = useState(0)

// 	// Event handler - registered to be called when specific events occur
// 	// by setting value of button's onclick attribute to be reference of handleClick function,
// 	// every click causes the handleClick function to be called
//   const handleClick = () => setCounter(counter + 1)
// 	const resetClick = () => setCounter(0)
// 	const decreaseClick = () => setCounter(counter - 1)

// 	// Display component: When App gets re-rendered on button click, all children components
// 	// also get re-rendered
//   return (
// 		<div>
// 			<Display counter={counter}/>
// 			<Button onClick={handleClick} text={'plus'}/>
// 			<Button onClick={resetClick} text={'zero'}/>
// 			<Button onClick={decreaseClick} text={'minus'}/>
// 		</div>
//   )
// }


// 1D: Complex State
// const App = () => {
// 	// const [left, setLeft] = useState(0)
// 	// const [right, setRight] = useState(0)

// 	// Be conscious of when to set state separately vs as a single object
// 	const [clicks, setClicks] = useState({
// 		left: 0, right: 0
// 	})

// 	// const handleLeftClick = () => {
// 	// 	// const newClicks = {
// 	// 	// 	left: clicks.left + 1,
// 	// 	// 	right: clicks.right
// 	// 	// }
// 	// 	// Clean up event handler by using object spread syntax
// 	// 	const newClicks = {
// 	// 		...clicks,
// 	// 		left: clicks.left + 1,
			
// 	// 	}
// 	// 	setClicks(newClicks)
// 	// }

// 	const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1})
// 	const handleRightClick = () => setClicks({ ...clicks, left: clicks.right + 1})

// 	return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// 1D: Handling Arrays

// const App = () => {
// 	const [left, setLeft] = useState(0)
// 	const [right, setRight] = useState(0)
// 	const [allClicks, setAll] = useState([])

// 	const handleLeftClick = () => {
// 		setAll(allClicks.concat('L'))
// 		setLeft(left + 1)
// 	}
// 	const handleRightClick = () => {
// 		setAll(allClicks.concat('R'))
// 		setRight(right + 1)
// 	}

// 	return (
// 		<div>
// 			{left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
// 			<p>{allClicks.join(' ')}</p>
// 		</div>
// 	)
// }

//1D: Update of State is Asynchronous
// State update in react happens asynchronously ie not immediately but at some point after the current
// component function is finished but before the function re-renders
// This is why we are storing the updated variable of left / right instead of simply passing it into setTotal after calling the setLeft / setRight function

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
		const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
		const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

//1D: Rule of hooks

export default App
