import React, { useState, useEffect } from 'react';

import {Link} from "react-router-dom";
import CardRecomendadas from './CardRecomendadas';

const Recomendacion = () => {

    const [recomendacion, setRecomendacion] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setRecomendacion(data.results));
    }, [])

    return (
        <>
        
        <h3 style={{textAlign: 'center', marginTop: "4rem",}}>Series Recomendadas</h3>
        <center><Link className="nav-link" to="/series"><button type="button" class="btn btn-dark btn-sm">Ver Aqui</button></Link></center>
        <div className="row">
        
        <ul className="trends">
           {recomendacion.map(item => 
           <div className="col-lg-2 p-0">
           <CardRecomendadas 
           image={item.poster_path} 
           
           />
            </div>
           )}
           </ul>
       
      </div>
      
       </> 
    );
}

export default Recomendacion;

