import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SeriesDetalles = (props) => {
    const {id} =useParams();
    const [SeriesDetalles, setSeriesDetalles]= useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setSeriesDetalles(data));
    }, [])
    
    return ( 
     <>
     <center>
     <h1 classNameName= "display-4"></h1>
     <div className="card-body mb-3 mx-4 btn-light " style={{width:"15rm"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
    <img src={'https://image.tmdb.org/t/p/original' + SeriesDetalles.poster_path} className="card-img-top" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{SeriesDetalles.name}</h5>
        <p className="card-text">{SeriesDetalles.overview} </p>
        
       
        

      </div>
    </div>
  </div>
  <Link to={"/series/"}> <p className="card-title">Atras</p></Link>
</div>
</center>
     </>   
     );
}
 
export default SeriesDetalles;