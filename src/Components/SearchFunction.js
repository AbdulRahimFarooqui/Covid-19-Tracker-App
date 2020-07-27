import React, { useEffect } from 'react';
import EachCountry from './EachCountry';
import { makeStyles } from '@material-ui/core/styles';
import CountryCharts from './CountryCharts.js'

const useStyles = makeStyles((theme) => ({
  root: {
    fontColor:'red',
    backgroundColor:theme.palette.text.secondary,
  },
}));

export default function SearchFunction({Input}){
    const classes = useStyles();
    console.log("kjuiuhu")
    console.log("kjk")
    let [global_data,setIt]=React.useState([{}]);
  useEffect(()=>{
    console.log("")
    async function getData(){
      const response=await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
      let data = await response.json();
      setIt(Object.values(Object.values(data.countryitems[0])));
    }
      getData();

  },[])
            console.log(global_data,': global_data')
            let count=0;
            let indexOfCountry="";
            let my_temp=global_data;
            let country_name="Input";
            if(my_temp[count]!==undefined){
                Object.values(global_data).map((key,ind)=>{
                    if (key.title===Input){
                        indexOfCountry=key.code;
                        country_name=key.title;
                    }
                })
            }
        let my_api="https://api.thevirustracker.com/free-api?countryTotal="+indexOfCountry;
        let returnarray=[my_api,country_name];
        console.log("returnarray: ",returnarray);    
        if (indexOfCountry!==""){
                    
            
            console.log("Done with Search Function, return_array: ",returnarray)
                return(
                    <div>
                        <EachCountry code={returnarray}/>
                        <CountryCharts input={returnarray}/>
                    </div>
                );
            }
            
            else{
                return (
                    <div className={classes.root}>
                        <h2>Error!</h2>
                        <h2>TRY THE NAME OF THE COUNTRY START WITH UPPER CASE!</h2>
                        <h2>OR IT CAN BE THAT THE SOURCE WEBSITE IS DOWN.</h2>
                    </div>
                );
            }
}