import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Component1 } from "./project-comp1/Component1";
import { Component1List } from "./project-comp1/Component1List";
import { Component1Data } from "./project-comp1/Component1Data";

function App() {
  return (
    <div>
      <blockquote>Hi, Trying my app after long time</blockquote>
      <Component1 />
      <Component1List personInfoList={Component1Data} />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
