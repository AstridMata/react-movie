// `import React, { useEffect, useState} from 'react';
// import CardFavorite from './CardFavorite';

// const Favorite = ({ movie }) => {
//     const [isFavorite, setIsFavorite] = useState(false);

//     const onClick = (e) => {
//         e.preventDefault();
//         setIsFavorite(e.target.value);
//         if (isFavorite) {
//             removeFavorite();
//         } else {
//             addFavorite();
//         }
//     };

//     const checkFavorite = async () => {
//         const key = `favorite ${movie.id}`;
//         const checking = await Storage.instance.get(key);

//         //if its in favorite, showing the star
//         if (checking !== null) {
//             setIsFavorite(true);
//         }
//     };

//     const addFavorite = async () => {
//         const key = `favorite ${movie.id}`;
//         const stored = await Storage.instance.store(key, JSON.stringify(movie));

//         if (stored) {
//             setIsFavorite(true);
//         }
//     };

//     const removeFavorite = async () => {
//         const key = `favorite ${movie.id}`;
//         const deleted = await Storage.instance.remove(key);

//         if (deleted) {
//             setIsFavorite(false);
//         }
//     };

//     useEffect(() => {
//         checkFavorite();
//     }, [isFavorite]);

//     return (
//         <>
//             <button className="btn btn-outline-success">
//                 value={isFavorite}
//                 onClick={onClick}
//             </button>
//             {isFavorite.length > 0 && (
//                         <ul className="isFavorite" style={{color: "red"}}>
//                             {isFavorite.map(movie => (
//                                 <li key={movie.id}>
//                                     <CardFavorite movie={movie} />
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//         </>
//     );
// };



// export default Favorite;`