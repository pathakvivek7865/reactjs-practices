import React from "react";
import "./App.css";
import PokemonState from "./contexts/GolobalState";

import Navbar from "./components/navbar";
import PokemonSearch from "./components/PokemonSearch";


function App() {
  return (
    
    <PokemonState>
      <div className="App">
        <Navbar />
        <PokemonSearch name="Jon Doe" />
      </div>
    </PokemonState>
  );
}

export default App;
