import React from "react";
import { Component1Model } from "./Component1Model";
import { Component1Card } from "./Component1Card";

interface Component1ListProps {
  personInfoList: Component1Model[];
}

function Component1List({ personInfoList }: Component1ListProps) {
  return (
    <div className="row">
      {personInfoList.map((obj) => (
        <div key={obj.id}>
          <Component1Card componentCardview={obj}></Component1Card>
        </div>
      ))}
    </div>
  );
}

export { Component1List };
