import React, { useState, useEffect } from 'react';
import Cardperson from './Cardperson';

const Personas = () => {

    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
            .then(response => response.json())
            .then(data => setPersonas(data.results));
    }, [])
console.log(personas);

return ( 
        <>
        
        <div className="row mx-auto">
                {personas.map(item => <div  key={item.id} className="col-lg-3 py-3" ><Cardperson
                    name={item.name}
                    popularity={item.popularity}
                    image={item.profile_path}
                    

                /></div>)};
            </div>
        </>
     );
}
 
export default Personas;