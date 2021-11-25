import * as React from "react";
import { useMemo, useRef, useState } from "react";

const UseMemoComponent = () => {
  const [inputNum, SetInputNum] = useState(0);
  const [inc, setInc] = useState(0);
  const inputNumRef = useRef(null);

  const handleInput = (e: any) => {
    console.log("e.target.value", e.target.value);
    SetInputNum(e.target.value);
  };

  const handleFocusOnInput = (e: any) => {
    inputNumRef.current.select();
  };

  const incrementFunc = () => {
    setInc(inc + 1);
  };

  React.useEffect(() => {
    console.log("inc=", inc);
  }, [inc]);

  const factorialNum = useMemo(() => {
    return caculateFactorialNum(inputNum);
  }, [inputNum]);

  return (
    <>
      <h3>Use Memo</h3>
      <input
        type="text"
        value={inputNum}
        onFocus={handleFocusOnInput}
        onChange={handleInput}
        name="factorial_input"
        id="factorial_input"
        ref={inputNumRef}
      />
      <p>
        The factorial number of {inputNum} is {factorialNum}
      </p>
      <button name="increment" onClick={incrementFunc}>
        Increment
      </button>
    </>
  );
};

const caculateFactorialNum = (num: number): number => {
  console.log("called with ", num);
  if (num <= 0) return 1;
  return num * caculateFactorialNum(num - 1);
};

export default UseMemoComponent;
