"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const render_root_1 = require("../render_root");
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
class styleButtons extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.Stylechange = () => {
            this.props.StyleHandler();
        };
        this.fit = () => {
            render_root_1.sat.fit();
        };
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { onClick: this.Stylechange, color: "primary", className: this.props.classes.button }, "Styleeeeee"),
            react_1.default.createElement(Button_1.default, { onClick: this.fit }, "Fitt")));
    }
}
exports.styleButtons = styleButtons;
exports.default = styles_1.withStyles(styles)(styleButtons);
