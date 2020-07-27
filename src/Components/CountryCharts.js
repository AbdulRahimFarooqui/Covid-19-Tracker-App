import React from 'react';
import {useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function CountryCharts({input}) {
  console.log("entered CountryCharts")  
  let [global_data,setIt]=React.useState([]);
    let [country_data,setIt1]=React.useState([]);
    useEffect(()=>{
      async function getData(){
        console.log("test passed")
        const response=await fetch(input[0])
        let data = await response.json()
        setIt1(Object.values(Object.values(data.countrydata[0])));
       ; const response1=await fetch('https://api.thevirustracker.com/free-api?global=stats')
        let data1 = await response1.json()
        delete data1.results[0].source;
        setIt(data1.results[0]);
      }
        getData();
    },[])
  let values=[];
  let count=0;
  Object.values(country_data).map((key,ind)=>{
    if(ind>0){
      values[count]=key
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
  const data = {
    labels: key_array,
    datasets: [
      {
        label: 'Bar Chart For '+input[1],
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: values,
      }
    ]
  };
  return (
        <div>
          <h1>{input[1]}</h1>
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