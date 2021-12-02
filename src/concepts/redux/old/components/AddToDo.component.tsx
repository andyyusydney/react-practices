import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddToDo = ({ dispatch }: any) => {
  const [todoItem, setTodoItem] = useState("");
  const addTodoRef = useRef<HTMLInputElement>();

  const handleOnChange = (e: any) => {
    setTodoItem(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (!todoItem) {
      return;
    }

    dispatch(addTodo(todoItem));
    setTodoItem("");
	addTodoRef.current.focus()
  };

  return (
    <>
      <p>AddToDo Component</p>
      <form name="Add_To_Do" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="todo"
          ref={addTodoRef}
          onChange={handleOnChange}
          value={todoItem}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default connect()(AddToDo);
