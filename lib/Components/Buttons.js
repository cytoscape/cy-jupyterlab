"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//import PropTypes from 'prop-types';
const styles_1 = require("@material-ui/core/styles");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
//import { ReactCytoscape } from 'react-cytoscape';
//import {status} from '../render_root'
//import { ClickAwayListener } from '@material-ui/core';
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
const handleClick = () => {
    //    status.fit();
};
function TextButtons(props) {
    const { classes } = props;
    //const {cy} = props.cy
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { onClick: handleClick, color: "primary", className: classes.button }, "Layout")));
}
/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
exports.default = styles_1.withStyles(styles)(TextButtons);
