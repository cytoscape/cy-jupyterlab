"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgets_1 = require("@phosphor/widgets");
require("../style/index.css");
const cytoscape_cx2js_1 = require("cytoscape-cx2js");
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const render_root_1 = require("./render_root");
/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'application/cx';
/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-cx';
//0830 for json file input
/*const TYPES: {
  [key: string]: { name: string; extensions: string[] };
} = {
  'application/cx': {
    name: 'cx',
    extensions: ['.cx'],
    //reader: msa.io.fasta
  },
  'application/json': {
    name: 'json',
    extensions: ['.json'],
    //reader: msa.io.clustal
  }
};*/
//the class translation from cx to json
class cy2js {
    constructor(content) {
        console.log('Instanciated_cy2jsclass');
        this.DATA = content;
    }
    transportation() {
        //rowdata
        const utils = new cytoscape_cx2js_1.cyNetworkUtils();
        const niceCX = utils.rawCXtoNiceCX(this.DATA);
        const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
        const attributeNameMap = {};
        //これを返す予定
        const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
        const style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
        //fs.writeFileSync('small_graph_elements.json', JSON.stringify(elements, null, 2))
        //console.log('Elements:')
        return [elements, style];
    }
}
exports.cy2js = cy2js;
/**
 * A widget for rendering cx.
 */
class OutputWidget extends widgets_1.Widget {
    /**
     * Construct a new output widget.
     */
    constructor(options) {
        super();
        console.log('Instanciated');
        this._mimeType = options.mimeType;
        this.addClass(CLASS_NAME);
    }
    /**
     * Render cx into this widget's node.
     */
    renderModel(model) {
        //データ作成
        let data_row = model.data[this._mimeType];
        console.log('CX renderer called: ', data_row);
        //データ内のオブジェクトの個数を取得
        //const dataSize = data_row.length
        //console.log(data[4]);
        //use loop
        //const nodeArray = nodesValue['nodes']
        //console.log(nodeArray.indexOf[1])
        //this.node.textContent = 'This file contains ' + dataSize + ' entries.';
        //this.node.textContent = 'test' + data +'is';
        //ここでCytscapeが読み込める形にする
        const Tr = new cy2js(data_row);
        const [data_js, style_js] = Tr.transportation();
        //console.log(data_js);
        //0828for react-cytoscape
        //return Promise.resolve();
        //props(描画用の変数)の定義
        const data = {
            elements: data_js,
            style: style_js
            //theme: 'cm-s-jupyter'
        };
        const metadata = model.metadata[this._mimeType] || {};
        const props = { data, metadata, theme: 'cm-s-jupyter' };
        console.log('hennkango data', data);
        return new Promise((resolve, reject) => {
            //ここで描画
            const component = React.createElement(render_root_1.Component, Object.assign({}, props));
            ReactDOM.render(component, this.node, () => {
                resolve();
            });
        });
    }
}
exports.OutputWidget = OutputWidget;
/**
 * A mime renderer factory for cx data.
 */
exports.rendererFactory = {
    safe: true,
    mimeTypes: [MIME_TYPE],
    createRenderer: options => new OutputWidget(options)
};
/**
 * Extension definition.
 */
const extension = {
    id: 'mime-rend1:plugin',
    rendererFactory: exports.rendererFactory,
    rank: 0,
    dataType: 'json',
    fileTypes: [
        {
            name: 'cx',
            mimeTypes: [MIME_TYPE],
            extensions: ['.cx', '.json']
        }
    ],
    documentWidgetFactoryOptions: {
        name: 'cx Viewer',
        primaryFileType: 'cx',
        fileTypes: ['cx', 'json'],
        defaultFor: ['cx']
    }
};
/*const extension = Object.keys(TYPES).map(k => {
  //TYPES[k]のメンバーでkeyがnameのものをとりだす
  //const { name } = TYPES[k];
  console.log('const extensions');
  console.log(Object.keys(TYPES));
  //console.log(TYPES['application/cx'].extensions)
  console.log(TYPES[k].extensions)

  return {
    id: `mime-rend1:plugin`,
    rendererFactory,
    rank: 0,
    dataType: 'json',
    fileTypes: [
      {
        name: 'cx',
        displayName: 'CX',
        extensions: TYPES[k].extensions,
        //TYPESのkeyの値を配列にして渡す["application/cx"]
        mimeTypes: [k],
        //iconClass: 'jp-MaterialIcon jp-MSAIcon'
      }
    ],
    documentWidgetFactoryOptions: {
      name: 'My Viewer',
      dataType:'json',
      primaryFileType: 'cx',
      fileTypes: ['cx','json'],
      defaultFor: ['cx']
    }
  } as IRenderMime.IExtension;
});*/
exports.default = extension;
