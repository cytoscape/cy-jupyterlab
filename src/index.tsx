import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

import { JSONObject } from '@phosphor/coreutils';

import { Widget } from '@phosphor/widgets';

import '../style/index.css';

import {cxToJs,cyNetworkUtils}  from 'cytoscape-cx2js';

import * as React from 'react';

import * as ReactDOM from 'react-dom';

import { Component } from './component';


/**
 * The default mime type for the extension.
 */

const MIME_TYPE = 'application/cx';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-cx';


//the class translation from cx to json
export class cy2js{
  
  DATA: JSONObject
  constructor(content: JSONObject) {
    console.log('Instanciated_cy2jsclass');
    this.DATA = content;
  }
  
  transportation(){
    //rowdata
    const utils =new cyNetworkUtils();
    const niceCX = utils.rawCXtoNiceCX(this.DATA);
    const cx2Js = new cxToJs(utils);
    const attributeNameMap = {};
    //これを返す予定
    const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
    const style = cx2Js.cyStyleFromNiceCX(niceCX,attributeNameMap;)
    //fs.writeFileSync('small_graph_elements.json', JSON.stringify(elements, null, 2))
    //console.log('Elements:')
    return [elements,style];

  }
}



/**
 * A widget for rendering cx.
 */
export class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();

    console.log('Instanciated')
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render cx into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    //データ作成
    let data = model.data[this._mimeType] as JSONObject;
    console.log('CX renderer called: ', data)

    //データ内のオブジェクトの個数を取得
    const dataSize = data.length
    //console.log(data[4]);
    //use loop

    //const nodeArray = nodesValue['nodes']
    //console.log(nodeArray.indexOf[1])
    this.node.textContent = 'This file contains ' + dataSize + ' entries.';
    //this.node.textContent = 'test' + data +'is';

    //ここでCytscapeが読み込める形にする
    const Tr = new cy2js(data);
    const [data_js,style_js] = Tr.transportation();

    console.log(data_js);
    //const metadata = (model.metadata[this._mimeType] as any) || {};
    //const props = { data_js, metadata, theme: 'cm-s-jupyter' };

    //0828for react-cytoscape
    //return Promise.resolve();
    //props(描画用の変数)の定義
    const props={
      element:{data_js},
      style:{style_js},
      //theme: 'cm-s-jupyter'
    }
    return new Promise<void>((resolve, reject) => {
      const component = <Component {...props} />;

      ReactDOM.render(component, this.node, () => {
        resolve();
      });
    });
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for cx data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};

/**
 * Extension definition.
 */
const extension: IRenderMime.IExtension = {
  id: 'mime-rend1:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'json',
  fileTypes: [
    {
      name: 'cx',
      mimeTypes: [MIME_TYPE],
      extensions: ['.cx']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'My Viewer',
    primaryFileType: 'cx',
    fileTypes: ['cx'],
    defaultFor: ['cx']
  }
};

export default extension;
