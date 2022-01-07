import React from "react";
import withHoc from "./withHoc";

const WrappedComponent = ({
  children,
  injectedHocProps,
  ...useHocProps
}: any) => {
  console.log("injectedHocProps=", injectedHocProps);
  console.log("useHocProps=", useHocProps);
  return (
    <>
      <p>
        source:&nbsp;
        <a href="https://stackoverflow.com/questions/58276103/how-to-access-props-in-a-functional-hoc">How to access props in a functional HOC?</a>
      </p>
      <dl>
        <dt>injectedHocProps: </dt>
        <dd>
          <p>{injectedHocProps}</p>
        </dd>
        <dt>useHocProps: </dt>
        <dd>
          <ul>
            {Object.keys(useHocProps).map((key) => (
              <li key={key}>{useHocProps[key]}</li>
            ))}
          </ul>
        </dd>
        <dt>children: </dt>
        <dd>{children}</dd>
      </dl>
    </>
  );
};

export default withHoc(WrappedComponent);
