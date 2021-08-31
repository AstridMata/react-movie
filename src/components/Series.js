import React, { useState, useEffect } from 'react';
import Cardseries from './Cardseries';

const Series = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setSeries(data.results));
    }, [])
    
    return (
        <div>

            <div className="row mx-auto">
                {series.map(item => <div  key={item.id} className="col-lg-3 py-3" ><Cardseries
                    name={item.original_name}
                    first_air_date={item.first_air_date}
                    image={item.poster_path}
                    popularitye={item.popularity}
                    id={item.id}

                /></div>)};
            </div>
        </div>
    );
}

export default Series;