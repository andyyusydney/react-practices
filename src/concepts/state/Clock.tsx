import * as React from 'react'
import { useEffect, useState } from 'react'

const Clock = () => {
	const [clockTime, setClockTime] = useState(new Date().toLocaleTimeString())

	const timerId = setInterval(() => {
		setClockTime(new Date().toLocaleTimeString())
	}, 1000)

	useEffect(() => {
		return () => {
			clearInterval(timerId)
		}
	}, [])

	return (
		<p>Clock time: {clockTime}</p>
	)
}

export default Clock