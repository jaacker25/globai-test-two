import React from 'react';
import Plot from 'react-plotly.js';
import './style.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_CITIES } from '../graphql/getCities';

const ChartJobs=()=>{
 
 const { data: { cities = [] } = {}} = useQuery(GET_CITIES);
 
 let jobs = [];

 cities.forEach(city=>{
   city.jobs.forEach(job=>{
       let date= new Date(job.createdAt)
       let jobDate = date.getTime();
       jobs.push({'country':city.country.name, 'jobDate':jobDate});
   })
 })

//For the first chart
let countryArray=[];
let numOfJobsArray=[];

 jobs.sort(( a , b )=>{
    let nameA=a.country.toLowerCase();
  let nameB=b.country.toLowerCase();
  if (nameA < nameB) 
  return -1;
 if (nameA > nameB)
  return 1;
 return 0;
   });


    let elementIndex=0;
    let prevValue='';
   jobs.forEach(value=>{
       if(value.country===prevValue.country){
        numOfJobsArray[elementIndex-1]++;
       }else{
           countryArray.push(value.country);
           numOfJobsArray.push(1);
           elementIndex++;
       }

   prevValue=value;
   })

//For the second chart
let countriesArray=[];
let datesArray=[];

jobs.sort((a,b)=>{
    return a.jobDate - b.jobDate
})

jobs.forEach(value=>{
    countriesArray.push(value.country);
    let dateFormated = new Date(value.jobDate);
    datesArray.push(dateFormated.toLocaleDateString());
})


    return (
        

    <div className="ChartJobs">
<Plot
className="PlotOne"
data={[
          {
            x: [...countryArray],
            y: [...numOfJobsArray],
            type: 'bar',
            mode: 'markers',
            marker: {color: '#9eb1e2', size:15, line:{color:"#1d3162", width:2}},
          }
        ]}
        layout={ {width: 720, height: 480, font:{size:15},
                  title:{text:'Number of jobs by country',font:{size:25},y:0.9}, 
                  paper_bgcolor: 'transparent', 
                  plot_bgcolor: '#a7d2ef',
                  xaxis:{showline:true,mirror: 'ticks',linecolor:'#f2feff', linewidth:3},
                  yaxis:{showline:true,mirror: 'ticks',linecolor:'#f2feff', linewidth:3}
                  } }
        config={{responsive: true}}
/>


<Plot
className="PlotTwo"
data={[
          {
            x: [...countriesArray],
            y: [...datesArray],
            type: 'scatter',
            mode: 'markers',
            marker: {color: '#a2d1e8', size:15, line:{color:"#194d66", width:2}},
          }
        ]}
        layout={ {width: 720, height: 480, font:{size:15},
                  title:{text:'Job posting dates by country',font:{size:25},y:0.9}, 
                  paper_bgcolor: 'transparent', 
                  plot_bgcolor: '#d8e3f4',
                  xaxis:{showline:true,mirror: 'ticks',linecolor:'#f2feff', linewidth:3},
                  yaxis:{showline:true,mirror: 'ticks',linecolor:'#f2feff', linewidth:3}
                  } }
        config={{responsive: true}}

/>
</div>

)

}

export default ChartJobs;