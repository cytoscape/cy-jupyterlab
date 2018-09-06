import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

  render() {
    return (
      <div>
      <Button onClick={this.Stylechange} color="primary" className={this.props.classes.button}>
        Styleeeeee
      </Button>
    </div>
    );
  }
}
export default withStyles(styles)(styleButtons);
