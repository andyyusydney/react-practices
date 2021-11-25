import * as React from 'react'
import { useEffect, useState } from 'react'
import FunctionalPureChildComponent from './FunctionalPureChildComponent'

const FunctionalPureParentComponent = () => {
	console.log('Render FunctionalPureParentComponent')
	const [counter, setCounter] = useState(0)
	const [selfCounter, setSelfCounter] = useState(0)

	useEffect(() => {
		console.log('counter=', counter)
		const intervalId = setInterval(() => {
			setCounter(counter) // set to the same value to test if child component gets re-renderred.
		}, 3000)

		return () => {
			clearInterval(intervalId)
		}
	}, [counter])

	const handleIncrement = () => {
		setSelfCounter(selfCounter + 1)
	}

	return (
		<>
		<h3>Functional Pure Component</h3>
		<button onClick={handleIncrement}>Increment</button>
		<hr />
		Child:
		<FunctionalPureChildComponent counter={counter} />
		</>
	)
}

export default FunctionalPureParentComponent