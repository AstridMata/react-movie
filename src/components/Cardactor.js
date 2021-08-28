import React from "react";
import { Link } from "react-router-dom";
const Cardactor = (props) => {
    
    
    return ( 
        
           <div className="card" style={{width: "18rem"}}>
 <img src={'https://image.tmdb.org/t/p/original'+props.image}  className="card-img-top" alt="..."></img>
 
  <div className="card-body">
  <Link to={"/actores/"+props.id}> <h5 className="card-title">{props.name} </h5></Link>
    <p className="card-text">Popularidad: {props.popularity} </p>
    
  </div>
</div> 
        
        
     );
}
 
export default Cardactor;