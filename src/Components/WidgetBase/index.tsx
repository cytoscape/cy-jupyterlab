import React from "react";
import NetworkPanel from "../NetworkPanel";

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
          layout = {this.props.data.layout}
          clickAction={this.clickAction}
          isNode={this.isNode}
          addCyRefAction={this.addCyRefAction}
        />
      </div>
    );
  }
}

export default WidgetBase;
