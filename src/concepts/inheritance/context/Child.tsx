import * as React from 'react'
import Hello from './hello'
import NumberComponent from './NumberComponent'

const Child = () => {
	return (
		<>
			<Hello />
			<NumberComponent />
		</>
	)
}

export default Child