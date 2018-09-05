import React from 'react';

export class Annote extends React.Component<any, any> {

  render() {
    const nodes=this.props.nodes;
    const edges=this.props.edges;
    return (
      <div>
          number of nodes:  <b>{nodes}</b><br/>
          number of edges:  <b>{edges}</b>
      </div>
    );
  }
}

export default Annote;
