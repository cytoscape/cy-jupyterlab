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
const MIME_TYPE = "application/cx";
/**
 * The class name added to the extension.
 */
const CLASS_NAME = "mimerenderer-cx";
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
        console.log("Instanciated_cy2jsclass");
        this.DATA = content;
    }
    transportation() {
        //rowdata
        const utils = new cytoscape_cx2js_1.cyNetworkUtils();
        console.info(this.DATA);
        console.log(typeof this.DATA);
        // const jsonObject = JSON.parse(this.DATA.toString())
        // console.info(jsonObject);
        const niceCX = utils.rawCXtoNiceCX(this.DATA);
        const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
        const attributeNameMap = {};
        //これを返す予定
        const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
        const style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
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
        this.convertData = (data) => {
            const utils = new cytoscape_cx2js_1.cyNetworkUtils();
            console.log("Data type:", typeof data);
            let jsonObject = data;
            // console.info(jsonObject);
            console.log("Result type: ", typeof jsonObject);
            const niceCX = utils.rawCXtoNiceCX(jsonObject);
            const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
            const attributeNameMap = {};
            // //これを返す予定
            const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
            const style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
            return [elements, style];
        };
        console.log("Instanciated");
        this._mimeType = options.mimeType;
        // this._resolver = options.resolver;
        this.addClass(CLASS_NAME);
    }
    /**
     * Render cx into this widget's node.
     */
    renderModel(model) {
        //データ作成
        return new Promise((resolve, reject) => {
            let data_row = model.data[this._mimeType];
            const metadata = model.metadata[this._mimeType] || {};
            const [data_js, style_js] = this.convertData(data_row);
            const data = {
                elements: data_js,
                style: style_js
            };
            const props = { data, metadata, theme: "cm-s-jupyter" };
            console.log("Final: ", data);
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
    safe: false,
    mimeTypes: [MIME_TYPE],
    createRenderer: options => new OutputWidget(options)
};
/**
 * Extension definition.
 */
const extension = {
    id: "mime-rend1:plugin",
    rendererFactory: exports.rendererFactory,
    rank: 10000,
    dataType: "json",
    fileTypes: [
        {
            name: "cx",
            mimeTypes: [MIME_TYPE],
            extensions: [".cx", ".json"]
        }
    ],
    documentWidgetFactoryOptions: {
        name: "cx Viewer",
        primaryFileType: "cx",
        fileTypes: ["cx", "json"],
        defaultFor: ["cx"]
    }
};
exports.default = extension;
