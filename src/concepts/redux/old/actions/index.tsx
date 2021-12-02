
export enum EActions {
	ADD_TODO = 'ADD_TODO',
	TOGGLE_TODO = 'TOGGLE_TODO',
	SET_FILTER = 'SET_FILTER'
}

export enum EFilter {
	ALL = 'ALL',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED'
}

export const addTodo = (text: string) => ({
	type: EActions.ADD_TODO,
	text
})

export const toggleTodo = (id: string) =>  ({
	type: EActions.TOGGLE_TODO,
	id
})

export const setFilter = (filter: EFilter) => ({
	type: EActions.SET_FILTER,
	filter
})