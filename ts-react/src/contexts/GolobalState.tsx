import React, { Component } from "react";
import AppContext from "./PokemonContext";

class GlobalState extends Component {
  state = {
    pokemons: {
      name : "vivek"
    },
  };

  render() {
    return (
      <AppContext.Provider value={{ pokemons: this.state.pokemons }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default GlobalState;
