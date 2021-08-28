import React from "react";

const Cardperson = (props) => {
    
    
    return ( 
        
           <div className="card" style={{width: "18rem"}}>
 <img src={'https://image.tmdb.org/t/p/original'+props.image}  className="card-img-top" alt="..."></img>
 
  <div className="card-body">
    <h5 className="card-title">{props.name} </h5>
    <p className="card-text">{props.popularity} </p>
    
  </div>
</div> 
        
        
     );
}
 
export default Cardperson;