import React from "react";
import { Component1Model } from "./Component1Model";

interface Component1ListProps {
  personInfoList: Component1Model[];
}

function Component1List(personInfoList: Component1ListProps) {
  return <pre>{JSON.stringify(personInfoList, null, " ")}</pre>;
}

export { Component1List };
