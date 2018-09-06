import React from 'react';

export class Annote extends React.Component<any, any> {

  render() {
    const nodes=this.props.nodes;
    const edges=this.props.edges;
    const id=this.props.selectedNodeId;
    return (
      <div>
          number of nodes:  <b>{nodes}</b><br/>
          number of edges:  <b>{edges}</b><br/>
          {id}
      </div>
    );
  }
}

export default Annote;
