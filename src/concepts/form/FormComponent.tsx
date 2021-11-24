import * as React from "react";
import { useEffect, useRef, useState } from "react";

const FormComponent = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [textareaVal, SetTextareaVal] = useState("");
  const [selectVal, SetSelectVal] = useState("Sydney");

  const textareaHandler = (e: any) => {
    console.log("e.target.value=", e.target.value);
    SetTextareaVal(e.target.value);
  };

  const selectHandler = (e: any) => {
    console.log("e.target.value=", e.target.value);
    SetSelectVal(e.target.value);
  };

  const submitHandler = (e: any) => {
    console.log("textareaVal=", textareaVal);
    console.log("selectVal=", selectVal);
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>React Form</h2>
      <form id="reactForm" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Lable</label>
          <input
            id="name"
            name="name"
            placeholder="Your name..."
            ref={inputRef}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={textareaVal}
            id="description"
            onChange={textareaHandler}
          ></textarea>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select value={selectVal} id="city" onChange={selectHandler}>
            <option>Select a City</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
