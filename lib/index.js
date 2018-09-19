"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.css");
const CytoscapejsWidget_1 = require("./CytoscapejsWidget");
const MIME_TYPE = "application/cx";
exports.rendererFactory = {
    safe: false,
    mimeTypes: [MIME_TYPE],
    createRenderer: options => new CytoscapejsWidget_1.CytoscapejsWidget(options)
};
__export(require("./CytoscapejsWidget"));
const extension = {
    id: "cytoscapejs-renderer:plugin",
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
        name: "CX Viewer",
        primaryFileType: "cx",
        fileTypes: ["cx", "cyjs"],
        defaultFor: ["cx"]
    }
};
exports.default = extension;
