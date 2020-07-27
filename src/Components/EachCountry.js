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
    backgroundSize: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  theheading: {
    color:'#d88ed6',
  },
  otherheading:{
    color:'#537880',
    textAlign:'center',
    fontSize:50,
  },
  root1: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
}));
export default function EachCountry({code}) {
  console.log("entered EachCountry.js")
  const classes = useStyles();
  let [global_data,setIt1]=React.useState([]);
  let [country_data,setIt]=React.useState([]);
  useEffect(()=>{
    console.log("entered useEffect in EachCountry.js")
    async function getData(){
      const response=await fetch(code[0])
      let data = await response.json()
      setIt(Object.values(Object.values(data.countrydata[0])));
      const response1=await fetch('https://api.thevirustracker.com/free-api?global=stats')
      let data1 = await response1.json()
      delete data1.results[0].source;
      setIt1(data1.results[0]);
    }
      getData();
  
  },[])
let temp=[];
let count=0;
Object.values(country_data).map((key,ind)=>{
  if(ind>0){
    temp[count]=key
    count+=1;
  }
})
let key_array=[];
  Object.keys(global_data).map((key,ind)=>{
    key_array[ind]=key;
  })
  count=0;
  while(count<=8){
      if(key_array[count]!==undefined){
        key_array[count]=key_array[count].replace(/_/g,' ').toUpperCase();
        
      }
      count+=1;
  }

  return (
    <div>
      <div classes={classes.root}>
        <h1 className={classes.otherheading}>{code[1]}</h1>
          <Grid container spacing={3}>
            {Object.keys(country_data).map((key,ind)=>{
              if (ind<9){
                return(
                  <Grid item xs={12} sm={4} key={ind}>
                    <Paper className={classes.paper} elevation={3}>
                      <h3 className={classes.theheading}>
                      {(()=>{
                        if ((ind<=8)&&(ind>=0)) {
                          return(key_array[ind]);
                        }
                        else{
                          return null;
                        }
                      })()}
                      </h3>
                      <h3>{(()=>{
                        if ((ind<=8)&&(ind>=0)) {
                          return(temp[ind]);
                        }
                        else{
                          return null;
                        }
                      })()}</h3>
                    </Paper>
                  </Grid>
                )
              }
            
            })}
          
          </Grid>
        </div>
      </div>
  );
}
