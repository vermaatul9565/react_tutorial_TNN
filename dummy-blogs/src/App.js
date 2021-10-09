import './App.css';
//import React from 'react';// no need to wirte with 17&+ versoins of react

import Navbar from './Navbar';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="component">
        <Home />
      </div>
    </div>
  );
}

export default App;
