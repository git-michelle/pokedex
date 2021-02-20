import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const PokedexPage = () => {
  const [pokemonName, setPokemonName] = useState([]);
  const [inputValue, setInputValue] = useState(false);

  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    image: "",
    name: "",
    types: [],
    abilities: [],
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
  });

  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const handleSearch = () => {
    axios.get(pokemonURL).then((res) => {
      // console.log(res);
      setPokemonInfo({
        id: res.data.id,
        image: res.data.sprites.front_default,
        name: res.data.name,
        types: res.data.types[0].type.name,
        abilities: res.data.abilities[0].ability.name,
        height: res.data.height,
        weight: res.data.weight,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        specialAattack: res.data.stats[3].base_stat,
        specialDefense: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat,
      });
      setInputValue(true);
    });
  };

  return (
    <div className="page-container">
      <div className="searchbar-container">
        <form action="">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="searchbar-input"
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
          />
        </form>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="test-div">
        {!inputValue ? (
          <h2>type to search for a pokemon</h2>
        ) : (
          <Card
            image={pokemonInfo.image}
            name={pokemonInfo.name}
            types={pokemonInfo.types}
            info={pokemonInfo.height}
            stats={pokemonInfo.attack}
          />
        )}
      </div>
    </div>
  );
};

export default PokedexPage;
