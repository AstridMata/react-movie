import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PeliculasDetalles = (props) => {
    const {id} =useParams();
    const [PeliculasDetalles, setPeliculasDetalles]= useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setPeliculasDetalles(data));
    }, [])
    
    return ( 
     <>
     <center>
     <h1 className= "display-4"></h1>
     <div className="card-body mb-3 mx-4 btn-light" style={{width:"15rm"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
    <img src={'https://image.tmdb.org/t/p/original' + PeliculasDetalles.poster_path} className="card-img-top" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{PeliculasDetalles.title}</h5>
        <p className="card-text">{PeliculasDetalles.overview} </p>
        <p className="card-text"><small className="text-muted">Estreno: {PeliculasDetalles.release_date}</small></p>
       
        <Link to="/favorite"><button type="button" className="btn btn-outline-secondary mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> </button></Link>


      </div>
    </div>
  </div>
  <Link to={"/peliculas/"}> <p className="card-title">Atras</p></Link>
 
</div>
</center>
     </>   
     );
}
 
export default PeliculasDetalles;