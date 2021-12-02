import React from "react";
import { ITodoItem } from "../reducers/todos.reducer";

interface IProps {
  handleClick: React.MouseEventHandler<HTMLLIElement>;
  todo: ITodoItem;
}

const ToDoItem = ({ handleClick, todo }: IProps) => {
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
};

export default ToDoItem;
