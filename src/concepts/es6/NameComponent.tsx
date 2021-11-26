import * as React from 'react'
import Name from './GetterSetter.class'

interface INameClassComponent {
	name: string
}
const NameClassComponent = (props: INameClassComponent) => {
	const nameObj = new Name(props.name)
	return (
		<>
		<h2>Name Class Component</h2>
		<p>The name is: {nameObj.name}</p>
		</>
	)
}

export default NameClassComponent