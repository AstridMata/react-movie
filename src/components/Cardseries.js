import React from "react";
import { Link } from "react-router-dom";
const Cardseries = (props) => {
  //console.log(props);

  return (

    <div className="card" style={{ width: "13rem" }}>
      <img src={'https://image.tmdb.org/t/p/original' + props.image} className="card-img-top" alt="..." />

      <div className="card-body">
        <Link to={"/series/"+props.id}> <h5 className="card-title">{props.name}</h5></Link>
          <p className="card-text">Desde: {props.first_air_date} </p>
          
  
      </div>
</div>

      );
}

      export default Cardseries;