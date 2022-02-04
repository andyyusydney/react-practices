import * as React from "react";
import { useEffect, useState } from "react";
import FunctionalPureChildComponent from "./FunctionalPureChildComponent";

const FunctionalPureParentComponent = () => {
  console.log("Render FunctionalPureParentComponent");
  const [counter, setCounter] = useState(0);
  const [selfCounter, setSelfCounter] = useState(0);

  useEffect(() => {
    console.log("counter=", counter);
    const intervalId = setInterval(() => {
      setCounter(counter); // set to the same value to test if child component gets re-renderred.
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  const handleIncrement = () => {
    setSelfCounter(selfCounter + 1);
  };

  return (
    <>
      <h3>Functional Pure Component</h3>
      <h4>Component vs Pure Component</h4>
      <dl>
        <dt>Component</dt>
        <dd>
          It renders every time its parent rerenders, regardless of whether the
          component's props and state have changed.
        </dd>
        <dt>Pure Component</dt>
        <dd>
          <ul>
            <li>
              on the other hand, will not rerender if its parent rerenders,
              unless the pure component's props or state have changed.
            </li>
            <li>
              it implements shouldComponentUpdate for you and does a shallow
              prop and state comparison.
            </li>
          </ul>
        </dd>
      </dl>
      <button onClick={handleIncrement}>Increment</button>
      <hr />
      Child:
      <FunctionalPureChildComponent counter={counter} />
    </>
  );
};

export default FunctionalPureParentComponent;
