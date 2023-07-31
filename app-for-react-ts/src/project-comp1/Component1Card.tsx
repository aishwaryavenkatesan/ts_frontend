import { Component1Model } from "./Component1Model";
import React from "react";

interface ComponentCardProps {
  componentCardview: Component1Model;
}

function Component1Card(props: ComponentCardProps) {
  const { componentCardview } = props;
  return (
    <div className="card">
      <img src={require("../images/img_sunrise.jpg")} alt="to display"></img>
      <h2>{componentCardview.name}</h2>
      <p>{componentCardview.uni_name}</p>
      <p>{componentCardview.age}</p>

      <p>{componentCardview.description}</p>
    </div>
  );
}

export { Component1Card };
