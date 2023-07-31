import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Component1 } from "./project-comp1/Component1";
import { Component1List } from "./project-comp1/Component1List";
import { Component1Data } from "./project-comp1/Component1Data";
import { ParentButton } from "./button-comp/ParentButton";

function App() {
  return (
    <div>
      <blockquote>Hi, Trying my app after long time</blockquote>
      {/* <Component1 /> */}
      {/* <Component1List personInfoList={Component1Data} /> */}
      <ParentButton />
    </div>
  );
}

export default App;
