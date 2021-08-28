import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PeliculasDetalles = () => {
    const {id} =useParams();
    const [PeliculasDetalles, setPeliculasDetalles]= useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a67369732a1417299e1fe837815a848f`)
            .then(response => response.json())
            .then(data => setPeliculasDetalles(data));
    }, [])
    
    return ( 
     <>
     <h1 className= "display-4">{PeliculasDetalles.title}</h1>
     </>   
     );
}
 
export default PeliculasDetalles;