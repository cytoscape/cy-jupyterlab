import React from "react";
import ControlPanel from "../ControlPanel";
import NetworkPanel from "../NetworkPanel";
import IconButton from "@material-ui/core/IconButton";
import OpenIcon from "@material-ui/icons/OpenInNew";

const containerStyle = {
  margin: 0,
  top: 0,
  left: 0,
  display: "flex",
  width: "100%",
  height: "100%"
};

const networkPanelStyle = {
  width: "100%",
  height: "100%",
  background: "#FAFAFA"
};

const controlPanelStyle = {
  display: "flex",
  flexDirection: "column",
  width: "30%",
  height: "100%",
  background: "#EEEEEE"
};

class WidgetBase extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: {},
      cy: null
    };
  }



  componentDidUpdate() {
    if (this.state.cy) {
      this.state.cy.resize();
    }
  }

  clickAction = (selected: any) => {
    this.setState({ selected });
  };

  isNode = (isNode: any) => {
    this.setState({ isNode });
  };

  addCyRefAction = (cy: any) => {
    this.setState({ cy });
  };

  fitAction = () => {
    this.state.cy.fit();
  };

  layoutAction = (layoutName: string) => {
    const layout = this.state.cy.layout({ name: layoutName });
    layout.run();
  };

  render() {
    return (
      <div style={containerStyle}>
        <NetworkPanel
          style={networkPanelStyle}
          elements={this.props.data.elements}
          visualStyle={this.props.data.style}
          clickAction={this.clickAction}
          isNode={this.isNode}
          addCyRefAction={this.addCyRefAction}
        />
      </div>
    );
  }
}

export default WidgetBase;
