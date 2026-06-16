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
			<p>{props.parts[0].name} {props.parts[0].exercises}</p>
			<p>{props.parts[1].name} {props.parts[1].exercises}</p>
			<p>{props.parts[2].name} {props.parts[2].exercises}</p>
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>{props.part.name} {props.part.exercises}</p>
		</div>
	)
}

const Total = (props) => {
	const total = props.parts.reduce((sum, current) => {
		return sum + current.exercises
	}, 0)
	return (
		<div>
			<p>Number of exercises {total}</p>
		</div>
	)
}

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
      <Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
    </div>
  )
}

export default App
