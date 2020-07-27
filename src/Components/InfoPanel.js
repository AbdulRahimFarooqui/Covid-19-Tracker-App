import React from 'react';
import GlobalStats from './GlobalStats';
import GlobalCharts from './GlobalCharts.js';
import Home from './Home.js'

export default function InfoPanel({currentScreen}) {
  if(currentScreen===0){
    return (<div><Home/></div>);

  }
  else if(currentScreen===1){
    return (<div><Home/><GlobalStats/></div>);
  }
  else if(currentScreen===2){
    return (<div><Home/><GlobalCharts/></div>);
  }
  else{
    return (<div><h1> </h1></div>);
  }

}
