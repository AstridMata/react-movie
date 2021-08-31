import React, { useState, useEffect } from 'react';
// import Cardhome from './Cardhome';

const Home = () => {

    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setHome(data.results));
    }, [])
    
    return (
        <div>
<h1>home</h1>
            {/* <div className="row mx-auto">
                {home.map(item => <div  key={item.id} className="col-lg-3 py-3" ><Cardhome
                    name={item.original_name}
                    first_air_date={item.first_air_date}
                    image={item.poster_path}
                    popularitye={item.popularity}
                    id={item.id}

                /></div>)};
            </div> */}
        </div>
    );
}

export default Home;