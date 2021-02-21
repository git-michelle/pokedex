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
    stats: [{}],
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
      const data = res.data;
      setPokemonInfo({
        id: data.id,
        image: data.sprites.front_default,
        name: data.name,
        types: data.types,
        abilities: data.abilities,
        height: data.height,
        weight: data.weight,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      });
      setInputValue(true);
    });
  };

  return (
    <div className="page-container">
      <div className="search-container">
        <div className="search-content">
          <img
            className="search-logo"
            src="/images/pokeball.svg"
            alt="pokeball logo"
          />
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
        </div>
      </div>

      <div className="pokedex-container">
        {console.log(pokemonInfo.abilities)}
        {inputValue && (
          <Card
            image={pokemonInfo.image}
            name={pokemonInfo.name}
            types={pokemonInfo.types}
            abilities={pokemonInfo.abilities}
            weight={pokemonInfo.weight}
            height={pokemonInfo.height}
            hp={pokemonInfo.hp}
            attack={pokemonInfo.attack}
            defense={pokemonInfo.defense}
            specialAttack={pokemonInfo.specialAttack}
            specialDefense={pokemonInfo.specialAttack}
            speed={pokemonInfo.speed}
          />
        )}
      </div>
    </div>
  );
};

export default PokedexPage;
