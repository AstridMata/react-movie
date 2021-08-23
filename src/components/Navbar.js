const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Peliculas</a>
  <a className="navbar-brand" href="#">
    <img src="https://us.123rf.com/450wm/coliap/coliap1110/coliap111001249/10888392-pel%C3%ADculas-de-cine-con-palomitas-de-ma%C3%ADz-aisladas-sobre-fondo-blanco.jpg?ver=6" style={{width:`2rem`},{height:`2rem`}}></img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Programas de Televisión </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Personas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Más</a>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;