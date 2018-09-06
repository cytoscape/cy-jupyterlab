// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import * as React from "react";

import * as ReactDOM from "react-dom";

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
}

export class Component extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: "",
    };
  }

  input: Element = null;
  timer: number = 0;
  cy: any = null;
  cyjs: any = null;

  applyLayout = (layoutName: string) => {
    console.log("apply " + layoutName)
    const layout = this.cy.layout({name: layoutName})
    layout.run()
  }

  applyStyle = () =>{
    console.log("Style invoked!!");
    this.cy.style().selector('node').style({'background-color': 'black'}).update();
  }

  componentDidMount() {

    // this.cy.container().setAttribute('style', 'width: "100%"')
    // this.cy.container().setAttribute('style', 'height: "100%"')
    // this.cy.resize()

    // this.cy.fit()
    
  }


/*
  clickNode = (event:any) => {
    this.cy.on('tap', 'node', function(evt:any){
    console.log( 'tapped ' + evt.target.id() );
    });
  };
*/
  render() {
    const { elements, style } = this.props.data;

    return (
      <div style={{ width: "1000px", height: "1000px"}}>
        {/* <input
          ref={ref => (this.input = ref)}
          onChange={event => {
            if (this.timer) {
              window.clearTimeout(this.timer);
            }
            //const filter = event.target.value;
            this.timer = window.setTimeout(() => {
              //this.setState({ filter } as IState);
              this.timer = 0;
            }, 300);
          }}
        /> */}
        <ReactCytoscape
          containerID="cy"
          elements={elements}
          layout={{name: 'preset'}}
          cyRef={(cy: any) => {
            console.log('bbb');
            this.cy = cy;
          }}
          style={style}
        />
        { <div style={{ width: '200px', height: '300px', position: 'absolute', right: 0, top:0}}>
          <div style={{ width: "100px", height: "50px",position:"fixed",bottom: "0px"}} >
            <SimpleSelect
              layoutHandler={this.applyLayout}
            />
          </div>
          <div style={{ width: "100px", height: "50px" }}>
            <Button styleHandler={this.applyStyle} />
            <Annote
              nodes={elements.nodes.length}
              edges={elements.edges.length} 
            />
          </div>
        </div> }
      </div>
    );
  }
}
