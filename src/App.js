// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js";
import Section from "./components/Section.js";
import Cards from "./components/Cards.js";

//azucar sintactico: JSX => JS + HTML/XML

function App() {

  return (
    <>
      <Navbar/>
      <Section/>
      <Cards/>
    </>
  );
}

export default App;
