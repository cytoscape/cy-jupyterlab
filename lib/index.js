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
const WidgetBase_1 = __importDefault(require("./Components/WidgetBase"));
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
        this.isCx = (data) => {
            let dataLen = data.length;
            while (dataLen--) {
                const entry = data[dataLen];
                if (entry['nodeAttributes']) {
                    return true;
                }
            }
            return false;
        };
        this.convertData = (data) => {
            let elements;
            let style;
            const keys = Object.keys(data);
            keys.forEach(key => {
                console.log(data[key]);
            });
            const isCxData = this.isCx(data);
            if (isCxData) {
                const utils = new cytoscape_cx2js_1.cyNetworkUtils();
                let jsonObject = data;
                const niceCX = utils.rawCXtoNiceCX(jsonObject);
                const cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
                const attributeNameMap = {};
                elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
                style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
            }
            else {
                // This is Cytoscape data
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
        console.log("* Model start");
        return new Promise((resolve, reject) => {
            let rawData = model.data[this._mimeType];
            const metadata = model.metadata[this._mimeType] || {};
            console.log("* Model data", rawData, metadata);
            const [data_js, style_js] = this.convertData(rawData);
            console.log("* Converted", data_js, style_js);
            let networkname = null;
            var keys = Object.keys(rawData);
            for (let i = 0; i < keys.length; i++) {
                if ("networkAttributes" in rawData[i]) {
                    networkname = rawData[i].networkAttributes[0].v;
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
                networkname
            };
            const component = React.createElement(WidgetBase_1.default, Object.assign({}, props));
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
