import React from "react";
import cytoscape from "cytoscape";



class NetworkPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      cy: null,
      rendered: false
    };
  }

  componentDidMount() {
    const cy = cytoscape(
      Object.assign({
        container: this.cyjs,
        elements: this.props.elements,
        style: this.props.visualStyle,
        layout: {
          name: "preset"
        }
      })
    );
    this.props.addCyRefAction(cy)

    cy.on("click", (evt: any) => {
      const selected = evt.target.data();
      const isNode = evt.target.isNode();

      this.props.clickAction(selected);
      this.props.isNode(isNode);
    });
  }

  cyjs: any = null;

  render() {
    return <div ref={cyjs => (this.cyjs = cyjs)} style={this.props.style} />;
  }
}

export default NetworkPanel;
