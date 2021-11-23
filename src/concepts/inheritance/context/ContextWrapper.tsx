import * as React from "react";
import { createContext, useState } from "react";
import Child from "./child";

export const NumberContext = createContext({ counter: 0 });
export const HelloContext = createContext({ helloText: "" });

const ParentContextWrapper = () => {
  const [helloText] = useState("Hello!");
  const [counter, setCounter] = useState(1);
  const handleClick = (e: any) => setCounter((counter) => (counter += 1));

  return (
    <>
      <h2>Context Wrapper</h2>
      <button onClick={handleClick}>Increment</button>
      <HelloContext.Provider value={{ helloText }}>
        <NumberContext.Provider value={{ counter }}>
          <Child />
        </NumberContext.Provider>
      </HelloContext.Provider>
    </>
  );
};

export default ParentContextWrapper;
