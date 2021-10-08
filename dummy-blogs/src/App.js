import './App.css';
//import React from 'react';// no need to wirte with 17&+ versoins of react
function App() {
  const title = "Welcome to DUMMY BLOGS";
  const likes = 1000;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="component">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>Random Generator: { Math.random() * 10 }</p>
        <p><a href={ link }>google.com</a></p>
      </div>
    </div>
  );
}

export default App;
