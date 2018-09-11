import React from "react";
import Typography from "@material-ui/core/Typography";

const containerStyle = {
  background: "#EFEFEF",
  padding: "1em",
  border: "1px, solid, #444444"
};

class PropertyPanel extends React.Component<any, any> {


  render() {
    console.log("!!Rendering called props: ", this.props);

    const selected = this.props.selectedNode

    return (
      <div style={containerStyle}>
        <Typography variant="subheading">
          Number of nodes: {this.props.nodeCount}
        </Typography>
        <Typography variant="subheading">
          Number of edges: {this.props.edgeCount}
        </Typography>

        <Typography variant="subheading">
          Selected Node Name: {!selected ? "-" : selected.name}
        </Typography>
      </div>
    );
  }
}

export default PropertyPanel;
