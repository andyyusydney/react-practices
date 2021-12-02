import { EActions } from "../actions";

export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

let id = 0;

const initialState: Array<ITodoItem> = [];

const todos = (state: any = initialState, action: any): Array<ITodoItem> => {
  switch (action.type) {
    case EActions.ADD_TODO:
      return [
        ...state,
        {
          id: (id += 1),
          text: action.text,
          completed: false,
        },
      ];

    case EActions.TOGGLE_TODO:
      return state.map((todo: ITodoItem) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
