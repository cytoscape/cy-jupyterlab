"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgets_1 = require("@phosphor/widgets");
require("../style/index.css");
const cytoscape_cx2js_1 = require("cytoscape-cx2js");
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const Components_1 = __importDefault(require("./Components"));
const MIME_TYPE = "application/cx";
const CLASS_NAME = "mimerenderer-cx";
let NetworkName = null;
//the class translation from cx to json
class cy2js {
    constructor(content) {
        this.DATA = content;
    }
    transportation() {
        const utils = new cytoscape_cx2js_1.cyNetworkUtils();
        const niceCX = utils.rawCXtoNiceCX(this.DATA);
        const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
        const attributeNameMap = {};
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
    constructor(options) {
        super();
        this.convertData = (data) => {
            let elements;
            let style;
            const L = data.length;
            if (L == 13 || L == 12) {
                const utils = new cytoscape_cx2js_1.cyNetworkUtils();
                let jsonObject = data;
                const niceCX = utils.rawCXtoNiceCX(jsonObject);
                const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
                const attributeNameMap = {};
                elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
                style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
            }
            else {
                elements = data.elements;
                style = data.style;
            }
            return [elements, style];
        };
        this._mimeType = options.mimeType;
        this.addClass(CLASS_NAME);
    }
    /**
     * Render cx into this widget's node.
     */
    renderModel(model) {
        return new Promise((resolve, reject) => {
            let data_raw = model.data[this._mimeType];
            const metadata = model.metadata[this._mimeType] || {};
            const [data_js, style_js] = this.convertData(data_raw);
            let networkname = null;
            var keys = Object.keys(data_raw);
            for (let i = 0; i < keys.length; i++) {
                if ("networkAttributes" in data_raw[i]) {
                    networkname = data_raw[i].networkAttributes[0].v;
                }
            }
            const data = {
                elements: data_js,
                style: style_js
            };
            const props = {
                data,
                metadata,
                theme: "cm-s-jupyter",
                registerCy,
                selection,
                networkname
            };
            const component = React.createElement(Components_1.default, Object.assign({}, props));
            ReactDOM.render(component, this.node, () => {
                resolve();
            });
        });
    }
}
exports.OutputWidget = OutputWidget;
let cyRef = null;
let selection = null;
const registerCy = (cy) => {
    cyRef = cy;
    cyRef.on("tap", "node", (evt) => {
        selection = evt.target.data();
    });
};
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
            extensions: [".cx", ".cyjs"]
        }
    ],
    documentWidgetFactoryOptions: {
        name: "cx Viewer",
        primaryFileType: "cx",
        fileTypes: ["cx", "cyjs"],
        defaultFor: ["cx"]
    }
};
exports.default = extension;
