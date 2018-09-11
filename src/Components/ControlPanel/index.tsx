import React from "react";
import TitleBar from "./TitleBar";
import Button from "@material-ui/core/Button";

const ControlPanel = (props: any) => {
  console.log("## CP rendering", props);

  const selectedNode = props.selectedNode;

  let name = "--";
  if (selectedNode) {
    name = selectedNode.name;
  }

  return (
    <div style={props.style}>
      <TitleBar title={props.networkname} />

      <div>
        <h1>SELECTION = {name}</h1>
      </div>
      <div>
        <Button onClick={this.props.fit}>Fit</Button>
      </div>
    </div>
  );
};

export default ControlPanel;
