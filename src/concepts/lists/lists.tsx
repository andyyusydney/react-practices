import * as React from 'react'

interface IList<T> {
	list: Array<T>
}

interface IListItem<T> {
	value: T
}

const NumberListItem = ({ value }: IListItem<number>) => {
	return <li>{value}</li>
}

const NumerList = ({ list }: IList<number>) => {
	return (
		<ul>
			{list.length > 0 && list.map(num =>
				<NumberListItem key={num.toString()} value={num} />
			)}
		</ul>
	)
}

export default NumerList

