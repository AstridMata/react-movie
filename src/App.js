// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js";
import Peliculas from "./views/Peliculas.js";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Series from "./views/Series.js";
import Actores from "./views/Actores.js";
import NotFound from "./views/NotFound.js";
import PeliculasDetalles from "./components/PeliculasDetalles.js";
import ActoresDetalles from "./components/ActoresDetalles.js";
import SeriesDetalles from "./components/SeriesDetalles.js";
import Home from "./views/Home.js";
import Favorite from "./components/Favorite.js";
import Registro from "./views/Registro.js";

function App() {

  return (
    <Router>
      <Navbar/>

      <Switch>
      <Route exact path= "/">
          <Home/>
        </Route>
        <Route exact path= "/series">
          <Series/>
        </Route>
        <Route exact path= "/series/:id">
          <SeriesDetalles/>
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
          <ActoresDetalles/></Route>
          <Route exact path="/favorite">
         <Favorite />
          </Route>
          <Route exact path= "/registro">
          <Registro/></Route>
        <Route path= "*">
          <NotFound/>
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
