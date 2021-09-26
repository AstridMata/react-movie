import React, { useState, useEffect } from 'react';
import Carrusel from '../components/Carrusel.js';
import Popular from '../components/Popular.js';
import Recomendacion from '../components/Recomendacion.js';


const Home = () => {

    const [home, setHome] = useState([]);
    console.log(home);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then((data) => { setHome(data.results); });
    }, []);


    return (
        <>
            <div>
                <Carrusel home={home} />
            </div>
            <div>
                <Popular />
            </div>
            <div>
                <Recomendacion />
            </div>
        </>);
}


export default Home;