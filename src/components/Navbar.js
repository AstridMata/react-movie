import {Link} from "react-router-dom"; 
const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <Link className="navbar-brand" to="./">CINE EN CASA</Link>
  <a className="navbar-brand" href="#">
    <img src="https://us.123rf.com/450wm/coliap/coliap1110/coliap111001249/10888392-pel%C3%ADculas-de-cine-con-palomitas-de-ma%C3%ADz-aisladas-sobre-fondo-blanco.jpg?ver=6" style={{width:`2rem`},{height:`2rem`}}></img>
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
      <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Más
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Proximos Estenos</a></li>
                <li><a class="dropdown-item" href="#">Contactanos</a></li>
              </ul>
            </li>
     
    </ul>
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;