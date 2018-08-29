"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//import PropTypes from 'prop-types';
const styles_1 = require("@material-ui/core/styles");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
const handleClick = () => {
    alert("csfa");
};
function TextButtons(props) {
    const { classes } = props;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { className: classes.button }, "Default"),
        react_1.default.createElement(Button_1.default, { onClick: handleClick, color: "primary", className: classes.button }, "Layout"),
        react_1.default.createElement(Button_1.default, { color: "secondary", className: classes.button }, "Secondary"),
        react_1.default.createElement(Button_1.default, { disabled: true, className: classes.button }, "Disabled"),
        react_1.default.createElement(Button_1.default, { href: "#text-buttons", className: classes.button }, "Link"),
        react_1.default.createElement("input", { accept: "image/*", className: classes.input, id: "flat-button-file", multiple: true, type: "file" }),
        react_1.default.createElement("label", { htmlFor: "flat-button-file" },
            react_1.default.createElement(Button_1.default, { component: "span", className: classes.button }, "Upload"))));
}
/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
exports.default = styles_1.withStyles(styles)(TextButtons);
