"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//import PropTypes from 'prop-types';
const styles_1 = require("@material-ui/core/styles");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Select_1 = __importDefault(require("@material-ui/core/Select"));
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
const handleClick = () => {
    alert("hogehoge");
};
function Style(props) {
    const { classes } = props;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Select_1.default, { native: true, onChange: handleClick },
            react_1.default.createElement("option", null, "preset"),
            react_1.default.createElement("option", null, "grid"),
            react_1.default.createElement("option", null, "circle"),
            react_1.default.createElement("option", null, "concentric"),
            react_1.default.createElement("option", null, "breadthfirst"),
            react_1.default.createElement("option", null, "cose")),
        react_1.default.createElement(Button_1.default, { variant: "raised", color: "secondary" }, "HelloWorld!"),
        react_1.default.createElement(Button_1.default, { onClick: handleClick, color: "primary", className: classes.button }, "apply")));
}
/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
exports.default = styles_1.withStyles(styles)(Style);
