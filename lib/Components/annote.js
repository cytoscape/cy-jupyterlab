"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Annote extends react_1.default.Component {
    render() {
        const nodes = this.props.nodes;
        const edges = this.props.edges;
        const name = this.props.selectedNodeName;
        const id = this.props.selectedNodeId;
        return (react_1.default.createElement("div", null,
            "number of nodes:  ",
            react_1.default.createElement("b", null, nodes),
            react_1.default.createElement("br", null),
            "number of edges:  ",
            react_1.default.createElement("b", null, edges),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            "selected Node:",
            react_1.default.createElement("br", null),
            "ID:",
            id,
            react_1.default.createElement("br", null),
            "Name:",
            name,
            react_1.default.createElement("br", null)));
    }
}
exports.Annote = Annote;
exports.default = Annote;
