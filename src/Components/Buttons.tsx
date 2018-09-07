import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {sat} from "../render_root"

const styles  = (theme:any) => ({
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
export class styleButtons extends React.Component<any, any> {
  Stylechange = () => {
    this.props.StyleHandler();
  };
  fit = () => {
    sat.fit();
  }
  render() {
    return (
      <div>
      <Button onClick={this.Stylechange} color="primary" className={this.props.classes.button}>
        Styleeeeee
      </Button>
      <Button onClick={this.fit}>Fitt</Button>
    </div>
    );
  }
}
export default withStyles(styles)(styleButtons);
