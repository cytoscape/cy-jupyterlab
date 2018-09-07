import React from 'react';

export class Annote extends React.Component<any, any> {

  render() {
    const nodes=this.props.nodes;
    const edges=this.props.edges;
    const name=this.props.selectedNodeName;
    const id=this.props.selectedNodeId;
    return (
      <div>
          number of nodes:  <b>{nodes}</b><br/>
          number of edges:  <b>{edges}</b><br/><br/><br/>
          selected Node:<br/>
          ID:{id}<br/>
          Name:{name}<br/>
      </div>
    );
  }
}

export default Annote;
