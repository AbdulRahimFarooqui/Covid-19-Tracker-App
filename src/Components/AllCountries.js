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
export default function AllCountries() {
  const classes = useStyles();
  let [country_data,setIt]=React.useState([{}]);
  useEffect(()=>{

    // let [country_data,setIt]=React.useState({});
    // console.log("Entered Usezefect in SearchFunction")
    async function getData(){
      const response=await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
      let data = await response.json();
      setIt(Object.values(Object.values(data.countryitems[0])));
      console.log(Object.values(Object.values(data.countryitems[0])),"This is Console");
    }
      getData();
  },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(country_data[0]).map((key,ind)=>{
          return(
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                <h3 className={classes.theheading}>
                  {key.replace(/_/g,' ').toUpperCase()}
                </h3>
                <h3>{country_data[0][key]}</h3>
              </Paper>
            </Grid>
          )
        })}
        
      </Grid>
    </div>
  );
}
