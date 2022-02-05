import * as React from 'react'
import { useContext } from "react"
import { HelloContext } from './ContextWrapper'

const Hello = React.memo(() => {
	console.log('render Hello')
	const hello = useContext(HelloContext)
	return <p>{hello.helloText}</p>
})

export default Hello