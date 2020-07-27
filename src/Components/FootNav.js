import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    diplay:'flex',
    alignItems:'center',
    justifyItems:'center',
  },
});

export default function CenteredTabs({screenCONFIG}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        value={screenCONFIG[0]}
        onChange={(event,newValue)=>{
          screenCONFIG[1](newValue);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" ></Tab>
        <Tab label="Global Trackings" ></Tab>
        <Tab label="Visuals and Graphs"></Tab>
        
      </Tabs>
    </Paper>
  );
}
