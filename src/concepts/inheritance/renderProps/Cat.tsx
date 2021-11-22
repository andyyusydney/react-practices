import * as React from 'react'
const image = require('../../../images/mushroom.jpeg').default

export interface IMouse {
	x: number
	y: number
}

interface ICatProps {
	mouse: IMouse 
}

const Cat = (props: ICatProps) => {
	return <img src={image} width="100" height="75" style={{position: 'absolute', left: props.mouse.x, top: props.mouse.y-130 }} />
}

export default Cat