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
          name: 'preset'
        }
      })
    );

    cy.on('click', (evt: any) => {
        const selected = evt.target.data()
        console.log('set selected', selected)

        this.props.nodeClickAction(selected)
    })

    this.setState({cy: cy})
  }

  cyjs: any = null;

  render() {
    return (
      <div
        ref={cyjs => (this.cyjs = cyjs)}
        style={this.props.style}
      />
    );
  }
}

export default NetworkPanel;
