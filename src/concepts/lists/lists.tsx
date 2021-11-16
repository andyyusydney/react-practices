import * as React from 'react'

interface IList<T> {
	list: Array<T>
}

interface IListItem<T> {
	value: T
}

const NumberListItem = (props: IListItem<number>) => {
	return <li>{props.value}</li>
}

const NumerList = (props: IList<number>) => {
	return (
		<ul>
			{props.list.length > 0 && props.list.map(num =>
				<NumberListItem key={num.toString()} value={num} />
			)}
		</ul>
	)
}

export default NumerList

