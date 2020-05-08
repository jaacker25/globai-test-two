import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CITIES } from '../graphql/getCities';

const ChartJobs=()=>{
 
 const { data: { cities = [] } = {}} = useQuery(GET_CITIES);
 
 let jobs = [];

 cities.forEach(city=>{
   city.jobs.forEach(job=>{
       let date= new Date(job.createdAt)
       let jobDate = date.toLocaleDateString();
       jobs.push({'country':city.country.name, 'jobDate':jobDate});
   })
 })
 jobs.sort(( a , b )=>{
    let nameA=a.country.toLowerCase();
  let nameB=b.country.toLowerCase();
  if (nameA < nameB) 
  return -1;
 if (nameA > nameB)
  return 1;
 return 0;
   });
//For the first chart
   let countriesArray=[];
   let datesArray=[];

//For the second chart
    let countryArray=[];
    let numOfJobsArray=[];


    let elementIndex=0;
    let prevValue='';
   jobs.forEach(value=>{
       countriesArray.push(value.country);
       datesArray.push(value.jobDate);

       if(value.country===prevValue.country){
        numOfJobsArray[elementIndex-1]++;
       }else{
           countryArray.push(value.country);
           numOfJobsArray.push(1);
           elementIndex++;
       }

   prevValue=value;
   })

//console.log(countriesArray);
//console.log(datesArray);

//console.log(countryArray);
//console.log(numOfJobsArray);




    return (
        <>
    <h1>Charts</h1>
<div className="jobs">
{/*cities && console.log('esto',jobs) */}
</div>
</>
)

}

export default ChartJobs;