import React, { useState } from "react";
import { Component1List } from "../project-comp1/Component1List";
import { Component1Data } from "../project-comp1/Component1Data";

function ParentButton() {
  const [showComp, setShowComp] = useState(false);

  const clickEvtListener = () => {
    setShowComp(!showComp);
  };

  return (
    <div>
      <button onClick={clickEvtListener}>About Me</button>
      {showComp && <Component1List personInfoList={Component1Data} />}
    </div>
  );
}

export { ParentButton };
