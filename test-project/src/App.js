import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbars';
import Hero from './Components/Hero'
class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Header/>


        <div className="container">
       <Hero/>
    
        </div>
        <div>
        <Navbar/>
        </div>
      
      </div>
    );
  }
}

export default App;
