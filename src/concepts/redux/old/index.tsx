import React from "react";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import AddToDo from "./components/AddToDo.component";
import Filter from "./components/FilterList.component";
import ToDoList from "./components/ToDoList.Component";
import rootReducer from "./reducers/index.reducer";

declare global {
    interface Window { devToolsExtension: any; }
}

const OldTodos = () => {
  const store = createStore(
    rootReducer,
    compose(
      typeof window === "object" &&
        typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : (f: any) => f
    )
  );
  
  return (
    <>
      <h3>Todos List - Old Redux Way</h3>
      <Provider store={store}>
        <AddToDo />
        <ToDoList />
        <Filter />
      </Provider>
    </>
  );
};

export default OldTodos;
