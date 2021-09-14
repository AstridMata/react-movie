import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  //console.log(props);

  return (

    <div className="card" style={{ width: "15rem" }}>
      <img src={'https://image.tmdb.org/t/p/w500' + props.image} className="card-img-top" alt="..." />

      <div className="card-body">
        <Link to={"/peliculas/"+props.id}> <h5 className="card-title">{props.title}</h5></Link>
          <p className="card-text">{props.release_date} </p>
          <button type="button" className="btn btn-light">Calificación: {props.vote_average}</button>
  
      </div>
</div>

      );
}

      export default Cards;