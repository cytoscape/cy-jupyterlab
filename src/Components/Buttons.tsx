import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { ReactCytoscape } from 'react-cytoscape';
//import {status} from '../render_root'
//import { ClickAwayListener } from '@material-ui/core';


const styles  = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


const handleClick = () => {
//    status.fit();
}

function TextButtons(props:any) {
  const { classes } = props;
  //const {cy} = props.cy
  
  return (
    <div>
      <Button onClick={handleClick} color="primary" className={classes.button}>
        Layout
      </Button>
    </div>
  );
}

/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(TextButtons);
