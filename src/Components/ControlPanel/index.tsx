import React from "react";
import TitleBar from "./TitleBar";
import Button from "@material-ui/core/Button";
import LayoutSelector from "./LayoutSelector";

const ControlPanel = (props: any) => {
  const selectedNode = props.selectedNode;

  let name = "Not selected";
  if (selectedNode) {
    name = selectedNode.name;
  }

  return (
    <div style={props.style}>
      <TitleBar title={props.networkname} />

      <div>
        <h1>SELECTION = {name}</h1>
      </div>
      <LayoutSelector layoutAction={props.layoutAction} />
      <div>
        <Button onClick={() => props.fitAction()}>Fit</Button>
      </div>
    </div>
  );
};

export default ControlPanel;
