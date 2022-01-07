import React from "react";
import Container from "./WrappedComponent";

const UseHoc = () => {
  return (
    <Container useHocProps="Container's Prop">
      <p>This is container's children</p>
    </Container>
  );
};

export default UseHoc;
