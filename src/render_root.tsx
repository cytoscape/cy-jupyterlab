// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import * as React from "react";

import "../style/index.css";

import { JSONObject } from "@phosphor/coreutils";

import { ReactCytoscape } from "react-cytoscape";

import Button from "./Components/Buttons";

import SimpleSelect from "./Components/layout";

import Annote from "./Components/annote";

export interface JGraph {
  //  data: string;
  elements: any;
  style: any;
  //  cxData: string;
}

export interface IProps {
  //  data: JSONValue;
  data: JGraph;
  metadata?: JSONObject;
  theme?: string;
}

export interface IState {
  filter?: string;
  CyRef?: any;
  selectedNodeId?: string;
  selectedNodeName?: string;
}

const cyexport = (cy:any) =>{
  sat=cy;
}
export var sat:any;

export class Component extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: "",
      selectedNodeId: null,
      selectedNodeName: null
    };
  }

  input: Element = null;
  timer: number = 0;
  cy: any = null;
  foo: any = null;
  cyjs: any = null;

  applyLayout = (layoutName: string) => {
    const layout = this.cy.layout({name: layoutName})
    layout.run()
  }

  componentDidMount() {
  }

  setEventhandlers = (cy: any) => {
    const self = this
      cy.on('tap', 'node', function(evt:any){
        const selectedNodeId: string = evt.target.id()
        const selectedNodeName: string = evt.target.data("name")
        self.setState({selectedNodeId});
        self.setState({selectedNodeName});
      });

  }

  applyStyle = () =>{
    this.cy.style().selector('node').style({'background-color': 'black'}).update();
  }

  render() {
    const { elements, style } = this.props.data;

    return (
      <div style={{ width: "500px", height: "500px"}}>
      <ReactCytoscape
      containerID="cy"
      elements={elements}
      cyRef={(cy: any) => {
        this.setEventhandlers(cy)
        this.cy = cy;
        cyexport(cy)
      }}
      layout={{name:'preset'}}
      style={style}
      />
      <div style={{ width: '200px', height: '300px', position: 'absolute', right: 0, top:0}}>
      <div style={{ width: "100px", height: "50px", position:"fixed", bottom: "200px"}} >
      <SimpleSelect
      layoutHandler={this.applyLayout}
      />
      </div>
      <div style={{ width: "100px", height: "50px" }}>
      <Button styleHandler={this.applyStyle} />
      <Annote
      selectedNodeId={this.state.selectedNodeId}
      selectedNodeName={this.state.selectedNodeName}
      nodes={elements.nodes.length}
      edges={elements.edges.length} 
      />
      </div>
      </div> 

      </div>
    );
  }
}
