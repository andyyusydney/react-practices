import * as React from 'react'

interface ChildrenProps {
	children: React.ReactNode
}

interface ParentProps {
	userName: string
}

const ParentComponent = (props: ChildrenProps) => {
	return (
		<div>
			Parent Component's Content
			<p>-- My child is: {props.children} --</p>
			End Parent's Content
		</div>
	)
}
const ParentWrapperComponent = (props: ParentProps) => {
	return (
		<ParentComponent>
			{props.userName}
		</ParentComponent>
	)
}

const ChildrenPropsWrapperComponent = () => {
	return <ParentWrapperComponent userName="Cindy" />
}

export default ChildrenPropsWrapperComponent