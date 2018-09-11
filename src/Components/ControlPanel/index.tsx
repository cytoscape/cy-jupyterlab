import React from "react";
import TitleBar from "./TitleBar";
import Button from "@material-ui/core/Button";
import LayoutSelector from "./LayoutSelector";
<<<<<<< HEAD

const ControlPanel = (props: any) => {
  const selectedNode = props.selectedNode;

  let name = "Not selected";
  if (selectedNode) {
    name = selectedNode.name;
=======
import SelectedPanel from "./SelectedPanel";
import PropertyPanel from "./PropertyPanel";

const ControlPanel = (props: any) => {
  const selected = props.selected;
  const elements = props.elements;

  let name = "Not selected";
  if (selected) {
    name = selected.name;
    console.log("seleced:",selected);
>>>>>>> 3d576c14a349e370614fdff82e73fe1e8c2d7767
  }

  return (
    <div style={props.style}>
      <TitleBar title={props.networkname} />

      <div>
        <PropertyPanel elements={elements}/>
        <SelectedPanel selected={selected}/>
      </div>
      <LayoutSelector layoutAction={props.layoutAction} />
      <div>
        <Button onClick={() => props.fitAction()}>Fit</Button>
      </div>
    </div>
  );
};

export default ControlPanel;
