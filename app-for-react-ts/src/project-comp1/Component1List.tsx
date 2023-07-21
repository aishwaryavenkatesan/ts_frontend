import React from "react";
import { Component1Model } from "./Component1Model";

interface Component1ListProps {
  personInfoList: Component1Model[];
}

function Component1List({ personInfoList }: Component1ListProps) {
  return (
    <div>
      {personInfoList.map((obj) => (
        <div key={obj.id}>
          <img
            src={require("../images/img_sunrise.jpg")}
            alt="to display"
          ></img>
          <h2>{obj.name}</h2>
          <p>{obj.uni_name}</p>
          <p>{obj.age}</p>

          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  );
}

export { Component1List };
