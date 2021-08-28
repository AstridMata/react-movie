// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js";
import Peliculas from "./components/Peliculas.js";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Series from "./components/Series.js";
import Actores from "./components/Actores.js";
import NotFound from "./components/NotFound.js";
import PeliculasDetalles from "./components/PeliculasDetalles.js";
import ActoresDetalles from "./components/ActoresDetalles.js";


function App() {

  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path= "/series">
          <Series/>
        </Route>
        <Route exact path= "/peliculas">
          <Peliculas/>
                </Route>
        <Route exact path= "/peliculas/:id">
          <PeliculasDetalles/>
        </Route>
        <Route exact path= "/actores">
          <Actores/>
        </Route>
        <Route exact path= "/actores/:id">
          <ActoresDetalles/>
          </Route>
        <Route path= "*">
          <NotFound/>
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
