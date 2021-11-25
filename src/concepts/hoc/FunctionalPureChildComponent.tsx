import * as React from "react";
import { useState } from "react";

interface IFunctionalPureChildComponentProps {
  counter: number;
}

const FunctionalPureChildComponent = (
  props: IFunctionalPureChildComponentProps
) => {
  console.log(
    "Render FunctionalPureChildComponent props.counter =",
    props.counter
  );
  const [selfCounter, setSelfCounter] = useState(0);
  const handleClick = () => {
    setSelfCounter(selfCounter + 1);
  };

  return (
    <>
      <h3>Functional Pure Child Component</h3>
      <p>The value of counter is {props.counter}</p>
	  <p>selfCounter: {selfCounter}</p>
      <button onClick={handleClick}>Set State with Same Value</button>
    </>
  );
};

export default React.memo(FunctionalPureChildComponent);
