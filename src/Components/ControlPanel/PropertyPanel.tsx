import React from "react";
import Typography from "@material-ui/core/Typography";

const containerStyle = {
  background: "#EFEFEF",
  padding: "1em",
  border: "1px, solid, #444444"
};

class PropertyPanel extends React.Component<any, any> {

  render() {
    const elements = this.props.elements
      if(!elements || !elements.nodes || !elements.edges) {
          return <div/>
      }
    return (
      <div style={containerStyle}>
        <Typography variant="subtitle1">
          Number of nodes: {elements.nodes.length}
        </Typography>
        <Typography variant="subtitle1">
          Number of edges: {elements.edges.length}
        </Typography>
      </div>
    );
  }
}

export default PropertyPanel;
