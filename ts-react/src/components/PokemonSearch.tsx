import React, { Component } from "react";
import User from "../interfaces/Pokemon.interface";

interface SerarchState {
  error: boolean;
  pokemon: Pokemon;
}

interface User {}

interface Pokemon {
  name: String;
  numberOfAbilities: number;
  baseExperience: number;
  imageUrl: string;
}

export class PokemonSearch extends Component<string, SerarchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(porps: User) {
    super(porps);
    this.pokemonRef = React.createRef();

    this.state = {
      pokemon: null,
      error: false,
    };
  }

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then((res) => {
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }

      res.json().then((data) => {
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default,
          },
        });
      });
    });
  };

  render() {
    // const { name: userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;

    let resultMarkup;

    if (error) {
      resultMarkup = <p>Pokemon not found, please try again</p>;
    } else if (this.state.pokemon) {
      resultMarkup = (
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image" />
          <p>
            {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
            {pokemon.baseExperience} base experienct points.
          </p>
        </div>
      );
    }

    return (
      <div>
        {/* <p>
          User {userName} has {numberOfPokemons ?? 0} pokemons
        </p> */}
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
        {resultMarkup}
      </div>
    );
  }
}

export default PokemonSearch;
