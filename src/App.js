// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js";
import Peliculas from "./components/Peliculas.js";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Programas from "./components/Programas.js";
import Personas from "./components/Personas.js";
import NotFound from "./components/NotFound.js";
import PeliculasDetalles from "./components/PeliculasDetalles.js";

function App() {

  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path= "/programas">
          <Programas/>
        </Route>
        <Route exact path= "/peliculas">
          <Peliculas/>
                </Route>
        <Route exact path= "/peliculas/:id">
          <PeliculasDetalles/>
        </Route>
        <Route exact path= "/personas">
          <Personas/>
        </Route>
        <Route path= "*">
          <NotFound/>
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
