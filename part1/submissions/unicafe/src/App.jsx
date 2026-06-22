// Unicafe

import { useState } from 'react'

const Button = (props) => {
	return (
		<div>
			<button onClick={props.onClick}>{props.text}</button>
		</div>
	)
}

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad
	const average = (good + (-1 * bad)) / all
	const positive = String(((good / (bad+good)) * 100) + ' %')

	if (all == 0) {
		return (
			<div>No Feedback Given</div>
		)
	}
	return (
		<div>
			<table>
				<tbody>
					<StatisticLine text='good' value={good}/>
					<StatisticLine text='neutral' value={neutral}/>
					<StatisticLine text='bad' value={bad}/>
					<StatisticLine text='all' value={all}/>
					<StatisticLine text='average' value={average}/>
					<StatisticLine text='positive' value={positive}/>
				</tbody>
			</table>
		</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
	const updatedGood = good + 1
	setGood(updatedGood)
  }

  const handleNeutral = () => {
	const updatedNeutral = neutral + 1
	setNeutral(updatedNeutral)
  }

  const handleBad = () => {
	const updatedBad = bad + 1
	setBad(updatedBad)
  }


  return (
    <div>
      <h1>give feedback</h1>
	  <Button onClick={handleGood} text='good'/>
	  <Button onClick={handleNeutral} text='neutral'/>
	  <Button onClick={handleBad} text='bad'/>
	  <h1>statistics</h1>
	  <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

// Anecdotes

import { useState } from 'react'

const Button = ( {onClick, text} ) => {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>	
	)
}

export default App
