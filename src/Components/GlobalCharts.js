import React from 'react';
import {useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
export default function GlobalCharts() {
  let [global_data,setIt]=React.useState({});
  useEffect(()=>{
    async function getData(){
      const response=await fetch('https://api.thevirustracker.com/free-api?global=stats')
      let data = await response.json();
      delete data.results[0].source;
      setIt(data.results[0]);
    }
    getData();
  },[])
let key_array=[];
let value_array=[];
  Object.keys(global_data).map((key,ind)=>{
    key_array[ind]=key;
  })
  Object.values(global_data).map((key,ind)=>{
    value_array[ind]=key;
  })
  let count=0;
  let temp_keyarray=[];
  while(count<=7){
      temp_keyarray[count]=key_array[count];
      count+=1;
  }
  const data = {
    labels: temp_keyarray,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: value_array,
      }
    ]
  };
  return (
        <div>
          <h2>Global Charts</h2>
          <Bar
            data={data}
            width={5}
            height={250}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
  
}