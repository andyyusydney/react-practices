import * as React from "react";
import Cat from "./Cat";
import Mouse from "./Mouse";

const MouseWrapper = () => {
  const renderFunc = (mouse: any) => (<Cat mouse={mouse} />);
  return <Mouse render={renderFunc} />;
};

export default MouseWrapper;
