import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class LayoutSelector extends React.Component<any, any> {
  state = {
    layoutName: "grid"
  };

  handleChange(event: any) {
    console.log(event);
    const val = event.target.value;
    this.setState({ layoutName: val });
    this.props.applyLayout(val);
  };

  render() {
    const layoutName = this.state.layoutName;

    return (
      <div>
        <h3>select layouts</h3>
        <FormControl fullWidth>
          <InputLabel htmlFor="layout-simple">Layouts</InputLabel>
          <Select
            value={layoutName}
            onChange={(event: any) => this.handleChange(event)}
          >
            <MenuItem value={"cola"}>preset</MenuItem>
            <MenuItem value={"random"}>random</MenuItem>
            <MenuItem value={"grid"}>grid</MenuItem>
            <MenuItem value={"circle"}>circle</MenuItem>
            <MenuItem value={"concentric"}>concentric</MenuItem>
            <MenuItem value={"breadthfirst"}>breadthfirst</MenuItem>
            <MenuItem value={"cose"}>cose</MenuItem>
            <MenuItem value={"dagre"}>dagre</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(LayoutSelector);
