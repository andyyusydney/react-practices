import * as React from "react";
import { createContext, useState } from "react";
import Hello from "./hello";
import NumberComponent from "./NumberComponent";
import NotUseContextChild from "./NotUseContextChild";

export const NumberContext = createContext({ counter: 0 });
export const HelloContext = createContext({ helloText: "" });

const ParentContextWrapper = () => {
  const [helloText, setHelloText] = useState("Hello!");
  const [counter, setCounter] = useState(0);
  const [passingDownValue, setPassingDownValue] = useState(false);
  const handleClick = (e: any) => setCounter((counter) => (counter += 1));

  return (
    <>
      <h2>Context Wrapper</h2>
      <button onClick={handleClick}>Increment</button>
      <button
        onClick={() => {
          setHelloText(`${helloText} Hello!`);
        }}
      >
        Change Hello Text
      </button>
      <button
        onClick={() => {
          setPassingDownValue(!passingDownValue);
        }}
      >
        Passing Down Value
      </button>
      <HelloContext.Provider value={{ helloText }}>
        <NumberContext.Provider value={{ counter }}>
          <NotUseContextChild passingDownValue={passingDownValue} />
          <Hello />
          <NumberComponent />
		  <PlainChild />
        </NumberContext.Provider>
      </HelloContext.Provider>
    </>
  );
};

const PlainChild = React.memo(() => {
	console.log('render PlainChild')
	return (
		<p>This is plain child component!</p>
	)
})

export default ParentContextWrapper;
