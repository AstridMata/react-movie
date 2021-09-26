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
    


    <center><img src={'https://image.tmdb.org/t/p/original' + ActoresDetalles.profile_path} className="card-img-top" alt="..." style={{width:"200px"}}/>
    
         
    
      <h5 className="card-title">{ActoresDetalles.name}</h5>
     
      <div className="accordion" id="accordionExample" style={{width: "20rem"}}>
    <div className="accordion-item bg-secondary p-2 text-white bg-opacity-50">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Details
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="card-text">{ActoresDetalles.place_of_birth} </p>
        <p className="card-text">{ActoresDetalles.birthday} </p>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-secondary p-2 text-white bg-opacity-50">
    <h2 className="accordion-header " id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Biography
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className="card-text">{ActoresDetalles.biography}</p>
      </div>
    </div>
  </div>
  <Link to={"/actores/"}> <p className="card-title">Atras</p></Link>
 
</div>
</center>
      

    
        

     </>   
     );
}
 
export default ActoresDetalles;