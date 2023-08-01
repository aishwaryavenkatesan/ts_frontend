import React, { useState } from "react";
import { Component1List } from "../project-comp1/Component1List";
import { Component1Card } from "../project-comp1/Component1Card";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
function GetInfoButton() {
  const [personInfo, setPersonInfo] = useState([]);
  const [showinfo, setShowInfo] = useState(false);

  const getPersonInfoListener = async () => {
    try {
      const response = await fetch("http://localhost:4000/personInfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log("result is ", JSON.stringify(result, null, 4));
        setPersonInfo(result);
        setShowInfo(!showinfo);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const personInfoItems = personInfo.map((obj) => (
    <Component1Card componentCardview={obj}></Component1Card>
  ));

  return (
    <div>
      <button onClick={getPersonInfoListener}>Get Info</button>
      <div className="row"> {showinfo && personInfoItems} </div>
    </div>
  );
}

export { GetInfoButton };
