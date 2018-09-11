import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class styleButtons extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.updateStyle}
          color="primary"
          className={this.props.classes.button}
        >
          Style
        </Button>
        <Button onClick={this.props.fit}>Fit</Button>
      </div>
    );
  }
}
export default withStyles(styles)(styleButtons);
