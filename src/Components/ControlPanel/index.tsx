import React from "react";
import TitleBar from "./TitleBar";

const ControlPanel = (props: any) => {
  console.log("## CP rendering", props);

  const selectedNode = props.selectedNode;

  let name = "--";
  if (selectedNode) {
    name = selectedNode.name;
  }

  return (
    <div style={props.style}>

      <TitleBar title={'Network Name'}/>

        <div>
        <h1>SELECTION = {name}</h1>
      </div>
    </div>
  );
};

export default ControlPanel;
