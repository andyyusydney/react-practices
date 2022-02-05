import * as React from "react";

interface Props {
  passingDownValue: boolean;
}

const NotUseContextChild = React.memo(({ passingDownValue }: Props) => {
  console.log("render NotUseContextChild");
  return (
    <>
      <p>This is a child component which does not use any context value.</p>
      <p>Props value: {passingDownValue.toString()}</p>
    </>
  );
});

export default NotUseContextChild;
