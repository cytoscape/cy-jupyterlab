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
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
const React = __importStar(require("react"));
require("../style/index.css");
const react_cytoscape_1 = require("react-cytoscape");
const Buttons_1 = __importDefault(require("./Components/Buttons"));
const layout_1 = __importDefault(require("./Components/layout"));
const annote_1 = __importDefault(require("./Components/annote"));
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.input = null;
        this.timer = 0;
        this.cy = null;
        this.foo = null;
        this.cyjs = null;
        this.applyLayout = (layoutName) => {
            const layout = this.cy.layout({ name: layoutName });
            layout.run();
        };
        this.setEventhandlers = (cy) => {
            console.log("This should be called once");
            const self = this;
            try {
                cy.on('tap', 'node', function (evt) {
                    const selectedId = evt.target.id();
                    console.log('last tapped ', self.foo);
                    console.log('tapped ', selectedId, self);
                    self.foo = selectedId;
                    self.setState({ selectedId });
                });
            }
            catch (e) {
                console.log("err:", e);
            }
        };
        this.applyStyle = () => {
            console.log("Style invoked!!");
            this.cy.style().selector('node').style({ 'background-color': 'black' }).update();
        };
        this.state = {
            filter: "",
            selectedId: null
        };
    }
    componentDidMount() {
    }
    render() {
        const { elements, style } = this.props.data;
        return (React.createElement("div", { style: { width: "500px", height: "500px" } },
            React.createElement(react_cytoscape_1.ReactCytoscape, { containerID: "cy", elements: elements, cyRef: (cy) => {
                    this.setEventhandlers(cy);
                    this.cy = cy;
                }, style: style }),
            React.createElement("div", { style: { width: '200px', height: '300px', position: 'absolute', right: 0, top: 0 } },
                React.createElement("div", { style: { width: "100px", height: "50px", position: "fixed", bottom: "200px" } },
                    React.createElement(layout_1.default, { layoutHandler: this.applyLayout })),
                React.createElement("div", { style: { width: "100px", height: "50px" } },
                    React.createElement(Buttons_1.default, { styleHandler: this.applyStyle }),
                    React.createElement(annote_1.default, { selectedNodeId: this.state.selectedId, nodes: elements.nodes.length, edges: elements.edges.length })))));
    }
}
exports.Component = Component;
