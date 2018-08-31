import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { ReactCytoscape } from 'react-cytoscape';
import {status} from '../render_root'
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
    /*var result = prompt('好きな食べ物');
    if (result){
        alert(result)
    }
    else{}*/
    status.fit();
}

//onClick={()=>handleclick(cy)}
function TextButtons(props:any) {
  const { classes } = props;
  //const {cy} = props.cy
  
  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button onClick={handleClick} color="primary" className={classes.button}>
        Layout
      </Button>
      <Button /*onClick = {props.cy.fit()}*/ color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button> 

      <input
        accept="image/*"
        className={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <label htmlFor="flat-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

/*TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(TextButtons);