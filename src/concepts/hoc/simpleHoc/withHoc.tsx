import React from "react";

const withHoc = (WrappedComponent: any) => {
  return (useHocProps: any) => {
    return <WrappedComponent injectedHocProps="hoc injected props" {...useHocProps} />;
  };
};

export default withHoc;
