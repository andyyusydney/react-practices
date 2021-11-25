import * as React from "react";

interface IFunctionalPureChildComponentProps {
  counter: number;
}

const FunctionalPureChildComponent = (
  props: IFunctionalPureChildComponentProps
) => {
  console.log("Render FunctionalPureChildComponent props.counter =", props.counter);
  return (
    <>
      <h3>Functional Pure Child Component</h3>
      <p>The value of counter is {props.counter}</p>
    </>
  );
};

export default React.memo(FunctionalPureChildComponent)
