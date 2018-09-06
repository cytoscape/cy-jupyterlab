// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import * as React from "react";

import "../style/index.css";

import { /*JSONArray,*/ JSONObject /*, JSONValue*/ } from "@phosphor/coreutils";

import { ReactCytoscape } from "react-cytoscape";

import Button from "./Components/Buttons";

import SimpleSelect from "./Components/layout";

import Annote from "./Components/annote";
/**
 * The properties for the JSON tree component.
 */
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

/**
 * The state of the JSON tree component.
 */
export interface IState {
  filter?: string;
  CyRef?: any;
  selectedId?: string;
}

export class Component extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: "",
      selectedId: null
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
    console.log("This should be called once")
    const self = this
    try {
      cy.on('tap', 'node', function(evt:any){
        const selectedId: string = evt.target.id()
        console.log( 'last tapped ', self.foo );
        console.log( 'tapped ', selectedId, self );
        self.foo = selectedId
        self.setState({selectedId})
      });} catch(e) {
        console.log("err:" , e)
      }

  }

  applyStyle = () =>{
    console.log("Style invoked!!");
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
      }}
      style={style}
      />
      { <div style={{ width: '200px', height: '300px', position: 'absolute', right: 0, top:0}}>
        <div style={{ width: "100px", height: "50px",position:"fixed",bottom: "200px"}} >
        <SimpleSelect
        layoutHandler={this.applyLayout}
        />
        </div>
        <div style={{ width: "100px", height: "50px" }}>
        <Button styleHandler={this.applyStyle} />
        <Annote
        selectedNodeId={this.state.selectedId}
        nodes={elements.nodes.length}
        edges={elements.edges.length} 
        />
        </div>
        </div> 
      }
      </div>
    );
  }
}
