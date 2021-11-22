import * as React from 'react'

const Mouse =  (props: any) => {
	const [ mousePos, setMousePos ] = React.useState({x: 0, y: 0})
	const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		setMousePos({x: e.screenX, y: e.screenY})
	}
	return (
		<>
		<div className="mousePos" onMouseMove={onMouseMove} >mouse x: {mousePos.x} mouse y: {mousePos.y}</div>
		{props.render(mousePos)}
		</>
	)
}

export default Mouse