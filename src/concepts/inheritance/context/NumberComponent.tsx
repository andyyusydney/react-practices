import * as React from 'react'
import { useContext } from "react"
import { NumberContext } from "./ContextWrapper"

const NumberComponent = () => {
	console.log('render NumberComponent')
	const counter = useContext(NumberContext)
	return (
		<p>Counter: {counter.counter}</p>
	)
}

export default NumberComponent