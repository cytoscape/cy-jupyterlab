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

  let name = "Not selected";
  if (selected) {
    name = selected.name;
  }

  return (
    <div style={props.style}>
      <TitleBar title={props.networkname} />

      <div>
        <PropertyPanel elements={elements}/>
      </div>
      <div>
        <SelectedPanel selected={selected} isNode={isNode}/>
      </div>
      <LayoutSelector layoutAction={props.layoutAction} />
      <div>
        <Button onClick={() => props.fitAction()}>Fit</Button>
      </div>
    </div>
  );
};

export default ControlPanel;
