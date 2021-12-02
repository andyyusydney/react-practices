import { EActions, EFilter } from "../actions";

interface IAction {
	type: EActions.SET_FILTER,
	filter: EFilter
}

const filter = (state: EFilter = EFilter.ALL, action: IAction): EFilter => {
  switch (action.type) {
    case EActions.SET_FILTER:
		console.log('EActions.SET_FILTER')
      return action.filter;
    default:
		console.log('default')
      return state;
  }
};

export default filter;
