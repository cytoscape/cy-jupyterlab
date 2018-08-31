import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const styles  = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const handleClick = () => {
    alert("hogehoge");
}

function Style(props:any) {
  const { classes } = props;

  
  return (
    <div>
      <Select native onChange={handleClick}>
        <option>preset</option>
        <option>grid</option>
        <option>circle</option>
        <option>concentric</option>
        <option>breadthfirst</option>
        <option>cose</option>
      </Select>
      <Button variant="raised" color="secondary">HelloWorld!</Button>
      <Button onClick={handleClick} color="primary" className={classes.button}>
        apply
      </Button>
    </div>
  );
}

/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(Style);
