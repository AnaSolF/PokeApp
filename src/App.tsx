import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Items } from './Pages/Items';
import { Pokemon } from './Pages/Pokemon';
import { Pokemons } from './Pages/Pokemons';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
      </Routes>
    
      </div>
    </Router>  
  );
}

export default App;
