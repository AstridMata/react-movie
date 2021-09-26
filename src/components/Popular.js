import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import CardPopular from '../components/CardPopular';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    console.log(popular)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
    .then(response => response.json())
    .then((data) => {setPopular(data.results);
    });
    } ,[]);

    return ( 
        <>
        
         <h3 style={{textAlign: 'center', marginTop: "4rem",}}>Peliculas Disponibles</h3>
         <center><Link className="nav-link" to="/peliculas"><button type="button" class="btn btn-dark btn-sm">Ver Aqui</button></Link></center>
         <div className="row">
         
         <ul className="trends">
            {popular.map(item => 
            <div className="col-lg-2 p-0">
            <CardPopular 
            image={item.poster_path} 
            
            />
             </div>
            )}
            </ul>
        
       </div>
       
        </>
     );
}
 
export default Popular;




    

    

 


