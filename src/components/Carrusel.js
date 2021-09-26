import React from 'react';

const Carrusel = (props) => {
  const { home } = props;
  console.log(props);

  return (
      <div id="carouselExampleCaptions" className="carousel slide border-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          {home.map((item, index) =>
            index === 0 ? <div className="carousel-item active">
              <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "5rem" }}>BIENVENIDO</h1>
                <p>Encontraras miles de opciones para disfrutar</p>
              </div>
            </div> : 
            <div className="carousel-item">
              <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "5rem" }}>BIENVENIDO</h1>
                <p>Encontraras miles de opciones para disfrutar</p>
              </div>
            </div>
          )}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  );
}
export default Carrusel;