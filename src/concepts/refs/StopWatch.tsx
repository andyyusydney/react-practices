import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
	const timerRef = useRef(null)
	const [counter, setCounter] = useState(0)
	const [watchState, setWatchState] = useState(false)
	
	const toggleWatch = () => {
		setWatchState(!watchState)
	}

	useEffect(() => {
		if (watchState) {
			if (timerRef.current) return
			timerRef.current = setInterval(() => {
				if (watchState) {
					setCounter(counter => counter += 1)
				}
			}, 1000)
		} else {
			timerRef.current = clearInterval(timerRef.current)
		}

		return () => {
			clearInterval(timerRef.current)
		}
	}, [watchState])

	return (
		<>
			<button onClick={toggleWatch}>{watchState ? 'Stop':'Start'}</button>
			<p>{counter}</p>
		</>
	)
}

export default StopWatch