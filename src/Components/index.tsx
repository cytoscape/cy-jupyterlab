import * as React from "react";
import ControlPanel from "./ControlPanel";
import NetworkPanel from "./NetworkPanel";

export interface JGraph {
  elements: any;
  style: any;
}

const containerStyle = {
  margin: 0,
  padding: 0,
  top: 0,
  left: 0,
  display: "flex",
  width: "100%",
  height: "100%"
};

const networkPanelStyle = {
  width: "70%",
  height: "100%",
  background: "#FFFFFF"
};

const controlPanelStyle = {
  display: "flex",
  flexDirection: "column",
  width: "30%",
  height: "100%",
  background: "#EEEEEE"
};

class RootComponent extends React.Component<any, any> {
  state = {
    counter: 0,
    selected: {},
    cy: {}
  };

  nodeClickAction = (selected: any) => {
    this.setState({ selected });
  };

  //uemura
  setcy = (cy: any) => {
    this.setState({ cy:cy });
  };

  render() {
    return (
      <div style={containerStyle}>
        <NetworkPanel
          style={networkPanelStyle}
          elements={this.props.data.elements}
          visualStyle={this.props.data.style}
          nodeClickAction={this.nodeClickAction}
          //uemura
          setcy={this.setcy}
        />
        <ControlPanel
          style={controlPanelStyle}
          selectedNode={this.state.selected}
          networkname={this.props.networkname}
          //uemura
          fit={this.state.cy.fit()}
        />
      </div>
    );
  }
}

export default RootComponent;
