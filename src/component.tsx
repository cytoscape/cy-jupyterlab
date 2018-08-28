// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import * as React from 'react';

import * as ReactDOM from 'react-dom';


import { /*JSONArray,*/ JSONObject/*, JSONValue*/ } from '@phosphor/coreutils';

import { ReactCytoscape } from 'react-cytoscape';

/**
 * The properties for the JSON tree component.
 */

export interface JGraph {
//  data: string;
  elements: string;
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
    const { data } = this.props;
    console.log(data.elements);

    return (

      <div style={{ width: '100%', height: 500}}>
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
          //            top: 0,
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
      elements={data.elements}
      layout={{name: 'circle'}}
      />

      </div>
    );
  }
}