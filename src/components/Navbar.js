import {Link} from "react-router-dom"; 
const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
  <Link className="navbar-brand" to="/"> ¿QUE VEMOS HOY?</Link>
  <a className="navbar-brand" href="#">
    <img src="https://cdn5.vectorstock.com/i/thumb-large/27/19/black-cat-popcorn-box-cute-cartoon-funny-vector-34092719.jpg" style={{width:`3rem`},{height:`3rem`}}></img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/peliculas">Peliculas </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/series">Series </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/actores">Actores</Link>
      </li>
      <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Más
        
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Proximos Estenos</a></li>
                <li><Link className=" dropdown-item"  to="/registro" href="#">Registrarse</Link></li>
              </ul>
            </li>
     
    </ul>
    <div>
          
        
          
      </div>
     
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;