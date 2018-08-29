// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import * as React from 'react';

import * as ReactDOM from 'react-dom';

import '../style/index.css';

import { /*JSONArray,*/ JSONObject/*, JSONValue*/ } from '@phosphor/coreutils';

import { ReactCytoscape } from 'react-cytoscape';

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
  data: JGraph
  metadata?: JSONObject;
  theme?: string;
}

/**
 * The state of the JSON tree component.
 */
export interface IState {
  filter?: string;
}

/**
 * A component that renders JSON data as a collapsible tree.
 */
export class Component extends React.Component<IProps, IState> {
  state = { filter: '' };
  input: Element = null;
  timer: number = 0;

  componentDidMount() {
    /**
     * Stop propagation of keyboard events to JupyterLab
     */
    ReactDOM.findDOMNode(this.input).addEventListener(
      'keydown',
      (event: Event) => {
        event.stopPropagation();
      },
      false
    );
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.input).removeEventListener(
      'keydown',
      (event: Event) => {
        event.stopPropagation();
      },
      false
    );
  }

  render() {
    const { elements, style } = this.props.data;
    console.log(elements);

    return (
      //画面を分けるもの
      <div style={{ width: '67%', height: '100%', background: 'green'}}>
      <input
      ref={ref => (this.input = ref)}
      onChange={event => {
        if (this.timer) {
          window.clearTimeout(this.timer);
        }
        const filter = event.target.value;
        this.timer = window.setTimeout(() => {
          this.setState({ filter } as IState);
          this.timer = 0;
        }, 300);
      }}
      style={{
        position: 'absolute',
          right: 0,
          width: '33%',
          maxWidth: 150,
          zIndex: 10,
          fontSize: 13,
          padding: '4px 2px'
      }}
      type="text"
      placeholder="Filter..."
      />
      <ReactCytoscape containerID="cy"
      elements={elements}
      style={style}
      layout={{name: 'cose'}}
      />
      <div style={{ width: '33%', height: '100%', position: 'absolute', right: 0, top:0}}>
      
      <div style={{ width: '100%', height: '50%', background: 'blue'}}>
      </div>
      <div style={{ width: '100%', height: '50%', background: 'yellow'}}>
      </div>
      </div>

      </div>
    );
  }
}