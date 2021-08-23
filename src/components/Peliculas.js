import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const Peliculas = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a67369732a1417299e1fe837815a848f')
            .then(response => response.json())
            .then(data => setFilms(data.results));
    }, [])
    console.log(films); 

    return (
        <div>

            <div className="row mx-auto">
                {films.map(item => <div className="col-lg-3 py-3" ><Cards
                    title={item.original_title}
                    release_date={item.release_date}
                    image={item.poster_path}
                    vote_average={item.vote_average}

                /></div>)};
            </div>
        </div>
    );
}

export default Peliculas;