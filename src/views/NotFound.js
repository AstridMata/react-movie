import {Link} from "react-router-dom"; 
const NotFound = () => {
    return ( 
        <>
        <center>
            <h1>ERROR 404</h1>
        <h4>Pagína no encontrada</h4>
        <img src="https://cdn5.vectorstock.com/i/thumb-large/27/19/black-cat-popcorn-box-cute-cartoon-funny-vector-34092719.jpg" style={{width:`10rem`},{height:`10rem`}}></img>
        <Link className="nav-link" to="/"> <button className="btn btn-primary" type="submit"> Volver a la página principal </button></Link>
</center>
</>



     );
}
 
export default NotFound;