"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//import PropTypes from 'prop-types';
const styles_1 = require("@material-ui/core/styles");
//import Input from '@material-ui/core/Input';
const InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
//import FormControl from '@material-ui/core/FormControl';
const Select_1 = __importDefault(require("@material-ui/core/Select"));
const render_root_1 = require("../render_root");
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
class SimpleSelect extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            age: '',
            name: 'hai',
        };
        this.handleChange = (event) => {
            const layout = render_root_1.status.layout({ name: event.target.value });
            layout.run();
        };
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(InputLabel_1.default, { htmlFor: "layout-simple" }, "Layouts"),
            react_1.default.createElement(Select_1.default, { value: 'layputs', displayEmpty: true, onChange: this.handleChange, inputProps: {
                    name: 'layouts',
                    id: 'layout-simple',
                } },
                react_1.default.createElement(MenuItem_1.default, { value: "" },
                    react_1.default.createElement("em", null, "Placeholder")),
                react_1.default.createElement(MenuItem_1.default, { value: 'random' }, "preset"),
                react_1.default.createElement(MenuItem_1.default, { value: 'grid' }, "grid"),
                react_1.default.createElement(MenuItem_1.default, { value: 'circle' }, "circle"),
                react_1.default.createElement(MenuItem_1.default, { value: 'concentric' }, "concentric"),
                react_1.default.createElement(MenuItem_1.default, { value: 'breadthfirst' }, "breadthfirst"),
                react_1.default.createElement(MenuItem_1.default, { value: 'cose' }, "cose")),
            react_1.default.createElement(FormHelperText_1.default, null, "Required")));
    }
}
exports.SimpleSelect = SimpleSelect;
/*
SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
exports.default = styles_1.withStyles(styles)(SimpleSelect);
