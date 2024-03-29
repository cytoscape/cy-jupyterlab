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
    const { data } = this.props
    let {elements, style, layout} = data
    
    if(layout === undefined) {
      layout = 'cose'
    }
    if(style === undefined) {
      style = {}
    }
    return (
      <div style={containerStyle}>
        <NetworkPanel
          style={networkPanelStyle}
          elements={elements}
          visualStyle={style}
          layout = {layout}
          clickAction={this.clickAction}
          isNode={this.isNode}
          addCyRefAction={this.addCyRefAction}
        />
      </div>
    );
  }
}

export default WidgetBase;
