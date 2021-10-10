import React from 'react';
import './App.css';
import Navbar  from './Components/Navbar';
import Home from './Components/Home';
import Html from './Components/Html';
import Css from './Components/Css';
import Js from './Components/JS';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Home/>
         <Html/>
         <Css/>
         <Js/>
    </div>
  );
}

export default App;
