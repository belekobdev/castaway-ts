import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Stars from "./components/Stars";
import Jacob from "./components/Jacob";
import Blocs from "./components/Blocs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
        <Blocs/>
        <Jacob/>
        <Login/>
        <Stars/>
        <Footer/>
    </div>
  );
}

export default App;
