import React from 'react';
import ChartJobs from '../../components/ChartJobs';
import './style.css'

const Home =()=>{
    return(
        <div className="Home">
        <h1 className="Tittle">Trends in jobs related with graphql tool </h1>
        <h2 className="subTittle">(based in the information generated in www.graphql.jobs)</h2>
        <ChartJobs />
        <hr className="hrHome" />
        <h4 className="footerTittle">By: Jorge Aguilar</h4>
        <img className="logoHome" src="https://res.cloudinary.com/jaacker25/image/upload/c_scale,w_180/v1588946394/GLOBAI/logo_yy5akn.webp" alt="logo" />
        </div>
    );
}

export default Home;