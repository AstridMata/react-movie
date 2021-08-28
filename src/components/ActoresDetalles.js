import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ActoresDetalles = (props) => {
    const {id} =useParams();
    const [ActoresDetalles, setActoresDetalles]= useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setActoresDetalles(data));
    }, [])
    
    return ( 
     <>
     <h1 clasName= "display-4"></h1>
     <div clasName="card-body mb-3 mx-4" style={{width:"540px"}}>
  <div clasName="row no-gutters">
    <div clasName="col-md-4">
    <img src={'https://image.tmdb.org/t/p/original' + ActoresDetalles.profile_path} clasNameName="card-img-top" alt="..." />
    </div>
    <div clasName="col-md-8">
      <div clasName="card-body">
        <h5 clasName="card-title">{ActoresDetalles.name}</h5>
        <p clasName="card-text">{ActoresDetalles.place_of_birth} </p>
        <p clasName="card-text">{ActoresDetalles.birthday} </p>
        <p clasName="card-text">{ActoresDetalles.biography}</p>
            
        

      </div>
    </div>
  </div>
</div>
     </>   
     );
}
 
export default ActoresDetalles;