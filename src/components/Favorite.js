//FavoriteButton.js
import React, {useState} from 'react';
import CardFavorite from './CardFavorite'; 

const Favorite = () => {

    const [favorite, setFavorite] = useState("");
    const [results, setResults] = useState([]);

    const onClick = e => {
        e.preventDefault();

        setFavorite(e.target.value);

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            if (!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    };

    return ( 
        <div className="favorite-page">
            <div className="container">
                <div className="favorite-content">
                    <div className="input-wrapper">
                    <button className="btn btn-outline-success">
                        value={favorite}
                        onClick={onClick}
                        </button>
                    </div>

                    {results.length > 0 && (
                        <ul className="results" style={{color: "red"}}>
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <CardFavorite movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Favorite;