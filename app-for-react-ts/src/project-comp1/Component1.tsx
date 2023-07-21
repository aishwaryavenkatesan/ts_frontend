import React from "react";
import { Component1Data } from "./Component1Data";

function Component1() {
  return (
    <div>
      <h1>Front end with react components</h1>
      <pre>{JSON.stringify(Component1Data, null, " ")}</pre>
    </div>
  );
}

export { Component1 };
