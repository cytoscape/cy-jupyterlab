import React from "react";
import TitleBar from "./TitleBar";
import Button from "@material-ui/core/Button";
import LayoutSelector from "./LayoutSelector";
import SelectedPanel from "./SelectedPanel";
import PropertyPanel from "./PropertyPanel";

const ControlPanel = (props: any) => {
  const selected = props.selected;
  const elements = props.elements;
  const isNode = props.isNode;

  let name = "Click to select a node/edge";
  if (selected) {
    name = selected.name;
  }

  return (
    <div style={props.style}>
      <TitleBar title={props.networkName} />

      <div>
        <PropertyPanel elements={elements} />
      </div>
      <div>
        <SelectedPanel selected={selected} isNode={isNode} />
      </div>
      <LayoutSelector layoutAction={props.layoutAction} />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => props.fitAction()}
      >
        Fit Graph
      </Button>
    </div>
  );
};

export default ControlPanel;
