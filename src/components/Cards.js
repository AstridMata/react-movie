import React from "react";

const Cards = (props) => {
    console.log(props);
    
    return ( 
        
           <div className="card" style={{width: "18rem"}}>
 <img src={'https://image.tmdb.org/t/p/w500'+props.image}  className="card-img-top" alt="..."></img>
 
  <div className="card-body">
    <h5 className="card-title">{props.title} </h5>
    <p className="card-text">{props.release_date} </p>
    <button type="button" class="btn btn-light">Calificación: {props.vote_average }</button>
  </div>
</div> 
        
     );
}
 
export default Cards;