import React from "react";
import { connect } from "react-redux";
import { EFilter, toggleTodo } from "../actions";
import { ITodoItem } from "../reducers/todos.reducer";
import ToDoItem from "./ToDoItem.component";

const ToDoList = (props: any) => {
  return (
    <>
      <h2>Todos List</h2>
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((todo: ITodoItem) => (
            <ToDoItem handleClick={() => props.handleClick(todo.id)} key={todo.id} todo={todo} />
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.length > 0 ? state.todos.filter((todo: ITodoItem) => {
		if (state.filter === EFilter.ACTIVE) {
			return !todo.completed
		} else if (state.filter === EFilter.COMPLETED) {
			return todo.completed
		} else {
			return true
		}
	}) : [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: (id: string) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
