import { combineReducers } from "redux";
import todos from "./todos.reducer";
import filter from "./filter.reducer"

const rootReducer = combineReducers({todos, filter})

export default rootReducer