import React, { useState, useEffect } from 'react';
import Cardactor from './Cardactor';

const Actores = () => {

    const [actores, setActores] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setActores(data.results));
    }, [])
console.log(actores);

return ( 
        <>
        
        <div className="row mx-auto">
                {actores.map(item => <div  key={item.id} className="col-lg-3 py-3" ><Cardactor
                    name={item.name}
                    popularity={item.popularity}
                    image={item.profile_path}
                    birthday={item.birthday}
                    biography={item.biography}
                    place_of_birth={item.place_of_birth}
                    id={item.id}
                /></div>)};
            </div>
        </>
     );
}
 
export default Actores;