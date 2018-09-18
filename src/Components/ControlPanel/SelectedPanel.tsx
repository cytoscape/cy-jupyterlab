import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = (theme: any) => ({
  root: {
    //dense: true,
    width: "90%",
    maxWidth: 360,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper
  }
});

class SelectedPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {  
  const { classes } = this.props;
  const selected = this.props.selected;
  const isNode = this.props.isNode;
  let selectedKeys = [];
  for(let k of Object.keys(selected)) {
    selectedKeys.push(
      <ListItem button>
        <ListItemText primary={k + " : " + selected[k]} />
       </ListItem>
    )
  }
  let type = isNode ? "Node" : "Edge";
  return (
    <div className={classes.root}>
      <div style={{fontSize: '0.9em', color: '#444444'}}>
        Properties:
      </div>
      <div> 
        {typeof isNode==="undefined"
         ?null
         : <List component="nav" dense={true} style={{maxHeight: "150px", overflow: "auto"}}>
            <ListItem button>
              <ListItemText primary={"TYPE: " + type} />
            </ListItem>
            <Divider />
            {selectedKeys}
         </List>}
      </div>
    </div>
  );
  }
}

export default withStyles(styles)(SelectedPanel);
