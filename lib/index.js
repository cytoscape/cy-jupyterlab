"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widgets_1 = require("@phosphor/widgets");
require("../style/index.css");
const cytoscape_cx2js_1 = require("cytoscape-cx2js");
/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'application/cx';
/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-cx';
//the class translation from cx to json
class cy2js {
    constructor(content) {
        console.log('Instanciated_cy2jsclass');
        this.DATA = content;
    }
    transportation() {
        //rowdata
        //const rawCX = JSON.parse(this.DATA);
        const utils = new cytoscape_cx2js_1.cyNetworkUtils();
        const niceCX = utils.rawCXtoNiceCX(this.DATA);
        var cx2Js = new cytoscape_cx2js_1.cxToJs(utils);
        var attributeNameMap = {};
        //これを返す予定
        var elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
        //console.log('Elements:')
        return elements;
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
        let data = model.data[this._mimeType];
        console.log('CX renderer called: ', data);
        const dataSize = data.length;
        console.log(data[4]);
        //use loop
        //const nodeArray = nodesValue['nodes']
        //console.log(nodeArray.indexOf[1])
        this.node.textContent = 'This file contains ' + dataSize + ' entries.';
        //this.node.textContent = 'test' + data +'is';
        //ここでCytscapeが読み込める形にする
        const data_js = new cy2js(data);
        console.log(data_js);
        return Promise.resolve();
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
exports.default = extension;
