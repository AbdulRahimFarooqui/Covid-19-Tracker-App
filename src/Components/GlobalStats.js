import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:1000,
    margin:'0 auto' ,
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  theheading: {
    color:'#d88ed6',
  },
}));

export default function GlobalStats() {
  const classes = useStyles();
  let [global_data,setIt]=React.useState({});
  useEffect(()=>{
    // console.log("Entered Usezefect in SearchFunction")
    async function getData(){
      const response=await fetch('https://api.thevirustracker.com/free-api?global=stats')
      let data = await response.json();
      delete data.results[0].source;
      setIt(data.results[0]);
    }
    getData();
  },[])
  return (
    <div>
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Object.keys(global_data).map((key,ind)=>{
            return( 
              <Grid item xs={12} sm={4} key={ind}>
                <Paper className={classes.paper} elevation={3}>
                  <h3 className={classes.theheading}>
                    {key.replace(/_/g,' ').toUpperCase()}
                  </h3>
                  <h3>{global_data[key]}</h3>
                </Paper>
              </Grid>
            )
          })}
          
        </Grid>
      </div>
    </div>
  );
}